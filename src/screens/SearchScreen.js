import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [ term, setTerm ]  = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result =>{
      let tmp = result.name
      console.log(result.name, result.price)
      if (tmp.includes("Peri")){
        console.log(result)
      }
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term = {term}
        onTermChange = {(newTerm) => setTerm(newTerm)}
        onTermSubmit = {() => searchApi(term)}
      />
      { errorMessage ? <Text>{errorMessage}</Text> : null }
      <Text> we have found {results.length} results</Text>
      <ResultsList results = {filterResultsByPrice('$')} title = "Cost Effective" />
      <ResultsList results = {filterResultsByPrice('$$')} title = "Bit Pricer" />
      <ResultsList results = {filterResultsByPrice('$$$')} title = "Big Spender" />
      <ResultsList results = {filterResultsByPrice('$$$$')} title = "Biggest Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
