#  @bekbrace
#  FARMSTACK Tutorial - Sunday 13.06.2021

import motor.motor_asyncio
from model import Todo

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')
database = client.TodoList
collection = database.todo

async def fetch_one_todo(eid):
    document = await collection.find_one({"eid": eid})
    return document

async def fetch_all_todos():
    todos = []
    cursor = collection.find({})
    async for document in cursor:
        todos.append(Todo(**document))
    return todos

async def create_todo(todo):
    document = todo
    result = await collection.insert_one(document)
    return document


async def update_todo(eid,title, desc):
    await collection.update_one({"eid": eid}, {"$set": {"title": title, "description": desc}})
    document = await collection.find_one({"eid": eid})
    return document

async def remove_todo(eid):
    await collection.delete_one({"eid": eid})
    return True