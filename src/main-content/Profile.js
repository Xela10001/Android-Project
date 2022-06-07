import styles from '../../assets/styles/style';
import React, { useState, useEffect } from 'react';
import { Text, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from 'react-native-button';
import NavigationService from '../NavigationService';
import {getName} from '../../assets/functions'

const Profile = (props) => {

  function navigateLogin() {
    NavigationService.navigate('Log');
  }

  function navigateMyBooks() {
    NavigationService.navigate('MyBooks');
  }

  const [name, setName] = useState('Name');

  function dothat(arg){
    setName(arg);

  }

   useEffect(() => { 
     let n = getName();
     dothat(n);
   });

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View
          style={{
            alignSelf: 'stretch',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <Ionicons
            name="person-circle-outline"
            size={120}
            color="#006600"
            style={{ marginTop: 10 }}
          />
          <Text style={{ fontSize: 30 }}>{name}</Text>
        </View>
        <View
          style={{
            height: 300,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button style={styles.buttonText} containerStyle={styles.button} onPress={() => navigateMyBooks()}>
            My Books
          </Button>
          <Button style={styles.buttonText} containerStyle={styles.button}>
            Whishlist
          </Button>
          <Button style={styles.buttonText} containerStyle={styles.button}>
            Saved
          </Button>
          <Button style={styles.buttonText} containerStyle={styles.button}>
            Bookmarked Reviews
          </Button>
          <Button style={styles.buttonText} containerStyle={styles.button}>
            About me
          </Button>
        </View>
        <View
          style={
            (styles.buttonContainer,
            {
              marginTop: 10,
              marginBottom: 10,
              alignSelf: 'stretch',
              justifyContent: 'center',
              flexDirection: 'row',
            })
          }>
          <View style={{ flex: 2, alignItems: 'center' }}>
            <Button style={{ flex: 2, alignItems: 'center' }}>
              <Ionicons name="cog-outline" size={90} color="#006600" />
            </Button>
          </View>
          <View style={{ flex: 2, alignItems: 'center' }}>
            <Button
              style={{ flex: 2, alignItems: 'center' }}
              onPress={() => navigateLogin()}>
              <Ionicons name="log-out-outline" size={90} color="#006600" />
            </Button>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Profile;
