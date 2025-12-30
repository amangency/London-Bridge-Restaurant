
import { MenuCategory } from './types';

export const MENU_DATA: MenuCategory[] = [
  {
    title: "Soups & Starters",
    items: [
      { name: "Tomato Soup", price: 120 },
      { name: "Hot & Sour Soup", price: 130 },
      { name: "Manchow Soup", price: 150 },
      { name: "Paneer Chilli", price: 270 },
      { name: "Mushroom Chilli", price: 240 },
      { name: "Crispy Corn", price: 190 },
      { name: "Chicken Chilli", price: 260, isNonVeg: false },
      { name: "Chicken Lollypop", price: 280, isNonVeg: true },
    ]
  },
  {
    title: "Main Course (Veg)",
    items: [
      { name: "Paneer Butter Masala", price: 260 },
      { name: "Kadhai Paneer", price: 270 },
      { name: "Mix Vegetable", price: 220 },
      { name: "Malai Kofta", price: 260 },
      { name: "Dal Makhani", price: 190 },
      { name: "Dal Tadka", price: 160 },
    ]
  },
  {
    title: "Main Course (Non-Veg)",
    items: [
      { name: "Butter Chicken", price: 320, isNonVeg: true },
      { name: "Chicken Curry (Home Style)", price: 300, isNonVeg: true },
      { name: "Chicken Handi", price: 340, isNonVeg: true },
      { name: "Chicken Rara", price: 360, isNonVeg: true },
    ]
  },
  {
    title: "Rice & Breads",
    items: [
      { name: "Veg Biryani", price: 180 },
      { name: "Chicken Biryani", price: 260, isNonVeg: true },
      { name: "Jeera Rice", price: 120 },
      { name: "Tandoori Roti", price: 20 },
      { name: "Butter Naan", price: 50 },
    ]
  },
  {
    title: "Fast Food & Beverages",
    items: [
      { name: "Veg Pizza", price: 190 },
      { name: "Paneer Tikka Pizza", price: 240 },
      { name: "Veg Grilled Sandwich", price: 120 },
      { name: "Virgin Mojito", price: 130 },
      { name: "Blue Lagoon", price: 140 },
      { name: "Oreo Shake", price: 140 },
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: "Rohan Sharma",
    role: "Food Connoisseur",
    content: "The view of the city skyline from London Bridge is breathtaking, but the food is the real star. The Dal Makhani is arguably the best in the state.",
    rating: 5
  },
  {
    name: "Priya Kapoor",
    role: "Local Guide",
    content: "We celebrated our 5th anniversary here and the staff made us feel like royalty. The rooftop ambiance is unmatched in Muzaffarpur.",
    rating: 5
  },
  {
    name: "Amit Verma",
    role: "Business Consultant",
    content: "A perfect place for business dinners. Professional service, sophisticated environment, and the Butter Chicken is simply divine.",
    rating: 4
  },
  {
    name: "Sarah Jones",
    role: "Travel Vlogger",
    content: "Absolutely loved the vibe! The Virgin Mojito was refreshing and the Paneer Chilli was cooked to perfection. A must-visit destination.",
    rating: 5
  },
  {
    name: "Deepak Mehra",
    role: "Frequent Guest",
    content: "London Bridge isn't just a restaurant; it's an experience. The attention to detail in every dish and the warm lighting makes it so cozy.",
    rating: 5
  },
  {
    name: "Vikram Malhotra",
    role: "Event Planner",
    content: "As an event planner, I have high standards for venues. London Bridge Rooftop exceeded all expectations with their seamless coordination and impeccable catering.",
    rating: 5
  }
];

export const CONTACT_PHONE = "8863028185"; 
export const WHATSAPP_MESSAGE = "Hi London Bridge Rooftop, I would like to book a table/place an order.";
