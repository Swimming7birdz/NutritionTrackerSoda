from flask import Blueprint, request, jsonify
from models import UserMeal
from db_setup import db


meal_bp = Blueprint("meals", __name__)

@meal_bp.route("<int:user_id>", methods=["GET"])
def get_meals(user_id):
    meals = UserMeal.query.filter_by(user_id=user_id).all()
    return jsonify([{"meal_id": m.meal_id, "date": m.date, "Meal type": m.meal_type} for m in meals])


@meal_bp.route("/", methods=["POST"])
def create_user_meal():
    data = request.json
    new_meal = UserMeal(user_id=data["user_id"], date = data["date"], meal_type = data["meal_type"])
    db.session.add(new_meal)
    db.session.commit()
    return jsonify({"message": "Meal added", "meal_id": new_meal.meal_id}), 201