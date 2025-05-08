from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from routes.users import user_bp
from routes.meals import meal_bp
from routes.food_items import food_bp
from routes.meal_entries import meal_entry_bp
import requests


api_key = "Z2WNVBjsRTheG0X19QRhwYZvuofO9bEtODB9IWXn"


search_url = "https://api.nal.usda.gov/fdc/v1/foods/search?"
food_url = 'https://api.nal.usda.gov/fdc/v1/food/'

app = Flask(__name__)
CORS(app)

@app.route('/api/search', methods=['GET'])
def search_food():
    food_query = request.args.get('query')  # Get the query parameter from the frontend
    params = {
        "api_key": api_key,
        "query": food_query,
        "pageSize": 1
    }
    search_response = requests.get(search_url, params=params).json()  # Make the API request
    fdc_id = search_response['foods'][0]['fdcId']  # take first match
    food_response = requests.get(f"{food_url}{fdc_id}", params={'api_key': api_key}).json()
    return jsonify(food_response)


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
