type Category = "Food" | "Drink" | "Dessert";

type Food = {
  name: string;
  price: number;
  category: Category;
};

interface Restaraunts {
  id: number;
  name: string;
  rating: number;
  description: string;
  menu: Food[];
  places: number;
}

interface DataBase {
  MSC: { restaraunts: Restaraunts[] };
  SPB: { restaraunts: Restaraunts[] };
}

export const DataBase: DataBase = {
  MSC: {
    restaraunts: [
      {
        id: 1,
        name: "BestBurger",
        rating: 4.5,
        description: "The best burgers in town!",
        menu: [
          {
            name: "Classic Burger",
            price: 8,
            category: "Food",
          },
          {
            name: "Cheeseburger",
            price: 9,
            category: "Food",
          },
          {
            name: "Soda",
            price: 2,
            category: "Drink",
          },
        ],
        places: 20,
      },
      {
        id: 2,
        name: "PizzaParadise",
        rating: 4.2,
        description: "Authentic Italian pizza experience.",
        menu: [
          {
            name: "Margherita Pizza",
            price: 10,
            category: "Food",
          },
          {
            name: "Pepperoni Pizza",
            price: 12,
            category: "Food",
          },
          {
            name: "Tiramisu",
            price: 7,
            category: "Dessert",
          },
        ],
        places: 15,
      },
    ],
  },
  SPB: {
    restaraunts: [
      {
        id: 1,
        name: "SeafoodHeaven",
        rating: 4.8,
        description: "Fresh and delicious seafood dishes.",
        menu: [
          {
            name: "Grilled Salmon",
            price: 15,
            category: "Food",
          },
          {
            name: "Shrimp Scampi",
            price: 18,
            category: "Food",
          },
          {
            name: "Lemon Sorbet",
            price: 5,
            category: "Dessert",
          },
        ],
        places: 25,
      },
      {
        id: 2,
        name: "VeggieDelight",
        rating: 4.0,
        description: "A variety of vegetarian and vegan options.",
        menu: [
          {
            name: "Quinoa Salad",
            price: 9,
            category: "Food",
          },
          {
            name: "Vegetarian Wrap",
            price: 11,
            category: "Food",
          },
          {
            name: "Fruit Salad",
            price: 6,
            category: "Dessert",
          },
        ],
        places: 18,
      },
    ],
  },
};

export const BASE_URL = 'http://localhost:1337/api';
export const USER_LOCALSTORAGE_KEY = 'ls-user';
export const JWT_LOCALSTORAGE_KEY = 'ls-jwt';