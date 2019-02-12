# [App]
from backend.app import create_app

# [Python]
import unittest


class BaseTestCase(unittest.TestCase):
    """
    A base test case to be used as an initial structure
    for all other tests.
    """
    
    def setUp(self):
        """ Called before each test case """
        
        # Create new instance of our application
        app = create_app('testing')
        
        # Allows for requests to e made
        self.client = app.test_client(self)
        
    def tearDown(self):
        """ Called after each test case, regardless of success or fail """
        pass