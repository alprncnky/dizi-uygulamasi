import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/home';
import Search from './src/screens/search';
import Profile from './src/screens/profile';
import TabBar from './src/screens/components/tab-bar';

const Tab = createBottomTabNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator tabBar={props => <TabBar {...props} />} initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
