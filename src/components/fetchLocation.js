const apikey = '538d132ce69f4ce3a5f177f3e8c2b05d';
const proxy = 'https://cors-anywhere.herokuapp.com/';


const fetchLocation = async (search) => {
  const request = await fetch(`${proxy}https://api.opencagedata.com/geocode/v1/json?q=${search}&key=${apikey}`)
  const data = await request.json();
  const results = data.results[0]
  return results;
}

export default fetchLocation;