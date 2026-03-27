export const foodItems = [
  // BURGERS
  { id: 1, name: "Classic Hamburger", price: 149.00, startingFrom: 149.00, rating: 4.5, totalSale: 1950, category: "Burger", transparentImg: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80" },
  { id: 2, name: "Double Cheese Burger", price: 249.00, startingFrom: 249.00, rating: 4.8, totalSale: 1200, category: "Burger", transparentImg: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=300&q=80" },
  { id: 3, name: "Spicy Chicken Burger", price: 199.00, startingFrom: 199.00, rating: 4.6, totalSale: 1540, category: "Burger", transparentImg: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=300&q=80" },
  { id: 4, name: "Veggie Burger", price: 129.00, startingFrom: 129.00, rating: 4.3, totalSale: 890, category: "Burger", transparentImg: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=300&q=80" },
  
  // PIZZA
  { id: 5, name: "Pepperoni Pizza", price: 349.00, startingFrom: 349.00, rating: 4.1, totalSale: 800, category: "Pizza", transparentImg: "https://healthywayrecipes.com/wp-content/uploads/2025/01/Classic-Pepperonis-Pizza-Fresh-from-the-Oven.png" },
  { id: 6, name: "Margherita Pizza", price: 299.00, startingFrom: 299.00, rating: 4.7, totalSale: 2100, category: "Pizza", transparentImg: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=60&w=400" },
  { id: 7, name: "BBQ Chicken Pizza", price: 449.00, startingFrom: 449.00, rating: 4.9, totalSale: 1350, category: "Pizza", transparentImg: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=300&q=80" },
  { id: 8, name: "Veggie Supreme", price: 399.00, startingFrom: 399.00, rating: 4.4, totalSale: 950, category: "Pizza", transparentImg: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=300&q=80" },

  // SANDWICH
  { id: 9, name: "Club Sandwich", price: 160.00, startingFrom: 160.00, rating: 4.3, totalSale: 1200, category: "Sandwich", transparentImg: "https://whatocook.com/wp-content/uploads/2025/08/Club-Sandwich.png" },
  { id: 10, name: "Grilled Cheese", price: 110.00, startingFrom: 110.00, rating: 4.6, totalSale: 2400, category: "Sandwich", transparentImg: "https://tse4.mm.bing.net/th/id/OIP.avxaAPbqsYP4vzDf5lATiAHaLJ?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 11, name: "Tuna Salad Sandwich", price: 180.00, startingFrom: 180.00, rating: 4.2, totalSale: 850, category: "Sandwich", transparentImg: "https://tse3.mm.bing.net/th/id/OIP.xCkKSFKcxDbj-elz-JBz2wHaE8?w=1600&h=1067&rs=1&pid=ImgDetMain&o=7&rm=3" },

  // TACOS
  { id: 12, name: "Tacos Al Pastor", price: 180.00, startingFrom: 180.00, rating: 4.7, totalSale: 1450, category: "Tacos", transparentImg: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=300&q=80" },
  { id: 13, name: "Beef Tacos", price: 210.00, startingFrom: 210.00, rating: 4.8, totalSale: 1120, category: "Tacos", transparentImg: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=300&q=80" },
  { id: 14, name: "Chicken Fajita Tacos", price: 190.00, startingFrom: 190.00, rating: 4.5, totalSale: 1300, category: "Tacos", transparentImg: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=300&q=80" },

  // ICE CREAM
  { id: 15, name: "Vanilla Bean Cone", price: 90.00, startingFrom: 90.00, rating: 4.5, totalSale: 1600, category: "Ice Cream", transparentImg: "https://www.seriouseats.com/thmb/4IcAzuNRT0jvz-Ti45f2Nnep_rs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2014__06__20140616-chocolate-dip-soft-serve-vicky-wasik-4-a73d6989194646eba73127f5d51183fa.jpg" },
  { id: 16, name: "Chocolate Fudge", price: 120.00, startingFrom: 120.00, rating: 4.9, totalSale: 2100, category: "Ice Cream", transparentImg: "https://www.lifeloveandsugar.com/wp-content/uploads/2023/08/Quick-Easy-Chocolate-Fudge5E.jpg" },
  { id: 17, name: "Strawberry Scoop", price: 100.00, startingFrom: 100.00, rating: 4.4, totalSale: 950, category: "Ice Cream", transparentImg: "https://tse4.mm.bing.net/th/id/OIP.WkOkGbNWbNYgHOWXrV8boAHaHV?w=1038&h=1028&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 18, name: "Ice Cream Sundae", price: 199.00, startingFrom: 199.00, rating: 4.7, totalSale: 1240, category: "Ice Cream", transparentImg: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=300&q=80" },

  // CAKE
  { id: 19, name: "Chocolate Cake", price: 120.00, startingFrom: 120.00, rating: 4.9, totalSale: 890, category: "Cake", transparentImg: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80" },
  { id: 20, name: "Cheesecake Slice", price: 150.00, startingFrom: 150.00, rating: 4.8, totalSale: 1400, category: "Cake", transparentImg: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=300&q=80" },
  { id: 21, name: "Belgian Waffles", price: 249.00, startingFrom: 249.00, rating: 4.8, totalSale: 1500, category: "Cake", transparentImg: "https://www.twopeasandtheirpod.com/wp-content/uploads/2017/07/Belgian-Waffles-4.jpg" },
  { id: 22, name: "Pancakes", price: 199.00, startingFrom: 199.00, rating: 4.5, totalSale: 2200, category: "Cake", transparentImg: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=300&q=80" },

  // DRINK
  { id: 23, name: "Iced Cola", price: 60.00, startingFrom: 60.00, rating: 4.5, totalSale: 3200, category: "Drink", transparentImg: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=300&q=80" },
  { id: 24, name: "Fresh Lemonade", price: 80.00, startingFrom: 80.00, rating: 4.8, totalSale: 2150, category: "Drink", transparentImg: "https://www.eazypeazymealz.com/wp-content/uploads/2022/07/Homemade-Lemonade-6-683x1024.jpg" },
  { id: 25, name: "Iced Latte", price: 120.00, startingFrom: 120.00, rating: 4.9, totalSale: 4100, category: "Drink", transparentImg: "https://www.halfbakedharvest.com/wp-content/uploads/2021/08/Iced-Brown-Sugar-Latte-with-Shaken-Espresso-1.jpg" },
  { id: 26, name: "Mango Smoothie", price: 140.00, startingFrom: 140.00, rating: 4.7, totalSale: 1850, category: "Drink", transparentImg: "https://www.dinneratthezoo.com/wp-content/uploads/2018/05/mango-smoothie-2.jpg" },

  // INDIAN
  { id: 27, name: "Biryani", price: 249.00, startingFrom: 249.00, rating: 4.8, totalSale: 1500, category: "Indian", transparentImg: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=300&q=80" },
  { id: 28, name: "Butter Chicken", price: 299.00, startingFrom: 299.00, rating: 4.9, totalSale: 2100, category: "Indian", transparentImg: "https://tse3.mm.bing.net/th/id/OIP.9tuhqrWnOnKRVIcfC5dfxgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 29, name: "Paneer Tikka Masala", price: 279.00, startingFrom: 279.00, rating: 4.7, totalSale: 1850, category: "Indian", transparentImg: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=300&q=80" },
  { id: 30, name: "Dal Makhani", price: 229.00, startingFrom: 229.00, rating: 4.6, totalSale: 1600, category: "Indian", transparentImg: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=300&q=80" },
  
  // SUSHI
  { id: 31, name: "Salmon Nigiri", price: 399.00, startingFrom: 399.00, rating: 4.9, totalSale: 850, category: "Sushi", transparentImg: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&w=300&q=80" },
  { id: 32, name: "Spicy Tuna Roll", price: 349.00, startingFrom: 349.00, rating: 4.8, totalSale: 1200, category: "Sushi", transparentImg: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=300&q=80" },
  { id: 33, name: "Dragon Roll", price: 449.00, startingFrom: 449.00, rating: 4.7, totalSale: 650, category: "Sushi", transparentImg: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?auto=format&fit=crop&w=300&q=80" },

  // PASTA
  { id: 34, name: "Spaghetti Carbonara", price: 280.00, startingFrom: 280.00, rating: 4.6, totalSale: 2100, category: "Pasta", transparentImg: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=300&q=80" },
  { id: 35, name: "Penne Arrabbiata", price: 250.00, startingFrom: 250.00, rating: 4.5, totalSale: 1450, category: "Pasta", transparentImg: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=300&q=80" },
  { id: 36, name: "Classic Lasagna", price: 320.00, startingFrom: 320.00, rating: 4.8, totalSale: 980, category: "Pasta", transparentImg: "https://www.midwestliving.com/thmb/drUv7o5FYEBKMZZOYUV94fBasi4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/101926648_classic-lasagna-square-4db3304ba7c54a659d64adc47364a279.jpg" },

  // ASIAN
  { id: 37, name: "Chicken Miso Ramen", price: 310.00, startingFrom: 310.00, rating: 4.9, totalSale: 3200, category: "Asian", transparentImg: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=300&q=80" },
  { id: 38, name: "Pork Gyoza", price: 180.00, startingFrom: 180.00, rating: 4.7, totalSale: 1650, category: "Asian", transparentImg: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=300&q=80" },
  { id: 39, name: "Kung Pao Chicken", price: 290.00, startingFrom: 290.00, rating: 4.6, totalSale: 1400, category: "Asian", transparentImg: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=300&q=80" },
  { id: 40, name: "Shrimp Tempura", price: 260.00, startingFrom: 260.00, rating: 4.8, totalSale: 890, category: "Asian", transparentImg: "https://takestwoeggs.com/wp-content/uploads/2023/09/Ebi-Tempura-Shrimp-Tempura-recipe-Takestwoeggs-1.jpg" },

  // HEALTHY
  { id: 41, name: "Caesar Salad", price: 210.00, startingFrom: 210.00, rating: 4.5, totalSale: 1200, category: "Healthy", transparentImg: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=300&q=80" },
  { id: 42, name: "Greek Salad", price: 190.00, startingFrom: 190.00, rating: 4.7, totalSale: 950, category: "Healthy", transparentImg: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=300&q=80" },
  { id: 43, name: "Acai Fruit Bowl", price: 240.00, startingFrom: 240.00, rating: 4.9, totalSale: 1800, category: "Healthy", transparentImg: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=300&q=80" },
  { id: 44, name: "Quinoa Veggie Mix", price: 220.00, startingFrom: 220.00, rating: 4.6, totalSale: 750, category: "Healthy", transparentImg: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=80" },
  { id: 45, name: "Falafel Wrap", price: 180.00, startingFrom: 180.00, rating: 4.8, totalSale: 1300, category: "Healthy", transparentImg: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=300&q=80" },

  // DESSERT (New items in existing Cake/Ice Cream or just more variety)
  { id: 46, name: "Red Velvet Cupcake", price: 90.00, startingFrom: 90.00, rating: 4.9, totalSale: 2400, category: "Cake", transparentImg: "https://tse1.mm.bing.net/th/id/OIP.YCeNJTgZ2YGOWoObhBrybgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 47, name: "Glazed Donut", price: 60.00, startingFrom: 60.00, rating: 4.7, totalSale: 3600, category: "Cake", transparentImg: "https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=300&q=80" },
  { id: 48, name: "Strawberry Mochi", price: 150.00, startingFrom: 150.00, rating: 4.8, totalSale: 920, category: "Ice Cream", transparentImg: "https://theheirloompantry.co/wp-content/uploads/2023/05/how-to-make-strawberry-mochi-ichigo-daifuku-the-heirloom-pantry-21-720x720.jpg" },
  { id: 49, name: "Tiramisu", price: 220.00, startingFrom: 220.00, rating: 4.9, totalSale: 1100, category: "Cake", transparentImg: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=300&q=80" },
  { id: 50, name: "Apple Pie", price: 160.00, startingFrom: 160.00, rating: 4.6, totalSale: 850, category: "Cake", transparentImg: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=300&q=80" }
];

export const categories = [
  { id: 1, name: "Burger", emoji: "🍔" },
  { id: 2, name: "Pizza", emoji: "🍕" },
  { id: 3, name: "Sandwich", emoji: "🥪" },
  { id: 4, name: "Tacos", emoji: "🌮" },
  { id: 5, name: "Ice Cream", emoji: "🍦" },
  { id: 6, name: "Cake", emoji: "🎂" },
  { id: 7, name: "Drink", emoji: "🥤" },
  { id: 8, name: "Indian", emoji: "🍲"},
  { id: 9, name: "Sushi", emoji: "🍣" },
  { id: 10, name: "Pasta", emoji: "🍝" },
  { id: 11, name: "Asian", emoji: "🍜" },
  { id: 12, name: "Healthy", emoji: "🥗" }
];

export const orders = [
  { id: "0184572320573", customer: "Yash Tambade", avatar: "https://ui-avatars.com/api/?name=Yash+Tambade&background=e53935&color=fff", address: "Karang Tengha Hills", amount: "₹450.00", status: "Completed", time: "10:30 AM" },
  { id: "0178654823047", customer: "Yash Tambade", avatar: "https://ui-avatars.com/api/?name=Yash+Tambade&background=e53935&color=fff", address: "City Center, CA", amount: "₹820.50", status: "Completed", time: "Yesterdy" },
  { id: "0165432190876", customer: "Yash Tambade", avatar: "https://ui-avatars.com/api/?name=Yash+Tambade&background=e53935&color=fff", address: "Sunset Boulevard, LA", amount: "₹1,250.00", status: "Completed", time: "Monday" },
  { id: "0192837410562", customer: "Yash Tambade", avatar: "https://ui-avatars.com/api/?name=Yash+Tambade&background=e53935&color=fff", address: "Downtown, NY", amount: "₹340.00", status: "Completed", time: "Last Week" }
];

export const defaultCartItems = [
  { id: 1, name: "Pepperoni Pizza", desc: "Thin Crust", qty: 1, price: 349.00, emoji: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80" },
  { id: 2, name: "Classic Hamburger", desc: "Whole wheat bun", qty: 2, price: 149.00, emoji: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80" },
];

export const restaurants = [
  { id: 1, name: "Burger King", rating: 4.5, type: "Fast Food", img: "https://wallpapers.com/images/hd/burger-king-logo-wj5xv2ocry7fqzj5-2.png", scaledDown: true },
  { id: 2, name: "McDonald's", rating: 4.7, type: "Fast Food", img: "https://pngimg.com/uploads/mcdonalds/mcdonalds_PNG19.png" },
  { id: 3, name: "KFC", rating: 4.4, type: "Chicken", img: "https://pngimg.com/uploads/kfc/kfc_PNG33.png" },
  { id: 4, name: "Pizza Hut", rating: 4.2, type: "Italian", img: "https://static.vecteezy.com/system/resources/previews/029/704/477/original/pizza-hut-logo-transparent-free-png.png" },
  { id: 5, name: "Taco Bell", rating: 4.0, type: "Mexican", img: "https://www.pngall.com/wp-content/uploads/13/Taco-Bell-Logo-PNG-Clipart.png" },
  { id: 6, name: "Starbucks", rating: 4.8, type: "Coffee", img: "https://pngimg.com/uploads/starbucks/starbucks_PNG8.png", scaledDown: true },
  { id: 7, name: "Dominos", rating: 4.3, type: "Pizza", img: "https://www.seekpng.com/png/full/321-3211333_dominos-logo-png.png", scaledDown: true },
  { id: 8, name: "Subway", rating: 4.1, type: "Healthy", img: "https://logodix.com/logo/49432.png" },
];

export default foodItems; 
