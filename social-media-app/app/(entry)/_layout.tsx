import { Link, Stack, useNavigation } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { StackActions } from '@react-navigation/native';

export const unstable_settings = {
    initialRouteName: 'login'
}

export default function LoginLayout() {
    return (
        <Stack>
            <Stack.Screen name="login" options={{title: 'Login'}} />
            <Stack.Screen name="register" options={{title: 'Register'}} />
        </Stack>
    );
}
