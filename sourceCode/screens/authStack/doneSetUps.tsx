import {
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import ColorCode from '../../constants/Styles';
import OpacityButton from '../../components/opacityButton';
import {AuthHeader} from '../../components';
import {Show_Toast} from '../../components/toast';
import {setLoading} from '../../redux/reducer';

const DoneSetUps = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [secureText, setSecureText] = useState(true);

  const registerUser = () => {
    let emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let testedEmail = emailRegex.test(email);

    let passworRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    let testPassword = passworRegex.test(password);

    if (firstName == '') {
      Show_Toast('Please Enter First name.');
    } else if (lastName == '') {
      Show_Toast('Please Enter Last name.');
    } else if (userName == '') {
      Show_Toast('Please Enter UserName');
    } else if (email == '') {
      Show_Toast('Please Enter email.');
    } else if (!testedEmail) {
      Show_Toast('Please Enter valid email adress');
    } else if (password == '') {
      Show_Toast('Please Enter Password.');
    } else if (!testPassword) {
      Show_Toast('Please enter valid password.');
    } else if (!terms) {
      Show_Toast('Please select agree terms.');
    } else {
      dispatch(setLoading(true));
      const data = {
        username: userName,
        email: email,
        password: password,
        firstname: firstName,
        lastname: lastName,
        phoneNumber: phone,
      };
    }
  };

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
          myHeading={'Setup'}
        />

        <Text style={[styles.boldText, {color: '#77E6B6', fontSize: 18}]}>
          Step 1 • Done
        </Text>
        <Text
          numberOfLines={1}
          style={[
            styles.boldText,
            {marginTop: 10, fontWeight: '400', fontFamily: 'HankenGrotesk'},
          ]}>
          {'Set up a savings goal'}
        </Text>

        <View
          style={{
            width: '100%',
            height: 0.3,
            backgroundColor: ColorCode.white_Color,
            marginTop: 30,
          }}
        />

        <Text
          style={[
            styles.boldText,
            {color: '#77E6B6', fontSize: 18, marginTop: 20},
          ]}>
          Step 2 • Done
        </Text>
        <Text
          numberOfLines={1}
          style={[
            styles.boldText,
            {marginTop: 10, fontWeight: '400', fontFamily: 'HankenGrotesk'},
          ]}>
          {'Decide how to save for it'}
        </Text>

        <View
          style={{
            width: '100%',
            height: 0.5,
            backgroundColor: ColorCode.white_Color,
            marginTop: 30,
          }}
        />
        <Image
          style={{alignSelf: 'center', marginTop: 30}}
          source={require('../../assets/images/bank.png')}
        />
        <Text style={[styles.boldText, {color: '#77E6B6', fontSize: 18}]}>
          Step 2
        </Text>
        <Text numberOfLines={2} style={[styles.boldText, {marginTop: 10}]}>
          {'Link your bank to \nstart saving'}
        </Text>

        <OpacityButton
          pressButton={() => {
            navigation.navigate('StartScreen');
          }}
          name={"Let's start"}
          btnTextStyle={{color: ColorCode.blue_Button_Color, fontSize: 18}}
          button={{marginTop: 80}}
        />
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
  footer: {
    height: 210,
    width: '100%',
    backgroundColor: ColorCode.white_Color,
    position: 'absolute',
    bottom: -50,
    alignItems: 'center',
  },
});

export default DoneSetUps;
