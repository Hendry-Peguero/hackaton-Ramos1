import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Ionicons } from '@expo/vector-icons';
import { FormInput } from '../components/FormInput';
import { colors } from '../theme/colors';
import logo from '../images/logo.png';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import * as Font from 'expo-font';

const loginSchema = z.object({
  identifier: z.string().min(3, 'Mínimo 3 caracteres'),
  password: z.string().min(6, 'Mínimo 6 caracteres'),
});

type LoginForm = z.infer<typeof loginSchema>;

export const LoginScreen = ({ navigation }: any) => {
  const [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    console.log('Login data:', data);
    // TODO: Integrar Amplify Auth
    navigation.replace('Tabs');
  };

  const handleQuickLogin = () => {
    // Navegación directa sin validar credenciales
    navigation.replace('Tabs');
  };

  const handleGoogleLogin = () => {
    console.log('Google login pressed');
  };

  if (!fontsLoaded) {
    return null; // or a loading spinner
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>

      <Text style={styles.title}>Sirena GO</Text>
      <Text style={styles.subtitle}>Tu pedido de Deli, más rápido que nunca.</Text>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <Ionicons name="logo-google" size={20} color={colors.black} />
        <Text style={styles.googleButtonText}>Continuar con Google</Text>
      </TouchableOpacity>

      <Controller
        control={control}
        name="identifier"
        render={({ field: { onChange, value } }) => (
          <FormInput
            value={value}
            onChangeText={onChange}
            placeholder="Correo o número de celular"
            errorMessage={errors.identifier?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <FormInput
            value={value}
            onChangeText={onChange}
            placeholder="Contraseña"
            secureTextEntry
            errorMessage={errors.password?.message}
          />
        )}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleQuickLogin}>
        <Text style={styles.loginButtonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>¿No tienes cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupLink}>Regístrate</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.legalText}>
        Al continuar, aceptas nuestros{' '}
        <Text style={styles.legalLink}>Términos de Servicio</Text> y{' '}
        <Text style={styles.legalLink}>Política de Privacidad</Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 24,
    paddingTop: 60,
    flexGrow: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Pacifico_400Regular',
    textAlign: 'center',
    marginBottom: 8,
    color: colors.oceanBlue,
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray500,
    textAlign: 'center',
    marginBottom: 32,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderWidth: 1,
    borderColor: colors.sandGray,
    borderRadius: 12,
    backgroundColor: colors.white,
    marginBottom: 24,
    gap: 8,
  },
  googleButtonText: {
    fontSize: 16,
    color: colors.black,
  },
  loginButton: {
    height: 48,
    backgroundColor: colors.oceanBlue,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  signupText: {
    color: colors.gray500,
  },
  signupLink: {
    color: colors.oceanBlue,
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  legalText: {
    fontSize: 12,
    color: colors.gray400,
    textAlign: 'center',
    lineHeight: 16,
  },
  legalLink: {
    textDecorationLine: 'underline',
  },
});