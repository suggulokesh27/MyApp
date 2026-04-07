import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackIcon from "../../../publish/icons/Vector.svg";

type Props = {
  title: string;
  subTitle?: string;
  isHelpVisible?: boolean;
};

const AppHeader = ({ title, subTitle, isHelpVisible = false }: Props) => {
  const navigation = useNavigation<any>();

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("HomeMain");
    }
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.iconBtn} onPress={handleBack}>
        <BackIcon width={16} height={16} />
      </TouchableOpacity>

      <View style={styles.center}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        {subTitle && (
          <Text style={styles.subTitle} numberOfLines={1}>
            {subTitle}
          </Text>
        )}
      </View>

      {isHelpVisible ? (
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.helpBtn}
            onPress={() => console.log("Help clicked")}
          >
            <Text style={styles.helpText}>Help</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.sosBtn}
            onPress={() => console.log("SOS clicked")}
          >
            <Text style={styles.sosText}>SOS</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    elevation: 3,
  },

  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F1F3F6",
    alignItems: "center",
    justifyContent: "center",
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },

  subTitle: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },

  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  helpBtn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#007BFF",
    backgroundColor: "#EEF5FF",
  },

  helpText: {
    color: "#007BFF",
    fontSize: 12,
    fontWeight: "500",
  },

  sosBtn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: "#FFEAEA",
  },

  sosText: {
    color: "#D32F2F",
    fontSize: 12,
    fontWeight: "600",
  },

  placeholder: {
    width: 36, // keeps layout balanced
  },
});

export default AppHeader;