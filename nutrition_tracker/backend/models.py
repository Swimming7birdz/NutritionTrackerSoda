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
    total_carbs = Column(Float, nullable=False)
    sugar = Column(Float, nullable=False)

    meal_entries = relationship("MealEntry", back_populates="food_item")

class MealEntry(Base):
    __tablename__ = "meal_entries"

    entry_id = Column(Integer, primary_key=True)
    meal_id = Column(Integer, ForeignKey("user_meals.meal_id"), nullable=False)
    food_id = Column(Integer, ForeignKey("food_items.food_id"), nullable=False)
    quantity = Column(Float, nullable=False)

    meal = relationship("UserMeal", back_populates="meal_entries")
    food_item = relationship("FoodItem", back_populates="meal_entries")

    __table_args__ = (Index('idx_meal_id', 'meal_id'), Index('idx_food_id', 'food_id'))

    def get_nutritional_values(self):
        """Returns the computed nutritional values based on the quantity."""
        if self.food_item:
            return {
                "calories": (self.food_item.calories * self.quantity) / 100,
                "protein": (self.food_item.protein * self.quantity) / 100,
                "total_fat": (self.food_item.total_fat * self.quantity) / 100,
                "total_carbs": (self.food_item.total_carbs * self.quantity) / 100,
                "sugar": (self.food_item.sugar * self.quantity) / 100
            }
        return {"calories": 0, "protein": 0, "total_fat": 0, "total_carbs": 0, "sugar": 0}

#run the following lines if running for the first time or want to recreate the whole Database
#engine = create_engine("sqlite:///nutrition_tracker.db")
#Base.metadata.create_all(engine)

#to drop all tables:
#Base.metadata.drop_all(engine)

