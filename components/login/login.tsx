import React, { type PropsWithChildren, useState } from 'react';
import { useColorScheme, SafeAreaView } from 'react-native';
import SignIn from './sign-in';
import SignUp from './sign-up';
import { Screen } from '../../App';

const Login: React.FC<
    PropsWithChildren<{
        navigation: any,
    }>
> = ({ children, navigation }) => {
    
    const isDarkMode = useColorScheme() === 'dark';
    const [isNewUser, setIsNewUser] = useState(false);

    const handleCreateAccount = (username: string, password: string) => {
        // call create account api
        // provide user id context to other components
        navigation.navigate(Screen.Feed);
    }

    const handleLogin = (username: string, password: string) => {
        // call login api
        // provide user id context to other components
        navigation.navigate(Screen.Feed);
    }

    return (
        <SafeAreaView>
            {
                isNewUser ? 
                    <SignUp onSelectLogin={() => setIsNewUser(false)} onCreateAccount={handleCreateAccount} /> : 
                    <SignIn onSelectCreateAccount={() => setIsNewUser(true)} onLogin={handleLogin} />
            }
        </SafeAreaView>
    );
};

export default Login;
