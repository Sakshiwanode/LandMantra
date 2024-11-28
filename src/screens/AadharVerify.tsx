import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const AadharScreen = ({ navigation }: { navigation: any }) => {
  const [isAadhar, setIsAadhar] = useState(true); // Set default as Aadhar verification
  const [aadharOrPanNumber, setAadharOrPanNumber] = useState(''); // Store entered number

  return (
    <View style={styles.container}>
      {/* Top Image Section (60% height) */}
      <View style={styles.topSection}>
        <Image
          source={require('../images/logo.webp')} // Replace with your Aadhar related image
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Bottom Section (40% height) */}
      <View style={styles.bottomSection}>
        <Text style={styles.title}>Verify Your Identity</Text>
        <Text style={styles.subtitle}>Select your verification method and enter the details.</Text>

        {/* Toggle Between Aadhar/PAN */}
        <View style={styles.verificationToggle}>
          <TouchableOpacity onPress={() => setIsAadhar(true)} style={[styles.toggleButton, isAadhar ? styles.activeButton : {}]}>
            <Text style={[styles.toggleButtonText, isAadhar ? styles.activeButtonText : {}]}>Aadhar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsAadhar(false)} style={[styles.toggleButton, !isAadhar ? styles.activeButton : {}]}>
            <Text style={[styles.toggleButtonText, !isAadhar ? styles.activeButtonText : {}]}>PAN</Text>
          </TouchableOpacity>
        </View>

        {/* Input Field for Aadhar or PAN Number */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>{isAadhar ? 'Aadhar Number' : 'PAN Number'}</Text>
          <TextInput
            style={styles.inputField}
            placeholder={isAadhar ? 'Enter your 12-digit Aadhar number' : 'Enter your 10-digit PAN number'}
            keyboardType="numeric"
            maxLength={isAadhar ? 12 : 10}
            value={aadharOrPanNumber}
            onChangeText={setAadharOrPanNumber}
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            // Navigation logic after verification
            if (isAadhar) {
              navigation.navigate('AadharVerificationSuccess');
            } else {
              navigation.navigate('PanVerificationSuccess');
            }

            // You can also add navigation to 'UserDetail' here if you need that
            navigation.navigate('UserDetail');
          }}
        >
          <Text style={styles.submitButtonText}>Verify</Text>
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
    flex: 0.6, // 60% height for the image section
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Blue theme
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    flex: 0.4, // 40% height for the form section
    backgroundColor: 'rgba(0, 123, 255, 0.9)', // Semi-transparent Blue background
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 22, // Larger title
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14, // Subtitle for instructions
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 20,
  },
  verificationToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  toggleButton: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  activeButton: {
    backgroundColor: '#fff', // Highlight active button
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  activeButtonText: {
    color: '#007BFF', // Active button text color
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 5,
  },
  inputField: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 16,
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AadharScreen;
