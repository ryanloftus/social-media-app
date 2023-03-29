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

const SignUp: React.FC<
    PropsWithChildren<{
        onCreateAccount: (username: string, password: string) => void;
        onSelectLogin: () => void;
    }>
> = ({ children, onCreateAccount, onSelectLogin }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Username</Text>
            <TextInput placeholder='Enter a username' onChangeText={(text) => setUsername(text)}></TextInput>
            <Text>Password</Text>
            <TextInput placeholder='Enter a password' secureTextEntry={true} onChangeText={(text) => setPassword(text)}></TextInput>
            <Button title='Create Account' onPress={() => onCreateAccount(username, password)} color={ButtonColor}></Button>
            <Text>Already have an account?</Text>
            <Button title='Login' onPress={onSelectLogin} color={ButtonColor}></Button>
        </View>
    );
};

export default SignUp;
