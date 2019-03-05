"""
In computer programming and software testing, smoke testing
(also confidence testing, sanity testing, build verification
test (BVT) and build acceptance test) is preliminary testing
to reveal simple failures severe enough to (for example) reject
a prospective software release.
~ https://en.wikipedia.org/wiki/Smoke_testing_(software)
"""


def test_index(client):
    """
    Test that the index can be loaded.
    """
    response = client.get('/')

    assert response.status_code == 200
    

def test_index_post(client):
    """
    GIVEN a Flask application
    WHEN the '/' page is is posted to (POST)
    THEN check that a '405' status code is returned
    """
    response = client.post('/')
    assert response.status_code == 405

