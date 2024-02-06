import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {CardContent} from "@/constants/CardContent";
import {MaterialIcons} from "@expo/vector-icons";
import {defaultStyles} from "@/constants/Styles";
import Colors from "@/constants/Colors";
import {useRouter} from "expo-router";
const index = () => {
    const router = useRouter();
    return(
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.headerContainer}>
                <Text style={[defaultStyles.textPrimary,{fontSize: 30,fontWeight:'bold'}]}>Tejas Trading</Text>
            </View>
            <FlatList numColumns={2} data={CardContent} renderItem={(item)=>{
                let cardItem = item.item;
                return(
                    <View style={styles.container}>
                        {/*@ts-ignore*/}
                        <TouchableOpacity onPress={()=>router.push(cardItem.link)} style={styles.card}>
                            <View style={styles.cardBody}>
                                {/*@ts-ignore*/}
                                <MaterialIcons name={cardItem.icon} size={24} color="black" />
                                <Text style={defaultStyles.textSecondary}>{cardItem.title}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            }/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        backgroundColor:'#333',
        borderWidth:0,
    },
    container:{
        marginTop:40,
        flex:2,
        paddingHorizontal:20,
        alignItems:'center',
    },
    card:{
        width:200,
        height:75,
        backgroundColor:Colors.primary,
        borderRadius:20,
        shadowOpacity:0.5,
        shadowRadius:5,
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:2
        },
        elevation:5
    },
    cardBody:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    headerContainer:{
        marginTop:10,
        paddingHorizontal:10,

    }
})

export default index;