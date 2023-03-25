import React, { type PropsWithChildren, useState } from 'react';
import { useColorScheme, SafeAreaView, Text } from 'react-native';

const Navbar: React.FC<
    PropsWithChildren<{navigation: any}>
> = ({ children, navigation }) => {

    return (
        <SafeAreaView>
            <Text>Navbar</Text>
        </SafeAreaView>
    );
};

export default Navbar;
