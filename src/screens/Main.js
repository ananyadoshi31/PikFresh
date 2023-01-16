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
import { NavigationContainer } from "@react-navigation/native";
import Support from "./Support";
//import { createDrawerNavigator } from "@react-navigation/drawer";
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
//const Drawer = createDrawerNavigator();
export default function Main({navigation})
{
  const onPressHandlerScan=()=>{
    navigation.navigate('SelectFruit')
    
  }
  const onPressHandlerSupport=()=>{
    navigation.navigate('Support')
    
  }
  const onPressHandlerLogin=()=>{
    navigation.navigate('Login')
    
  }
return (
  // <NavigationContainer independent={true} >
  //           <Drawer.Navigator
  //             initialRouteName="Main"
  //           >
  //           <Drawer.Screen
  //             name="Main"
  //             component={Main}
  //           />
  //           </Drawer.Navigator>
      
    
      <View style={styles.container}>
          <ImageBackground 
            source={require('../../assets/Home.png')} 
            style={styles.img}
          >
            <Pressable style={styles.login}
              onPress={onPressHandlerLogin}
            >
              <Text style={styles.loginbutton}>Login</Text>
            </Pressable>
            <Text style={styles.title}>
                PikFresh
            </Text>
            <Text style={styles.goodq}>
                ...A future to good quality
            </Text>
        <Pressable style={styles.button1} 
          onPress={onPressHandlerScan} 
        >
        <Image style = {styles.logo} source = {require('../../assets/scan_img.png')} />
          <Text style={styles.stylebutton1}>Scan</Text>
        </Pressable>
        {/* <Pressable style={styles.button2} >
        <Image style = {styles.logo} source = {require('../../assets/report_img.png')} />
          <Text style={styles.stylebutton2}>Reports</Text>
        </Pressable> */}
        <Pressable style={styles.button3}
            onPress={onPressHandlerSupport} 
        >
        <Image style = {styles.logo} source = {require('../../assets/support_img.png')} />
          <Text style={styles.stylebutton3}>Support</Text>
        </Pressable>
 
            {/* <Button
              title='Scan'
              color='#9bcca5'
              style={styles.button}
              //onPress={onPressHandler}
            /> */}
            </ImageBackground>

            {/* <CustomButton
              title='Scan'
              color='#1eb900'
              
            /> */}
            
       </View>
       //</NavigationContainer>
      
       
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