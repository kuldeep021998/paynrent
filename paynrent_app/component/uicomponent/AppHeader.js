import { View, Dimensions } from "react-native";
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
const { height, width } = Dimensions.get("window")
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";

export default function AppHeader(props) {

    const navigation = useNavigation();
    return (
        <View>
            <View style={{ display: 'flex', backgroundColor: '#fff', width: width, height: height * 0.05, justifyContent: 'space-between', padding: 5 }}>
                <MCI name="menu" size='24' onPress={()=>navigation.dispatch(DrawerActions.openDrawer())} />
                <Image style={{ resizeMode: 'contain', width: 50, height: 50 }} source={require("../assets/logo.png")} />
                <MCI name="account" size="24" />
            </View>
        </View>
    )
}