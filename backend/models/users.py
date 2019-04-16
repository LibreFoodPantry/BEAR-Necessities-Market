# [App]
from ..extensions import db, bcrypt

# [Python]
import datetime


class UserModel(db.Model):
    """
    Class that represents a user of the application

    The following attributes of a user are stored in this table:
        email address
        password (hashed using Bcrypt)
        authenticated flag (indicates if a user is logged in or not)
        date that the user registered on
        role the user has
    """
    
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String, unique=True, nullable=True)
    password = db.Column(db.Binary(60), nullable=True)
    authenticated = db.Column(db.Boolean, default=False)
    registered_on = db.Column(db.DateTime, nullable=True)
    role = db.Column(db.String, default='user')

    def __init__(self, email: str, plaintext_password: str, role: str='user'):
        self.email = email
        self.password = bcrypt.generate_password_hash(plaintext_password)
        self.authenticated = False
        self.registered_on = datetime.datetime.now()
        self.role = role

    def save_to_db(self):
        """Save the new instance of the UserModel."""
        db.session.add(self)
        db.session.commit()

    def set_password(self, plaintext_password: str) -> None:
        """Encrpyt and store the new password for the user."""
        self.password = bcrypt.generate_password_hash(plaintext_password)

    def is_correct_password(self, plaintext_password: str) -> bool:
        """Check to see if provided password matches the stored hashed password."""
        return bcrypt.check_password_hash(self.password, plaintext_password)

    @property
    def is_authenticated(self):
        """Return True if the user is authenticated."""
        return self.authenticated

    def get_id(self):
        """Return the id of a user to satisfy Flask-Login's requirements."""
        return str(self.id)

    @classmethod
    def find_by_email(cls, email: str):
        """Return the user email, if exists."""
        return cls.query.filter_by(email=email).first()

    @classmethod
    def find_by_id(cls, _id: int):
        """Return the user with _id, if exists."""
        return cls.query.filter_by(id=_id).first()

    def as_dict(self):
        """Sanitize the UserModel."""
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def __repr__(self):
        """Output string below when printing a UserModel instance."""
        return '<User {}>'.format(self.email)
