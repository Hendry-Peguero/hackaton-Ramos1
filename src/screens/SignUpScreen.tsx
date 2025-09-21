import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Ionicons } from '@expo/vector-icons';
import { FormInput } from '../components/FormInput';
import { colors } from '../theme/colors';

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

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>S</Text>
        </View>
      </View>

      <Text style={styles.title}>Crear cuenta</Text>
      <Text style={styles.subtitle}>Únete a SirenaGo Deli en segundos.</Text>

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
  signUpButton: {
    height: 48,
    backgroundColor: colors.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  signUpButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primaryText,
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