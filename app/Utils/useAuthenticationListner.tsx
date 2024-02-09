import {auth} from "@/firebaseConfig";
import {useEffect, useState} from "react";
import {User} from "@firebase/auth";
import * as SecureStore from "expo-secure-store";


const useAuthenticationListner = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async(user) => {
        if (user) {
            await SecureStore.setItemAsync('user', JSON.stringify(user));
        }
        setUser(user);
        setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return { user, loading };
}

export default useAuthenticationListner;