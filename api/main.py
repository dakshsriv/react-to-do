#  @bekbrace
#  FARMSTACK Tutorial - Sunday 13.06.2021

from fastapi import FastAPI, HTTPException, Response
from fastapi.logger import logger as fastapi_logger

from model import Todo

from database import (
    fetch_one_todo,
    fetch_all_todos,
    create_todo,
    update_todo,
    remove_todo,
)

# an HTTP-specific exception class  to generate exception information

from pprint import pformat
import logging

from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()


logger = logging.getLogger("gunicorn.error")
fastapi_logger.handlers = logger.handlers
fastapi_logger.setLevel(logger.level)


origins = [
    "http://localhost:1234",
    "http://127.0.0.1:1234",
    "https://localhost:1234",
    "https://127.0.0.1:1234",
]

# what is a middleware? 
# software that acts as a bridge between an operating system or database and applications, especially on a network.

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/api/todo")
async def get_todo(response: Response):
    response.headers["X-Cat-Dog"] = "alone in the world"
    response = await fetch_all_todos()
    fastapi_logger.debug("Sending response:")
    fastapi_logger.debug( pformat(response))
    return response

@app.get("/api/todo/{title}", response_model=Todo)
async def get_todo_by_title(title):
    response = await fetch_one_todo(title)
    if response:
        return response
    raise HTTPException(404, f"There is no todo with the title {title}")

@app.post("/api/todo/", response_model=Todo)
async def post_todo(todo: Todo):
    response = await create_todo(todo.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

@app.put("/api/todo/{title}/", response_model=Todo)
async def put_todo(title: str, desc: str):
    response = await update_todo(title, desc)
    if response:
        return response
    raise HTTPException(404, f"There is no todo with the title {title}")

@app.delete("/api/todo/{title}")
async def delete_todo(title):
    response = await remove_todo(title)
    if response:
        return "Successfully deleted todo"
    raise HTTPException(404, f"There is no todo with the title {title}")