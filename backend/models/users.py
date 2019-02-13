import datetime as dt
from backend.database import Column, Model, db


class User(Model):
    id = Column(db.Integer, primary_key=True)
    username = Column(db.String(80), unique=True, nullable=False)
    email = Column(db.String(120), unique=True, nullable=False)
    password = Column(db.Binary(128), nullable=True)
    created_at = Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)
    updated_at = Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)

    def __repr__(self):
        return '<User %r>' % self.username