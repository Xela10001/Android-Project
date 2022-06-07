// BookScreen.js
// Icons: https://ionic.io/ionicons
// Dropdown: https://reactnativeexample.com/a-highly-customized-dropdown-select-picker-menu-for-react-native/
// Dropdown github: https://github.com/AdelRedaa97/react-native-select-dropdown

import { Ionicons } from '@expo/vector-icons';
import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  Text,
  Button,
  TextInput,
  BackHandler,
} from 'react-native';
import { booksBought } from '../Database.js';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NavigationService from '../NavigationService';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
var book;

const BookScreen = (props) => {
  book = props.navigation.getParam('book');
  const bookCoverSizeMultiplier = 16;
  var categoriesStr = '';
  book.categories.sort().forEach(function (category) {
    categoriesStr += category;
    if (category != book.categories[book.categories.length - 1])
      categoriesStr += ', ';
  });
  const buyNowButtonWidth = 120;
  const [showPayment, setShowPayment] = useState(false);

  function togglePayment() {
    setShowPayment(!showPayment);
  }

  function confirmPurchase() {
    booksBought.push(book);
    setShowPayment(!showPayment);
    showModalTemporarily();
  }

  const [showModal, setShowModal] = useState(false);
  function showModalTemporarily() {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 10000);
  }

  return (
    <View style={{ top: 50 }}>
      <Image
        source={book.bookCover}
        style={{
          left: 10,
          width: 9 * bookCoverSizeMultiplier,
          height: 16 * bookCoverSizeMultiplier,
        }}
      />
      <View
        style={{
          position: 'absolute',
          width: windowWidth - 9 * bookCoverSizeMultiplier - 20,
          left: 9 * bookCoverSizeMultiplier + 20,
        }}>
        <Text style={{ fontSize: 14 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare
          lectus sit amet est placerat in egestas erat imperdiet. Morbi
          tristique senectus et netus. Ipsum dolor sit amet consectetur
          adipiscing elit duis tristique sollicitudin.
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          width: buyNowButtonWidth,
          height: 150,
          top: 200,
          right:
            windowWidth / 2 -
            buyNowButtonWidth / 2 -
            (9 * bookCoverSizeMultiplier) / 2 -
            5,
        }}>
        {!booksBought.includes(book) ? (
          <Button
            title="Buy now"
            color="#00C000"
            onPress={() => togglePayment()}
          />
        ) : (
          <Button title="Bought" color="#003F00" />
        )}
      </View>
      <Text style={{ fontSize: 16, left: 8, top: 10 }}>
        Title: {book.title}
        {'\n'}
        Author: {book.author}
        {'\n'}
        Category: {categoriesStr}
        {'\n'}
        Edition: {book.edition}
        {'\n'}
        Release Year: {book.yearReleased}
        {'\n'}
        Pages: {book.pages}
        {'\n'}
        Price: {book.price}
      </Text>
      <View style={{ top: 30 }}>
        <Reviews bookArg={book} />
      </View>
      {showPayment ? (
        <Payment
          togglePayment={togglePayment}
          confirmPurchase={confirmPurchase}
        />
      ) : null}
      {showModal ? (
        <View
          style={{
            zIndex: 20,
            width: 320,
            height: 50,
            position: 'absolute',
            top: 25,
            left: windowWidth / 2 - 320 / 2,
            backgroundColor: '#00c000',
            borderRadius: 20,
          }}>
          <Text
            style={{
              top: 2,
              fontSize: 16,
              color: '#fff',
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            Book sucessfully bought!{'\n'}You can find it in your My Books page.
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default BookScreen;

const Reviews = ({ bookArg }) => {
  const fontSize = 14;
  const nameFontSize = 15;
  var entries = [];
  bookArg.reviewsData.forEach(function (reviewData) {
    entries.push(
      <View style={{ left: 8, width: windowWidth - 8 - 5 }}>
        <Text style={{ fontSize: nameFontSize }}>
          {reviewData.isSpecialist ? (
            <Text style={{ color: '#007F00', fontSize: nameFontSize }}>
              [Specialist]{' '}
            </Text>
          ) : null}
          <Text style={{ fontSize: nameFontSize, fontWeight: 'bold' }}>
            {reviewData.writerName}
          </Text>
        </Text>
        <Text style={{ fontSize: fontSize }}>{reviewData.review}</Text>
      </View>
    );
    entries.push(<View style={{ height: 15 }}></View>);
  });

  entries.pop(); // remove last element (extra spacing)
  return entries;
};

var chosenMethod = 'Credit Card';
function Payment({ togglePayment, confirmPurchase }) {
  const [name, onChangeName] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [CVV, onChangeCVV] = React.useState(null);

  return (
    <View style={styles.verticalRectangle}>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          top: 8,
          left: 8,
          position: 'absolute',
        }}>
        Method:
      </Text>
      <View style={{ position: 'absolute', top: 8, right: 50 }}>
        <PaymentMethodDropdown />
      </View>
      {chosenMethod == 'Credit Card' ? (
        <View>
          <Ionicons
            name="card"
            size={32}
            color="#ffff00"
            style={{ right: 10, top: 6, position: 'absolute' }}
          />
          <View style={{ top: 50 }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                top: 0,
                left: 8,
                position: 'absolute',
              }}>
              Name:
            </Text>
            <TextInput
              onChangeText={onChangeName}
              value={name}
              style={{
                position: 'absolute',
                width: 170,
                height: 32,
                right: 6,
                color: '#000',
                backgroundColor: '#fff',
                fontSize: 16,
              }}
              placeholder="Name Surname"
            />
          </View>
          <View style={{ top: 100 }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                top: 0,
                left: 8,
                position: 'absolute',
              }}>
              CVV:
            </Text>
            <TextInput
              onChangeText={onChangeNumber}
              value={number}
              style={{
                position: 'absolute',
                width: 170,
                height: 32,
                right: 6,
                color: '#000',
                backgroundColor: '#fff',
                fontSize: 16,
              }}
              placeholder="123"
              keyboardType="numeric"
            />
          </View>
          <View style={{ top: 150 }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                top: 0,
                left: 8,
                position: 'absolute',
              }}>
              Card number:
            </Text>
            <TextInput
              onChangeText={onChangeCVV}
              value={CVV}
              style={{
                position: 'absolute',
                width: 170,
                height: 32,
                right: 6,
                color: '#000',
                backgroundColor: '#fff',
                fontSize: 16,
              }}
              placeholder="1234-5678-1234-5678"
              keyboardType="numeric"
            />
          </View>
          <View
            style={{
              position: 'absolute',
              right: 20,
              top: 430,
              width: 165,
              height: 50,
            }}>
            <Button
              uppercase={false}
              title="Confirm purchase"
              color="#00C000"
              onPress={confirmPurchase}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              left: 20,
              top: 430,
              width: 165 * 0.6,
              height: 50,
            }}>
            <Button
              title="Cancel"
              color="#ff0000"
              onPress={togglePayment}
              uppercase={false}
            />
          </View>
        </View>
      ) : null}
    </View>
  );
}

const PaymentMethodDropdown = () => {
  const methods = ['Credit Card'];
  return (
    <SelectDropdown
      data={methods}
      defaultValueByIndex={0}
      defaultValue={chosenMethod}
      onSelect={(selectedItem, index) => {
        chosenMethod = selectedItem;
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
  );
};

const styles = StyleSheet.create({
  verticalRectangle: {
    width: 325,
    height: 325 * 1.5,
    backgroundColor: '#333', // lower = darker
    position: 'absolute',
    zIndex: 10,
    top: (windowHeight - 325 * 1.5) / 2 - 40,
    left: (windowWidth - 325) / 2,
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
