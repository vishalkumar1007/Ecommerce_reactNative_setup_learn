/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Product from './src/component/Product/Product';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
        <Product/>
    </SafeAreaView>
  );
}

export default App;
