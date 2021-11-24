import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './Input.style';

const Input = ({ onSubmit, title, placeholder, type }) => {
  return (
    <View>
      <Text style={styles.inputTitle}>{title}</Text>
      <TextInput style={styles.input}
        placeholder={`Bir ${placeholder} Giriniz...`}
        onChangeText={onSubmit}
        keyboardType={type}
      />
    </View>
  )
}

export default Input;