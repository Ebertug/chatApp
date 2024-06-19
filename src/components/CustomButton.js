import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({handleOnPress,name}) => {
    return (
    
        <Pressable 
            onPress={()=> handleOnPress()}
            style={ ({pressed}) => [{ backgroundColor: pressed ? '#767676' : '#b7a0ff'}, styles.button]}>
            <Text style={styles.buttonText}>{name}</Text>
        </Pressable>

    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonText:{
        color:'white',
        fontWeight:'bold',
    },
    button:{
        width:'80%',
        height:50,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
    },
})