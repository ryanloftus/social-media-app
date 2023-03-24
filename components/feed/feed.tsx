import React, { type PropsWithChildren, useState } from 'react';
import { useColorScheme, SafeAreaView, Text } from 'react-native';

const Feed: React.FC<
    PropsWithChildren<{}>
> = ({ children }) => {

    return (
        <SafeAreaView>
            <Text>Feed screen here</Text>
        </SafeAreaView>
    );
};

export default Feed;
