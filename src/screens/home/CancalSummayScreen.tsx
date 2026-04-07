import { View, StyleSheet } from 'react-native';
import DetailsHeader from '../../components/comman/DetailsHeader';
import Essential from '../../../publish/icons/ESSENTIAL.svg';
import SheldIcon from '../../../publish/icons/sheld.svg';
import InfoRow from '../../components/comman/InfoRow';
import HeadPhone from '../../../publish/icons/head-phone.svg';
import ReCycleIcon from '../../../publish/icons/reCycle.svg';
import SubmitButton from '../../components/comman/SubmitButton';
import RescheduleOptionModel from '../../components/RescheduleOptionModel';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const CancalScreenSummary = () => {
    const navigation = useNavigation<any>();
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);
  return (
    <View style={styles.container}>
      <View>
        <DetailsHeader
          title="You'll miss out on Sevaki benefits, consider rescheduling instead"
          Icon={Essential}
        />

        <InfoRow
          icon={<SheldIcon width={18} height={18} />}
          label="Tools & expertise"
          value="Expert therapists who bring beds and curated oils"
        />

        <InfoRow
          icon={<ReCycleIcon width={18} height={18} />}
          label="Flexibility"
          value="Easily reschedule, cancel and repeat with the same professional"
        />

        <InfoRow
          icon={<HeadPhone width={18} height={18} />}
          label="Safety and support"
          value="Extensive quality checks and access to our support team for on-job issues"
        />
      </View>

      <View style={styles.buttonContainer}>
        <SubmitButton
          title="Procced to Cancel"
          bgColor="#fff"
          textColor="red"
          style={styles.button}
          handleLogin={() => setVisible(true)}
        />
        <SubmitButton
          title="Reschedule"
          bgColor="#7E60BF"
          textColor="#fff"
          style={styles.button}
          handleLogin={() => navigation.navigate('Reschedule')}
        />
      </View>

       <RescheduleOptionModel
        visible={visible}
        setVisible={setVisible}
        navigation={() => navigation.navigate('CancelBooking')}
        selected={selected}
        setSelected={setSelected}
        options={[
          'Did not like the professional',
          'Booking address is incorrect',
          'Service no longer required',
          'Professional was unreachable',
          'Placed the request by mistake',
        ]}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },

  button: {
    flex: 1,
  },
});

export default CancalScreenSummary;
