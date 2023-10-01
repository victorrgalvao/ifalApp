
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

// onde sera recebido os dados do form do login
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    //Onde ficara a logica  de autenticação do login ficara  aqui
    navigation.navigate('Listagem',{
      loggedIn:true,
    });
   
  };

// Tela de login a ser retornada para o app.js
  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor:"#A8D9CE"
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
   backgroundColor:"#5E8C82"
  },
});


export default LoginScreen;
