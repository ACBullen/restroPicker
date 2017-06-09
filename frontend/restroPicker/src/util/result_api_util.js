export const fetchResult = groupId => {
  return fetch(`http://localhost:3000/api/results/${groupId}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json());
};
