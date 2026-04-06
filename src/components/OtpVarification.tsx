import React, { useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import SubmitButton from "./comman/SubmitButton";

const OtpVarification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const inputs = useRef<any[]>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
    console.log("OTP:", otp.join(""));
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.topContainer}>
        <Image
          source={require("../../publish/images/Container.png")}
          style={styles.image}
        />

        <Text style={styles.title}>Verify identity</Text>

        <Text style={styles.subtitle}>
          Enter the 4-digit code sent to your registered mobile number for
          Prati Bharath.
        </Text>
      </View>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>

      <SubmitButton handleLogin={handleVerify} title="VERIFY" />

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Didn't receive the code?
        </Text>

        <TouchableOpacity>
          <Text style={styles.link}>Resend Code</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.changeNumber}>Change phone number</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F0',
    paddingHorizontal: 24,
    paddingTop: 60,
  },

  topContainer: {
    alignItems: "center",
    marginBottom: 40,
  },

  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2B2D66",
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },

  otpInput: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
    backgroundColor: "#FAFAFA",
  },

  footer: {
    marginTop: 30,
    alignItems: "center",
  },

  footerText: {
    color: "#666",
    marginBottom: 10,
  },

  link: {
    color: "#CE8C3E",
    fontWeight: "600",
    marginTop: 5,
  },

  changeNumber: {
    color: "#aaa",
    marginTop: 10,
  },
});

export default OtpVarification;