import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';
import DrawerNavigation from 'react-navigation/DrawerNavigation'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screen0ptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Feed') {
          iconName = focused
              ? 'book'
              : 'book-outline';
          } else if (route. name === 'CreatePost') {
            iconName = focused ? 'create' : 'create-outline';
          }
          return <lonicons name={iconName} size={size} color={color} />;    
      },
    })}
    tabBar0ptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Feed" component={Feed}/>
    <Tab.Screen name="CreatePost" component={CreatePost}/>
  </Tab.Navigator>
  );
}

export default BottomTabNavigator