import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Ionicons } from '@expo/vector-icons';
import { FormInput } from '../components/FormInput';
import { colors } from '../theme/colors';

const loginSchema = z.object({
  identifier: z.string().min(3, 'Mínimo 3 caracteres'),
  password: z.string().min(6, 'Mínimo 6 caracteres'),
});

type LoginForm = z.infer<typeof loginSchema>;

export const LoginScreen = ({ navigation }: any) => {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    console.log('Login data:', data);
    // TODO: Amplify signIn integration
    // try {
    //   await signIn({ username: data.identifier, password: data.password });
    // } catch (error) {
    //   console.error('Login error:', error);
    // }
  };

  const handleGoogleLogin = () => {
    console.log('Google login pressed');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>S</Text>
        </View>
      </View>

      <Text style={styles.title}>SirenaGo Deli</Text>
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

      <TouchableOpacity style={styles.loginButton} onPress={handleSubmit(onSubmit)}>
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
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primaryText,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 8,
    color: colors.black,
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
    borderColor: colors.inputBorder,
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
    backgroundColor: colors.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primaryText,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  signupText: {
    color: colors.subtitle,
  },
  signupLink: {
    color: colors.primary,
    textDecorationLine: 'underline',
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