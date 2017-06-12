  export const createGroup = user => {
  return fetch('https://resto-pick.herokuapp.com/api/groups', {
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
  return fetch('https://resto-pick.herokuapp.com/api/users', {
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
  return fetch(`https://resto-pick.herokuapp.com/api/groups/${data.group_id}/users/${data.id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then((response) => response.json());
};
