import {SafeAreaView, Text, View} from "react-native";
import {defaultStyles} from "@/constants/Styles";


const InvestmentScreen = () => {
    return (
        <SafeAreaView style={defaultStyles.container}>
        <Text style={defaultStyles.textPrimary}>InvestmentScreen</Text>
        </SafeAreaView>
    );
}

export default InvestmentScreen;