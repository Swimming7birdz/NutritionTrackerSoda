from flask import Blueprint, request, jsonify
from models import FoodItem
from db_setup import db


food_bp = Blueprint("food_items", __name__)

@food_bp.route("/", methods=["GET"])
def get_all_food_items():
    food_items = FoodItem.query.all()
    return jsonify([
        {"food_id": f.food_id, "name": f.name} for f in food_items ])


@food_bp.route("/", methods=["POST"])
def create_food_item():
    data = request.json
    new_food_item = FoodItem(name=data["name"], calories = data["calories"], protein = data["protein"],
                    total_carbs = data["total_carbs"], total_fat = data["total_fat"], sugar = data["sugar"])
    db.session.add(new_food_item)
    db.session.commit()
    return jsonify({"message": "Food item added", "food_id": new_food_item.food_id}), 201