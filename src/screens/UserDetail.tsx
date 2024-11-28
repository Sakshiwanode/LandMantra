import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const UserDetailScreen = ({navigation}:any) => {
  const user = {
    name: "John Doe", // Example name, replace with dynamic data
    phone: "+91 223 344 4454", // Example phone number, replace with dynamic data
    email: "johndoe@example.com", // Example email, replace with dynamic data
    aadharOrPan: "Aadhar: 1234 5678 9123", // Example Aadhar/PAN, replace with dynamic data
    otherDetails: "Loan Status: Approved\nCredit Score: 750\nLoan Amount: ₹1,00,000", // Example other details
  };

  return (
    <View style={styles.container}>
      {/* User Profile Picture Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('../images/logo.webp')} // Replace with actual user profile image
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>

      {/* User Information Section */}
      <View style={styles.infoSection}>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.phoneNumber}>{user.phone}</Text>

        {/* Basic User Details */}
        <View style={styles.detailsSection}>
          <Text style={styles.detailsLabel}>Email Address:</Text>
          <Text style={styles.detailsText}>{user.email}</Text>

          <Text style={styles.detailsLabel}>Aadhar/PAN Number:</Text>
          <Text style={styles.detailsText}>{user.aadharOrPan}</Text>

          <Text style={styles.detailsLabel}>Other Details:</Text>
          <Text style={styles.detailsText}>{user.otherDetails}</Text>
        </View>
      </View>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => {navigation.navigate('BankDetail') }}>
        <Text style={styles.backButtonText}>Forward</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#007BFF', // Blue border around the profile picture
  },
  infoSection: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: 'rgba(0, 123, 255, 0.1)', // Semi-transparent blue background
    borderRadius: 20,
    marginHorizontal: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF', // Blue color for name
    textAlign: 'center',
    marginBottom: 10,
  },
  phoneNumber: {
    fontSize: 16,
    color: '#007BFF', // Blue color for phone number
    textAlign: 'center',
    marginBottom: 20,
  },
  detailsSection: {
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // White background with transparency
    borderRadius: 15,
    padding: 15,
  },
  detailsLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 5,
  },
  detailsText: {
    fontSize: 14,
    color: '#333', // Dark text color for details
    marginBottom: 15,
  },
  backButton: {
    marginTop: 30,
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 40,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default UserDetailScreen;
