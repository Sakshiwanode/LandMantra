import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }:any) => {
  return (
    <View style={styles.container}>
      {/* Top Image Section */}
      <View style={styles.topSection}>
        <Image
          source={require('../images/front.jpg')} // Replace with your image path
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Text style={styles.mainHeading}>LandMantra</Text>
        <Text style={styles.subHeading}>Login</Text>
        <Text style={styles.description}>Continue to app</Text>

        {/* Phone Number Input */}
        <TextInput
          style={styles.input}
          placeholder="+91 Phone Number"
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          keyboardType="phone-pad"
        />

        {/* Forget Account */}
        <TouchableOpacity onPress={() => console.log('Forgot Account')}>
          <Text style={styles.forgetText}>Forgot Account?</Text>
        </TouchableOpacity>

        {/* Next Button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('OTPVerify')} // Replace 'NextScreen' with your target screen name
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    flex: 0.6, // 60% for the image section
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007BFF', // Blue Theme
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    flex: 0.4, // 40% for the form section
    backgroundColor: 'rgba(0, 123, 255, 0.9)', // Semi-transparent Blue
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  mainHeading: {
    fontSize: 32, // Increased size
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    paddingLeft: 10, // Left padding
  },
  subHeading: {
    fontSize: 24, // Slightly larger size
    color: '#fff',
    marginBottom: 10,
    paddingLeft: 10, // Left padding
  },
  description: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 20,
    paddingLeft: 10, // Align with headings
  },
  input: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    color: '#fff',
    marginBottom: 15,
    alignSelf: 'center',
  },
  forgetText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'right',
    width: '90%',
    marginBottom: 20,
    alignSelf: 'center',
  },
  nextButton: {
    width: '90%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;