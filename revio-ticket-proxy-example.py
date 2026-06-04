"""
Example backend proxy for the HelpCenter FirstDigital port form.

Deploy this as a private Render/Fly/Cloud Run service and set the frontend endpoint in script.js:

window.REVIO_TICKET_ENDPOINT = "https://YOUR-APP.onrender.com/api/revio-ticket";

Required environment variables:
- REVIO_PSA_BASE_URL=https://api.psarev.io
- REVIO_PSA_HOST=bullfrog.psarev.io
- REVIO_PSA_API_KEY=your_api_key
- REVIO_PSA_TICKET_TYPE_ID=1
- REVIO_PSA_TICKET_STATUS_ID=1
- REVIO_PSA_TICKET_PRIORITY_ID=1
"""

import os
import requests
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Lock this down to your GitHub Pages domain in production.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://michaelbullfrog.github.io"],
    allow_credentials=False,
    allow_methods=["POST"],
    allow_headers=["Content-Type"],
)

class TicketRequest(BaseModel):
    source: str | None = None
    ticketDescription: str = "FirstDigital Port Submission"
    summary: str
    workRequested: str
    form: dict | None = None

def get_psa_token() -> str:
    base_url = os.environ["REVIO_PSA_BASE_URL"].rstrip("/")
    api_key = os.environ["REVIO_PSA_API_KEY"]
    response = requests.post(
        f"{base_url}/api/v1/auth/api-key/exchange",
        headers={"Content-Type": "application/json"},
        json={"apiKey": api_key},
        timeout=30,
    )
    response.raise_for_status()
    token = response.json().get("data", {}).get("token")
    if not token:
        raise RuntimeError("No Rev.io PSA token returned")
    return token

@app.post("/api/revio-ticket")
def create_ticket(payload: TicketRequest):
    try:
        token = get_psa_token()
        base_url = os.environ["REVIO_PSA_BASE_URL"].rstrip("/")
        revio_host = os.environ["REVIO_PSA_HOST"]

        ticket_payload = {
            "ticketDescription": payload.ticketDescription[:150],
            "ticketTypeId": int(os.environ.get("REVIO_PSA_TICKET_TYPE_ID", "1")),
            "ticketStatusId": int(os.environ.get("REVIO_PSA_TICKET_STATUS_ID", "1")),
            "ticketPriorityId": int(os.environ.get("REVIO_PSA_TICKET_PRIORITY_ID", "1")),
            "workRequested": payload.workRequested,
        }

        response = requests.post(
            f"{base_url}/psac/api/v1/ticket",
            headers={
                "Authorization": f"Bearer {token}",
                "X-Revio-Host": revio_host,
                "Content-Type": "application/json",
            },
            json=ticket_payload,
            timeout=30,
        )

        if not response.ok:
            raise HTTPException(status_code=502, detail=f"Rev.io PSA error {response.status_code}: {response.text[:1500]}")

        return {"ok": True, "revio": response.json() if response.text else {}}

    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))
