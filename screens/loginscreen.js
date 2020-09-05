import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpactity, Alert } from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class LoginScreen extends Component{
    constructor(){
        super();
        this.state={
emailid:'',
password:''
        }
    }
    signup=(emailid,password)=>{
firebase.auth().createUserWithEmailAndPassword(emailid,password).then((response)=>{
   return Alert.alert("User Added Succesfully")
})
.catch(function(error){
    var errorcode=error.errorcode
    var errormessage=error.message
return Alert.alert(errormessage)
})
    }
    login=(emailid,password)=>{
firebase.auth().signInWithEmailAndPassword(emailid,password).then(()=>{
    return Alert.alert("Succesfully Logined")
})
.catch(function(error){
    var errorcode=error.errorcode
    var errormessage=error.message
return Alert.alert(errormessage)
})
    }
render(){
    return(
        <View>
            <View>
            <Text>Book Santa</Text>    
            </View> 
            <View>
            <TextInput 
            style={styles.loginBox}
            placeholder="xyz@example.com"
            keyboardType="email-address"
            onChangeText={(text)=>{
                this.setState({emailid:text})
            }}
            />

<TextInput 
            style={styles.loginBox}
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(text)=>{
                this.setState({password:text})
            }}
            />

            <TouchableOpactity style={styles.button} 
            onPress={()=>{this.login(this.state.emailid,this.state.password)
            
            }}> 
<Text style={styles.buttonText}>Login</Text>
            </TouchableOpactity>

            <TouchableOpactity style={styles.button} 
            onPress={()=>{this.signup(this.state.emailid,this.state.password)
            
            }}> 
<Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpactity>
            </View>
       

        </View>
    )
}

}
const styles = StyleSheet.create({
container:{ flex:1, backgroundColor:'#F8BE85' },
profileContainer:{ flex:1, justifyContent:'center', alignItems:'center', },
title :{ fontSize:65, fontWeight:'300', paddingBottom:30, color : '#ff3d00' },
loginBox:{ width: 300, height: 40, borderBottomWidth: 1.5, borderColor : '#ff8a65', fontSize: 20, margin:10, paddingLeft:10 },
button:{ width:300, height:50, justifyContent:'center', alignItems:'center', borderRadius:25, backgroundColor:"#ff9800", shadowColor: "#000",
shadowOffset: { width: 0, height: 8, },
shadowOpacity: 0.30, shadowRadius: 10.32, elevation: 16, },
buttonText:{ color:'#ffff', fontWeight:'200', fontSize:20 },
buttonContainer:{ flex:1, alignItems:'center' } })