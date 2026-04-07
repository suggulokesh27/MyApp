import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      
      <View style={styles.card}>
        <Text style={styles.title}>Abilio IT Solutions</Text>

        <Text style={styles.description}>
          Please click on "Go to Details" and review my design. 
          Let me know if everything looks good, and kindly review the code once.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={styles.buttonText}>Go to Details</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },

    elevation: 4,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
    color: "#222",
  },

  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 20,
  },

  button: {
    backgroundColor: "#7E60BF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default HomeScreen;