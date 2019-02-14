import os

from backend.app import create_app

"""
WSGI config for this project.
It exposes the WSGI callable as a module-level variable named ``application``.
"""

from backend.config import ProductionConfig

application = create_app(ProductionConfig)
