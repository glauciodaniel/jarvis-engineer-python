import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Menu = ({ text, color, onPress }) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: color,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Menu;