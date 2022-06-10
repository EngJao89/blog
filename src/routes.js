import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './pages/Home';
import Search from './pages/Search';
import Detail from './pages/Detail';
import CategoryPost from './pages/CategoryPost';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Home"
        component = {Home}
        options= {{
          headerShown: false
        }}
      />

      <Stack.Screen 
        name="Detail"
        component = {Detail}
        options = {{
          title: 'Detalhes',
          headerTintColor: '#FFF',
          headerStyle: {
          backgroundColor: '#232630'
          }
        }}
      />

      <Stack.Screen 
        name="Category"
        component = {CategoryPost}
        options = {{
          headerTintColor: '#FFF',
          headerStyle: {
          backgroundColor: '#232630'
          }
        }}
      />

      <Stack.Screen 
        name="Search"
        component = {Search}
        options = {{
          title: 'Procurando',
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: '#232630'
          }
        }}
      />
    </Stack.Navigator>
  )
}

export default Routes;