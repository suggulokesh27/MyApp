import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useState } from 'react';
import SubmitButton from '../../components/comman/SubmitButton';
import { user } from '../../data';

const days = [
  { day: 'Tue', date: '24' },
  { day: 'Wed', date: '25' },
  { day: 'Thu', date: '26' },
  { day: 'Fri', date: '27' },
  { day: 'Sat', date: '28' },
  { day: 'Sun', date: '29' },
  { day: 'Mon', date: '30' },
  { day: 'Tue', date: '31' },
];

const time = [
  '7:00 AM','8:00 AM','9:00 AM',
  '10:00 AM','11:00 AM','12:00 PM',
  '1:00 PM','2:00 PM','3:00 PM',
  '4:00 PM','5:00 PM','6:00 PM'
];

const Rechedule = () => {
  const [selectedDate, setSelectedDate] = useState('24');
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.header}>Select Professional</Text>

      <View style={styles.card}>
        <View style={styles.profileRow}>
          <Image source={user.photo} style={styles.avatar} />
          <Text style={styles.name}>Sailla Sridhar Rathod</Text>
        </View>

        <TouchableOpacity style={styles.secondaryBtn}>
          <Text style={styles.secondaryBtnText}>
            Book another person
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>
          When should the professional arrive?
        </Text>
        <Text style={styles.subText}>
          Service will take approx. 1 hr
        </Text>

        <FlatList
          data={days}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            const isSelected = selectedDate === item.date;

            return (
              <TouchableOpacity
                onPress={() => setSelectedDate(item.date)}
                style={[
                  styles.dateBox,
                  isSelected && styles.selectedDateBox,
                ]}
              >
                <Text
                  style={[
                    styles.day,
                    isSelected && styles.selectedText,
                  ]}
                >
                  {item.day}
                </Text>

                <Text
                  style={[
                    styles.date,
                    isSelected && styles.selectedText,
                  ]}
                >
                  {item.date}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Select start time of service</Text>

        <View style={styles.timeContainer}>
          {time.map((item, index) => {
            const isSelected = selectedTime === item;

            return (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedTime(item)}
                style={[
                  styles.timeBox,
                  isSelected && styles.selectedTimeBox,
                ]}
              >
                <Text
                  style={[
                    styles.timeText,
                    isSelected && styles.selectedTimeText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <SubmitButton
        title="Reschedule"
        textColor="#fff"
        bgColor="#7E60BF"
        style={{ marginTop: 'auto' }}
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

  header: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },

  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    display: 'flex',
  },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
    marginRight: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
  },

  secondaryBtn: {
    borderWidth: 1,
    borderColor: '#7E60BF',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  secondaryBtnText: {
    color: '#7E60BF',
    fontWeight: '600',
  },

  section: {
    marginBottom: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
  },

  subText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 12,
  },

  dateBox: {
    width: 70,
    height: 90,
    backgroundColor: '#FFF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },

  selectedDateBox: {
    backgroundColor: '#F3EEFF',
    borderColor: '#7E60BF',
  },

  day: {
    fontSize: 14,
    color: '#666',
  },

  date: {
    fontSize: 22,
    fontWeight: '700',
  },

  selectedText: {
    color: '#7E60BF',
  },

  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  timeBox: {
    width: '30%',
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#FFF',
    alignItems: 'center',
    marginBottom: 12,
  },

  selectedTimeBox: {
    backgroundColor: '#7E60BF',
  },

  timeText: {
    fontSize: 14,
    fontWeight: '500',
  },

  selectedTimeText: {
    color: '#FFF',
  },
});

export default Rechedule;