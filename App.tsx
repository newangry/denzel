/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// eslint-disable-next-line prettier/prettier
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';

// eslint-disable-next-line prettier/prettier
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Board from './src/pages/Board';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Board />
    </SafeAreaView>
  );
}

export default App;
