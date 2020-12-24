import axios from 'axios';

const ENDPOINT = 'https://jsonplaceholder.typicode.com';

async function getData(userID) {
  try {
    const { data: users } = await axios.get(`${ENDPOINT}/users/${userID}`);
    const { data: posts } = await axios.get(`${ENDPOINT}/posts?userId=${userID}`);

    return { users, ...posts };

  } catch (e) {
    console.error(e.message);
  }
}

export default getData;
