const carte = [
  //assiette
  {
    type: "assiette",
    name: "kebab",
    price: 10,
    initial: "as k",
    bestsellers: true,
  },
  {
    type: "assiette",
    name: "poulet",
    price: 12,
    initial: "as poulet",
    bestsellers: false,
  },
  {
    type: "assiette",
    name: "aubergine farcie",
    price: 10,
    initial: "as aub farcie",
  },
  { type: "assiette", name: "grillade", price: 14, initial: "as grill" },
  { type: "assiette", name: "kofte", price: 12, initial: "as kofte" },
  { type: "assiette", name: "omelette", price: 9, initial: "as omellette" },
  { type: "assiette", name: "iskender", price: 12, initial: "as iskender" },
  { type: "assiette", name: "agneau", price: 12, initial: "as agneau" },
  { type: "assiette", name: "steack", price: 9, initial: "as steack" },
  { type: "assiette", name: "merguez", price: 10, initial: "as merguez" },
  { type: "assiette", name: "montagnard", price: 12, initial: "as mont" },
  { type: "assiette", name: "menemen", price: 12, initial: "as menemen" },
  { type: "assiette", name: "alti ezme", price: 12, initial: "as alti ezme" },
  { type: "assiette", name: "suçuk", price: 10, initial: "as suçuk" },
  { type: "assiette", name: "beyti", price: 13, initial: "as beyti" },
  {
    type: "assiette",
    name: "hunkar begendi",
    price: 13,
    initial: "as begendi",
  },
  {
    type: "assiette",
    name: "vegetarienne feta",
    price: 7.7,
    initial: "as végé feta",
  },
  { type: "assiette", name: "mexicaine", price: 12, initial: "as mexic" },
  //accompagnement
  { type: "accompagnement", name: "frite", price: 0 },
  { type: "accompagnement", name: "ble", price: 0 },
  { type: "accompagnement", name: "mixte", price: 0 },
  //sandwich
  { type: "sandwich", name: "kebab", price: 5 },
  { type: "sandwich", name: "durum", price: 5.5 },
  { type: "sandwich", name: "maxi durum", price: 7.5 },
  { type: "sandwich", name: "maxi", price: 7.5 },
  { type: "sandwich", name: "kebab cheese", price: 6 },
  { type: "sandwich", name: "maxi cheese", price: 9 },
  { type: "sandwich", name: "falafel", price: 5.5 },
  { type: "sandwich", name: "americain", price: 5 },
  { type: "sandwich", name: "americain cheese", price: 6 },
  { type: "sandwich", name: "suçuk", price: 5 },
  { type: "sandwich", name: "kofte", price: 5 },
  { type: "sandwich", name: "lahmacun", price: 6 },
  { type: "sandwich", name: "hamburger", price: 5 },
  { type: "sandwich", name: "cheeseburger", price: 6 },
  { type: "sandwich", name: "merguez", price: 5 },
  { type: "sandwich", name: "chicken", price: 5 },
  { type: "sandwich", name: "montagnard", price: 6.5 },
  { type: "sandwich", name: "mexicain", price: 6 },
  { type: "sandwich", name: "saucisse poulet", price: 5 },
  { type: "sandwich", name: "panini", price: 5.5 },
  { type: "sandwich", name: "tacos", price: 6.5 },
  { type: "sandwich", name: "belge", price: 4 },
  { type: "sandwich", name: "lentille", price: 5 },
  { type: "sandwich", name: "vegetarien", price: 4.8 },
  { type: "sandwich", name: "blanc de volaille", price: 4.8 },
  { type: "sandwich", name: "pain bagnat poulet", price: 5 },
  { type: "sandwich", name: "pain bagnat thon", price: 5 },
  //sandwich frites
  { type: "sandwich frites", name: "kebab", price: 6 },
  { type: "sandwich frites", name: "kebab cheese", price: 7 },
  { type: "sandwich frites", name: "maxi", price: 9 },
  { type: "sandwich frites", name: "maxi cheese", price: 9.5 },
  { type: "sandwich frites", name: "suçuk", price: 6 },
  { type: "sandwich frites", name: "kofte", price: 6 },
  { type: "sandwich frites", name: "lahmacun", price: 6 },
  { type: "sandwich frites", name: "durum", price: 6.5 },
  { type: "sandwich frites", name: "durum cheese", price: 7.5 },
  { type: "sandwich frites", name: "hamburger frites", price: 6 },
  { type: "sandwich frites", name: "cheeseburger frites", price: 7 },
  { type: "sandwich frites", name: "merguez frites", price: 6 },
  { type: "sandwich frites", name: "chicken frites", price: 6.6 },
  { type: "sandwich frites", name: "montagnard frites", price: 7.5 },
  { type: "sandwich frites", name: "mexicain frites", price: 7 },
  { type: "sandwich frites", name: "saucisse poulet frites", price: 6 },
  { type: "sandwich frites", name: "panini frites", price: 6.6 },
  { type: "sandwich frites", name: "tacos frites", price: 7.5 },
  { type: "sandwich frites", name: "falafel", price: 6.5 },
  { type: "sandwich frites", name: "lentille", price: 6 },
  { type: "sandwich frites", name: "vegetarien", price: 5.8 },
  { type: "sandwich frites", name: "blanc de volaille", price: 5.8 },
  { type: "sandwich frites", name: "pain bagnat poulet", price: 6 },
  { type: "sandwich frites", name: "pain bagnat thon", price: 6 },
  // viande
  { type: "viande", name: "kebab", price: 0 },
  { type: "viande", name: "steack", price: 0 },
  { type: "viande", name: "poulet", price: 0 },
  { type: "viande", name: "kofte", price: 0 },
  { type: "viande", name: "nuggets", price: 0 },
  // vegetarien
  { type: "vegetarien", name: "falafel", price: 0 },
  { type: "vegetarien", name: "galette pdt", price: 0 },
  { type: "vegetarien", name: "feta", price: 0 },
  { type: "vegetarien", name: "cheddar", price: 0 },
  { type: "vegetarien", name: "gruyère", price: 0 },
  { type: "vegetarien", name: "chèvre", price: 0 },
  //entrees
  { type: "entrees", name: "coban", price: 7 },
  { type: "entrees", name: "aubergine", price: 7 },
  { type: "entrees", name: "ezme", price: 7 },
  { type: "entrees", name: "borek", price: 7 },
  { type: "entrees", name: "meze", price: 10 },
  { type: "entrees", name: "cacik", price: 7 },
  { type: "entrees", name: "sarma", price: 7 },
  { type: "entrees", name: "manti", price: 7 },
  { type: "entrees", name: "tarator", price: 7 },
  { type: "entrees", name: "salade falafel", price: 9.5 },
  { type: "entrees", name: "salade chef", price: 9.5 },
  //petite assiette
  { type: "petite assiette", name: "kebab", price: 8 },
  { type: "petite assiette", name: "nuggets", price: 8 },
  { type: "petite assiette", name: "steack", price: 8 },
  //formule
  { type: "formule", name: "kebab", price: 12 },
  { type: "formule", name: "kofte", price: 12 },
  //desserts
  { type: "dessert", name: "baklava", price: 4 },
  { type: "dessert", name: "lokum", price: 4 },
  { type: "dessert", name: "helva", price: 4 },
  { type: "dessert", name: "glace 3 boules", price: 4 },
  { type: "dessert", name: "tiramisu", price: 4 },
  { type: "dessert", name: "magnum", price: 3 },
  //aperitifs
  { type: "aperitif", name: "raki", price: 4 },
  { type: "aperitif", name: "martini blanc", price: 4 },
  { type: "aperitif", name: "martini rouge", price: 4 },
  { type: "aperitif", name: "porto blanc", price: 4 },
  { type: "aperitif", name: "porto rouge", price: 4 },
  { type: "aperitif", name: "ricard", price: 4 },
  { type: "aperitif", name: "americano", price: 4 },
  { type: "aperitif", name: "kir", price: 4 },
  { type: "aperitif", name: "kir royal", price: 5.5 },
  { type: "aperitif", name: "coupe champagne", price: 5 },
  { type: "aperitif", name: "whisky", price: 6.5 },
  { type: "aperitif", name: "whisky baby", price: 3 },
  { type: "aperitif", name: "gin", price: 4 },
  { type: "aperitif", name: "vodka", price: 4 },
  //vins
  { type: "vin rouge", name: "kavaklidere 37cl", price: 9 },
  { type: "vin rouge", name: "kavaklidere 75cl", price: 15 },
  { type: "vin rouge", name: "bordeaux 37cl", price: 7 },
  { type: "vin rouge", name: "bordeaux 75cl", price: 12 },
  { type: "vin rouge", name: "cotes du rhone 37cl", price: 7 },
  { type: "vin rouge", name: "cotes du rhone 75cl", price: 12 },
  { type: "vin rouge", name: "verre 10cl", price: 2 },
  { type: "vin rouge", name: "pichet 25cl", price: 4.5 },
  { type: "vin rouge", name: "pichet 50cl", price: 6 },
  { type: "vin rose", name: "lal 37cl", price: 9 },
  { type: "vin rose", name: "lal 75cl", price: 15 },
  { type: "vin rose", name: "bordeaux 37cl", price: 8 },
  { type: "vin rose", name: "bordeaux 75cl", price: 13 },
  { type: "vin rose", name: "cotes du rhone 37cl", price: 7 },
  { type: "vin rose", name: "cotes du rhone 75cl", price: 12 },
  { type: "vin rose", name: "verre 10cl", price: 2 },
  { type: "vin rose", name: "pichet 25cl", price: 4.5 },
  { type: "vin rose", name: "pichet 50cl", price: 6 },
  { type: "vin blanc", name: "verre 10cl", price: 2 },
  { type: "vin blanc", name: "pichet 50cl", price: 6 },
  { type: "vin blanc", name: "pichet 50cl", price: 6 },
  //portion
  { type: "portion", name: "petite frite", price: 2.9 },
  { type: "portion", name: "grande frite", price: 3.7 },
  { type: "portion", name: "petite ble", price: 2.9 },
  { type: "portion", name: "grande ble", price: 3.7 },
  { type: "portion", name: "petite viande", price: 5 },
  { type: "portion", name: "grande viande", price: 7 },
  { type: "portion", name: "petite falafel", price: 5 },
  { type: "portion", name: "grande falafel", price: 7 },
  //crudite
  { type: "crudite", name: "tout", price: 0 },
  { type: "crudite", name: "rien", price: 0 },
  { type: "crudite", name: "salade", price: 0 },
  { type: "crudite", name: "tomate", price: 0 },
  { type: "crudite", name: "oignons", price: 0 },
  { type: "crudite", name: "choux", price: 0 },
  { type: "crudite", name: "oignons grilles", price: 0 },
  //cheese
  { type: "cheese", name: "cheddar", price: 0 },
  { type: "cheese", name: "feta", price: 0 },
  { type: "cheese", name: "gruyère", price: 0 },
  { type: "cheese", name: "raclette", price: 0 },
  { type: "cheese", name: "chèvre", price: 0 },
  //sauce
  { type: "sauce", name: "blanche", price: 0 },
  { type: "sauce", name: "andalouse", price: 0 },
  { type: "sauce", name: "algérienne", price: 0 },
  { type: "sauce", name: "samourai", price: 0 },
  { type: "sauce", name: "harrissa", price: 0 },
  { type: "sauce", name: "mayo", price: 0 },
  { type: "sauce", name: "ketchup", price: 0 },
  { type: "sauce", name: "biggy", price: 0 },
  { type: "sauce", name: "marocaine", price: 0 },
  { type: "sauce", name: "curry", price: 0 },
  { type: "sauce", name: "vinaigrette", price: 0 },
  { type: "sauce", name: "sans sauce", price: 0 },
  //sauce frite
  { type: "sauce frite", name: "blanche", price: 0 },
  { type: "sauce frite", name: "andalouse", price: 0 },
  { type: "sauce frite", name: "algérienne", price: 0 },
  { type: "sauce frite", name: "samourai", price: 0 },
  { type: "sauce frite", name: "harrissa", price: 0 },
  { type: "sauce frite", name: "mayo", price: 0 },
  { type: "sauce frite", name: "ketchup", price: 0 },
  { type: "sauce frite", name: "biggy", price: 0 },
  { type: "sauce frite", name: "marocaine", price: 0 },
  { type: "sauce frite", name: "curry", price: 0 },
  { type: "sauce frite", name: "vinaigrette", price: 0 },
  { type: "sauce frite", name: "sans sauce", price: 0 },
  //soda
  { type: "soda à emporter", name: "coca", price: 1.8 },
  { type: "soda à emporter", name: "coca zero", price: 1.8 },
  { type: "soda à emporter", name: "coca cherry", price: 1.8 },
  { type: "soda à emporter", name: "ice-tea", price: 1.8 },
  { type: "soda à emporter", name: "fanta orange", price: 1.8 },
  { type: "soda à emporter", name: "fanta citron", price: 21.8 },
  { type: "soda à emporter", name: "aryan", price: 1.8 },
  { type: "soda à emporter", name: "perrier", price: 1.8 },
  { type: "soda à emporter", name: "san pellegrino", price: 3 },
  { type: "soda à emporter", name: "jus orange", price: 1.8 },
  { type: "soda à emporter", name: "jus pomme", price: 1.8 },
  { type: "soda à emporter", name: "cristalline", price: 1.8 },
  { type: "soda à emporter", name: "dada pomme", price: 2 },
  { type: "soda à emporter", name: "dada cerise", price: 2 },
  { type: "soda à emporter", name: "dada litchi", price: 2 },
  { type: "soda à emporter", name: "dada melon", price: 2 },
  { type: "soda à emporter", name: "dada fraise", price: 2 },
  { type: "soda sur place", name: "coca", price: 2 },
  { type: "soda sur place", name: "coca zero", price: 2 },
  { type: "soda sur place", name: "coca cherry", price: 2 },
  { type: "soda sur place", name: "ice-tea", price: 2 },
  { type: "soda sur place", name: "fanta orange", price: 2 },
  { type: "soda sur place", name: "fanta citron", price: 2 },
  { type: "soda sur place", name: "aryan", price: 2 },
  { type: "soda sur place", name: "perrier", price: 2 },
  { type: "soda sur place", name: "san pellegrino", price: 3 },
  { type: "soda sur place", name: "jus orange", price: 2 },
  { type: "soda sur place", name: "jus pomme", price: 2 },
  { type: "soda sur place", name: "cristalline", price: 2 },
  { type: "soda sur place", name: "dada pomme", price: 2 },
  { type: "soda sur place", name: "dada cerise", price: 2 },
  { type: "soda sur place", name: "dada litchi", price: 2 },
  { type: "soda sur place", name: "dada melon", price: 2 },
  { type: "soda sur place", name: "dada fraise", price: 2 },
  { type: "soda sur place", name: "limonade", price: 2 },
  { type: "soda sur place", name: "sirop", price: 1.8 },
  { type: "soda terrasse", name: "coca", price: 2.2 },
  { type: "soda terrasse", name: "coca zero", price: 2.2 },
  { type: "soda terrasse", name: "coca cherry", price: 2.2 },
  { type: "soda terrasse", name: "ice-tea", price: 2.2 },
  { type: "soda terrasse", name: "fanta orange", price: 2.2 },
  { type: "soda terrasse", name: "fanta citron", price: 2.2 },
  { type: "soda terrasse", name: "aryan", price: 2.2 },
  { type: "soda terrasse", name: "perrier", price: 2.2 },
  { type: "soda terrasse", name: "san pellegrino", price: 3 },
  { type: "soda terrasse", name: "jus orange", price: 2.2 },
  { type: "soda terrasse", name: "jus pomme", price: 2.2 },
  { type: "soda terrasse", name: "cristalline", price: 2.2 },
  { type: "soda terrasse", name: "dada pomme", price: 2.2 },
  { type: "soda terrasse", name: "dada cerise", price: 2.2 },
  { type: "soda terrasse", name: "dada litchi", price: 2.2 },
  { type: "soda terrasse", name: "dada melon", price: 2.2 },
  { type: "soda terrasse", name: "dada fraise", price: 2.2 },
  { type: "soda terrasse", name: "limonade", price: 2.2 },
  { type: "soda terrasse", name: "sirop", price: 2 },
  { type: "soda menu", name: "coca", price: 0 },
  { type: "soda menu", name: "coca zero", price: 0 },
  { type: "soda menu", name: "coca cherry", price: 0 },
  { type: "soda menu", name: "ice-tea", price: 0 },
  { type: "soda menu", name: "fanta orange", price: 0 },
  { type: "soda menu", name: "fanta citron", price: 0 },
  { type: "soda menu", name: "aryan", price: 0 },
  { type: "soda menu", name: "perrier", price: 0 },
  { type: "soda menu", name: "san pellegrino", price: 0 },
  { type: "soda menu", name: "jus orange", price: 0 },
  { type: "soda menu", name: "jus pomme", price: 0 },
  { type: "soda menu", name: "cristalline", price: 0 },
  { type: "soda menu", name: "dada pomme", price: 0 },
  { type: "soda menu", name: "dada cerise", price: 0 },
  { type: "soda menu", name: "dada litchi", price: 0 },
  { type: "soda menu", name: "dada melon", price: 0 },
  { type: "soda menu", name: "dada fraise", price: 0 },
  //bieres
  { type: "biere", name: "efes", price: 3 },
  { type: "biere", name: "heineken", price: 2.5 },
  { type: "biere", name: "1664", price: 2.5 },
  { type: "biere", name: "kronenbourg", price: 2 },
  { type: "biere", name: "desperados", price: 3 },
  //boisson chaude
  { type: "boisson chaude", name: "café", price: 1.8 },
  { type: "boisson chaude", name: "grand café", price: 2.6 },
  { type: "boisson chaude", name: "cafe allongé", price: 2.6 },
  { type: "boisson chaude", name: "thé", price: 1.5 },
  { type: "boisson chaude", name: "decafeine", price: 1.7 },
  //menu
  { type: "menu", name: "kebab", price: 6.5 },
  { type: "menu", name: "kebab frites", price: 7.5 },
  { type: "menu", name: "kebab cheese frites", price: 8.5 },
  { type: "menu", name: "maxi cheese frites", price: 11 },
  { type: "menu", name: "americain", price: 6.5 },
  { type: "menu", name: "americain cheese", price: 7.5 },
  { type: "menu", name: "falafel frites", price: 7.5 },
  { type: "menu", name: "lahmacun frites", price: 8.5 },
  { type: "menu", name: "belge", price: 5.5 },
  { type: "menu", name: "enfant", price: 6.5 },
  //supplement
  { type: "supplement", name: "viande", price: 1 },
  { type: "supplement", name: "cheddar", price: 0.5 },
  { type: "supplement", name: "feta", price: 0.5 },
  { type: "supplement", name: "gruyere", price: 0.5 },
  { type: "supplement", name: "raclette", price: 0.5 },
  { type: "supplement", name: "chevre", price: 0.5 },
  { type: "supplement", name: "coban", price: 2 },
  { type: "supplement", name: "gallette pdt", price: 2 },
];

module.exports = carte;
