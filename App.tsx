import React, { type PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Button,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Login: React.FC<
    PropsWithChildren<{
        onLogin: any;
    }>
> = ({ children, onLogin }) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View>
            <Text>Login</Text>
            <TextInput placeholder='Username'></TextInput>
            <Text>Password</Text>
            <TextInput placeholder='Password' secureTextEntry={true}></TextInput>
            <Button title='Login' onPress={onLogin}></Button>
        </View>
    );
};

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <Login></Login>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
