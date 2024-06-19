import { StyleSheet, Text, View,SafeAreaView, Image, Pressable} from 'react-native'
import { useState } from 'react';
import { CustomTextInput, CustomButton } from '../components'



const SignupPage = ({navigation}) => {

  const [name, setName ] = useState('')
  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../assets/Images/signUpIcon.png')}
          style={styles.logo}/>
        <Text style={styles.signUp}>Sign Up</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <CustomTextInput 
          label='Name' 
          isSecure={false} 
          placeholder='Enter Your Name' 
          onChangeText={setName}
          value={name}/>

        <CustomTextInput 
          label='E-mail' 
          isSecure={false} 
          placeholder='Enter Your E-mail' 
          onChangeText={setEmail}
          value={email}/>

        <CustomTextInput 
          label='Password' 
          isSecure={true} 
          placeholder='Enter Your Password' 
          onChangeText={setPassword}
          value={password}/>
      </View>
      
      <View style={styles.signUpContainer}>
      <CustomButton name='Signup' handleOnPress={()=> console.log(name," ",email," ",password)}/>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={{fontWeight:'bold'}}>Already have an account? Login</Text>
      </Pressable>
        
      </View>
    </SafeAreaView>
    
  )
}

export default SignupPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ddf7ff',
  },
  signUp:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:30,
  },
  logoContainer:{
    flex:2,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:50,
  },
  inputContainer:{
    flex:2,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical:20,
    
  },
  signUpContainer:{
    flex:2,
    width:'100%',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  logo:{
    width:130,
    height:130,
    marginVertical:20
  }
})