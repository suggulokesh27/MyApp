import { Button, Image, StyleSheet, Text, View } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.centerContent}>
        <Image
          source={require('../../publish/images/logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Empowering every Indian voice
        </Text>
      </View>
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7F0', 
  },

  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#2B2D66',
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },

  footer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },

  footerText: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export default SplashScreen;