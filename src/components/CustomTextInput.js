import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = (props) => {
    return (
    <View style={styles.inputContainer}>
        <Text style={styles.label}>{props.label}</Text>

        <TextInput
            secureTextEntry={props.isSecure}
            placeholder={props.placeholder}
            style={styles.input}
            onChangeText={props.onChangeText}
            value={props.value}
        />
    </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    inputContainer: {
        width:'80%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#ddf7ff',
    },
    input:{
        borderBottomWidth:0.5,
        width:'100%',
        height:50,
        borderRadius:10,
        marginVertical:10,
        paddingLeft:8,
    },
    label:{
        fontWeight:'bold',
        alignSelf:'flex-start',
        fontSize:16,
    },
})