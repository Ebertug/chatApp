import { StyleSheet, Text, View,ActivityIndicator,Pressable } from 'react-native'
import React from 'react'

const Loading = ({changeIsLoading}) => {
    return (
        <View style={styles.container}>
            <Pressable 
                style={[{},styles.closeButton]}
                onPress={() => changeIsLoading()}>
                <Text style={styles.closeText}>X</Text>
            </Pressable>
            <ActivityIndicator size={'large'} color={'#ddf7ff'}/>
            <Text style={styles.loadingText}>Loading...</Text>

        </View>
    ) 
}

export default Loading
const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'absolute',
        backgroundColor:'#FFCD69',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    loadingText:{
        fontWeight:'bold',
        fontSize:16,
    },
    closeText:{
        fontWeight:'bold',
        fontSize:24,
        color:'white'
    },
    closeButton:{
        width:50,
        height:50,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:24,
        position:'absolute',
        top:50,
        right:10,
    },
})