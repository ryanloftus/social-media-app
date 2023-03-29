import React, { type PropsWithChildren, useState } from 'react';
import { useColorScheme, View, Button, StyleSheet } from 'react-native';
import { Screen } from '../../App';

const Navbar: React.FC<
    PropsWithChildren<{
        navigation: any;
        currentScreen: Screen;
    }>
> = ({ children, navigation, currentScreen }) => {

    const handleNavigationRequest = (requestedScreen: Screen) => {
        if (requestedScreen !== currentScreen) {
            navigation.navigate(requestedScreen);
        }
    };

    return (
        <View style={styles.navbar}>
            <Button title='Home' onPress={() => handleNavigationRequest(Screen.Feed)}/>
            <Button title='Search' onPress={() => handleNavigationRequest(Screen.Search)}/>
        </View>
    );
};

export default Navbar;

const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
    },
});
