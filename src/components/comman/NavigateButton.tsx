import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import LeftIcon from "../../../publish/icons/left_arrow.svg";

const NavigateButton = ({
  title,
  icons,
  styles,
  onPress,
  textStyle,
}: any) => {
  return (
    <TouchableOpacity style={[buttonStyles.container, styles]} onPress={onPress}>
      
      <View style={buttonStyles.leftContent}>
        {icons}
        <Text style={[buttonStyles.text, textStyle]}>{title}</Text>
      </View>

      <LeftIcon width={16} height={16} />
    </TouchableOpacity>
  );
};

export default NavigateButton;

const buttonStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    fontSize: 14,
    color: "#000", 
  },
});