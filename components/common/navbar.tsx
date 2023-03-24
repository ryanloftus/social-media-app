import React, { type PropsWithChildren, useState } from 'react';
import { useColorScheme, SafeAreaView, Text } from 'react-native';

const Navbar: React.FC<
    PropsWithChildren<{}>
> = ({ children }) => {

    return (
        <SafeAreaView>
            <Text>Navbar</Text>
        </SafeAreaView>
    );
};

export default Navbar;
