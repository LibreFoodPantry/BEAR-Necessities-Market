"""
This file contains the unit tests for the orders model
"""

def test_new_order():
    """
    GIVEN a Order model
    WHEN a new Order is created
    THEN check has email 
    """
    assert new_order.email == "test@email.com"
    assert new_order.id != None
    assert new_order.created_on != None


def test_find_email():
    """
    GIVEN a User Model
    WHEN the Email of the user is defined to a value
    THEN check the Email returns a INT
    """
    new_order.email = "example@email.com"
    assert isinstance(new_order.find_by_email(), str)
    assert not isinstance(new_order.find_by_email(), int)
    assert new_order.find_by_email() == "example@email.com"
    

def test_find_id():
    """
    GIVEN an existing order
    WHEN the ID of the user is defined to a value
    THEN check the user ID returns a string (and not an integer) as needed by Flask-WTF
    """
    new_user.id = 42
    assert isinstance(new_order.find_by_id(), str)
    assert not isinstance(new_order.find_by_id(), int)
    assert new_order.find_by_id() == "42"
    