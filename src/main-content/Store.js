// Store.js
// Search bar: https://callstack.github.io/react-native-paper/searchbar.html
// Categories dropdown: https://reactnativeexample.com/a-highly-customized-dropdown-select-picker-menu-for-react-native/
// Categories dropdown github: https://github.com/AdelRedaa97/react-native-select-dropdown

import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { books } from '../Database.js';
import NavigationService from '../NavigationService';

const { width } = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
var globalSearchQuery = '';
var chosenCategory = 'All';
const categories = [
  'All',
  'Adventure',
  'Drama',
  'Fantasy',
  'Horror',
  'Novel',
  'Mystery',
  'Romance',
  'Science Fiction',
];

const Store = () => {
  const [bookScreenShown, setBookScreenShown] = useState(false);
  const [filtersShown, setFiltersShown] = useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => {
    globalSearchQuery = searchQuery;
    setSearchQuery(query);
  };
  const [a, setA] = useState(0);
  const [minPrice, onChangeMinPrice] = useState('');
  const [maxPrice, onChangeMaxPrice] = useState('');
  const bookCoverSizeMultiplier = 11;

  useEffect(() => {
    globalSearchQuery = searchQuery;
    setA(a + 1);
  }, [searchQuery]);

  function onCategoryChosen(event) {
    setFiltersShown(!filtersShown);
  }

  return (
    <View>
      {filtersShown ? (
        <View style={styles.verticalRectangle}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              top: 8,
              left: 8,
              position: 'absolute',
            }}>
            Category:
          </Text>
          <View style={{ position: 'absolute', top: 8, right: 8 }}>
            <SelectDropdown
              data={categories}
              defaultValueByIndex={0}
              defaultValue={chosenCategory}
              onSelect={(selectedItem, index) => {
                chosenCategory = selectedItem;
                setA(a + 1);
              }}
              defaultButtonText={'Select country'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={dropdownStyles.dropdown1BtnStyle}
              buttonTextStyle={dropdownStyles.dropdown1BtnTxtStyle}
              renderDropdownIcon={(isOpened) => {
                return (
                  <FontAwesome
                    name={isOpened ? 'chevron-up' : 'chevron-down'}
                    color={'#444'}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={dropdownStyles.dropdown1DropdownStyle}
              rowStyle={dropdownStyles.dropdown1RowStyle}
              rowTextStyle={dropdownStyles.dropdown1RowTxtStyle}
            />
          </View>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              top: 58,
              left: 8,
              position: 'absolute',
            }}>
            Price:
          </Text>
          <TextInput
            style={{
              fontSize: 20,
              color: 'black',
              top: 58,
              left: 110,
              position: 'absolute',
              width: 60,
            }}
            backgroundColor="white"
            onChangeText={onChangeMinPrice}
            value={minPrice}
            placeholder="0"
            keyboardType="numeric"
          />
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              top: 55,
              left: 177,
              position: 'absolute',
            }}>
            -
          </Text>
          <TextInput
            style={{
              fontSize: 20,
              color: 'black',
              top: 58,
              left: 110 + 80,
              position: 'absolute',
              width: 60,
            }}
            backgroundColor="white"
            onChangeText={onChangeMaxPrice}
            value={maxPrice}
            placeholder="100"
            keyboardType="numeric"
          />
        </View>
      ) : null}
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          position: 'absolute',
          width: 300,
          height: 40,
          top: 10,
          left: 5,
        }}
      />
      <TouchableOpacity
        onPress={() => {
          setFiltersShown(!filtersShown);
        }}
        style={{
          position: 'absolute',
          top: 2,
          right: 5,
          width: 55,
          height: 55,
        }}>
        <Image
          source={require('../../assets/filter-icon.jpg')}
          style={{ flex: 1, width: undefined, height: undefined }}
        />
      </TouchableOpacity>

      <ScrollView
        style={{
          //position: 'absolute',
          top: 70,
          left: 5,
        }}
        contentContainerStyle={{ paddingBottom: 80 }}>
        <BookEntries />
      </ScrollView>

      {/*
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#006600', fontSize: 40 }}>Store!</Text>
        <Ionicons name="cart" size={80} color="#006600" />
      </View>
      */}
    </View>
  );
};

export default Store;
const BookEntries = () => {
  var entries = [];
  books.forEach(function (book) {
    if (chosenCategory == 'All' || book.categories.includes(chosenCategory)) {
      if (book.title.toLowerCase().includes(globalSearchQuery.toLowerCase())) {
        entries.push(BookEntry(book));
        entries.push(<View style={{ height: 10 }}></View>);
      }
    }
  });
  entries.pop(); // remove last element (extra spacing)
  return entries;
};

const BookEntry = (book) => {
  const bookCoverSizeMultiplier = 11;
  var categoriesStr = '';
  book.categories.sort().forEach(function (category) {
    categoriesStr += category;
    if (category != book.categories[book.categories.length - 1])
      categoriesStr += ', ';
  });

  return (
    <TouchableOpacity
      onPress={() => NavigationService.navigate('BookScreen', { book: book })}>
      <View style={{ height: 16 * bookCoverSizeMultiplier, width: width }}>
        <Image
          style={{
            flex: 1,
            height: '100%',
            width: 9 * bookCoverSizeMultiplier,
          }}
          source={book.bookCover}
        />
        <View
          style={{
            position: 'absolute',
            flex: 1,
            height: '100%',
            left: 9 * bookCoverSizeMultiplier + 5,
            width: width - 9 * bookCoverSizeMultiplier - 5 - 5,
          }}>
          <Text numberOfLines={1} style={{ fontSize: 17 }}>
            {book.title}
          </Text>
          <Text numberOfLines={1} style={{ fontSize: 17 }}>
            {book.author}
          </Text>
          <Text numberOfLines={1} style={{ fontSize: 17 }}>
            {categoriesStr}
          </Text>
          <Text numberOfLines={1} style={{ fontSize: 17 }}>
            {book.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  verticalRectangle: {
    width: 300,
    height: 450,
    backgroundColor: '#333', // lower = darker
    position: 'absolute',
    zIndex: 2,
    top: (windowHeight - 450) / 2 - 40,
    left: (windowWidth - 300) / 2,
  },
});

const dropdownStyles = StyleSheet.create({
  dropdown1BtnStyle: {
    width: 185,
    height: 35,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
  },
  dropdown1BtnTxtStyle: { color: '#000', textAlign: 'left', fontSize: 20 },
  dropdown1DropdownStyle: { marginTop: -40, backgroundColor: '#fff' },
  dropdown1RowStyle: {
    backgroundColor: '#fff',
    borderBottomColor: '#C5C5C5',
  },
  dropdown1RowTxtStyle: { color: '#000', textAlign: 'left', fontSize: 20 },
});
