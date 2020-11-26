import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Details from '../pages/Details';

const App = createStackNavigator();

const Routes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
    initialRouteName="Details"
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Details" component={Details} />
  </App.Navigator>
);

export default Routes;
