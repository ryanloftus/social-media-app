import React, { type PropsWithChildren, useState } from 'react';
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Button,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SignIn from './sign-in';
import SignUp from './sign-up';

const Login: React.FC<
    PropsWithChildren<{
        onLogin: (userId: string) => void;
    }>
> = ({ children, onLogin }) => {
    
    const isDarkMode = useColorScheme() === 'dark';
    const [isNewUser, setIsNewUser] = useState(false);

    return (
        <View>
            {
                isNewUser ? 
                    <SignUp onSelectLogin={() => setIsNewUser(false)} onCreateAccount={() => {}} /> : 
                    <SignIn onSelectCreateAccount={() => setIsNewUser(true)} onLogin={() => {}} />
            }
        </View>
    );
};

export default Login;
