import { useState, useEffect } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import Input from "../uicomponent/Input";
import AppButton from "../uicomponent/AppButton";
import { Text } from "react-native";

export default function SignUp({navigation}) {

    const [mobileEmail, setMobileEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputs, setInputs] = useState({ mobileEmail: '', password: '' });
    const [error, setError] = useState({});

    const validate = () => {
        var isValid = true;
        if (!inputs.mobileEmail) {
            handleErrors("Please Input Email / Mobile", "mobileEmail")
            isValid = false
        }
        if (!inputs.password) {
            handleErrors("Please Input Password", "password")
            isValid = false
        }
        return isValid
    }


    const handleValues = (txt, attr) => {
        setInputs(prevStates => ({ ...prevStates, [attr]: txt }))
    }

    const handleErrors = (txt, attr) => {
        setError(prevStates => ({ ...prevStates, [attr]: txt }))
    }


    return (
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 10 }}>
            <Text style={{ fontSize: 25 }}>Sign Up</Text>
            <Text style={{ fontSize: 14, marginTop: 10 }}>Add your details to Sign up</Text>
            <Input error={error.mobileEmail} onFocus={() => handleErrors(null, "mobileEmail")} onChangeText={(txt) => handleValues(txt, 'mobileEmail')} placeholder="Name" />
            <Input error={error.mobileEmail} onFocus={() => handleErrors(null, "mobileEmail")} onChangeText={(txt) => handleValues(txt, 'mobileEmail')} placeholder="Email" />
            <Input error={error.mobileEmail} onFocus={() => handleErrors(null, "mobileEmail")} onChangeText={(txt) => handleValues(txt, 'mobileEmail')} placeholder="Mobile No" />
            <Input error={error.mobileEmail} onFocus={() => handleErrors(null, "mobileEmail")} onChangeText={(txt) => handleValues(txt, 'mobileEmail')} placeholder="Address" />
            <Input error={error.mobileEmail} onFocus={() => handleErrors(null, "mobileEmail")} onChangeText={(txt) => handleValues(txt, 'mobileEmail')} placeholder="Password" />
            <Input error={error.mobileEmail} onFocus={() => handleErrors(null, "mobileEmail")} onChangeText={(txt) => handleValues(txt, 'mobileEmail')} placeholder="Confirm Password" />
            <AppButton  buttonText={'Sign up'} bgColor='#FC6011' btnWidth={0.8} />
            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 40 }}>
                <Text style={{ fontSize: 14 }}>Don't have an Account?</Text>
                <Text style={{ marginLeft: 5, color: '#fc6011', fontWeight: 'bolder', fontSize: 14 }}>Sign Up</Text>
            </View>
        </View>
    )
}