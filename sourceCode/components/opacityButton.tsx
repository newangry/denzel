import React ,{useCallback, useEffect, useState}from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ColorCode from '../constants/Styles';



const OpacityButton = (props:any) => {


  return (
    <TouchableOpacity style={[styles.container,props.button]} 
    onPress={props.pressButton}>
     <Text style={[styles.myText,props.btnTextStyle]}>{props.name}</Text>
    </TouchableOpacity>
   
  );
};

const styles = StyleSheet.create({
  container: {
       height: 56,
       width:'70%',
       backgroundColor:ColorCode.button_background ,
       alignSelf:'center',
       borderRadius:hp(1.2),
       fontWeight: '700',
       fontSize: 14,
       color: ColorCode.black_Color,
       justifyContent:'center',
       alignItems:'center'
  },
  myText:{
    color: ColorCode.white_Color,
    fontWeight: '400',
    textAlign: 'center',
    fontSize: hp("2.4%"),
    fontFamily:'ComicNeue-Bold'
  }
 
});

export default OpacityButton;