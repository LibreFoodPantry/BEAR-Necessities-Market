"""Extensions module. Each extension is initialized in the app factory located in app.py."""

# [Flask]
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy, Model
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager


class CRUDMixin(Model):
    """Mixin that adds convenience methods for CRUD (create, read, update, delete) operations."""

    @classmethod
    def create(cls, **kwargs):
        """Create a new record and save it the database."""
        instance = cls(**kwargs)
        return instance.save()

    def update(self, commit: bool=True, **kwargs):
        """Update specific fields of a record."""
        for attr, value in kwargs.items():
            setattr(self, attr, value)
        return commit and self.save() or self

    def save(self, commit: bool=True):
        """Save the record."""
        db.session.add(self)
        if commit:
            db.session.commit()
        return self

    def delete(self, commit: bool=True):
        """Remove the record from the database."""
        db.session.delete(self)
        return commit and db.session.commit()


db = SQLAlchemy(model_class=CRUDMixin)
migrate = Migrate()
jwt = JWTManager()
bcrypt = Bcrypt()
