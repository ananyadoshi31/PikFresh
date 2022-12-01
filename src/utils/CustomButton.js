import React from 'react'

import{
    Pressable,
    Text,
    StyleSheet,
} from 'react-native'

const AnnuButton =(props)=>{
    return(
        <Pressable
        onPress={props.onPressFunction}
        hitSlop={{top:10,bottom:10,right:10,left:10}}
        android_ripple={{color:'#771'}}
        style={({pressed}) =>[
          {backgroundColor:pressed?'#dddddd':props.color},
          styles.button,
          {...props.style}
        ]}
      >
        <Text style={styles.text}>
          {props.title}
        </Text>
      </Pressable>
    )
}




const styles=StyleSheet.create({
    body:{
        flex:1,
        alignItems:'center',
      },
      input:{
        width:200,
        borderWidth:1,
        borderColor:'#555',
        borderRadius:5,
        textAlign:'center',
        fontSize:20,
      },
      text:{
        color:'#000000',
        fontSize:20,
        margin:10,
        textAlign:'center',
    
      },
})

export default AnnuButton