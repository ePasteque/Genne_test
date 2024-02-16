from pydantic import BaseModel, Field


class GetFlightPrices(BaseModel):
    id: int
    dep_name: str
    dep_code: str
    com_name: str
    com_code: int

    class Config:
        from_attributes = True