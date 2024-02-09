import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {defaultStyles} from "@/constants/Styles";
import colors from "@/constants/Colors";
import {useEffect, useState} from "react";
import GoogleSignup from "@/app/Components/GoogleSignup/GoogleSignup";

type LoginFormProps = {
    userDetails: {
        email: string,
        password: string,
    },
    setUserDetails: (userDetails: { email: string, password: string }) => void
    TriggerLogin: () => void
    setShowSignUp: (showSignUp: boolean) => void
}

const LoginForm = (props: LoginFormProps) => {
    const {userDetails, setUserDetails,TriggerLogin,setShowSignUp} = props;
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        if (userDetails.email.length > 0 && userDetails.password.length > 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [userDetails]);
    return (
        <View style={styles.container}>
            <TextInput textContentType={'emailAddress'} value={userDetails.email}
                       onChangeText={(value) => setUserDetails({...userDetails, email: value.toLowerCase()})}
                       placeholderTextColor={'black'} style={defaultStyles.input} placeholder="Email"/>
            <TextInput placeholderTextColor={'black'} value={userDetails.password}
                       onChangeText={(value) => setUserDetails({...userDetails, password: value})}
                       style={defaultStyles.input} placeholder="Password" secureTextEntry={true}/>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
            <TouchableOpacity onPress={TriggerLogin} disabled={disabled} style={disabled?styles.loginBtnDisable:styles.loginBtn}>
                <Text>Login</Text>
            </TouchableOpacity>
            <GoogleSignup/>
            <Text onPress={()=>setShowSignUp(true)} style={[styles.forgotPassword,{textAlign: 'left'}]}>Sign Up?</Text>
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

export default LoginForm;