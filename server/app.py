import os
from os.path import join, dirname
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from logging import StreamHandler
from sys import stdout
from flask import Flask

dotenv_path = join(dirname(__file__), '../.env')
load_dotenv(dotenv_path)

db = SQLAlchemy()

def create_app():
    from api.kittens import kittens_api
    from views.index import index_view

    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')

    app.register_blueprint(kittens_api.blueprint, url_prefix='/api')
    app.register_blueprint(index_view)

    db.init_app(app)

    handler = StreamHandler(stdout)
    app.logger.addHandler(handler)
    return app
