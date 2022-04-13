import React from 'react'
import { StyleSheet, Text,TextInput,Button, View,Image } from 'react-native';

const App=()=> {
  return (
    <View style={styles.container}>
    <View>
    <Image source = {{uri:require("./assets/bi.png")}}style={{ height: '140px', width: '170px',  alignSelf: 'center', marginTop: 20 }} />

    </View>
    <View style={styles.inputView}>
  <TextInput
    style={styles.Input}
    placeholder="Email"
    placeholderTextColor="#003f5c"
    onChangeText={(email) => setEmail(email)}
  />
</View>
<View style={styles.inputView}>
  <TextInput
    style={styles.Input}
    placeholder="Password"
    placeholderTextColor="#003f5c"
    onChangeText={(Password) => setEmail(Password)}
  />
</View>
    <View>
  <Text style={styles.forgot_button}>Forgot Password?</Text><br></br>
 

    </View>
    <View style={styles.inputView}>
  <TextInput
    style={styles.Input}
    placeholder="Login"
    placeholderTextColor="#003f5c"
    onChangeText={(Password) => setEmail(Password)}
  />
</View>
    


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Input: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
});
export default App