import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, useColorScheme } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';

export default function LoginScreen() {
    const colorScheme = useColorScheme();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Link href="/register" asChild>
                <Pressable>
                    {({ pressed }) => (
                        <Ionicons
                            name="add-circle-outline"
                            size={25}
                            color={Colors[colorScheme ?? 'light'].text}
                            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                        />
                    )}
                </Pressable>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
