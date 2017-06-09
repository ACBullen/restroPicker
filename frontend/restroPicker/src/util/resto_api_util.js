import axios from 'axios';

export const fetchRestos = ({lat, lng}) => {
  return axios({
        method: 'get',
        url: "https://api.yelp.com/v3/businesses/search",
        headers: {"Authorization": "bearer U3LFmhPsqGDeHcf-2uVmQbNj03fI6Wp7gfQti7Ml0YctrPN3PhLwE3GEXT2htv3wJgz90ugTwq0FOap5hJ0rxUNUad81PyqAzmr3yuogEPLQ0jzoVrDEp3UeSkYzWXYx"},
        params: {
          term: "restaurants",
          latitude: lat,
          longitude: lng,
          radius: 1000,
          limit: 10,
          sort_by: "distance"
        }
      }).then((response) => response.json());
};
