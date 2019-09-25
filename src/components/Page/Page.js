import React, {useState, useEffect} from 'react';
import fetchCall from '../fetchCall';

const Page = () => {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [results, setResults] = useState();
  const [isLoaded, setLoaded] = useState(false)
  useEffect(() => {
    debugger;
    window.navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      const {latitude, longitude} = position.coords;
      setLat(latitude);
      setLong(longitude);
      if (latitude && longitude) {
        fetchCall(latitude, longitude)
          .then(res => {
            setLoaded(true);
            setResults(res);
          })
          .catch(() => {
            setResults('error');
          })
      } else {
        setResults('error');
      }
    })
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {/* Page */}
      {/* {/* {!results && <div> Loading... </div>}
      {results === 'error' && <div> Unavailable! </div>} */}
      {/* {results && isLoaded && <div> lat: {lat} long: {long} </div>} */}

    </div>
  )
}

export default Page