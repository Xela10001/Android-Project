import styles from '../../assets/styles/style';
import React, { useState, useEffect } from 'react';

import {
  KeyboardAvoidingView,
  Text,
  ScrollView,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Button from 'react-native-button';
import NavigationService from '../NavigationService';
import { Ionicons } from '@expo/vector-icons';
import { books, booksBought } from '../Database.js';

const MyBooks = (props) => {
  function createRows() {
    let rows = [];
    let books = [];

    for (let i = 0; i < booksBought.length; i++) {
      books.push(BookEntry(booksBought[i]));
      if (books.length == 3) {
        rows.push(BookRow(books));
        books = [];
      }
    }

    if (books.length > 0) {
      rows.push(BookRow(books));
    }

    return rows;
  }

  if (booksBought.length == 0) {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={{ alignItems: 'center', marginBottom: 40 }}>
          <Ionicons name="book-outline" size={120} color="#006600" />
          <Text style={{ color: '#006600', fontSize: 40 ,textAlign:"center"}}>
            No books were found
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }

  return (
    <KeyboardAvoidingView
      sytle={{ flex: 1, paddingHorizontal: 16, backgroundColor: 'white' }}>
      <Text
        style={{
          color: '#006600',
          fontSize: 40,
          marginTop: 20,
          marginLeft: 16,
        }}>
        My books
      </Text>
      <ScrollView
        style={{
          backgroundColor: '#e6fff5',
          marginBottom: 100,
          borderRadius: 10,
        }}>
        {createRows()}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const isEmpty = (array) => {
  var count = 0;
  array.forEach(function () {
    count++;
  });
  return count == 0;
};

const BookRow = (booktrio) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 7,
        marginVertical: 20,
      }}>
      {booktrio}
    </View>
  );
};

const BookEntry = (book) => {
  const title = book.title;
  function navigateReadScreen() {
    NavigationService.navigate('ReadScreen', { 'book': book });
  }

  const bookCoverSizeMultiplier = 11;
  return (
    <TouchableWithoutFeedback onPress={() => navigateReadScreen()}>
      <View
        style={{
          flex: 2,
          backgroundColor: 'white',
          borderColor: '#006600',
          borderWidth: 1,
          alignSelf: 'flex-start',
          marginHorizontal: 10,
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Image
          style={{
            flex: 1,
            height: 176,
            width: 99,
            marginTop: 8,
          }}
          source={book.bookCover}
        />

        <Text
          style={{
            color: '#006600',
            textAlign: 'center',
            fontSize: 20,
            maxWidth: 99,
          }}
          numberOfLines={2}>
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MyBooks;
