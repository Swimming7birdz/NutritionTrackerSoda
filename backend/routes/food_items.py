from flask import Blueprint, request, jsonify
from models import FoodItem

food_bp = Blueprint("food_items", __name__)