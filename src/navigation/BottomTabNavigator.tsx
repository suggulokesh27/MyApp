import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";

const tab = createBottomTabNavigator();
const ButtomTabNavigator = () => {
    return(
<tab.Navigator>
    <tab.Screen name="Home" component={HomeStack} />
    <tab.Screen name="Profile" component={ProfileStack} />
</tab.Navigator>
    )
}

export default ButtomTabNavigator;