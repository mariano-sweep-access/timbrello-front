import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import React from 'react'
import { Dimensions, Text, View } from 'react-native'

export default function IndexPage() {
  return (
    <View className='w-full absolute bottom-0' style={{ height: Dimensions.get('screen').height / 2.1 }}>
      <View className='w-full px-5 pb-5'>
        <Text className='h1-5xl-bold text-white'>Tu timbre smart</Text>
        <Text className='h1-5xl-bold text-white'>te espera.</Text>
      </View>

      <View className='bg-white w-full rounded-tr-[10rem] shadow-xl shadow-black h-full' >
        <View className='flex px-14 pt-10 gap-10'>

          <Text className='base-regular font-bold text-4xl'>Vamos.</Text>

          <View className='gap-2'>
            <Text className='base-regular'>Gestioná tus timbres de forma fácil y rápida.</Text>
            <Text className='base-regular'>Vos y quién vos quieras. Sin vueltas.</Text>
          </View>

          <CustomButton title='Registrate' onPress={() => router.push("/sign-up")} />

          <View className='flex flex-row items-center justify-center gap-2'>
            <Text className='base-regular text-gray-100'>Ya tenés una cuenta?</Text>
            <Link className="base-regular color-primary font-semibold" href='/sign-in'>Iniciá sesión</Link>
          </View>
        </View>
      </View>
    </View>
  )
}