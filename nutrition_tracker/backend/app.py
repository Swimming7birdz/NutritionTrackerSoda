from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from routes.users import user_bp
from routes.meals import meal_bp
from routes.food_items import food_bp
from routes.meal_entries import meal_entry_bp
#import requests


api_key = "Z2WNVBjsRTheG0X19QRhwYZvuofO9bEtODB9IWXn"

params = {
    "api_key": api_key, 
    "query": "grape fruit",
    "pageSize": 1
}

base_url = f"https://api.nal.usda.gov/fdc/v1/foods/search?"

app = Flask(__name__)
CORS(app)

@app.route('/api/daily', methods=['GET'])
def get_daily_data():
    return jsonify({"message": "Hello from the backend!"})

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///nutrition_tracker.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy()
db.init_app(app)


app.register_blueprint(user_bp, url_prefix="/users")
app.register_blueprint(meal_bp, url_prefix="/meals")
app.register_blueprint(food_bp, url_prefix="/food_items")
app.register_blueprint(meal_entry_bp, url_prefix="/meal_entries")

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)
