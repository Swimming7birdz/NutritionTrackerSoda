from sqlalchemy import Column, Integer, String, Text, Float, ForeignKey, Date, Index
from sqlalchemy.orm import relationship, declarative_base, column_property
#from sqlalchemy import create_engine

Base = declarative_base()

class UserTable(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True)
    username = Column(String, unique=True, nullable=False)

    meals = relationship("UserMeal", back_populates="user")

class UserMeal(Base):
    __tablename__ = "user_meals"

    meal_id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.user_id"), nullable=False)
    date = Column(Date, nullable=False)
    meal_type = Column(String, nullable=False)

    user = relationship("User", back_populates="meals")
    meal_entries = relationship("MealEntry", back_populates="meal")


class FoodItem(Base):
    __tablename__ = "food_items"

    food_id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    calories = Column(Float, nullable=False)
    protein = Column(Float, nullable=False)
    total_fat = Column(Float, nullable=False)
    carbs = Column(Float, nullable=False)
    sugar = Column(Float, nullable=False)

    meal_entries = relationship("MealEntry", back_populates="food_item")

class MealEntry(Base):
    __tablename__ = "meal_entries"

    entry_id = Column(Integer, primary_key=True)
    meal_id = Column(Integer, ForeignKey("user_meals.meal_id"), nullable=False)
    food_id = Column(Integer, ForeignKey("food_items.food_id"), nullable=False)
    quantity = Column(Float, nullable=False)

    calories = column_property((FoodItem.calories * quantity) / 100)
    protein = column_property((FoodItem.protein * quantity) / 100)
    carbs = column_property((FoodItem.carbs * quantity) / 100)
    total_fat = column_property((FoodItem.total_fat * quantity) / 100)
    sugar = column_property((FoodItem.sugar * quantity) / 100)

    meal = relationship("UserMeal", back_populates="meal_entries")
    food_item = relationship("FoodItem", back_populates="meal_entries")

    __table_args__ = (Index('idx_meal_id', 'meal_id'), Index('idx_food_id', 'food_id'))

#run the following lines if running for the first time or want to recreate the whole Database
#engine = create_engine("sqlite:///nutrition_tracker.db")
#Base.metadata.create_all(engine)

#to drop all tables:
#Base.metadata.drop_all(engine)

