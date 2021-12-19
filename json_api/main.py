from fastapi import FastAPI
import json
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:1234",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def list():
        return [ # List of entries
            {
                'id': 0,
                'text': 'Do math',
                'timeCreation': '2021-12-19T13:34:32+00:00',
                'timeDue': '2021-12-19T14:34:32+00:00',
            },
            {
                'id': 1,
                'text': 'Do programming',
                'timeCreation': '2021-12-19T15:34:32+00:00',
                'timeDue': '2021-12-19T16:34:32+00:00',
            },
            {
                'id': 2,
                'text': 'Do laundry',
                'timeCreation': '2021-12-19T17:34:32+00:00',
                'timeDue': '2021-12-19T18:34:32+00:00',
            },
        ]

@app.post("/")
async def create(entry, time):
    return {"id": 1}

@app.put("/")
async def update(tid, entry, time):
    return {"message": "Hello World"}

@app.delete("/")
async def delete(tid):
    return {"message": "Hello World"}

