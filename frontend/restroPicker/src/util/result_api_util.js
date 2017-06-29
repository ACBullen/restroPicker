export const fetchResult = groupId => {
  return fetch(`https://resto-pick.herokuapp.com/api/results/${groupId}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json());
};
