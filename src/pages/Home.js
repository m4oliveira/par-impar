import React, {useState} from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home (){

    let [num, setResto] = useState();

    function Calcular(){
	
        let resto = num % 2;
        
        if(resto == 0){
            alert("O número é par!");
        }
        
        else {
            alert("O número é impar!")
        }   
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Impar ou Par?</Text>

            <TextInput onChangeText={setResto} style={styles.campo} placeholder="Digite aqui um número qualquer"/>

            <TouchableOpacity style={styles.botao} onPress={Calcular}>
                <Text style={styles.botaoTexto}>Resultado</Text>
            </TouchableOpacity>
        </View>       
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFE4E1',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo:{
        fontSize:26,
        color:'#000',
        fontWeight:'bold',
        marginBottom:40,
        alignContent: 'center'
    },

      campo:{
        backgroundColor: '#F8F8FF',
        fontSize:18,
        padding:8,
        marginTop:10,
        width:300,
        marginBottom: 20,
        borderRadius:10
    },

    botao:{
        backgroundColor:'#FF1493',
        alignItems: "center",
        padding:15,
        borderRadius:7,
        marginTop:20,
        width:250
    },

    botaoTexto:{
        color: '#000',
        fontSize:17,
        fontWeight: "700",
    }
});