import { View, Image } from "react-native";
import Input from "../uicomponent/Input";
import AppButton from "../uicomponent/AppButton";

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            <Image source={require("../assets/logo.png")} style={{ resizeMode: "contain", width: "50%", height: "50%", position: 'absolute', top: 1 }} />
            <AppButton style={{ marginTop: "10%" }} onPress={() => navigation.navigate("Login")} buttonText={'Login with Google'} bgColor='#4a69bd' btnWidth={0.8} />
            <AppButton style={{ marginTop: 10 }} onPress={() => navigation.navigate("SignUp")} buttonText={'Sign Up with Google'} bgColor='#4a69bd' btnWidth={0.8} />
        </View>
    )
}
