
// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   ScrollView,
//   RefreshControl,
// } from 'react-native';

// const SelectFruit = () => {
// //   const onPressHandler = () => {
// //     navigation.navigate('Main')
// //     //navigation.goBack();
// // }
  

//   const [Items, setItems] = useState([
//     { key: 1, item: 'Apple' },
//     { key: 2, item: 'Banana' },
//     { key: 3, item: 'Cherry' },
//     { key: 4, item: 'Chickoo' },
//     { key: 5, item: 'Mango' },
//     { key: 6, item: 'Watermelon' },
//     { key: 7, item: 'Papaya' },
//     { key: 8, item: 'Tomato' },
//     { key: 44, item: 'Pineapple' },
//     { key: 68, item: 'Lichi' },
//     { key: 0, item: 'Orange' },
//   ]);
//   const [Refreshing, setRefreshing] = useState(false);

// //   const onRefresh = () => {
// //     setRefreshing(true);
// //     setItems([...Items, { key: 69, item: 'Item 69' }]);
// //     setRefreshing(false);
// //   }

//   return (
    
 
//     <ScrollView
//       style={styles.body}
//     //   refreshControl={
//     //     <RefreshControl
//     //       refreshing={Refreshing}
//     //       onRefresh={onRefresh}
//     //       colors={['#ff00ff']}
//     //     />
//     //   }
//     >
//           <View style={[styles.card, styles.shadowProp]}>  
//           <Text style={styles.header}>  
//             Select Fruits
//           </Text>  
//         </View>
        
//         {/* <Text style={styles.headerin}>Fruit</Text> */}
//       {
//         Items.map((object) => {
//           return (
//             <View style={styles.item} key={object.key}>
//               <Text style={styles.text}>{object.item}</Text>
//             </View>
//           )
//         })
//       }
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//     header:{
//         fontSize:28,
//         color:'#ffffffff',
//         fontFamily:'JosefinSans-SemiBold',
//         textAlign:'center',
//         padding:10,
//         // marginBottom: 13,  
//     },
//     // headerin:{
//     //     fontSize:28,
//     //     color:'#ffffffff',
//     //     fontFamily:'JosefinSans-SemiBold',
//     //     textAlign:'left',
//     //     padding:10,
//     // },
//   body: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#6CA55D',
//   },
//   item: {
//     margin: 10,
//     backgroundColor: '#D9D9D9',
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf:'center',
//     height: 106,
//     width:316,
//     borderRadius:15,
//   },
//   text: {
//     color: '#000000',
//     margin: 10,
//     fontSize:28,
//     fontFamily:'JosefinSans-SemiBold',
//     textAlign:'center',

//   },
//   card: {  
//     backgroundColor: '#6CA55D',  
//     borderRadius: 8,  
//     width: '100%',  
//     marginVertical: 10, 
//     width:360,
//     height:73, 
   

//   },  
//   shadowProp: {  
//     // shadowOffset: {width: -5, height: 4},  
//     // shadowColor: '#000000',  
//     // shadowOpacity: 0.2,  
//     // shadowRadius: 3,  
//     shadowColor: '#000000',  
//     elevation: 30, 
//     width:"100%", 
//     //alignSelf:'top',
//   },  
// });

// export default SelectFruit;



import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SelectFruit = ({navigation}) => {
const recordVideo=()=>{
  navigation.navigate("Recorder");
};

  return (
    
 
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.item} onPress={()=>recordVideo()}>
          <Text style={styles.text}>
            Apple
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>
            Mango
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>
            Banana
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>
            Tomato
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>
            Orange
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>
            Banana
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>
            Watermelon
          </Text>
        </TouchableOpacity>
      </View>
      
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
    //alignSelf:'top',
  }, 
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#6CA55D',  
  } 
});

export default SelectFruit;