import React from "react";
import {
  Modal,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
  title: string;
  descriptions: string[];
};

const InfoModal = ({ visible, onClose, title, descriptions }: Props) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      
      <Pressable style={styles.overlay} onPress={onClose}>
        
        <Pressable style={styles.container} onPress={() => {}}>
          <Text style={styles.title}>{title}</Text>
          {descriptions?.map((description, index) => <Text key={index} style={styles.description}>{description}</Text>)}
        </Pressable>

      </Pressable>
    </Modal>
  );
};
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#6A5ACD", 
    marginBottom: 12,
  },

  description: {
    fontSize: 15,
    color: "#222",
    lineHeight: 22,
    marginBottom: 12,
  },
});

export default InfoModal;