import NotificationsButton from "@/components/NotificationsButton";
import { images } from '@/constants';
import { Fragment } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-white/50 flex-1">
      <FlatList
        data={[
          { id: "1", title: "Cacique Cumbay 715", image: images.houseOne },
          { id: "2", title: "Av. Directorio 3457", image: images.houseTwo },
          { id: "3", title: "San Nicolas 1435", image: images.houseThree },
          { id: "4", title: "Holmberg 2410", image: images.houseFour }
        ]}
        renderItem={({ item }) => (
          <Pressable className="offer-card relative overflow-hidden rounded-xl" android_ripple={{ color: '#ffff22' }}>
            {({ pressed }) => (
              <Fragment>
                {/* Background image */}
                <Image
                  source={item.image}
                  className="w-full h-48"
                  resizeMode="cover"
                />

                {/* Semi-transparent overlay */}
                <View className="absolute inset-0 bg-black/50" />

                {/* Title at bottom-left */}
                <View className="absolute bottom-2 left-2">
                  <Text className="h3-bold text-white leading-tight">
                    {item.title}
                  </Text>
                </View>
              </Fragment>
            )}
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        contentContainerClassName="pb-28 px-5"
        ListHeaderComponent={<View className="flex-between flex-row w-full my-5">
          <View className="flex-start">
            <Text className="small-bold text-primary">Hola</Text>
            <Text className="paragraph-bold text-dark-100">Leandro</Text>
          </View>
          <View className="flex-end">
            <NotificationsButton />
          </View>
        </View>}
      />
    </SafeAreaView>
  );
}
