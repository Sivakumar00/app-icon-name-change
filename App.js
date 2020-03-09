import React, {useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Platform} from 'react-native';
import {changeIcon} from 'react-native-change-icon';

const App = () => {
  useEffect(() => {}, []);

  const handleOnClick = () => {
    if (Platform.OS === 'ios') {
      changeIcon('app_icon2').then(() => {
        console.log('changed');
      });
    } else {
      changeIcon('appicontwo').then(() => {
        console.log('android changed');
      });
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={handleOnClick}>
        <Text>click</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
