import React, {useState, useEffect} from 'react';
import styles from './Form.module.css';

const Form = ({onSubmit, onLocation}) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
  }

  const handleLocation = (e) => {
    e.preventDefault();
    onLocation();
  }

  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col col-xs-5 col-xs-offset-1">
          <label>
            Weather for the current location!
          </label>
          <button className={styles.button} onClick={handleLocation}> Get weather </button>
        </div>
        <div className="col col-xs-5 col-xs-offset-1">
          <form onSubmit={handleSubmit}>
            <label>
              Please enter a city, town or a postcode:
            <input type="text" name="name" onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  )

}
export default Form;