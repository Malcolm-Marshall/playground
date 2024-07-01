// Find the country with the highest population programmatically
// Use foreign key ids to join data together and determine the country
// with the highest population based on the city/population data available

const highestPopulation = (pop, city, country) => {

  let amounts = {};

  for (let i = 0; i < city.length; i++) {
    if (!amounts[city.country_id]) {
      amounts[city.country_id] = 0;
    }
  }

  // for (let j = 0; j < country.length; j++) {
  //   for (let k = 0; k < city.length; k++) {
  //     for (let m = 0; m < pop.length; m++) {
  //       if (country[j].id === city[k].country_id && pop[m].city_id === city[k].id) {
  //         amounts[parseInt(country[j].id)] += pop[m].amount
  //       }
  //     }
  //   }
  // }

  console.log(amounts)
};

const countries = [
  { id: 1, name: 'USA' },
  { id: 2, name: 'England' },
  { id: 3, name: 'Russia' },
  { id: 4, name: 'New Zealand' }
];

const cities = [
  { id: 1, country_id: 1, name: 'New York' },
  { id: 2, country_id: 1, name: 'Seattle' },
  { id: 3, country_id: 1, name: 'Los Angeles' },
  { id: 4, country_id: 1, name: 'Houston' },
  { id: 5, country_id: 1, name: 'San Diego' },
  { id: 6, country_id: 2, name: 'London' },
  { id: 7, country_id: 2, name: 'Manchester' },
  { id: 8, country_id: 3, name: 'Moscow' },
  { id: 9, country_id: 3, name: 'Novosibirsk' },
  { id: 10, country_id: 4, name: 'Auckland' },
  { id: 11, country_id: 4, name: 'Wellington' }
];

const populations = [
  { id: 1, city_id: 1, amount: 8419000 },
  { id: 2, city_id: 2, amount: 724305 },
  { id: 3, city_id: 3, amount: 3967000 },
  { id: 4, city_id: 4, amount: 2310000 },
  { id: 5, city_id: 5, amount: 1410000 },
  { id: 6, city_id: 6, amount: 8982000 },
  { id: 7, city_id: 7, amount: 553230 },
  { id: 8, city_id: 8, amount: 11920000 },
  { id: 9, city_id: 9, amount: 1511000 },
  { id: 10, city_id: 10, amount: 1657000 },
  { id: 11, city_id: 11, amount: 212700 }
];

highestPopulation(populations, cities, countries);

console.log('countries.length', countries.length);
console.log('cities.length', cities.length);
console.log('populations.length!', populations.length);