// import React, { useState,useEffect } from "react";
// import {
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     Alert,
//     TextInput,
//     ImageBackground,
//     Button,
//     Pressable,

//     // CustomButton,
//   } from 'react-native';
// import { ScrollView } from "react-native-gesture-handler";
// // import { RollInRight } from "react-native-reanimated";

 
//  // import "@fontsource/oleo-script";
//   //import { ImageBackground } from "react-native";
//  //import CustomButton from '../utils/CustomButton';
// // import AsyncStorage from "@react-native-async-storage/async-storage";
// // import SQLite from 'react-native-sqlite-storage';
// // import { useSelector, useDispatch } from "react-redux";
// // import { setName,setAge } from "../redux/actions";
// // import PushNotification from "react-native-push-notification";



// export default function SelectFruit({navigation})
// {
// return (
 
//       <View style={styles.container1}>
//         <Text style={styles.text}>Fruits</Text>
//         <ScrollView style={styles.container2} >
//             <View>
//                 <Text style={styles.text}>Select Fruit</Text>
//             </View>
//             <Button
//                 title={'Apple'} 
//                 color={'##D9D9D9'}
                
//                 containerViewStyle={styles.buttonStyle}
//                 >
//             </Button>
//             <Button 
//                 title={'Banana'}
//                 color={'#A7BCAE'}
//             >
//             </Button>
//             <Button
//                 title={'Cherry'} 
//                 color={'#9BCCA5'}
//             >    
//             </Button>
//         </ScrollView>
//        </View>
      
       
//     )
// }

//   const styles = StyleSheet.create({
//    container1:{
//     //flexWrap:"wrap",
//     flex:1,
//     alignContent:"flex-start",
//     backgroundColor:'#6CA55D'
//    },
//    buttonStyle:{
//     height:106,
//     width:313,
//     top:30,
//     alignSelf:"center",
//     borderRadius:40,
//    },
   
//    container2:{
//     flexDirection:"column",
//     flex:1,
//     alignContent:"flex-start",
//     backgroundColor:'#6CA55D'
//    },

//    inner1:{
//     backgroundColor:'#D9D9D9',
//     height:106,
//     width:313,
//     top:30,
//     alignSelf:"center",
//     borderRadius:40,
//    },
//    inner2:{
//     backgroundColor:'#A7BCAE',
//     height:106,
//     width:313,
//     top:60,
//     alignSelf:"center",
//     borderRadius:40,
//    },
//    inner3:{
//     backgroundColor:'#9BCCA5',
//     height:106,
//     width:313,
//     top:90,
//     alignSelf:"center",
//     borderRadius:40,
//    },

//    text:{
    // fontSize:28,
    // color:'#000000',
    // fontFamily:'JosefinSans-SemiBold',
    // textAlign:'center',
    // top:10,
//    },



//   })






import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';

const SelectFruit = () => {

  const [Items, setItems] = useState([
    { key: 1, item: 'Apple' },
    { key: 2, item: 'Banana' },
    { key: 3, item: 'Cherry' },
    { key: 4, item: 'Chickoo' },
    { key: 5, item: 'Mango' },
    { key: 6, item: 'Watermelon' },
    { key: 7, item: 'Papaya' },
    { key: 8, item: 'Tomato' },
    { key: 44, item: 'Pineapple' },
    { key: 68, item: 'Lichi' },
    { key: 0, item: 'Orange' },
  ]);
  const [Refreshing, setRefreshing] = useState(false);

//   const onRefresh = () => {
//     setRefreshing(true);
//     setItems([...Items, { key: 69, item: 'Item 69' }]);
//     setRefreshing(false);
//   }

  return (
    
 
    <ScrollView
      style={styles.body}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //       colors={['#ff00ff']}
    //     />
    //   }
    >
          <View style={[styles.card, styles.shadowProp]}>  
          <Text style={styles.header}>  
            Select Fruits
          </Text>  
        </View>
        
        {/* <Text style={styles.headerin}>Fruit</Text> */}
      {
        Items.map((object) => {
          return (
            <View style={styles.item} key={object.key}>
              <Text style={styles.text}>{object.item}</Text>
            </View>
          )
        })
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    header:{
        fontSize:28,
        color:'#ffffffff',
        fontFamily:'JosefinSans-SemiBold',
        textAlign:'center',
        padding:10,
        // marginBottom: 13,  
    },
    // headerin:{
    //     fontSize:28,
    //     color:'#ffffffff',
    //     fontFamily:'JosefinSans-SemiBold',
    //     textAlign:'left',
    //     padding:10,
    // },
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#6CA55D',
  },
  item: {
    margin: 10,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    height: 106,
    width:316,
    borderRadius:15,
  },
  text: {
    color: '#000000',
    margin: 10,
    fontSize:28,
    fontFamily:'JosefinSans-SemiBold',
    textAlign:'center',

  },
  card: {  
    backgroundColor: '#6CA55D',  
    borderRadius: 8,  
    width: '100%',  
    marginVertical: 10, 
    width:360,
    height:73, 
   

  },  
  shadowProp: {  
    // shadowOffset: {width: -5, height: 4},  
    // shadowColor: '#000000',  
    // shadowOpacity: 0.2,  
    // shadowRadius: 3,  
    shadowColor: '#000000',  
    elevation: 30, 
    width:"100%", 
    alignSelf:'top',
  },  
});

export default SelectFruit;