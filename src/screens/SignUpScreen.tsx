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

const signUpSchema = z.object({
  name: z.string().min(3, 'Mínimo 3 caracteres'),
  identifier: z.string().min(3, 'Mínimo 3 caracteres'),
  password: z.string().min(6, 'Mínimo 6 caracteres'),
  confirmPassword: z.string().min(6, 'Mínimo 6 caracteres'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword'],
});

type SignUpForm = z.infer<typeof signUpSchema>;

export const SignUpScreen = ({ navigation }: any) => {
  const [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  const { control, handleSubmit, formState: { errors } } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpForm) => {
    console.log('SignUp data:', data);
    // TODO: Amplify signUp integration
    // try {
    //   await signUp({
    //     username: data.identifier,
    //     password: data.password,
    //     options: {
    //       userAttributes: {
    //         name: data.name,
    //       },
    //     },
    //   });
    // } catch (error) {
    //   console.error('SignUp error:', error);
    // }
  };

  const handleGoogleSignUp = () => {
    console.log('Google signup pressed');
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
      <Text style={styles.subtitle}>Únete a Sirena GO en segundos.</Text>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignUp}>
        <Ionicons name="logo-google" size={20} color={colors.black} />
        <Text style={styles.googleButtonText}>Registrarse con Google</Text>
      </TouchableOpacity>

      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <FormInput
            value={value}
            onChangeText={onChange}
            placeholder="Nombre completo"
            errorMessage={errors.name?.message}
          />
        )}
      />

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

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value } }) => (
          <FormInput
            value={value}
            onChangeText={onChange}
            placeholder="Confirmar contraseña"
            secureTextEntry
            errorMessage={errors.confirmPassword?.message}
          />
        )}
      />

      <TouchableOpacity style={styles.signUpButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.signUpButtonText}>Registrarse</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>¿Ya tienes cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Inicia sesión</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.legalText}>
        Al registrarte, aceptas nuestros{' '}
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
    color: colors.subtitle,
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
  signUpButton: {
    height: 48,
    backgroundColor: colors.oceanBlue,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  signUpButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  loginText: {
    color: colors.subtitle,
  },
  loginLink: {
    color: colors.oceanBlue,
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  legalText: {
    fontSize: 12,
    color: colors.legal,
    textAlign: 'center',
    lineHeight: 16,
  },
  legalLink: {
    textDecorationLine: 'underline',
  },
});