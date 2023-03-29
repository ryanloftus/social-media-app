import React, { type PropsWithChildren, useState } from 'react';
import { useColorScheme, SafeAreaView, Text } from 'react-native';
import { Screen } from '../../App';
import Navbar from '../common/navbar';

const Feed: React.FC<
    PropsWithChildren<{navigation: any}>
> = ({ children, navigation }) => {

    return (
        <SafeAreaView>
            <Text>Feed screen here</Text>
            <Navbar navigation={navigation} currentScreen={Screen.Feed} />
        </SafeAreaView>
    );
};

export default Feed;
