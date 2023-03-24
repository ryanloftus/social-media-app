import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/login/login';
import Feed from './components/feed/feed';
import Profile from './components/profile/profile';

const Stack = createNativeStackNavigator();

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Screen.Login}>
                <Stack.Screen name={Screen.Login} component={Login} />
                <Stack.Screen name={Screen.Feed} component={Feed} />
                <Stack.Screen name={Screen.Profile} component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export enum Screen {
    Login = 'Login',
    Feed = 'Feed',
    Profile = 'Profile',
}

export default App;
