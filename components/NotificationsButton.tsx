import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function NotificationsButton() {
  const notifications = 10;

  return (
    <TouchableOpacity className='cart-btn' onPress={() => { }}>
      <SimpleLineIcons name="bell" size={20} color="white" />

      {notifications > 0 && (
        <View className='cart-badge'>
          <Text className='small-bold text-white'>{notifications}</Text>
        </View>
      )}

    </TouchableOpacity>
  )
}