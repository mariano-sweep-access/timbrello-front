import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Text, View } from 'react-native';

const Logo = () => {
  return (
    <View className='flex flex-row items-center'>
      <Text className='text-4xl mr-0.4 text-primary font-calSans'>timbrell</Text>
      <View className="w-5 h-5 rounded-full bg-transparent border-2 border-primary items-center justify-center overflow-hidden relative -mt-[1px]">
        <Ionicons name="qr-code-outline" size={14} color="#23ffb9" className='absolute' />
      </View>
    </View>
  )
}

export default Logo