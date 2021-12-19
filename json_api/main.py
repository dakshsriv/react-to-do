from fastapi import FastAPI
import json


app = FastAPI()

@app.get("/")
async def list():
    with open('/home/daksh/Projects/react-to-do/json_api/entries.json', 'r+') as f:
        data = json.load(f)
        print(data)
        return {"message": "Hello World"}

@app.post("/")
async def create(entry, time):
    return {"id": 1}

@app.put("/")
async def update(tid, entry, time):
    return {"message": "Hello World"}

@app.delete("/")
async def delete(tid):
    return {"message": "Hello World"}

