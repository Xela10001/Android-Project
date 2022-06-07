//Register

// AsyncStorage
//https://blog.jscrambler.com/how-to-use-react-native-asyncstorage

import styles from '../../assets/styles/style';
import React, { Component, useState, AsyncStorage } from 'react';
import {
  KeyboardAvoidingView,
  TextInput,
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import Button from 'react-native-button';
import Home from '../main-content/Home';
import { setlog, setNm } from '../../assets/functions';

String.prototype.hashCode = function () {
  var hash = 0,
    i,
    chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

const Register = (props) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

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

  function storeUser(){

    const client = new Object();
    client.name = name;
    client.email = user;
    client.password = password;

    let users = readData('Users');

    if(users == null){
      users = [client]
    } else {
      users.push(client)
    }

    writeData('users',JSON.stringify(users));
    props.navigation.navigate('Homepage');
    
  }

  function setlogst(){
    setlog(1);
    setNm(name);
    props.navigation.navigate('Log');
    
    
  }


  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={{ color: '#006600', fontSize: 32 ,textAlign:"center"}}>
        Welcome to Book World
      </Text>

      <View style={{ paddingTop: 70 }}>
        <Text>Name</Text>
        <TextInput
          placeholderTextColor="#505050"
          style={styles.input}
          onChangeText={(value) => setName(value)}
        />
      </View>
      <View style={{ paddingTop: 10 }}>
        <Text>Email</Text>
        <TextInput
          placeholderTextColor="#505050"
          style={styles.input}
          onChangeText={(value) => setUser(value)}
        />
      </View>
      <View style={{ paddingTop: 10, paddingBottom: 70 }}>
        <Text>Password</Text>
        <TextInput
          placeholderTextColor="#505050"
          style={styles.input}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button

          onPress={() => setlogst()}
          style={styles.buttonText}
          containerStyle={styles.button}>
          Register
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
