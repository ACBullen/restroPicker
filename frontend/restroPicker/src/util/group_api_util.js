
  export const createGroup = user => {
  return fetch('http://localhost:3000/api/groups', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      user
    )
  }).then((response) => response.json());
};
