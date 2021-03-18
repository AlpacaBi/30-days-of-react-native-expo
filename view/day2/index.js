import React from 'react';
import { StatusBar, View } from 'react-native';

import Weather from './Weather'


function Day2(navigation) {
    const back = () => {
        navigation.pop();
        StatusBar.setBarStyle(0);
    }
    
    return(
        <View style={{flex:1}}>
            <Weather back={back}></Weather>
        </View>
    )
}

export default Day2