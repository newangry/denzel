import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  FlatList,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import ColorCode from '../../constants/Styles';
import OpacityButton from '../../components/opacityButton';
import {AuthHeader} from '../../components';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        source={require('../../assets/images/bg-pattern.png')}
        style={{flex: 1}}>
        <StatusBar
          animated={true}
          backgroundColor={ColorCode.blue_Button_Color}
        />

        <AuthHeader
          imge={require('../../assets/images/back.png')}
          logo={require('../../assets/images/Logo.png')}
        />
        <Text numberOfLines={2} style={styles.boldText}>
          {'Get ready for \nfew simple questions'}
        </Text>

        <ImageBackground
          style={styles.back}
          source={require('../../assets/images/RectangleCopy.png')}>
          <View style={styles.seprator}>
            <Image source={require('../../assets/images/questioncopy3.png')} />
            <View style={{alignItems: 'center'}}>
              <Text
                style={[
                  styles.boldText,
                  {color: ColorCode.blue_Button_Color, fontSize: 30},
                ]}>
                2
              </Text>

              <Text
                style={[
                  styles.boldText,
                  {
                    color: ColorCode.blue_Button_Color,
                    fontSize: 12,
                    fontWeight: '400',
                  },
                ]}>
                minutes
              </Text>
            </View>
          </View>

          <View style={{width: 0.1, height: 44, backgroundColor: '#004343'}} />
          <View style={styles.seprator}>
            <Image source={require('../../assets/images/questioncopy4.png')} />
            <View style={{}}>
              <Text
                style={[
                  styles.boldText,
                  {color: ColorCode.blue_Button_Color, fontSize: 30},
                ]}>
                7
              </Text>

              <Text
                style={[
                  styles.boldText,
                  {
                    color: ColorCode.blue_Button_Color,
                    fontSize: 12,
                    fontWeight: '400',
                  },
                ]}>
                questions
              </Text>
            </View>
          </View>
        </ImageBackground>

        <ImageBackground
          style={{height: 260, width: 300, alignSelf: 'center', marginTop: 10}}
          source={require('../../assets/images/instruction.png')}
        />

        <ImageBackground
          style={{
            height: 207,
            width: '100%',
            alignSelf: 'center',
            position: 'absolute',
            bottom: 0,
          }}
          source={require('../../assets/images/imgfooter.png')}>
          <Image
            style={{
              width: 120,
              height: 188,
              right: Platform.OS === 'android' ? 10 : 30,
              position: 'absolute',
              bottom: Platform.OS === 'android' ? 130 : 115,
            }}
            source={require('../../assets/images/person.png')}
          />

          <OpacityButton
            pressButton={() => {
              navigation.navigate('SignUp');
            }}
            name={"Let's start"}
            btnTextStyle={{color: ColorCode.blue_Button_Color, fontSize: 18}}
            button={{marginTop: 100}}
          />
        </ImageBackground>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: ColorCode.blue_Button_Color,
  },
  boldText: {
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'center',
    color: ColorCode.white_Color,
    fontFamily: 'HankenGrotesk-Bold',
  },
  back: {
    height: 76,
    width: 300,
    alignSelf: 'center',
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  seprator: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default SignIn;
