#!/bin/bash

# Apply database migrations
echo "Apply database migrations"
flask db upgrade
