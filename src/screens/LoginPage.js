import { StyleSheet, Text, View, Image,} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Loading, CustomTextInput, CustomButton } from '../components';
import { login } from '../redux/userSlice';
import { setIsLoading} from '../redux/userSlice';
import { useState } from 'react';

const LoginPage = ({navigation}) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {isLoading} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <Image 
      source={require('../../assets/Images/loginIcon.png')}
      style={styles.logo}/>
      
      
      <CustomTextInput 
        label='E-mail' 
        isSecure={false} 
        placeholder='Enter Your E-mail' 
        onChangeText={(email)=> setEmail(email.toLowerCase())}
        value={email}/>

      <CustomTextInput 
        label='Password' 
        isSecure={true} 
        placeholder='Enter Your Password' 
        onChangeText={(password)=> setPassword(password)}
        value={password}/>

        <CustomButton name='Login' handleOnPress={()=> dispatch(login({email,password}))}></CustomButton>

        <CustomButton name='Signup' handleOnPress={()=> navigation.navigate('Signup')}></CustomButton>

      {isLoading ? <Loading changeIsLoading={() => dispatch(setIsLoading(false))} /> : null}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ddf7ff',
  },
  logo:{
    width:150,
    height:150,
    marginVertical:20
  },
  welcome:{
    fontSize:30,
    fontWeight:'bold',
  },
});

export default LoginPage;