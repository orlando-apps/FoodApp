import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style = {styles.backgroundStyle}>

      <Feather name = "search" style = {styles.iconStyle} />
      <TextInput
        autoCaptalize = 'none'
        autoCorrect = {false}
        style = {styles.inputStyle}
        placeholder = 'search'
        value = {term}
        onChangeText = {newTerm => onTermChange(newTerm)}
        onEndEditing = {() => onTermSubmit()}
      />
    </View >
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
