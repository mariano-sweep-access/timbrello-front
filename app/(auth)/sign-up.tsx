import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Dimensions, Text, View } from 'react-native'

export default function SignUpPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ firstname: '', lastname: '', email: '', password: '' });

  const submit = () => {
    if (!form.email || !form.password) Alert.alert('Error', 'Por favor, complete todos los campos.');

    setIsSubmitting(true);

    try {
      // Call Appwrite API

      Alert.alert('Success', 'Login exitosamente!');
      // router.replace('/');
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al iniciar sesión.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <View className='bg-white w-full absolute bottom-0 rounded-tr-[10rem] shadow-xl shadow-black' style={{ height: Dimensions.get('screen').height / 1.7 }}>
      <View className='flex px-14 pt-10 gap-10'>

        <Text className='font-bold text-4xl'>Bienvenido.</Text>

        <View className='gap-10'>
          <CustomInput placeholder="Nombre" value={form.firstname} onChangeText={text => setForm({ ...form, firstname: text })} />
          <CustomInput placeholder="Apellido" value={form.lastname} onChangeText={text => setForm({ ...form, lastname: text })} />
          <CustomInput placeholder="Email" value={form.email} onChangeText={text => setForm({ ...form, email: text })} />
          <CustomInput placeholder="Contraseña" secureTextEntry={true} value={form.password} onChangeText={text => setForm({ ...form, password: text })} />
        </View>

        <CustomButton title='Registrate' onPress={submit} isLoading={isSubmitting} />

        <View className='flex flex-row items-center justify-center gap-2'>
          <Text className='base-regular text-gray-100'>Ya tenés una cuenta?</Text>
          <Link className="base-regular font-semibold color-primary" href='/sign-in'>Iniciar sesión</Link>
        </View>
      </View>
    </View>
  )
}