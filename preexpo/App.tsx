import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/login/login';
import Feed from './components/feed/feed';
import Profile from './components/profile/profile';
import { useColorScheme } from 'react-native';
import { HeaderStyle } from './components/common/styles';
import Register from './components/login/register';
import Search from './components/search/search';

const Stack = createNativeStackNavigator();

const App = () => {
    const style = useColorScheme() === 'dark' ? HeaderStyle.dark : HeaderStyle.light;

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Screen.Login}>
                <Stack.Screen name={Screen.Login} component={Login} options={{headerShown: false}} />
                <Stack.Screen name={Screen.Register} component={Register} options={{headerShown: false}} />
                <Stack.Screen name={Screen.Feed} component={Feed} options={style} />
                <Stack.Screen name={Screen.Search} component={Search} options={style} />
                <Stack.Screen name={Screen.Profile} component={Profile} options={style} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export enum Screen {
    Login = 'Login',
    Register = 'Register',
    Feed = 'Feed',
    Search = 'Search',
    Profile = 'Profile',
}

export default App;
