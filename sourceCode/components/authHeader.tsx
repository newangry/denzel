import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ColorCode from '../constants/Styles';
import { useNavigation } from '@react-navigation/native';



const AuthHeader = (props: any) => {
    const navigation = useNavigation<any>()

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{}}
                onPress={() => { navigation.goBack() }}>
                <Image
                    source={props?.imge}
                />
            </TouchableOpacity>
            {props?.myHeading ?
                <Text style={styles.myText}>{props?.myHeading}</Text>
                :
                <Image
                    style={{ marginLeft: -20 }}
                    source={props?.logo}
                />

            }
            

            <View></View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '10%',
        width: '100%',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'


    },
    myText: {


        color: ColorCode.white_Color,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 34,
        fontFamily: "HankenGrotesk-Bold",
        marginLeft: -20




    }

});

export default AuthHeader;