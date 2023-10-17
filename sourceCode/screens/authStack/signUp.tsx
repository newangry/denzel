

import {
    Image,StyleSheet, Text,
     View, StatusBar,  SafeAreaView, ImageBackground
} from "react-native"
import React, { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native";
import { useDispatch,} from "react-redux";
import ColorCode from "../../constants/Styles";
import OpacityButton from "../../components/opacityButton";
import { AuthHeader } from "../../components";


const SignUp = () => {
   
    const dispatch = useDispatch();
    const navigation = useNavigation<any>()
   


   

    return (
        <SafeAreaView style={styles.main}>
            <ImageBackground
                source={require("../../assets/images/bg-pattern.png")}
                style={{ flex: 1, }} >

                <StatusBar
                    animated={true}
                    backgroundColor={ColorCode.blue_Button_Color} />

                <AuthHeader imge={require("../../assets/images/back.png")}
                    myHeading={"Setup"}
                />


                <Image
                    style={{ alignSelf: 'center' }}
                    source={require("../../assets/images/saving.png")}
                />
                <Text style={[styles.boldText, { color: '#77E6B6', fontSize: 18 }]}>Step 1</Text>
                <Text numberOfLines={1} style={[styles.boldText, { marginTop: 10 }]}>{"Set up a savings goal"}</Text>



                <OpacityButton
                    pressButton={() => { navigation.navigate("SetUpThree") }}
                    name={"Let's start"} btnTextStyle={{ color: ColorCode.blue_Button_Color, fontSize: 18, }}
                    button={{ marginTop: 40 }}
                />




                <View style={styles.footer}>
                    <Text style={[styles.boldText,
                    {
                        color: ColorCode.blue_Button_Color,
                        fontSize: 18,marginTop:30
                    }]}>Step 2</Text>
                    <Text style={[styles.boldText,
                    {
                        color: ColorCode.blue_Button_Color,
                        fontSize: 18, fontWeight: '400',
                        fontFamily: "HankenGrotesk-Medium",
                        marginTop:20
                    }]}>Decide how to save for it</Text>
                    <View style={{
                        width: '100%', height: 0.5,
                        backgroundColor: ColorCode.blue_Button_Color,
                        marginTop:30
                    }} />

                    <Text style={[styles.boldText,
                    {
                        color: ColorCode.blue_Button_Color,
                        fontSize: 18,
                        marginTop:30
                    }]}>Step 3</Text>
                    <Text style={[styles.boldText,
                    {
                        color: ColorCode.blue_Button_Color,
                        fontSize: 18, fontWeight: '400',
                        fontFamily: "HankenGrotesk-Medium",
                        marginTop:20
                    }]}>Link your bank to start saving</Text>
                </View>


            </ImageBackground>
        </SafeAreaView>

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
        height: 338,
        width: "100%",
        backgroundColor: ColorCode.white_Color,
        position: 'absolute',
        bottom: -50,
        alignItems: 'center',

    }

})

export default SignUp;