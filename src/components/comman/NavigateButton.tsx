import { Text, TouchableOpacity } from "react-native";

const NavigateButton = ({title, icons, styles, onPress}: any) => {
    return (
        <TouchableOpacity style={styles} onPress={onPress}>
            <Text>{title}</Text>
            {icons} 
        </TouchableOpacity>
    );
}

export default NavigateButton