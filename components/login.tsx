import React, { type PropsWithChildren, useState } from 'react';
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
        onLogin: (username: string, password: string) => void;
        onSelectCreateAccount: () => void;
    }>
> = ({ children, onLogin, onSelectCreateAccount }) => {
    
    const isDarkMode = useColorScheme() === 'dark';
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Login</Text>
            <TextInput placeholder='Username' onChangeText={(text) => setUsername(text)}></TextInput>
            <Text>Password</Text>
            <TextInput placeholder='Password' secureTextEntry={true} onChangeText={(text) => setPassword(text)}></TextInput>
            <Button title='Login' onPress={() => onLogin(username, password)}></Button>
            <Text>Don't have an account?</Text>
            <Button title='Create an Account' onPress={onSelectCreateAccount}></Button>
        </View>
    );
};

export default Login;
