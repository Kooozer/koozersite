from random import random
import math
from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel, PositiveInt


class Item(BaseModel):
    name: str
    description: Union[str, None] = None
    price: float
    tax: Union[float, None] = None


app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/roll/{sides}")
async def roll_dice(sides: PositiveInt):
    roll = math.ceil(random() * sides)
    return {"roll D{}".format(sides): roll}

@app.post("/items/")
async def create_item(item: Item):
    return item
