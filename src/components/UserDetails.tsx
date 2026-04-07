import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import PhoneIcon from '../../publish/icons/phone.svg';
import ChatIcon from '../../publish/icons/chat.svg';
import Line from './comman/Line';
import PriceSummaryModal from './PriceSummaryModel';
import { useState } from 'react';
import BookingDetails from './BookingDetails';

const UserDetails = ({ user }: any) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={user?.photo} style={styles.avatar} />

        <View style={styles.userInfo}>
          <Text style={styles.name}>{user.name}</Text>
          <View style={styles.ratingRow}>
            <Text style={styles.rating}>⭐ {user.rating}</Text>
            <Text style={styles.reviews}>({user.reviews})</Text>
          </View>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.iconBtn}>
            <PhoneIcon width={18} height={18} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <ChatIcon width={18} height={18} />
          </TouchableOpacity>
        </View>
      </View>
      <Line />
      <BookingDetails user={user} handler={() => setVisible(true)} />
      <PriceSummaryModal
        visible={visible}
        onClose={() => setVisible(false)}
        services={user.priceSummary}
        taxes={99}
        onDownload={() => console.log('Download clicked')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
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
    fontWeight: '600',
    color: '#222',
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  rating: {
    fontSize: 14,
    color: '#444',
    marginRight: 6,
  },

  reviews: {
    fontSize: 13,
    color: '#888',
  },

  actions: {
    flexDirection: 'row',
    gap: 10,
  },

  iconBtn: {
    backgroundColor: '#F1F3F6',
    padding: 8,
    borderRadius: 8,
  },
});

export default UserDetails;
