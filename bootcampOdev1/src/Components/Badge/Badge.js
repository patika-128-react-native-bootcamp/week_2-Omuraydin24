import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Badge.style"

const Filter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Artan Fiyat
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Azalan Fiyat
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Tarih
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Filter;