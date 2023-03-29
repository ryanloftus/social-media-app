import React, { type PropsWithChildren, useState } from 'react';
import { useColorScheme, SafeAreaView, Text } from 'react-native';
import { Screen } from '../../App';
import Navbar from '../common/navbar';

const Search: React.FC<
    PropsWithChildren<{ navigation: any }>
> = ({ children, navigation }) => {

    return (
        <SafeAreaView>
            <Text>Search screen here</Text>
            <Navbar navigation={navigation} currentScreen={Screen.Search} />
        </SafeAreaView>
    );
};

export default Search;
