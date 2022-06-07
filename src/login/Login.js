//Login
//https://blog.jscrambler.com/how-to-use-react-native-asyncstorage
import styles from '../../assets/styles/style';
import React, { Component, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import {
  KeyboardAvoidingView,
  TextInput,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getlog } from '../../assets/functions';

import Button from 'react-native-button';
import Home from '../main-content/Home';

const LogIn = (props) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');


  async function readData(key) {
    let value;
    try {
      value = await AsyncStorage.getItem(key);
      // can be null
    } catch (e) {
      alert('Failed to retrive item');
      value = null;
    }

    return value;
  }

  async function writeData(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      alert('Failed to store item');
    }
  }

  function saveCurrentUser(email) {
    setUser(email);
    writeData('CurrentUser', email);
  }

  function isUser(email, pass): boolean {
    let users = readData('Users');

    if (users == null) {
      return false;
    }

    users = JSON.parse(users);

    for (let i = 0; i < users.length; i++) {
      if (email == users[i].email) {
        if (pass == users[i].password) {
          return true;
        }
        alert('Email already in use!');
        return false;
      }
    }
  }

  function checklogst() {
    if (getlog() == 1) {
      props.navigation.navigate('Home');
    } else {
      alert('User does not exist !');
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{ alignItems: 'center', marginBottom: 40 }}>
        <Ionicons name="book-outline" size={120} color="#006600" />
        <Text style={{ color: '#006600', fontSize: 40 }}>Book World</Text>
      </View>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#505050"
        style={styles.input}
        onChangeText={(value) => saveCurrentUser(value)}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#505050"
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
      />
      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonText}
          containerStyle={styles.button}
          onPress={() => checklogst()}>
          Log in
        </Button>
      </View>
      <Text style={{ textAlign: 'center', fontSize: 20 }}>
        Don't have an account?{' '}
        <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Res')}>
        <Text style={{ color: '#006600', fontSize: 20, textAlign: 'center' }}>
          Register
        </Text>
        </TouchableWithoutFeedback>
      </Text>
    </KeyboardAvoidingView>
  );
};

export default LogIn;

