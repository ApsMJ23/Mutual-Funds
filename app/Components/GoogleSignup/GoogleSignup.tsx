import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {GoogleAuthProvider, signInWithPopup} from "@firebase/auth";
import {auth} from "@/firebaseConfig";
import * as SecureStore from "expo-secure-store";
import {useRouter} from "expo-router";
import Toast from "react-native-toast-message";


const GoogleSignup = () =>{
    const router = useRouter();
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const googleSignIn = async () => {
        signInWithPopup(auth, provider)
            ?.then(async (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                await SecureStore.setItemAsync('user', JSON.stringify(user));
                router.push('/(tabs)/');
            }).catch((error) => {
            const credential = GoogleAuthProvider.credentialFromError(error);
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Error',
                text2: error.message,
            });
        });
    }
    return (
        <View>
            <TouchableOpacity onPress={googleSignIn} style={styles.googleBtn} >
                <Text style={{fontSize:15}}>Sign In with Google</Text>
            </TouchableOpacity>
            <Toast/>
        </View>
    )
}

const styles = StyleSheet.create({
    googleBtn:{
        marginTop:10,
        backgroundColor:'white',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:50,
        borderRadius:10,
    }
})

export default GoogleSignup;