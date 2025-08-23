import cn from 'clsx';
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

interface CustomButtonProps {
  title: string;
  style?: string;
  textStyle?: string;
  leftIcon?: React.ReactNode;
  isLoading?: boolean;
  onPress?: () => void;
  disabled?: boolean;
}

const CustomButton = ({ title = 'Click', style, textStyle, leftIcon, isLoading, onPress, disabled }: CustomButtonProps) => {
  return (
    <TouchableOpacity className={cn('custom-btn', style)} onPress={onPress}>
      {leftIcon}
      <View className='flex-center flex-row'>
        {isLoading ?
          (<ActivityIndicator size='small' color='white' />) :
          (
            <Text className={cn('text-white base-regular font-semibold', textStyle)}>
              {title}
            </Text>
          )
        }
      </View>
    </TouchableOpacity>
  )
}

export default CustomButton