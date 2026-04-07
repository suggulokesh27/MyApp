import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";

type ServiceItem = {
  title: string;
  subtitle?: string;
  price: number;
};

type Props = {
  visible: boolean;
  onClose: () => void;
  services: ServiceItem;
  taxes?: number;
  onDownload?: () => void;
};

const PriceSummaryModal = ({
  visible,
  onClose,
  services,
  taxes = 0,
  onDownload,
}: Props) => {
  const servicesTotal = services?.price || 0;
  const total = servicesTotal + taxes;

  const title = services?.title || "";
  const subtitle = services?.subtitle || "";
  const price = services?.price || 0;

  return (
    <Modal transparent visible={visible} animationType="fade">
      
      <Pressable style={styles.modalOverlay} onPress={onClose}>
        
        <Pressable style={styles.modalContainer} onPress={() => {}}>
          
          <Text style={styles.modalTitle}>Payment Summary</Text>

          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.serviceTitle}>{title}</Text>
              {subtitle && (
                <Text style={styles.serviceSub}>{subtitle}</Text>
              )}
            </View>
            <Text style={styles.price}>₹{price}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.rowBetween}>
            <Text style={styles.label}>Taxes & Fees</Text>
            <Text style={styles.value}>₹{taxes}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.rowBetween}>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.totalPrice}>₹{total}</Text>
          </View>

          {onDownload && (
            <TouchableOpacity style={styles.outlineBtn} onPress={onDownload}>
              <Text style={styles.outlineText}>Download Invoice</Text>
            </TouchableOpacity>
          )}

        </Pressable>
      </Pressable>
    </Modal>
  );
};


const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center", 
    alignItems: "center",
  },

  modalContainer: {
    width: "85%",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 16,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  serviceTitle: {
    fontSize: 14,
    fontWeight: "600",
  },

  serviceSub: {
    fontSize: 12,
    color: "#666",
  },

  price: {
    fontSize: 14,
    fontWeight: "600",
  },

  label: {
    fontSize: 14,
    color: "#555",
  },

  value: {
    fontSize: 14,
  },

  totalLabel: {
    fontSize: 15,
    fontWeight: "700",
  },

  totalPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
  },

  divider: {
    height: 1,
    backgroundColor: "#EEE",
    marginVertical: 10,
  },

  outlineBtn: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  outlineText: {
    color: "#007BFF",
    fontWeight: "600",
  },
});

export default PriceSummaryModal;