

import {
    StyleSheet, 
     TouchableOpacity,StatusBar, ImageBackground
} from "react-native"
import React, { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import ColorCode from "../../constants/Styles";


const StartScreen = () => {
    const { loading } = useSelector<any, any>((store) => store.sliceReducer);
    const dispatch = useDispatch();
    const navigation = useNavigation<any>()




    return (
        <ImageBackground
            source={require("../../assets/images/bg.png")}
            style={{ flex: 1,marginTop:-50 }} >

            <StatusBar
                animated={true}
                backgroundColor={ColorCode.blue_Button_Color} />
            <TouchableOpacity 
            onPress={()=>{navigation.navigate("SignIn")}}
            activeOpacity={1}
            style={{ height: 310, width: "100%", position: 'absolute', bottom: 0 }}>
                <ImageBackground
                    style={{ height: 310, width: "100%", position: 'absolute', bottom: 0 }}
                    source={require("../../assets/images/welcome.png")}
                >
                </ImageBackground>
            </TouchableOpacity>
        </ImageBackground>
        

    )

}



const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: ColorCode.blue_Button_Color
    },
    boldText: {
        fontWeight: "600",
        fontSize: 24,
        textAlign: 'center',
        color: ColorCode.white_Color,
        fontFamily: "HankenGrotesk-Bold",


    },
    footer: {
        height: 210,
        width: "100%",
        backgroundColor: ColorCode.white_Color,
        position: 'absolute',
        bottom: -50,
        alignItems: 'center',

    }

})

export default StartScreen;