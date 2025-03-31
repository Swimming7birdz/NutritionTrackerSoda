from flask import Blueprint, request, jsonify
from models import UserTable
from db_setup import db

user_bp = Blueprint("users", __name__)

@user_bp.route("/", methods=["GET"])
def get_or_set_user():
    users = UserTable.query.all()
    return jsonify([{"User id": user.user_id, "Username": user.username} for user in users])
    

@user_bp.route("/", methods=["POST"])
def create_user():
    data = request.json
    new_user = UserTable(username = data["username"])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User created", "user_id": new_user.user_id}), 201
