import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon set

const LoanScreen = ({ navigation }: { navigation: any }) => {
  const [loanAmount, setLoanAmount] = useState(40000); // Initial loan amount
  const maxLoan = 500000;

  // Instead of using progress dynamically, we'll set it to a fixed value (or you can leave it static)

  return (
    <View style={styles.container}>
      {/* Hide Status Bar */}
      <StatusBar hidden={true} />

      {/* Top Image Section */}
      <View style={styles.topSection}>
        <Image
          source={require('../images/logo.webp')} // Replace with your image path
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        {/* Heading */}
        <Text style={styles.heading}>Select Loan Amount</Text>
        <Text style={styles.subText}>
          Move to effortless site to select your loans easily
        </Text>

        {/* Loan Amount Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.currencySymbol}>₹</Text>
          <TextInput
            style={styles.loanInput}
            keyboardType="numeric"
            value={String(loanAmount)}
            onChangeText={(text) => {
              const newAmount = Number(text);
              if (newAmount >= 100 && newAmount <= maxLoan) {
                setLoanAmount(newAmount);
              }
            }}
          />
        </View>

        {/* Progress Bar for Loan Amount */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>₹100</Text>
          <View style={styles.progressBarWrapper}>
            <View style={[styles.progressBar, { width: `${(loanAmount / maxLoan) * 100}%` }]} />
          </View>
          <Text style={styles.progressText}>₹{maxLoan.toLocaleString()}</Text>
        </View>

        {/* Loan Tenure Section */}
        <Text style={styles.heading}>Select Loan Tenure</Text>
        <Text style={styles.subText}>Choose your loan in terms of months</Text>
        <View style={styles.tenureContainer}>
          <Text style={styles.tenureText}>2 Years</Text>
          <Icon name="chevron-down" size={16} color="rgba(0, 0, 0, 0.5)" /> {/* Dropdown arrow icon */}
        </View>

        {/* Buttons */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('AadharVerify')} // Replace with your next screen
        >
          <Text style={styles.buttonText}>Continue to Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Cancel')}>
          <Text style={styles.cancelText}>Cancel</Text>
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
    flex: 0.4,
    backgroundColor: 'rgba(0, 123, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '70%',
    height: '70%',
    opacity: 0.8,
  },
  bottomSection: {
    flex: 0.6,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.7)',
    paddingLeft: 10,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    padding: 10,
    marginBottom: 20,
  },
  currencySymbol: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
    marginRight: 5,
  },
  loanInput: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: '#007BFF',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 10,
  },
  progressBarWrapper: {
    flex: 1,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E0E0E0', // Light gray background for the progress bar
    marginHorizontal: 10,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007BFF', // The color of the filled portion of the progress bar
  },
  progressText: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  tenureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    padding: 15,
    marginBottom: 20,
  },
  tenureText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  continueButton: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007BFF',
    textAlign: 'center',
  },
});

export default LoanScreen;
