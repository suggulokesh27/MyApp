import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  icon: React.ReactNode;
  label: string;
  value: string;
  subValue?: string;
  rightElement?: React.ReactNode; 
};

const InfoRow = ({ icon, label, value, subValue, rightElement }: Props) => {
  return (
    <View style={styles.row}>
      
      <View style={styles.left}>
        {icon}
        <View style={styles.rowText}>
          <Text style={styles.label}>{label}</Text>
          {value &&<Text style={styles.value}>{value}</Text>}
          {subValue && <Text style={styles.subValue}>{subValue}</Text>}
        </View>
      </View>

      {rightElement && <View>{rightElement}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10, 
    flex: 1,
  },

  rowText: {
    flex: 1,
  },

  label: {
    fontSize: 14,
    color: "#222",
    fontWeight: "500",
  },

  value: {
    fontSize: 12,
    color: "#888",
  },

  subValue: {
    fontSize: 13,
    color: "#666",
  },
});

export default InfoRow;