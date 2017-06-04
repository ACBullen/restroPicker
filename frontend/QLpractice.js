const R = require('ramda');
const values = require('lodash/values');
let results = {
  "data": {
    "search": {
      "total": 134,
      "business": [
        {
          "name": "Rambler",
          "rating": 4,
          "review_count": 154,
          "categories": [
            {
              "title": "American (New)",
              "alias": "newamerican"
            }
          ]
        },
        {
          "name": "Campton Place Restaurant",
          "rating": 4,
          "review_count": 635,
          "categories": [
            {
              "title": "American (New)",
              "alias": "newamerican"
            },
            {
              "title": "Indian",
              "alias": "indpak"
            },
            {
              "title": "Bars",
              "alias": "bars"
            }
          ]
        },
        {
          "name": "Parallel 37",
          "rating": 4,
          "review_count": 168,
          "categories": [
            {
              "title": "American (New)",
              "alias": "newamerican"
            }
          ]
        },
        {
          "name": "The Cavalier",
          "rating": 4,
          "review_count": 760,
          "categories": [
            {
              "title": "American (New)",
              "alias": "newamerican"
            },
            {
              "title": "British",
              "alias": "british"
            },
            {
              "title": "Cocktail Bars",
              "alias": "cocktailbars"
            }
          ]
        },
        {
          "name": "Delicious Dim Sum",
          "rating": 4,
          "review_count": 682,
          "categories": [
            {
              "title": "Dim Sum",
              "alias": "dimsum"
            },
            {
              "title": "Cantonese",
              "alias": "cantonese"
            }
          ]
        },
        {
          "name": "Good Mong Kok Bakery",
          "rating": 4,
          "review_count": 1649,
          "categories": [
            {
              "title": "Bakeries",
              "alias": "bakeries"
            },
            {
              "title": "Dim Sum",
              "alias": "dimsum"
            },
            {
              "title": "Cantonese",
              "alias": "cantonese"
            }
          ]
        },
        {
          "name": "Bob's Steak & Chop House",
          "rating": 3.5,
          "review_count": 498,
          "categories": [
            {
              "title": "Steakhouses",
              "alias": "steak"
            },
            {
              "title": "Seafood",
              "alias": "seafood"
            }
          ]
        },
        {
          "name": "Good Luck Cafe and Deli",
          "rating": 4.5,
          "review_count": 350,
          "categories": [
            {
              "title": "Delis",
              "alias": "delis"
            },
            {
              "title": "Cafes",
              "alias": "cafes"
            },
            {
              "title": "Sandwiches",
              "alias": "sandwiches"
            }
          ]
        },
        {
          "name": "Fish & Farm",
          "rating": 3,
          "review_count": 146,
          "categories": [
            {
              "title": "American (New)",
              "alias": "newamerican"
            },
            {
              "title": "Seafood",
              "alias": "seafood"
            },
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            }
          ]
        },
        {
          "name": "Scala's Bistro",
          "rating": 3.5,
          "review_count": 1075,
          "categories": [
            {
              "title": "Italian",
              "alias": "italian"
            },
            {
              "title": "Bars",
              "alias": "bars"
            },
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            }
          ]
        },
        {
          "name": "The Grove Yerba Buena",
          "rating": 3.5,
          "review_count": 1491,
          "categories": [
            {
              "title": "Sandwiches",
              "alias": "sandwiches"
            },
            {
              "title": "American (New)",
              "alias": "newamerican"
            },
            {
              "title": "Cafes",
              "alias": "cafes"
            }
          ]
        },
        {
          "name": "Berlinetta Lounge",
          "rating": 4,
          "review_count": 6,
          "categories": [
            {
              "title": "Lounges",
              "alias": "lounges"
            }
          ]
        },
        {
          "name": "Bao Down",
          "rating": 3.5,
          "review_count": 86,
          "categories": [
            {
              "title": "Asian Fusion",
              "alias": "asianfusion"
            }
          ]
        },
        {
          "name": "Chao Mien",
          "rating": 4.5,
          "review_count": 4,
          "categories": [
            {
              "title": "Asian Fusion",
              "alias": "asianfusion"
            }
          ]
        },
        {
          "name": "Brasserie S&P",
          "rating": 3.5,
          "review_count": 48,
          "categories": [
            {
              "title": "American (New)",
              "alias": "newamerican"
            },
            {
              "title": "Bars",
              "alias": "bars"
            },
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            }
          ]
        },
        {
          "name": "TRACE",
          "rating": 3.5,
          "review_count": 287,
          "categories": [
            {
              "title": "American (New)",
              "alias": "newamerican"
            }
          ]
        },
        {
          "name": "Taste On Ellis",
          "rating": 4,
          "review_count": 45,
          "categories": [
            {
              "title": "Hawaiian",
              "alias": "hawaiian"
            },
            {
              "title": "Spanish",
              "alias": "spanish"
            }
          ]
        },
        {
          "name": "Vesuvio Cafe",
          "rating": 4,
          "review_count": 767,
          "categories": [
            {
              "title": "Lounges",
              "alias": "lounges"
            }
          ]
        },
        {
          "name": "Grill At the St Regis",
          "rating": 4.5,
          "review_count": 20,
          "categories": [
            {
              "title": "American (New)",
              "alias": "newamerican"
            },
            {
              "title": "Cocktail Bars",
              "alias": "cocktailbars"
            },
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            }
          ]
        },
        {
          "name": "Daily Grill",
          "rating": 3.5,
          "review_count": 902,
          "categories": [
            {
              "title": "American (Traditional)",
              "alias": "tradamerican"
            }
          ]
        },
        {
          "name": "Café de la Presse",
          "rating": 3.5,
          "review_count": 1353,
          "categories": [
            {
              "title": "French",
              "alias": "french"
            },
            {
              "title": "Desserts",
              "alias": "desserts"
            },
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            }
          ]
        },
        {
          "name": "OneUp Restaurant & Lounge",
          "rating": 3.5,
          "review_count": 132,
          "categories": [
            {
              "title": "American (New)",
              "alias": "newamerican"
            },
            {
              "title": "Lounges",
              "alias": "lounges"
            },
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            }
          ]
        },
        {
          "name": "McDonald's",
          "rating": 4,
          "review_count": 98,
          "categories": [
            {
              "title": "Fast Food",
              "alias": "hotdogs"
            },
            {
              "title": "Burgers",
              "alias": "burgers"
            }
          ]
        },
        {
          "name": "Luce",
          "rating": 3.5,
          "review_count": 621,
          "categories": [
            {
              "title": "American (New)",
              "alias": "newamerican"
            },
            {
              "title": "Desserts",
              "alias": "desserts"
            },
            {
              "title": "Wine Bars",
              "alias": "wine_bars"
            }
          ]
        },
        {
          "name": "Dol Ho",
          "rating": 4,
          "review_count": 258,
          "categories": [
            {
              "title": "Dim Sum",
              "alias": "dimsum"
            }
          ]
        },
        {
          "name": "The Garden Court",
          "rating": 3.5,
          "review_count": 401,
          "categories": [
            {
              "title": "Tea Rooms",
              "alias": "tea"
            },
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            },
            {
              "title": "Lounges",
              "alias": "lounges"
            }
          ]
        },
        {
          "name": "MKT Restaurant and Bar",
          "rating": 3.5,
          "review_count": 114,
          "categories": [
            {
              "title": "American (New)",
              "alias": "newamerican"
            },
            {
              "title": "Tapas/Small Plates",
              "alias": "tapasmallplates"
            }
          ]
        },
        {
          "name": "Working Girls' Cafe",
          "rating": 4,
          "review_count": 454,
          "categories": [
            {
              "title": "Sandwiches",
              "alias": "sandwiches"
            },
            {
              "title": "Salad",
              "alias": "salad"
            },
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            }
          ]
        },
        {
          "name": "Sears Fine Food",
          "rating": 3.5,
          "review_count": 1585,
          "categories": [
            {
              "title": "American (Traditional)",
              "alias": "tradamerican"
            },
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            },
            {
              "title": "Burgers",
              "alias": "burgers"
            }
          ]
        },
        {
          "name": "Kam Po Kitchen",
          "rating": 4,
          "review_count": 323,
          "categories": [
            {
              "title": "Cantonese",
              "alias": "cantonese"
            },
            {
              "title": "Noodles",
              "alias": "noodles"
            }
          ]
        },
        {
          "name": "Mama's On Washington Square",
          "rating": 4,
          "review_count": 3591,
          "categories": [
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            }
          ]
        },
        {
          "name": "398 Brasserie",
          "rating": 3.5,
          "review_count": 223,
          "categories": [
            {
              "title": "Bars",
              "alias": "bars"
            },
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            },
            {
              "title": "Brasseries",
              "alias": "brasseries"
            }
          ]
        },
        {
          "name": "Flyte Wine & Beer Bar",
          "rating": 4,
          "review_count": 19,
          "categories": [
            {
              "title": "Wine Bars",
              "alias": "wine_bars"
            }
          ]
        },
        {
          "name": "Dottie's True Blue Cafe",
          "rating": 4,
          "review_count": 3535,
          "categories": [
            {
              "title": "American (Traditional)",
              "alias": "tradamerican"
            },
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            },
            {
              "title": "Cafes",
              "alias": "cafes"
            }
          ]
        },
        {
          "name": "The Oak Room Restaurant",
          "rating": 3,
          "review_count": 140,
          "categories": [
            {
              "title": "American (Traditional)",
              "alias": "tradamerican"
            },
            {
              "title": "Bars",
              "alias": "bars"
            },
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            }
          ]
        },
        {
          "name": "Roots Restaurant",
          "rating": 3,
          "review_count": 153,
          "categories": [
            {
              "title": "American (New)",
              "alias": "newamerican"
            },
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            }
          ]
        },
        {
          "name": "Luques Restaurant and Bar",
          "rating": 3.5,
          "review_count": 86,
          "categories": [
            {
              "title": "American (New)",
              "alias": "newamerican"
            },
            {
              "title": "Bars",
              "alias": "bars"
            },
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            }
          ]
        },
        {
          "name": "Laurel Court Restaurant & Bar",
          "rating": 3,
          "review_count": 267,
          "categories": [
            {
              "title": "Bars",
              "alias": "bars"
            },
            {
              "title": "American (New)",
              "alias": "newamerican"
            },
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            }
          ]
        },
        {
          "name": "Mo's Grill",
          "rating": 4,
          "review_count": 710,
          "categories": [
            {
              "title": "Burgers",
              "alias": "burgers"
            },
            {
              "title": "American (Traditional)",
              "alias": "tradamerican"
            },
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            }
          ]
        },
        {
          "name": "Park Grill",
          "rating": 3,
          "review_count": 30,
          "categories": [
            {
              "title": "American (New)",
              "alias": "newamerican"
            }
          ]
        },
        {
          "name": "The Boiling Shrimp",
          "rating": 3.5,
          "review_count": 61,
          "categories": [
            {
              "title": "Seafood",
              "alias": "seafood"
            },
            {
              "title": "Chinese",
              "alias": "chinese"
            }
          ]
        },
        {
          "name": "Level III Restaurant",
          "rating": 3.5,
          "review_count": 186,
          "categories": [
            {
              "title": "Lounges",
              "alias": "lounges"
            },
            {
              "title": "American (New)",
              "alias": "newamerican"
            }
          ]
        },
        {
          "name": "Yee's Restaurant",
          "rating": 3.5,
          "review_count": 244,
          "categories": [
            {
              "title": "Barbeque",
              "alias": "bbq"
            },
            {
              "title": "Cantonese",
              "alias": "cantonese"
            }
          ]
        },
        {
          "name": "MaSo",
          "rating": 2.5,
          "review_count": 66,
          "categories": [
            {
              "title": "American (New)",
              "alias": "newamerican"
            },
            {
              "title": "Lounges",
              "alias": "lounges"
            },
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            }
          ]
        },
        {
          "name": "Eclipse Kitchen & Bar",
          "rating": 3,
          "review_count": 126,
          "categories": [
            {
              "title": "American (New)",
              "alias": "newamerican"
            },
            {
              "title": "Bars",
              "alias": "bars"
            },
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            }
          ]
        },
        {
          "name": "Beanstalk Cafe",
          "rating": 4.5,
          "review_count": 605,
          "categories": [
            {
              "title": "Coffee & Tea",
              "alias": "coffee"
            },
            {
              "title": "Sandwiches",
              "alias": "sandwiches"
            },
            {
              "title": "Bagels",
              "alias": "bagels"
            }
          ]
        },
        {
          "name": "Cable Car Cafe",
          "rating": 3.5,
          "review_count": 214,
          "categories": [
            {
              "title": "American (Traditional)",
              "alias": "tradamerican"
            },
            {
              "title": "Bars",
              "alias": "bars"
            },
            {
              "title": "Creperies",
              "alias": "creperies"
            }
          ]
        },
        {
          "name": "Lori's Diner",
          "rating": 3,
          "review_count": 681,
          "categories": [
            {
              "title": "Diners",
              "alias": "diners"
            },
            {
              "title": "American (Traditional)",
              "alias": "tradamerican"
            },
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            }
          ]
        },
        {
          "name": "Mazarine Coffee",
          "rating": 4.5,
          "review_count": 380,
          "categories": [
            {
              "title": "Coffee & Tea",
              "alias": "coffee"
            },
            {
              "title": "Breakfast & Brunch",
              "alias": "breakfast_brunch"
            },
            {
              "title": "Beer, Wine & Spirits",
              "alias": "beer_and_wine"
            }
          ]
        },
        {
          "name": "750 Restaurant & Bar",
          "rating": 3,
          "review_count": 93,
          "categories": [
            {
              "title": "American (New)",
              "alias": "newamerican"
            },
            {
              "title": "Wine Bars",
              "alias": "wine_bars"
            }
          ]
        }
      ]
    }
  }
};

function getAliases(arr) {
  let aliases = [];
  arr.forEach((object) => aliases.push(object.alias));
  return aliases;
}

function getTitles(arr) {
  let titles = [];
  arr.forEach((object) => titles.push(object.title));
  return titles;
}

function getObjects(arr) {
  let objects = [];
  arr.forEach((subArr) => {
    for (let i = 0; i < subArr.length; i++) {
      objects.push(subArr[i]);
    }
  });
  return objects;
}

function getAliasFromCounter(topArr, counter) {
  let topAliasArr = [];
  Object.keys(counter).forEach(alias => {
    if (topArr.includes(counter[alias])) {
      topAliasArr.push(alias);
    }
  });
  return topAliasArr;
}

function getTitlesFromCounter(topArr, counter) {
  let topTitleArr = [];
  Object.keys(counter).forEach(title => {
    if (topArr.includes(counter[title])) {
      topTitleArr.push(title);
    }
  });
  return topTitleArr;
}

// function getTitleFromAlias(pairsArr, alias) {
//   let titleArr = [];
//   pairsArr.forEach(el => {
//     if (el.alias === alias) {
//       titleArr.push(alias);
//     }
//   });
//   return titleArr;
// }


function getTopTen(arr) {
  return values(arr).sort((a, b) => b - a).slice(0, 10);
}

function getRestaurantsFromTitles({data: {search: {business}}}, titleArr) {
  let nameArr = [];
  business.forEach(biz => {
    biz.categories.forEach(category => {
      if ((titleArr.includes(category.title)) && !(nameArr.includes(biz.name))) {
          nameArr.push(biz.name);
        }
      });
    });
  return nameArr;
}

function printAll({data: {search: {business}}}) {
  let categoryArr = [];
  let businessList = business.forEach(biz => {
   categoryArr.push(biz.categories);
   });
  let titles = getTitles(getObjects(categoryArr));
  let counter = R.countBy(r => r)(titles);
  let topArr = getTopTen(counter);
  let titleAliasPairs = (getObjects(categoryArr));
  let topTitles = getTitlesFromCounter(topArr, counter);
  return topTitles;
}

console.log(printAll(results));
console.log(getRestaurantsFromTitles(results, printAll(results)));
console.log(getRestaurantsFromTitles(results, ['Sandwiches']));
