const apiKey = '0c32a06c5a8397f25b25595ffa1ceb1b';
const proxy = 'https://cors-anywhere.herokuapp.com/';

const fetchCall = async (lat, long) => {
  const request = await fetch(`${proxy}https://api.darksky.net/forecast/${apiKey}/${lat},${long}`)
  const data = await request.json();
  console.log(data);
  return data;
}

export default fetchCall;

  // const data = {
  //   currently: {
  //     summary: 'nice',
  //     temperature: '33'

  //   }
  // }