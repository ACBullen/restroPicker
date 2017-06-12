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

export const joinGroup = user => {
  return fetch('http://localhost:3000/api/users', {
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

export const fetchGroup = data => {
  return fetch(`http://localhost:3000/api/groups/${data.group_id}/users/${data.id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then((response) => response.json());
};
