import getData from './lib/service';

getData(1)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
