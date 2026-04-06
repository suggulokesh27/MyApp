import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native';
import SubmitButton from '../../components/comman/SubmitButton';
import { useState } from 'react';

const days = [
  { day: 'Mon', date: '12' },
  { day: 'Tue', date: '13' },
  { day: 'Wed', date: '14' },
  { day: 'Thu', date: '15' },
  { day: 'Fri', date: '16' },
  { day: 'Sat', date: '17' },
  { day: 'Sun', date: '18' },
  { day: 'Mon', date: '19' },
  { day: 'Tue', date: '20' },
  { day: 'Wed', date: '21' },
  { day: 'Thu', date: '22' },
  { day: 'Fri', date: '23' },
  { day: 'Sat', date: '24' },
  { day: 'Sun', date: '25' },
];

const time = ['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM'
, '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM',
];

const Rechedule = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* <Image
          source={{ uri: "" }}
          style={styles.avatar}
        /> */}
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>Sailla Sridhar Rathod</Text>
          <TouchableOpacity style={styles.secondaryBtn}>
            <Text style={styles.secondaryBtnText}>Book another person</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>When should the professional arrive?</Text>

        <FlatList
          data={days}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.dateBox}>
              <Text style={styles.day}>{item.day}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Select Time</Text>

        <View style={styles.timeContainer}>
          {time.map((item, index) => (
            <TouchableOpacity key={index} style={styles.timeBox}>
              <Text style={styles.timeText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <SubmitButton title="Reschedule" textColor="#fff" bgColor="#7E60BF" />

      <Modal transparent visible={visible} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Payment summary</Text>

            <View style={styles.rowBetween}>
              <View>
                <Text style={styles.serviceTitle}>
                  Kitchen Appliances Cleaning
                </Text>
                <Text style={styles.serviceSub}>Single door fridge</Text>
              </View>
              <Text style={styles.price}>₹300</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.rowBetween}>
              <Text style={styles.label}>Taxes and Fee</Text>
              <Text style={styles.value}>₹99</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.rowBetween}>
              <Text style={styles.totalLabel}>Total amount</Text>
              <Text style={styles.totalPrice}>₹399</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.download}>Download Invoice</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
    padding: 16,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },

  secondaryBtn: {
    borderWidth: 1,
    borderColor: '#FFD700',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },

  secondaryBtnText: {
    fontSize: 12,
    color: '#222',
  },

  section: {
    marginBottom: 20,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
  },

  dateBox: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
    elevation: 1,
  },

  day: {
    fontSize: 12,
    color: '#666',
  },

  date: {
    fontSize: 16,
    fontWeight: '600',
  },

  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  timeBox: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 10,
  },

  timeText: {
    fontSize: 13,
    color: '#333',
  },
  modalOverlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.5)",
  justifyContent: "flex-end", 
},

modalContainer: {
  backgroundColor: "#FFF",
  padding: 20,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
},

modalTitle: {
  fontSize: 18,
  fontWeight: "700",
  marginBottom: 16,
},

rowBetween: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 12,
},

serviceTitle: {
  fontSize: 14,
  fontWeight: "600",
},

serviceSub: {
  fontSize: 12,
  color: "#666",
},

price: {
  fontSize: 14,
  fontWeight: "600",
},

label: {
  fontSize: 14,
  color: "#555",
},

value: {
  fontSize: 14,
},

totalLabel: {
  fontSize: 15,
  fontWeight: "700",
},

totalPrice: {
  fontSize: 16,
  fontWeight: "700",
  color: "#2E7D32",
},

divider: {
  height: 1,
  backgroundColor: "#EEE",
  marginVertical: 10,
},

download: {
  color: "#007BFF",
  marginTop: 10,
},

closeBtn: {
  marginTop: 16,
  backgroundColor: "#FFD700",
  padding: 12,
  borderRadius: 8,
  alignItems: "center",
},

closeText: {
  fontWeight: "600",
},
});

export default Rechedule;
