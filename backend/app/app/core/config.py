from pydantic import BaseSettings
from functools import lru_cache

class Settings(BaseSettings):

    DATABASE_USERNAME : str = 'adminjd'
    DATABASE_PASSWORD : str = '123123'
    DATABASE_HOST : str = 'fastapi-db-airline-jd.postgres.database.azure.com'
    DATABASE_PORT : str = '6548'
    DATABASE_NAME : str = 'myairlineapp'

    DATABASE_URI : str = f"postgresql://{DATABASE_USERNAME}:{DATABASE_PASSWORD}@{DATABASE_HOST}/{DATABASE_NAME}"
    ACCESS_TOKEN_EXPIRE_MINUTES : int = 60 * 24 * 5  # 60 * 24 * 5 = 5 days
    SECRET_KEY : str = '5ZhRhFEwqLrIwGdc11bpzWPlP24Xwc6n'
    ALGORITHM : str = "HS512"
    
    class Config:
        case_sensitive : bool = True

@lru_cache
def get_Settings() -> Settings:
    return Settings()


settings = get_Settings()