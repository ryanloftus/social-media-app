import { StyleSheet } from 'react-native';

export type Theme = {
    backgroundPrimary: string;
    backgroundSecondary: string;
    textColor: string;
};

export const DarkTheme: Theme = {
    backgroundPrimary: '#333',
    backgroundSecondary: '#43D',
    textColor: '#FFF',
};

export const LightTheme: Theme = {
    backgroundPrimary: '#EEE',
    backgroundSecondary: '#55f',
    textColor: '#333',
};

export const HeaderStyle = {
    dark: {
        headerStyle: {
            backgroundColor: DarkTheme.backgroundSecondary,
        },
        headerTintColor: DarkTheme.textColor,
    },
    light: {
        headerStyle: {
            backgroundColor: LightTheme.backgroundSecondary,
        },
        headerTintColor: LightTheme.textColor,
    },
};

export const ButtonColor = '#55F';
