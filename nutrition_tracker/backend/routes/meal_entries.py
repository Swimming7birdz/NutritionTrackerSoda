from flask import Blueprint, request, jsonify
from db_setup import db
from models import MealEntry, FoodItem

meal_entry_bp = Blueprint("meal_entries", __name__)

# Get all meal entries for a given meal
@meal_entry_bp.route("/<int:meal_id>", methods=["GET"])
def get_meal_entries(meal_id):
    meal_entries = MealEntry.query.filter_by(meal_id=meal_id).all()

    return jsonify([
        {
            "entry_id": e.entry_id,
            "food_id": e.food_id,
            "food_name": e.food_item.name,
            "quantity": e.quantity,
            **e.get_nutritional_values()
        }
        for e in meal_entries
    ])


@meal_entry_bp.route("/", methods=["POST"])
def add_meal_entries():
    data = request.json
    meal_id = data.get("meal_id")
    food_ids = data.get("food_ids", []) #give a list in json version

    if not meal_id or not food_ids:
        return jsonify({"error": "meal_id and food_items are required"}), 400

    meal_entries = []
    for item in food_ids:
        food_id = item.get("food_id")
        quantity = item.get("quantity")

        if not food_id or not quantity:
            return jsonify({"error": "Each food item must have food_id and quantity"}), 400

        new_entry = MealEntry(meal_id=meal_id, food_id=food_id, quantity=quantity)
        meal_entries.append(new_entry)

    db.session.add_all(meal_entries)
    db.session.commit()

    return jsonify({
        "message": "Meal entries added successfully",
        "entries": [{"entry_id": e.entry_id, **e.get_nutritional_values()} for e in meal_entries]
    }), 201
