// Home.js

import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  AsyncStorage,
  KeyboardAvoidingView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from 'react-native-button';
import styles from '../../assets/styles/style';

const Profile = () => {
  const [name, setName] = useState('Name-Placeholder');

  const STORAGE_KEY = 'name';

  const load = async () => {
    try {
      const name = await AsyncStorage.getItem(STORAGE_KEY);

      if (name !== null) {
        setName(name);
      }
    } catch (e) {
      console.error('Failed to load .');
    }
  };

  const save = async (name) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, name);

      setName(name);
    } catch (e) {
      console.error('Failed to save name.');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={{ color: '#006600', fontSize: 40 }}>{name}</Text>
      <TextInput
        placeholderTextColor="#505050"
        style={styles.input}
        onChangeText={(value) => save(value)}
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => load()}
          style={styles.buttonText}
          containerStyle={styles.button}>
          Load Name
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Profile;
