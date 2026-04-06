// import {
//   CalendarDays,
//   MapPin,
//   MessageSquareText,
//   NotepadText,
//   PhoneIcon,
//   UserRound,
// } from "lucide-react-native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const UserDetails = ({ user }: any) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* <Image
          source={require("../../publish/images/fi_3842121.png")}
          style={styles.avatar}
        /> */}

        <View style={styles.userInfo}>
          <Text style={styles.name}>{user.name}</Text>
          <View style={styles.ratingRow}>
            <Text style={styles.rating}>⭐ {user.rating}</Text>
            <Text style={styles.reviews}>({user.reviews})</Text>
          </View>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.iconBtn}>
            {/* <PhoneIcon size={18} color="#333" /> */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            {/* <MessageSquareText size={18} color="#333" /> */}
          </TouchableOpacity>
        </View>
      </View>

      {/* Booking Details */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Booking Details</Text>

        <View style={styles.row}>
          {/* <UserRound size={18} color="#555" /> */}
          <View style={styles.rowText}>
            <Text style={styles.value}>{user.name}</Text>
            <Text style={styles.subValue}>{user.phone}</Text>
          </View>
        </View>

        <View style={styles.row}>
          {/* <MapPin size={18} color="#555" /> */}
          <View style={styles.rowText}>
            <Text style={styles.label}>Location</Text>
            <Text style={styles.value}>{user.location}</Text>
          </View>
        </View>

        <View style={styles.row}>
          {/* <CalendarDays size={18} color="#555" /> */}
          <View style={styles.rowText}>
            <Text style={styles.label}>Slot</Text>
            <Text style={styles.value}>{user.slot}</Text>
          </View>
        </View>

        <View style={styles.row}>
          {/* <NotepadText size={18} color="#555" /> */}
          <View style={styles.rowText}>
            <Text style={styles.label}>Total Amount</Text>
            <Text style={styles.amount}>₹ {user.amount}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F8F9FB",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
  },

  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 12,
  },

  userInfo: {
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  rating: {
    fontSize: 14,
    color: "#444",
    marginRight: 6,
  },

  reviews: {
    fontSize: 13,
    color: "#888",
  },

  actions: {
    flexDirection: "row",
    gap: 10,
  },

  iconBtn: {
    backgroundColor: "#F1F3F6",
    padding: 8,
    borderRadius: 8,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    color: "#222",
  },

  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 14,
    gap: 10,
  },

  rowText: {
    flex: 1,
  },

  label: {
    fontSize: 12,
    color: "#888",
  },

  value: {
    fontSize: 14,
    color: "#222",
    fontWeight: "500",
  },

  subValue: {
    fontSize: 13,
    color: "#666",
  },

  amount: {
    fontSize: 15,
    fontWeight: "700",
  },
});