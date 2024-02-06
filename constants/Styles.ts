import {StyleSheet} from "react-native";
import Colors from "@/constants/Colors";


export const defaultStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#333",
        color:Colors.textColorPrimary,
    },
    btn:{
        backgroundColor:Colors.primary,
        color:Colors.textColorSecondary,
        padding:10,
        margin:5,
        borderRadius:5,
        textAlign:"center",
        fontSize:16
    },
    input:{
        backgroundColor:Colors.primary,
        color:Colors.textColorSecondary,
        padding:10,
        margin:5,
        borderRadius:5,
        fontSize:16
    },
    textPrimary:{
        color:Colors.textColorPrimary,
        fontSize:16,
    },
    textSecondary:{
        color:Colors.textColorSecondary,
        fontSize:16,
        margin:5,
    },

})