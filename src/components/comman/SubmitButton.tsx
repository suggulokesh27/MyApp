import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const SubmitButton = ({
  handleLogin,
  title,
  bgColor = '#CE8C3E',
  textColor = '#fff',
}: any) => {
  return (
    <TouchableOpacity
      style={[styles.submitButton, { backgroundColor: bgColor }]}
      onPress={handleLogin}
    >
      <Text style={[styles.submitText, { color: textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  submitButton: {
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
  },
  submitText: {
    fontSize: 16,
    fontWeight: '600',
  },
});