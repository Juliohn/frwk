import React from 'react';
import {Platform} from 'react-native';
import {useTheme} from 'styled-components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Posts from '../pages/Posts';
import Albums from '../pages/Albums';
import Todos from '../pages/Todos';

const {Navigator, Screen} = createBottomTabNavigator();

export function TabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.active,
        inactiveTintColor: theme.colors.inactive,
        style: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 10,
          height: Platform.OS === 'ios' ? 88 : 58,
        },
      }}>
      <Screen
        name="Posts"
        component={Posts}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="post" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Albums"
        component={Albums}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="postage-stamp" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="To-Dos"
        component={Todos}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="clipboard-list-outline" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
