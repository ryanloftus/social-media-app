import React, { type PropsWithChildren, useState } from 'react';
import { useColorScheme, SafeAreaView, Text } from 'react-native';

const Profile: React.FC<
    PropsWithChildren<{}>
> = ({ children }) => {

    return (
        <SafeAreaView>
            <Text>Profile screen here</Text>
        </SafeAreaView>
    );
};

export default Profile;
