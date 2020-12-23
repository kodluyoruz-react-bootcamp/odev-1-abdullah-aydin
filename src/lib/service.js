import axios from 'axios';

async function getData(userID) {
  const ENDPOINT = 'https://jsonplaceholder.typicode.com';
  try {
    const { data: users } = await axios.get(`${ENDPOINT}/users/${userID}`);
	const { data: posts } = await axios.get(`${ENDPOINT}/posts?userId=${userID}`);
	
    console.log(users, ...posts);
  } catch (e) {
    console.error(e.message);
  }
}

export default getData;
