import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/screens/LoginScreen';
import { SignUpScreen } from './src/screens/SignUpScreen';
import { colors } from './src/theme/colors';

// TODO: Uncomment when Amplify is ready
// import { Amplify } from 'aws-amplify';
// import outputs from './amplify_outputs.json';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
  },
};

export default function App() {
  useEffect(() => {
    // TODO: Configure Amplify when amplify_outputs.json exists
    // try {
    //   Amplify.configure(outputs);
    // } catch (error) {
    //   console.log('Amplify configuration not found');
    // }
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <StatusBar style="dark" backgroundColor={colors.background} />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
