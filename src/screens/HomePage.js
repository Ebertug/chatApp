import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

import { db } from '../../firebaseConfig'
import { collection, addDoc, getDocs } from 'firebase/firestore'

import { CustomButton } from '../components'

const HomePage = () => {
const [data, setData] = useState([])
console.log('>>> All data: ',data[0]);


  const sendData = async() => {
    try {
      const docRef = await addDoc(collection(db, "reactNativelesson"), {
        title: "Zero to Hero",
        content: "React Native tutorial for beginner",
        lesson: 95
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const getData = async()=>{
    const querySnapshot = await getDocs(collection(db, "reactNativelesson"));
      querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      setData([...data, doc.data()])
    });
  }



  return (
    <View style={styles.container}>
      <CustomButton name='Save' handleOnPress={sendData}></CustomButton>
      <CustomButton name='Get' handleOnPress={getData}></CustomButton>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ddf7ff',
  },
})