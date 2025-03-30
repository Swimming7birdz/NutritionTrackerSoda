# Backend

## Database

### Getting started
* create virtual environment in backend folder 
* open virtual environment
* in here, install sqlalchemy 
* uncomment commands in models.py to created database
* run models.py in terminal: `python3 models.py`
* open database with: `sqlite3 nutrition_tracker.db`

### Exploring database
* open database in virtual environment/terminal: `sqlite3 nutrition_tracker.db`
* see all tables: `.tables`
* see content of table: `select * from <table>`
* exit: `.quit`

### Running the project
* make sure to be running app.py (within virtual environment) in conjunction with frontend

## API