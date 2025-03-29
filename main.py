import requests

api_key = "Z2WNVBjsRTheG0X19QRhwYZvuofO9bEtODB9IWXn"

params = {
    "api_key": api_key, 
    "query": "grape fruit",
    "pageSize": 1
}

base_url = f"https://api.nal.usda.gov/fdc/v1/foods/search?"


response = requests.get(url=base_url, params=params)

data = response.json()
