import Logo from '@/components/Logo';
import { images } from '@/constants';
import { LinearGradient } from 'expo-linear-gradient';
import { Slot } from 'expo-router';
import React from 'react';
import { Dimensions, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

export default function AuthLayout() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView className='h-full' keyboardShouldPersistTaps='handled'>
        <View className='w-full relative' style={{ height: Dimensions.get('screen').height }}>
          <ImageBackground source={images.signThree} className='size-full rounded-b-lg' resizeMode='cover' />

          <LinearGradient
            colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.3)']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          />

          <View className='w-full absolute top-20 flex flex-row justify-center'>
            <Logo />
          </View>
        </View>

        <Slot />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}