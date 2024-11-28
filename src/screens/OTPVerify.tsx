import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';

const OTPScreen = ({ navigation }: any) => {
  const [otp, setOtp] = useState(['4', '5', '', '']); // Initial state for OTP inputs

  return (
    <View style={styles.container}>
      {/* Hide Status Bar */}
      <StatusBar hidden={true} />

      {/* Top Image Section */}
      <View style={styles.topSection}>
        <Image
          source={require('../images/logo.webp')} // Replace with your image path
          style={styles.image}
          resizeMode="contain" // Ensures the image is properly scaled
        />
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Heading */}
        <Text style={styles.mainHeading}>OTP Verification</Text>
        <Text style={styles.subHeading}>Enter the OTP sent to +91 111 333 222</Text>

        {/* OTP Input */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={[styles.otpInput, digit ? styles.filledInput : styles.emptyInput]}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => {
                const newOtp = [...otp];
                newOtp[index] = text;
                setOtp(newOtp);
              }}
            />
          ))}
        </View>

        {/* Resend OTP */}
        <Text style={styles.resendText}>
          Didn’t receive the OTP?{' '}
          <Text style={styles.boldText} onPress={() => console.log('Resend OTP')}>
            Resend OTP
          </Text>
        </Text>

        {/* Verify Button */}
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => navigation.navigate('LoanApply')} // Replace with your next screen
        >
          <Text style={styles.buttonText}>Verify</Text>
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
    flex: 0.4, // Reduced size for the image section
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // White background for image section
    paddingVertical: 20,
  },
  image: {
    width: 150, // Adjust image size
    height: 150,
  },
  bottomSection: {
    flex: 0.6, // Previous size for the form section
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // White with slight transparency
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
  mainHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#007BFF', // Blue theme for text
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.7)', // Slightly darker text for subheading
    marginBottom: 20,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '80%',
  },
  otpInput: {
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    borderWidth: 2,
    borderRadius: 8,
  },
  filledInput: {
    borderColor: '#007BFF', // Blue color for filled inputs
    color: '#007BFF',
  },
  emptyInput: {
    borderColor: 'rgba(0, 0, 0, 0.3)', // Light gray for empty inputs
    color: '#007BFF',
  },
  resendText: {
    fontSize: 14,
    color: '#007BFF',
    marginBottom: 20,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  verifyButton: {
    width: '80%',
    padding: 15,
    backgroundColor: '#007BFF', // Blue button
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // White text for button
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OTPScreen;
