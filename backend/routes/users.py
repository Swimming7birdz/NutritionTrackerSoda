from flask import Blueprint, request, jsonify
from models import UserTable

user_bp = Blueprint("users", __name__)