import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Login from './components/login/login';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [userId, setUserId] = useState('');
    const [activeScreen, setActiveScreen] = useState(Screen.Login);

    const handleLogin = (userId) => {
        setUserId(userId);
        setActiveScreen(Screen.Feed);
    };

    let activeView;
    if (activeScreen === Screen.Login) {
        activeView = <Login onLogin={handleLogin} />
    } else if (activeScreen === Screen.Feed) {
        activeView = undefined
    } else {
        activeView = undefined
    }

    return (
        <SafeAreaView style={backgroundStyle}>
            {activeView}
        </SafeAreaView>
    );
};

enum Screen {
    Login,
    Feed,
    Profile,
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
