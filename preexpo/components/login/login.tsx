import React, { type PropsWithChildren, useState } from 'react';
import { useColorScheme, SafeAreaView, StyleSheet } from 'react-native';
import SignIn from './sign-in';
import SignUp from './sign-up';
import { Screen } from '../../App';
import { DarkTheme, LightTheme } from '../common/styles';

const Login: React.FC<
    PropsWithChildren<{
        navigation: any,
    }>
> = ({ children, navigation }) => {

    const style = useColorScheme() === 'dark' ? styles.dark : styles.light;

    const handleLogin = (username: string, password: string) => {
        // call login api
        // provide user id context to other components
        navigation.navigate(Screen.Feed);
    }

    return (
        <SafeAreaView style={style}>
            <SignIn onSelectCreateAccount={() => navigation.navigate(Screen.Register)} onLogin={handleLogin} />
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    dark: {
        color: DarkTheme.textColor,
        backgroundColor: DarkTheme.backgroundPrimary,
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    light: {
        color: LightTheme.textColor,
        backgroundColor: LightTheme.backgroundPrimary,
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
});
