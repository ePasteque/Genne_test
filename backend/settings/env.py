import pathlib
from decouple import Config, RepositoryEnv

BASE_DIR = pathlib.Path(__file__).parent.parent.parent
ENV_FILE_PATH = BASE_DIR / ".env"


def get_config():
    if ENV_FILE_PATH.exists():
        return Config(RepositoryEnv(ENV_FILE_PATH))

    from decouple import config
    return config


config = get_config()
