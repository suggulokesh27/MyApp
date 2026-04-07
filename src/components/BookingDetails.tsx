import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LocationIcon from '../../publish/icons/location.svg';
import UserRound from '../../publish/icons/user.svg';
import CalendarIcon from '../../publish/icons/calendar.svg';
import NoteIcon from '../../publish/icons/note.svg';
import LeftIcon from '../../publish/icons/left_arrow.svg';
import Line from "./comman/Line";

const BookingDetails = ({user, handler}: any) => {
    return (
       <View style={styles.section}>
        <Text style={styles.sectionTitle}>Booking Details</Text>

        <View style={styles.row}>
          <UserRound width={18} height={18} />
          <View style={styles.rowText}>
            <Text style={styles.value}>{user.name}</Text>
            <Text style={styles.subValue}>{user.phone}</Text>
          </View>
        </View>

        <Line />

        <View style={styles.row}>
          <LocationIcon width={18} height={18} />
          <View style={styles.rowText}>
            <Text style={styles.label}>Location</Text>
            <Text style={styles.value}>{user.location}</Text>
          </View>
        </View>

        <Line />

        <View style={styles.row}>
          <CalendarIcon width={18} height={18} />
          <View style={styles.rowText}>
            <Text style={styles.label}>Slot</Text>
            <Text style={styles.value}>{user.slot}</Text>
          </View>
        </View>

        <Line />
        <TouchableOpacity onPress={handler}>
          <View style={styles.row}>
            <View style={styles.leftContent}>
              <NoteIcon width={18} height={18} />

              <View style={styles.rowText}>
                <Text style={styles.label}>Total Amount</Text>
                <Text style={styles.amount}>₹ {user.amount}</Text>
              </View>
            </View>
            <LeftIcon width={18} height={18} />
          </View>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  section: {
    paddingTop: 10,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
    color: '#222',
  },

  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  rowText: {
    flex: 1,
  },
    label: {
    fontSize: 12,
    color: '#888',
  },

  value: {
    fontSize: 14,
    color: '#222',
    fontWeight: '500',
  },

  subValue: {
    fontSize: 13,
    color: '#666',
  },

  amount: {
    fontSize: 15,
    fontWeight: '700',
  },
});

export default BookingDetails;