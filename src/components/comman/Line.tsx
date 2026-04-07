import { StyleSheet, View } from 'react-native';

const Line = () => {
  return <View style={styles.line} />;
};
const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 6,
  },
});
export default Line;
