import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useState } from 'react';
import UserDetails from '../../components/UserDetails';
import NavigateButton from '../../components/comman/NavigateButton';
import { useNavigation } from '@react-navigation/native';
import CalendraIcon from '../../../publish/icons/Group.svg';
import RepeatIcon from '../../../publish/icons/repeat.svg';
import CancelIcon from '../../../publish/icons/cancle-file.svg';
import DetailsHeader from '../../components/comman/DetailsHeader';
import Line from '../../components/comman/Line';
import RescheduleOptionModel from '../../components/RescheduleOptionModel';
import { user } from '../../data';

const DetailsScreen = () => {
  const navigation = useNavigation<any>();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <DetailsHeader
        title="Job assigned"
        Icon={CalendraIcon}
        subSubTitle="Thanks for choosing sevaki"
      />
      <Line />
      
      <UserDetails user={user} />

      <View style={styles.policy}>
        <Text style={styles.policyTitle}>Reschedule & cancel</Text>
        <Text style={styles.policyText}>
          Free cancellations if done more than 12 hrs before the service. A fee
          will be charged otherwise.
        </Text>
        <Text style={styles.policyLink}>Read full policy</Text>
      </View>

      <NavigateButton
        title="Reschedule this booking"
        styles={styles.primaryBtn}
        onPress={() => setVisible(true)}
        icons={<RepeatIcon width={18} height={18} />}
        textStyle={{ color: 'black' }}
      />

      <NavigateButton
        title="Cancel this booking"
        styles={styles.primaryBtn}
        icons={<CancelIcon width={18} height={18} />}
        onPress={() => navigation.navigate('Cancel')}
        textStyle={{ color: 'red' }}
      />

      <RescheduleOptionModel
        visible={visible}
        setVisible={setVisible}
        navigation={() => navigation.navigate('Reschedule')}
        selected={selected}
        setSelected={setSelected}
        options={[
          'Service required at a different time',
          'Did not like the professional',
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
    padding: 16,
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
    borderWidth: 1,
    borderColor: '#E0E0E0',
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
