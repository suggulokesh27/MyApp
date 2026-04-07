import { StyleSheet, Text, View } from 'react-native';
import Line from '../../components/comman/Line';
import InfoModal from '../../components/comman/InfoModal';
import { useState } from 'react';

const PaymentSummarScreen = ({ route }: any) => {
  const { priceSummary } = route.params;
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.title}>{priceSummary.title}</Text>
            <Text style={styles.subtitle}>{priceSummary.subtitle}</Text>
          </View>
          <Text style={styles.price}>₹{priceSummary.price}</Text>
        </View>

        <View style={styles.rowBetween}>
          <Text style={styles.taxLabel} onPress={() => setVisible(true)}>Taxes and Fee</Text>
          <Text style={styles.taxValue}>₹0</Text>
        </View>
      </View>

      <Line />

      <View style={styles.rowBetween}>
        <Text style={styles.totalLabel}>Total amount</Text>
        <Text style={styles.totalPrice}>₹{priceSummary.price}</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.refundAmount}>
            ₹{priceSummary.price} refunded
          </Text>
          <Text style={styles.date}>Thu, February 19, 2026 at 11:53 am</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.upiRow}>
          <View>
            <Text style={styles.upiLabel}>refund to UPI status</Text>
            <Text style={styles.upiValue}>102741065052</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.timeline}>
          <View style={styles.timelineItem}>
            <View style={styles.circle} />
            <View>
              <Text style={styles.timelineTitle}>Refund initiated</Text>
              <Text style={styles.timelineSub}>
                Thu, February 19, 2026 at 11:07 am
              </Text>
            </View>
          </View>

          <View style={styles.timelineItem}>
            <View style={styles.circle} />
            <View>
              <Text style={styles.timelineTitle}>Refund processed</Text>
              <Text style={styles.timelineSub}>
                Thu, February 19, 2026 at 11:07 am
              </Text>
            </View>
          </View>

          <View style={styles.timelineItem}>
            <View style={styles.circle} />
            <View>
              <Text style={styles.timelineTitle}>Refund credited</Text>
              <Text style={styles.timelineSub}>
                Thu, February 19, 2026 at 11:07 am
              </Text>
            </View>
          </View>
        </View>
      </View>
      <InfoModal
        visible={visible}
        onClose={() => setVisible(false)}
        title="What is Taxes and Fee?"
        descriptions={['Taxes levied as per Govt. regulations, subject to change basis final service value.', 'The fee goes towards training of partners and providing support & assistance during the service.']}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },

  section: {
    marginBottom: 12,
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
  },

  subtitle: {
    fontSize: 14,
    color: '#777',
  },

  price: {
    fontSize: 16,
    fontWeight: '600',
  },

  taxLabel: {
    fontSize: 14,
    color: '#888',
    textDecorationLine: 'underline',
  },

  taxValue: {
    fontSize: 14,
    color: '#888',
  },

  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
  },

  totalPrice: {
    fontSize: 18,
    fontWeight: '700',
  },

  // Card
  card: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },

  cardHeader: {
    marginBottom: 10,
  },

  refundAmount: {
    fontSize: 18,
    color: 'green',
    fontWeight: '600',
  },

  date: {
    fontSize: 13,
    color: '#999',
    marginTop: 4,
  },

  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },

  upiRow: {
    marginBottom: 10,
  },

  upiLabel: {
    fontSize: 14,
    fontWeight: '600',
  },

  upiValue: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 2,
  },

  // Timeline
  timeline: {
    marginTop: 10,
  },

  timelineItem: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
    alignItems: 'flex-start',
  },

  circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: 'green',
    marginTop: 3,
  },

  timelineTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  timelineSub: {
    fontSize: 13,
    color: '#999',
  },
});

export default PaymentSummarScreen;
