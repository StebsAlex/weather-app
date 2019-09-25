import React, {useState} from 'react';
import Form from '../Form/Form';
import Report from '../Report/Report';
import fetchCall from '../fetchCall';
import fetchLocation from '../fetchLocation';

const Weather = () => {
  const [results, setResults] = useState();
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [isLoaded, setLoaded] = useState(false)


  const handleSubmit = search => {
    fetchLocation(search)
      .then(res => {
        console.log(res);
        setLat(res.geometry.lat);
        setLong(res.geometry.lng);
        getWeather(res.geometry.lat, res.geometry.lng)
      })
  };

  const handleLocation = e => {
    window.navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      const {latitude, longitude} = position.coords;
      setLat(latitude);
      setLong(longitude);
      if (latitude && longitude) {
        getWeather(latitude, longitude)
      }
    })
  }
  const getWeather = (lat, long) => {
    if (lat && long) {
      fetchCall(lat, long)
        .then(res => {
          setResults(res);
          setLoaded(true)
        })
        .catch(() => {
          setResults('error');
        })
    } else {
      setResults('error');
    }
  }
  return (
    <>
      <Form onSubmit={handleSubmit} onLocation={handleLocation} />

      <Report results={results} isLoaded={isLoaded} lat={lat} long={long} />
    </>
  )

}
export default Weather;