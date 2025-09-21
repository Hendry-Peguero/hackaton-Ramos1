# SirenaGo Deli App

Aplicación React Native con Expo para login y registro de usuarios.

## Instalación de dependencias

```bash
# Navegación y formularios
npm i @react-navigation/native @react-navigation/native-stack
npm i react-native-screens react-native-safe-area-context
npm i react-hook-form zod @hookform/resolvers
npm i react-native-vector-icons

# Opcional - Amplify (ya incluido)
npm i aws-amplify @aws-amplify/auth
```

## Cómo ejecutar

```bash
npx expo start
```

Si el código QR no conecta, usa:
```bash
npx expo start --tunnel
```

## Estructura del proyecto

```
src/
  screens/
    LoginScreen.tsx    # Pantalla de inicio de sesión
    SignUpScreen.tsx   # Pantalla de registro
  components/
    FormInput.tsx      # Input reutilizable con validación
  theme/
    colors.ts          # Colores del tema
```

## Funcionalidades

- ✅ Navegación entre Login y SignUp
- ✅ Validación de formularios con react-hook-form + zod
- ✅ Diseño según mockup con colores personalizados
- ✅ Botones de Google (stubs)
- 🔄 Integración con Amplify (TODOs marcados)

## Notas

- Los iconos de react-native-vector-icons ya están soportados en Expo
- La integración con Amplify está preparada pero comentada
- Los formularios actualmente hacen console.log de los datos