import React from 'react';
import { LocalizationProvider } from './src/resources/localizationContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/home';
import Search from './src/screens/search';
import Profile from './src/screens/profile';
import TabBar from './src/screens/components/tab-bar';
import Welcome from './src/screens/welcome';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class App extends React.Component {

  render() {
    const TabScreen = () => (
      <Tab.Navigator tabBar={props => <TabBar {...props} />} initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    )
    return (
      <LocalizationProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="TabScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TabScreen" component={TabScreen} />
            <Stack.Screen name="Welcome" component={Welcome} />
          </Stack.Navigator>
        </NavigationContainer>
      </LocalizationProvider>
    );
  }
};

export default App;
