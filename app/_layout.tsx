import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import {Stack, useRouter} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import {TouchableOpacity} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import colors from "@/constants/Colors";
import {onAuthStateChanged} from "@firebase/auth";
import {auth} from "@/firebaseConfig";


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const router = useRouter();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                router.push('/(tabs)/');
            }else{
                router.push('/screens/loginPage');
            }
        });
        return unsubscribe;
    }, []);
  return (
      <Stack>
          <Stack.Screen name="screens/loginPage" options={{
              headerTitle:'Login',
              headerTitleAlign:'left',
              headerTitleStyle: {
                  fontSize:30,
                  color:colors.textColorPrimary,
              },
              headerShown: false,
              headerTransparent: true,
          }} />
        <Stack.Screen name="(tabs)" options={{
          headerShown: false,
        }} />
        <Stack.Screen name="screens/investmentScreen" options={{
          headerTitle:'InvestmentScreen',
          headerTransparent: true,
          headerLeft: ()=>(
              <TouchableOpacity onPress={()=>router.back()}>
                  <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
          ),
        }} />
      </Stack>
  );
}
