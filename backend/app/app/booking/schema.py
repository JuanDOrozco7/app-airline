import datetime
from enum import Enum
from pydantic import BaseModel

from catalog.schema import Catalog
from user.schema import User


class BookingStatus(str, Enum):
    CONFIRMED = 'CONFIRMED'
    UNCONFIRMED = 'UNCONFIRMED'
    CANCELLED = 'CANCELLED'

class BookingBase(BaseModel):
    status: BookingStatus
    paymentToken: str
    checkedIn: bool
    createdAt: datetime.datetime
    bookingReference: str

class BookingCreate(BookingBase):
    pass

class BookingInDBBase(BookingBase):
    id : int
    flight: Catalog
    customer: User

    class Config:
        orm_mode = True

class Booking(BookingInDBBase):
    pass

class BookingInDB(BookingInDBBase):
    pass