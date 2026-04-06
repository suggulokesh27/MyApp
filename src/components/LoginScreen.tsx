import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import SubmitButton from './comman/SubmitButton';

const LogInScreen = ({ navigation }: { navigation: any }) => {
  const [phone, setPhone] = useState('');

  const handleLogin = () => {
    console.log('Login clicked');
    console.log('Phone Number:', phone);
    if(phone.length === 10) {
      navigation.navigate('OtpVerification');
    } else {
      Alert.alert('Please enter a valid 10-digit phone number');
    }
  };

  const handleGoogleLogin = () => {
    console.log('Google Login clicked');
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.logoContainer}>
        <Image
          source={require('../../publish/images/Central Logo Grouping.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>Mobile Number</Text>

        <View style={styles.inputRow}>
          <Text style={styles.countryCode}>+91</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="numeric"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

       <SubmitButton handleLogin={handleLogin} title="Login" />

        <View style={styles.orContainer}>
          <Text style={styles.orText}>OR</Text>
        </View>

        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
          <Text style={styles.googleText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F0', 
    paddingVertical: 40,
  },

  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
  },

  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },

  formContainer: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 20,
  },

  title: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  countryCode: {
    marginRight: 10,
    fontSize: 16,
    color: '#333',
  },

  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
  },

  loginButton: {
    backgroundColor: '#CE8C3E',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
  },

  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  orContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },

  orText: {
    color: '#888',
  },

  googleButton: {
    backgroundColor: '#2C2E67',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
  },

  googleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LogInScreen;