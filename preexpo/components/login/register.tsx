import React, { type PropsWithChildren, useState } from 'react';
import { useColorScheme, SafeAreaView, StyleSheet } from 'react-native';
import SignIn from './sign-in';
import SignUp from './sign-up';
import { Screen } from '../../App';
import { DarkTheme, LightTheme } from '../common/styles';

const Register: React.FC<
    PropsWithChildren<{
        navigation: any,
    }>
> = ({ children, navigation }) => {

    const style = useColorScheme() === 'dark' ? styles.dark : styles.light;

    const handleCreateAccount = (username: string, password: string) => {
        // call create account api
        // provide user id context to other components
        navigation.navigate(Screen.Feed);
    }

    // todo: add a welcome new user screen that guides the user to add a profile pic and bio, then start following people
    // todo: add 2fa and forgot password
    return (
        <SafeAreaView style={style}>
            <SignUp onSelectLogin={() => navigation.navigate(Screen.Login)} onCreateAccount={handleCreateAccount} />
        </SafeAreaView>
    );
};

export default Register;

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
