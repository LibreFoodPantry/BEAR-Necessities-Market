# [App]
from backend.extensions import db, bcrypt

# [Python]
import datetime


class OrdersModel(db.Model):
    """
    Class that represents an order in the application

    The following attributes of an order are stored in this table:
        email address
        date that the order was created on
    """
    
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String, unique=True, nullable=True)
    created_on = db.Column(db.DateTime, nullable=True)

    def __init__(self, email):
        self.email = email
        self.created_on = datetime.datetime.now()

    def save_to_db(self):
        """Save the new instance of the OrdersModel."""
        db.session.add(self)
        db.session.commit()

    def get_id(self):
        """Return the id of a user to satisfy Flask-Login's requirements."""
        return str(self.id)

    @classmethod
    def find_by_email(cls, email):
        """Return the user email, if exists."""
        return cls.query.filter_by(email=email).first()

    @classmethod
    def find_by_id(cls, _id):
        """Return the user with _id, if exists."""
        return cls.query.filter_by(id=_id).first()

    def as_dict(self):
        """Sanitize the UserModel."""
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def __repr__(self):
        """Output string below when printing a UserModel instance."""
        return '<User {}>'.format(self.email)
