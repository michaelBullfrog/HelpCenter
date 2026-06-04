"""
Example backend proxy for the HelpCenter FirstDigital form.

Deploy this as a private Render/Fly/Cloud Run service and set the frontend endpoint in script.js:

window.WEBEX_SPACE_ENDPOINT = "https://YOUR-APP.onrender.com/api/webex-space-message";

Required environment variables:
- WEBEX_BOT_TOKEN=your_webex_bot_token
- WEBEX_ROOM_ID=target_webex_space_room_id

Never put the bot token in the public GitHub Pages HTML/JS files.
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

class WebexMessageRequest(BaseModel):
    source: str | None = None
    title: str
    markdown: str
    form: dict | None = None

@app.post("/api/webex-space-message")
def send_webex_space_message(payload: WebexMessageRequest):
    token = os.environ.get("WEBEX_BOT_TOKEN")
    room_id = os.environ.get("WEBEX_ROOM_ID")

    if not token or not room_id:
        raise HTTPException(status_code=500, detail="WEBEX_BOT_TOKEN and WEBEX_ROOM_ID are required")

    try:
        response = requests.post(
            "https://webexapis.com/v1/messages",
            headers={
                "Authorization": f"Bearer {token}",
                "Content-Type": "application/json",
            },
            json={
                "roomId": room_id,
                "markdown": payload.markdown,
            },
            timeout=30,
        )

        if not response.ok:
            raise HTTPException(status_code=502, detail=f"Webex API error {response.status_code}: {response.text[:1500]}")

        return {"ok": True, "webex": response.json() if response.text else {}}

    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))
