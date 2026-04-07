import { Modal, TouchableOpacity, View, Text, StyleSheet } from "react-native";

const RescheduleOptionModel = ({
    visible,
    setVisible,
    navigation,
    selected,
    setSelected,options
} : any ) => {
    return(
        <Modal transparent visible={visible} animationType="fade">
                <TouchableOpacity
                  style={styles.modalOverlay}
                  activeOpacity={0}
                  onPress={() => setVisible(false)}
                >
                  <TouchableOpacity activeOpacity={1} onPress={() => {}}>
                    <View style={styles.modalBox}>
                        <Text style={styles.modalTitle}>Reschedule this booking</Text>
        
                        {options?.map((item, index) => (
                          <TouchableOpacity
                            key={index}
                            style={styles.radioRow}
                            onPress={() => {
                              navigation();
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
                </TouchableOpacity>
              </Modal>
    )
}

const styles = StyleSheet.create({
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
    alignItems: 'flex-start',
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },

  radioRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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
})

export default RescheduleOptionModel;