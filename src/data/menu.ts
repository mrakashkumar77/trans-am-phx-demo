// ─────────────────────────────────────────────
//  Trans Am Cafe — Centralized Sample Menu Data
//  Notice: All offerings and prices are illustrative placeholders
//  and require final verification with the business owner.
// ─────────────────────────────────────────────

import type { MenuItem, MenuCategory } from "@/types";

export const menuDisclaimer =
  "Sample Menu Notice: Items, ingredients, and pricing shown below are illustrative placeholders created for this website demonstration and are subject to final confirmation by Trans Am Cafe management.";

export const menuCategories: ("All" | MenuCategory)[] = [
  "All",
  "Sandwiches",
  "Sides",
  "Drinks",
];

export const menuItems: MenuItem[] = [
  // ── Sandwiches (Primary Focus) ────────────────
  {
    id: "sw-001",
    name: "The Classic Club",
    description:
      "Triple-decker with roasted turkey, crispy applewood bacon, Swiss, sliced avocado, butter lettuce, heirloom tomato, and house garlic aioli on toasted sourdough.",
    price: 14.5,
    category: "Sandwiches",
    tags: ["popular", "signature"],
    image: "/images/hero-sandwich.jpg",
    featured: true,
  },
  {
    id: "sw-002",
    name: "Spicy Italian Sub",
    description:
      "Genoa salami, spicy capicola, shaved provolone, wild arugula, roasted red peppers, and house Calabrian chili vinaigrette on a toasted artisan hoagie roll.",
    price: 15.0,
    category: "Sandwiches",
    tags: ["popular"],
    image: "/images/menu-italian.jpg",
    featured: true,
  },
  {
    id: "sw-003",
    name: "Roasted Garden Melt",
    description:
      "Marinated portobello mushrooms, sweet caramelized onions, sautéed baby spinach, sun-dried tomatoes, and melted fontina cheese on freshly baked rosemary focaccia.",
    price: 13.5,
    category: "Sandwiches",
    tags: ["vegetarian", "popular"],
    image: "/images/menu-garden.jpg",
    featured: true,
  },
  {
    id: "sw-004",
    name: "The Downtown Cubano",
    description:
      "Slow-roasted citrus-mojo pork, smoked country ham, Swiss cheese, kosher dill pickles, and coarse stoneground mustard pressed hot on traditional Cuban bread.",
    price: 15.5,
    category: "Sandwiches",
    tags: ["signature"],
  },
  {
    id: "sw-005",
    name: "Crispy Buffalo Chicken",
    description:
      "Crispy buttermilk chicken breast tossed in fiery house buffalo sauce, Danish blue cheese crumble, crisp celery slaw, and pickled jalapeños on a toasted brioche bun.",
    price: 14.0,
    category: "Sandwiches",
    tags: ["new"],
  },
  {
    id: "sw-006",
    name: "Smoked Salmon & Dill Bagel",
    description:
      "Cold-smoked Atlantic salmon, whipped scallion cream cheese, nonpareil capers, thinly sliced red onion, and fresh dill on a toasted everything bagel.",
    price: 13.5,
    category: "Sandwiches",
    tags: ["new"],
  },

  // ── Sides ────────────────────────────────────
  {
    id: "side-001",
    name: "Hand-Cut Kettle Chips",
    description:
      "Russet potato chips fried in small batches, dusted with smoked Sonoran sea salt and cracked black pepper.",
    price: 3.5,
    category: "Sides",
    tags: ["vegan", "gluten-free"],
  },
  {
    id: "side-002",
    name: "House Pickled Vegetables",
    description:
      "Rotating mix of crisp English cucumbers, rainbow carrots, and Fresno chiles pickled in sweet cider brine.",
    price: 4.0,
    category: "Sides",
    tags: ["vegan", "gluten-free"],
  },
  {
    id: "side-003",
    name: "Roasted Tomato Bisque Cup",
    description:
      "Slow-simmered vine tomatoes, roasted garlic, and sweet basil finished with a drizzle of virgin olive oil and herb croutons.",
    price: 5.5,
    category: "Sides",
    tags: ["vegetarian"],
  },
  {
    id: "side-004",
    name: "Dill & Mustard Potato Salad",
    description:
      "Tender red potatoes tossed with coarse grain Dijon, fresh dill sprigs, crunchy celery, and light shallot vinaigrette.",
    price: 4.5,
    category: "Sides",
    tags: ["vegetarian", "gluten-free"],
  },

  // ── Drinks ───────────────────────────────────
  {
    id: "drk-001",
    name: "Lavender Lemonade",
    description:
      "Fresh-squeezed Meyer lemons infused with house-made organic French lavender simple syrup over cracked ice.",
    price: 4.5,
    category: "Drinks",
    tags: ["vegan", "popular"],
  },
  {
    id: "drk-002",
    name: "Cold Brew Coffee",
    description:
      "Locally roasted single-origin blend slow-steeped for 18 hours. Crisp, chocolatey finish, served black or with oat milk.",
    price: 5.0,
    category: "Drinks",
    tags: ["vegan"],
  },
  {
    id: "drk-003",
    name: "Arizona Craft Soda",
    description:
      "Locally crafted small-batch cane sugar sodas. Choices include Wild Prickly Pear, Desert Root Beer, or Cream Soda.",
    price: 3.75,
    category: "Drinks",
  },
  {
    id: "drk-004",
    name: "Iced Peach Black Tea",
    description:
      "Slow-brewed Nilgiri black tea infused with real Sonoran peach essence. Unsweetened or lightly sweetened.",
    price: 4.0,
    category: "Drinks",
    tags: ["vegan"],
  },
];
