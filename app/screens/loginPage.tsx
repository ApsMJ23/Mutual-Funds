import {SafeAreaView, StyleSheet, Text} from "react-native";
import LoginForm from "@/app/Components/LoginForm/LoginForm";
import colors from "@/constants/Colors";
import {useState} from "react";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "@firebase/auth";
import {auth} from "@/firebaseConfig";
import Toast from "react-native-toast-message";
import {useRouter} from "expo-router";
import * as SecureStore from "expo-secure-store";
import SignUpForm from "@/app/Components/SignUpForm/SignUpForm";

const loginPage = () => {
    const [showSignUp, setShowSignUp] = useState(false);
    const router = useRouter();
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: '',
    });
    const TriggerLogin = () => {
        signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
            .then(async (userCredential) => {
                // Signed in
                const user = userCredential.user;
                await SecureStore.setItemAsync('user', JSON.stringify(user));
                router.push('/(tabs)/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    text1: errorCode,
                    text2: errorMessage,
                });
            });
    }
    const triggerSignUp = () => {
        console.log(userDetails);
        createUserWithEmailAndPassword(auth, userDetails.email, userDetails.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setShowSignUp(false);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    text1: errorCode,
                    text2: errorMessage,
                });
            });
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>{showSignUp ? 'Create a user account' : 'Welcome!! Login to continue.'}</Text>
            {!showSignUp &&
                <LoginForm userDetails={userDetails} setUserDetails={setUserDetails} TriggerLogin={TriggerLogin}
                           setShowSignUp={setShowSignUp}/>}
            {showSignUp &&
                <SignUpForm userDetails={userDetails} setUserDetails={setUserDetails} triggerSignUp={triggerSignUp}/>}
            <Toast/>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,

    },
    text: {
        paddingHorizontal: 20,
        marginTop: 20,
        color: colors.textColorPrimary,
        fontSize: 20,
        fontWeight: "bold",
    },
})

export default loginPage;