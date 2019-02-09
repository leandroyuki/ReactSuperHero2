import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import ProfileScreen from './screens/Profile/Index';
import SearchScreen from './screens/Search/Index';

const AppNavigator = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

// export default createAppContainer(AppNavigator);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return (<AppContainer />);
  }
};


