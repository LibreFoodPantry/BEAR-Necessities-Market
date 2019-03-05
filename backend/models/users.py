from backend.extensions import db, bcrypt
from datetime import datetime


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
    username = db.Column(db.String(80), unique=True)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.Binary(60), nullable=False)
    authenticated = db.Column(db.Boolean, default=False)
    registered_on = db.Column(db.DateTime, nullable=True)
    role = db.Column(db.String, default='user')

    def __init__(self, username, email, plaintext_password, role='user'):
        self.username = username
        self.email = email
        self.password = bcrypt.generate_password_hash(plaintext_password)
        self.authenticated = False
        self.registered_on = datetime.now()
        self.role = role

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()
        
    def json(self):
        return {'id': self.id, 'username': self.username, 'email': self.email}

    def set_password(self, plaintext_password):
        self.password = bcrypt.generate_password_hash(plaintext_password)

    def is_correct_password(self, plaintext_password):
        return bcrypt.check_password_hash(self.password, plaintext_password)

    @property
    def is_authenticated(self):
        """Return True if the user is authenticated."""
        return self.authenticated

    def get_id(self):
        """Return the id of a user to satisfy Flask-Login's requirements."""
        return str(self.id)

    @classmethod
    def find_by_username(cls, username):
        return cls.query.filter_by(username=username).first()

    @classmethod
    def find_by_id(cls, _id):
        return cls.query.filter_by(id=_id).first()

    def __repr__(self):
        return '<User {}>'.format(self.email)
