from flask import Blueprint, request, jsonify
from models import MealEntry

meal_entry_bp = Blueprint("meal_entries", __name__)