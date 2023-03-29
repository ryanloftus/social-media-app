import React, { type PropsWithChildren, useState } from 'react';
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Button,
} from 'react-native';
import { ButtonColor } from '../common/styles';

const SignIn: React.FC<
    PropsWithChildren<{
        onLogin: (username: string, password: string) => void;
        onSelectCreateAccount: () => void;
    }>
> = ({ children, onLogin, onSelectCreateAccount }) => {

    const theme = useColorScheme();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <TextInput placeholder='Username' onChangeText={(text) => setUsername(text)}></TextInput>
            <TextInput placeholder='Password' secureTextEntry={true} onChangeText={(text) => setPassword(text)}></TextInput>
            <Button title='Login' onPress={() => onLogin(username, password)} color={ButtonColor}></Button>
            <Text>Don't have an account?</Text>
            <Button title='Create an Account' onPress={onSelectCreateAccount} color={ButtonColor}></Button>
        </View>
    );
};

export default SignIn;
