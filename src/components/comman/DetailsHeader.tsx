import { StyleSheet, Text, View } from 'react-native';

const DetailsHeader = ({ title, Icon, subSubTitle }: any) => {
  return (
    <View style={styles.header}>
      <Icon width={40} height={40} />
      <Text style={styles.headerText}>{title}</Text>
      {subSubTitle && <Text style={styles.headerDiscription}>{subSubTitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default DetailsHeader;
