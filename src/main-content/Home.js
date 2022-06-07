// Home.js

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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { books, booksBought } from '../Database.js';
import NavigationService from '../NavigationService';

const { width } = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const bookCoverSizeMultiplier = 13;
var x = 2;

const Home = ({ navigation }) => {
  // dummy state so we can force rerender
  const [a, setA] = useState(0);

  useEffect(() => {
    const navFocusListener = navigation.addListener('didFocus', () => {
      // call increment() when switch to this tab
      increment();
    });

    return () => {
      navFocusListener.remove();
    };
  }, []);

  function increment() {
    x = x + 1;
    // setA will force rerender
    setA(x);
  }

  return (
    <View style={styles.verticalRectangle}>
      {a == 2 ? <View></View> : null}
      <Text
        style={{
          fontSize: 22,
          color: 'black',
          top: 8,
          left: 8,
          position: 'absolute',
        }}>
        Continue Reading
      </Text>
      <ScrollView
        horizontal={true}
        style={{
          position: 'absolute',
          top: 38,
          left: 8,
          flexDirection: 'row',
          flex: 1,
        }}>
        <BoughtBooksEntries />
      </ScrollView>
      <Text
        style={{
          fontSize: 22,
          color: 'black',
          top: 258,
          left: 8,
          position: 'absolute',
        }}>
        Recommended
      </Text>
      <ScrollView
        horizontal={true}
        style={{
          position: 'absolute',
          top: 288,
          left: 8,
          flexDirection: 'row',
          flex: 1,
        }}>
        <BookEntries />
      </ScrollView>
      <Text
        style={{
          fontSize: 22,
          color: 'black',
          top: 508,
          left: 8,
          position: 'absolute',
        }}>
        On Sale
      </Text>
      <ScrollView
        horizontal={true}
        style={{
          position: 'absolute',
          top: 538,
          left: 8,
          flexDirection: 'row',
          flex: 1,
        }}>
        <BookEntries />
      </ScrollView>
    </View>
  );
};

var bookVar = false;

const BookEntries = (screen) => {
  var entries = [];
  var count = 0;
  books.forEach(function (book) {
    if (!ifBookBought(book)) {
      entries.push(BookEntry(book, 'BookScreen'));
      count++;
      if (count == 4 && !bookVar) {
        entries.pop();
        count--;
      } else if (count < 7 && bookVar) {
        entries.pop();
      }
    }
  });
  bookVar = !bookVar;
  return entries;
};

const BoughtBooksEntries = () => {
  if (isEmpty(booksBought)) {
    return (
      <Text
        style={{
          fontSize: 22,
          color: 'black',
          top: 123,
          left: 50,
          position: 'absolute',
        }}>
        You do not own any books yet!
      </Text>
    );
  }
  var entries = [];
  booksBought.forEach(function (book) {
    entries.push(BookEntry(book, 'ReadScreen'));
  });
  return entries;
};

const isEmpty = (array) => {
  var count = 0;
  array.forEach(function () {
    count++;
  });
  return count == 0;
};

const BookEntry = (book, screen) => {
  return (
    <TouchableOpacity
      onPress={() => NavigationService.navigate(screen, { 'book': book })}>
      <View style={{ height: 16 * bookCoverSizeMultiplier, padding: 10 }}>
        <Image
          style={{
            height: '100%',
            width: 9 * bookCoverSizeMultiplier,
          }}
          source={book.bookCover}
        />
      </View>
    </TouchableOpacity>
  );
};

// If the book has been bought, it will return null. Else, it returns the book.
const ifBookBought = (book) => {
  var boughtBook = false;
  booksBought.forEach(function (bookCompared) {
    if (bookCompared.title == book.title) {
      boughtBook = true;
    }
  });
  return boughtBook;
};

const styles = StyleSheet.create({
  verticalRectangle: {
    width: windowWidth,
    height: 10000,
    backgroundColor: '#ffffff', // lower = darker
    //position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
  },
});

export default Home;
