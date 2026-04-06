import {
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import UserDetails from '../../components/UserDetails';
import NavigateButton from '../../components/comman/NavigateButton';
import { useNavigation } from '@react-navigation/native';

const user = {
  name: 'Lokesh Suggu',
  rating: 4.5,
  reviews: 100,
  phone: '7093838838',
  location: '123 Main, Ameerpet, Hyderabad, Telangana, 500001',
  slot: '10:00 AM - 11:00 AM',
  amount: '50',
};

const DetailsScreen = () => {
    const navigation = useNavigation<any>();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Job assigned</Text>
        <Text style={styles.headerDiscription}>Thanks for choosing sevaki</Text>
      </View>

      <UserDetails user={user} />

      {/* Policy */}
      <View style={styles.policy}>
        <Text style={styles.policyTitle}>Reschedule & cancel</Text>
        <Text style={styles.policyText}>
          Free cancellations if done more than 12 hrs before the service. A fee
          will be charged otherwise.
        </Text>
        <Text style={styles.policyLink}>Read full policy</Text>
      </View>

      {/* Buttons */}
      <NavigateButton
        title="Reschedule this booking"
        styles={styles.primaryBtn}
        onPress={() => setVisible(true)}
      />

      <NavigateButton
        title="Cancel this booking"
        styles={styles.primaryBtn}
        onPress={() => console.log('Cancel this booking clicked')}
      />

      {/* 🔥 Modal */}
      <Modal transparent visible={visible} animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setVisible(false)} // close on outside click
        >
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Reschedule this booking</Text>

            {[
              'Service required at a different time',
              'Did not like the professional',
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.radioRow}
                onPress={() => {
                    navigation.navigate('Reschedule');
                  setSelected(item);
                  setVisible(false); // 🔥 auto close
                }}
              >
                <View style={styles.radioOuter}>
                  {selected === item && <View style={styles.radioInner} />}
                </View>
                <Text style={styles.radioText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
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

  header: {
    marginBottom: 16,
  },

  headerText: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },

  headerDiscription: {
    fontSize: 14,
    color: '#666',
  },

  policy: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 10,
    marginVertical: 16,
  },

  policyTitle: {
    fontWeight: '600',
    marginBottom: 4,
  },

  policyText: {
    fontSize: 13,
    color: '#666',
  },

  policyLink: {
    color: '#007BFF',
    marginTop: 6,
  },

  primaryBtn: {
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0', 
  },


  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBox: {
    width: '85%',
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },

  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },

  radioOuter: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#c3c3c3',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  radioInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#FFD700',
  },

  radioText: {
    fontSize: 14,
    color: '#333',
  },

  modalText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },

  modalActions: {
    flexDirection: 'row',
    gap: 12,
  },

  cancelBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#EEE',
    borderRadius: 8,
  },

  cancelText: {
    color: '#333',
  },

  submitBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFD700',
    borderRadius: 8,
  },

  submitText: {
    fontWeight: '600',
  },
});

export default DetailsScreen;
