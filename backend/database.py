"""Database module, including the SQLAlchemy database object and DB-related utilities."""

from sqlalchemy.orm import relationship
from .extensions import db

# Alias common SQLAlchemy names
Column = db.Column
relationship = relationship
Model = db.Model
