import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DoneSetUps,
  SetUpThree,
  SignIn,
  SignUp,
  StartScreen,
} from '../screens/authStack';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'StartScreen'}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SetUpThree" component={SetUpThree} />
      <Stack.Screen name="DoneSetUps" component={DoneSetUps} />
      <Stack.Screen name="StartScreen" component={StartScreen} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
