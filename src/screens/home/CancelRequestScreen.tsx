import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DetailsHeader from '../../components/comman/DetailsHeader';
import Line from '../../components/comman/Line';
import CalendraIcon from '../../../publish/icons/calendar-cancel.svg';
import ReCycleIcon from '../../../publish/icons/reCycle.svg';
import { user } from '../../data';
import BookingDetails from '../../components/BookingDetails';
import { useNavigation } from '@react-navigation/native';

const CancelRequestScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <DetailsHeader
        title="Job assigned"
        Icon={CalendraIcon}
        subSubTitle="Thanks for choosing sevaki"
      />

      <Line />

      <TouchableOpacity style={styles.bookAgainRow}>
        <ReCycleIcon width={18} height={18} color="#007BFF" />
        <Text style={styles.bookAgainText}>Book Again</Text>
      </TouchableOpacity>
      <Line />

      <View style={styles.card}>
        <BookingDetails
          user={user}
          handler={() =>
            navigation.navigate('PaymentSummary', {
              priceSummary: user.priceSummary,
            })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },

  bookAgainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
    marginBottom: 12,
  },

  bookAgainText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007BFF',
  },

  card: {
    borderRadius: 12,
    padding: 12,
    marginTop: 8,
  },
});

export default CancelRequestScreen;
