import React, { type PropsWithChildren, useState } from 'react';
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Button,
} from 'react-native';

const SignUp: React.FC<
    PropsWithChildren<{
        onCreateAccount: (username: string, password: string) => void;
        onSelectLogin: () => void;
    }>
> = ({ children, onCreateAccount, onSelectLogin }) => {

    const isDarkMode = useColorScheme() === 'dark';
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Create an Account</Text>
            <Text>Username</Text>
            <TextInput placeholder='Enter a username' onChangeText={(text) => setUsername(text)}></TextInput>
            <Text>Password</Text>
            <TextInput placeholder='Enter a password' secureTextEntry={true} onChangeText={(text) => setPassword(text)}></TextInput>
            <Button title='Create Account' onPress={() => onCreateAccount(username, password)}></Button>
            <Text>Already have an account?</Text>
            <Button title='Login' onPress={onSelectLogin}></Button>
        </View>
    );
};

export default SignUp;
