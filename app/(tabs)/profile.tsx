import {SafeAreaView, Text} from "react-native";
import {auth} from "@/firebaseConfig";


const profile = () => {
    const user = auth.currentUser;
    return (
        <SafeAreaView>
            <Text>{user?.email}</Text>
        </SafeAreaView>
    )
}

export default profile;