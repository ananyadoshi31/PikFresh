import React, { useState,useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TextInput,
    ImageBackground,
    Button,
    Pressable,

    // CustomButton,
  } from 'react-native';
// import { RollInRight } from "react-native-reanimated";

 
 // import "@fontsource/oleo-script";
  //import { ImageBackground } from "react-native";
 //import CustomButton from '../utils/CustomButton';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import SQLite from 'react-native-sqlite-storage';
// import { useSelector, useDispatch } from "react-redux";
// import { setName,setAge } from "../redux/actions";
// import PushNotification from "react-native-push-notification";

// const db =SQLite.openDatabase(
//     {
//         name:'MainDB',
//         location:'default',
//     },
//     ()=>{ },
//     error=>{console.log(error)}
// );

export default function ViewProfile({navigation})
{
return (
 
      <View style={styles.container}>
          <Text>
            hello
          </Text>
            
       </View>
      
       
    )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title:{
        color:"#0B5635",
        textAlign:'center',
        fontSize:48,
        fontFamily:'OleoScript-Regular',
        marginTop:80,

    },
    goodq:{
      color:"#0B5635",
      marginLeft:160,
      fontSize:20,
      fontFamily:'OleoScript-Regular',
    },
    img:{
      height:'100%',
      width:'100%'
    },
    stylebutton1:{
      //flex:1,
      color:"#0B5635",
      marginRight:170,
      fontSize:36,
      bottom:55,
      fontFamily:'OleoScript-Regular',
      
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    stylebutton2:{
      //flex:1,
      color:"#0B5635",
      fontSize:36,
      marginRight:130,
      bottom:55,
      fontFamily:'OleoScript-Regular',
      textAlign:'left',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    stylebutton3:{
      //flex:1,
      color:"#0B5635",
      marginRight:125,
      bottom:55,
      fontSize:36,
      fontFamily:'OleoScript-Regular',
      textAlign:'left',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    button1: {
      textAlign:'left',
      backgroundColor:"#9bcca5",
      fontSize:36,
      fontFamily:'OleoScript-Regular',
      alignItems: 'center',
      justifyContent: 'center',
      width:316,
      height:91,
      marginTop:170,
      marginLeft:50,
      marginRight:50,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius:20,

      
    },
    button2: {
      backgroundColor:"#9bcca5",
      fontSize:36,
      fontFamily:'OleoScript-Regular',
      alignItems: 'center',
      justifyContent: 'center',
      width:316,
      height:91,
      //flexDirection: "centr",
      marginTop:25,
      marginLeft:50,
      marginRight:50,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius:20,


      
    },
    button3: {
      backgroundColor:"#9bcca5",
      fontSize:36,
      fontFamily:'OleoScript-Regular',
      alignItems: 'center',
      justifyContent: 'center',
      width:316,
      height:91,
      //flexDirection: "centr",
      marginTop:25,
      marginLeft:50,
      marginRight:50,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius:20,

      
    },
    logo:{
      width:55,
      height:60,
      marginTop:45,
      marginLeft:240,
    },
    login:{
      backgroundColor:'#ffffff',
      
    },
    loginbutton:{
      color:'#000000',
      fontFamily:'JosefinSans-SemiBold',
      fontSize:22,
      width:100,
      height:45,
      left:330,
      
    }
    
  })