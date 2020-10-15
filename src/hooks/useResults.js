import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

// import {API_KEY} from '@env'


// console.log("yo", API_KEY)

export default () =>{
  const [ results, setResults ]  = useState([]);
  const [ errorMessage, setErrorMessage ]  = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong')
    }
  };

  useEffect(() => {
    searchApi('Italian')
  }, [])

  return [searchApi, results, errorMessage];
};