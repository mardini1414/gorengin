import React from 'react';
import Header from '../components/Header';
import images from '../common/images';
import Entypo from 'react-native-vector-icons/Entypo';
import {View, Text, Image} from 'react-native';

const ChatHeader = ({navigation}) => {
  return (
    <View className="bg-slate-900">
      <View className="flex flex-row items-center justify-between mx-4">
        <View className="flex flex-row items-center">
          <Header navigation={navigation} />
          <View className="flex flex-row items-center gap-3 ml-0.5">
            <View className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
              <Image source={images.avatar2} style={{width: 28, height: 28}} />
            </View>
            <View>
              <Text className="text-xs text-white">Dwi Guntur Dewa</Text>
              <Text className="text-xs text-green-500">online</Text>
            </View>
          </View>
        </View>
        <View className="flex flex-row gap-3">
          <Entypo name="phone" size={18} color="rgb(203, 213, 255)" />
          <Entypo
            name="dots-three-vertical"
            size={18}
            color="rgb(203, 213, 255)"
          />
        </View>
      </View>
    </View>
  );
};

export default ChatHeader;
