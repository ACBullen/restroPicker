export const populateRestos = data => {
  return fetch('http://localhost:3000/api/restaurants', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      data
    )
  }).then((response) => response.json());
};
