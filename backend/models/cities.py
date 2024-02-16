from sqlalchemy import Column, BigInteger, String, Integer, cast
from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass


class CityMap(Base):
    __tablename__ = "cities_data"
    __table_args__ = {"extend_existing": True}

    id = Column("index", BigInteger, primary_key=True)
    dep_name = Column("DEP_NOM", String)
    dep_code = Column("DEP_CODE", String)
    com_name = Column("COM_NOM", String)
    com_code = Column("COM_CODE", BigInteger)
