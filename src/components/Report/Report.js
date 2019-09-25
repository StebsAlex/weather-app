import React, {useState} from 'react';

const Report = (props) => {
  const {results, isLoaded, lat, long} = props;

  return (
    <div>
      {!results && <div> Loading... </div>}
      {results === 'error' && <div> Unavailable! </div>}
      {results && isLoaded &&
        <div>
          <p>lat: {lat}</p>
          <p>long: {long}</p>
          <div>
            <p> Temperature: {results.currently.temperature} </p>
            <p> Summary: {results.currently.summary} </p>
          </div>
        </div>
      }
    </div>
  )
}

export default Report;