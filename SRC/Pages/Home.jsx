import React,{useState} from "react";
import { View,Text,TextInput,TouchableOpacity,StyleSheet } from "react-native";

export default function Home(){
    let[tempC,setTempC]= useState();
    let[tempF,setTempF]= useState(0);

    function Calcular(){
        let resultado =(9 * tempC+160) / 5;
        setTempF(resultado)
    }
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Conversão de temperatura</Text>
            <TextInput onChangeText={setTempC} keyboardType= 'number-pad' style={styles.campo} placeholder="Digite uma temperatura em C"/>
            <Text style={styles.subtitulo}>Resultado: {tempF}F °</Text>
            <TouchableOpacity onPress={Calcular} style={styles.button}>
                <Text style={styles.buttonText}>Converter</Text>
            </TouchableOpacity>
        </View> 
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#30478C',
        paddingVertical:80,
        paddingHorizontal:90,
    },
    titulo:{
        fontSize:28,
        fontWeight:'bold',
        marginBottom:10,
        color:'#FFD700',
    },
    subtitulo:{
        color:'#FFF',
        fontSize:15,
    },
    campo:{
        backgroundColor:'#1F1E25',
        color:'#FFF',
        fontSize:18,
        marginTop:30,
        borderRadius:7,
        alignItems:'center',
        marginTop:20,
    },
    Button:{
        backgroundColor:'#A370F7',
        padding:15,
        borderRadius:7,
        alignItems:'center',
        marginTop:20,
    },
    buttonText:{
        color:'#FFF',
        fontSize:17,
        fontWeight:'bold'
    }
})