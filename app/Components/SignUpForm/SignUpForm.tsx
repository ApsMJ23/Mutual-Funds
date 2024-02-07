import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import colors from "@/constants/Colors";
import {defaultStyles} from "@/constants/Styles";
import {useEffect, useState} from "react";

type SignUpFormProps = {
    userDetails: {
        email: string,
        password: string,
    },
    setUserDetails: (userDetails: { email: string, password: string }) => void
    triggerSignUp: () => void

}

const SignUpForm = (props:SignUpFormProps) => {
    const [disabled, setDisabled] = useState(true);
    const {userDetails, setUserDetails, triggerSignUp} = props;
    useEffect(() => {
        if (userDetails.email.length > 0 && userDetails.password.length > 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [userDetails]);
    return (
        <View style={styles.container}>
            <TextInput style={defaultStyles.input} textContentType={'emailAddress'} value={userDetails.email}
                       onChangeText={(value) => setUserDetails({...userDetails, email: value.toLowerCase()})}
                       placeholderTextColor={'black'} placeholder="Email"/>
            <TextInput style={defaultStyles.input} placeholderTextColor={'black'} value={userDetails.password}
                       onChangeText={(value) => setUserDetails({...userDetails, password: value})}
                       placeholder="Password" secureTextEntry={true}/>
            <TouchableOpacity disabled={disabled} style={disabled?styles.loginBtnDisable:styles.loginBtn} onPress={triggerSignUp}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 30,
        gap: 10,
        flex: 1
    },
    forgotPassword: {
        textAlign: 'right',
        color: 'grey',
        fontSize: 15,
    },
    loginBtn: {
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10,
    },
    loginBtnDisable:{
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10,
        opacity:0.5,
    }
})

export default SignUpForm;