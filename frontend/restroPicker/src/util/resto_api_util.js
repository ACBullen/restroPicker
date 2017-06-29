export const populateRestos = restaurants => {
  return fetch('https://resto-pick.herokuapp.com/api/restaurants', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      restaurants
    })
  }).then((response) => response.json());
};

export const populateRankings = rankings =>{
  return fetch('https://resto-pick.herokuapp.com/api/rankings', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      rankings
    })
  }).then((response) => response.json());
};
