import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/profile/ProfileScreen";

const stack = createStackNavigator();
const ProfileStack = () => {
    return(
<stack.Navigator>
    <stack.Screen name="ProfileMain" component={ProfileScreen} />
    <stack.Screen name="ProfileDetails" component={ProfileScreen} />
</stack.Navigator>
    )
}

export default ProfileStack;