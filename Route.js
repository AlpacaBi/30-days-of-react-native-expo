import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./Home";
import Day1 from './view/day1'
import Day2 from './view/day2'
import Day3 from './view/day3'

const days = [
  { key:1, route: 'Day1', title:"Day1: A stopwatch", component:Day1 },
  { key:2, route: 'Day2', title:"Day2: A weather app", component:Day2 },
  { key:3, route: 'Day3', title:"Day3: Twitter", component:Day3 },
]

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {props => <Home {...props} days={days} />}
        </Stack.Screen>
        {days.map(item => (
          <Stack.Screen 
            key={item.key} 
            name={item.route} 
            component={item.component}
            options={{title: item.title}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;