from flask import Blueprint, request, jsonify
from models import UserMeal

meal_bp = Blueprint("meals", __name__)