import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    NavigationContainer: ({children}) => <>{children}</>,
  };
});

jest.mock('@react-navigation/native-stack', () => {
  return {
    createNativeStackNavigator: () => ({
      Navigator: ({children}) => <>{children}</>,
      Screen: ({children}) => <>{children}</>,
    }),
  };
});

jest.mock('@react-navigation/bottom-tabs', () => {
  return {
    createBottomTabNavigator: () => ({
      Navigator: ({children}) => <>{children}</>,
      Screen: ({children}) => <>{children}</>,
    }),
  };
});

it('renders correctly', () => {
  render(<App />);
});
