import React from 'react';
import {View, Text, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const ListCard = ({item}) => {
  return (
    <View className="flex flex-row items-center justify-between mx-4 mb-4">
      <View className="flex flex-row gap-3">
        <Image
          source={{uri: item.image}}
          resizeMode="cover"
          style={{height: 50, width: 50, borderRadius: 6}}
        />
        <View>
          <Text className="text-sm text-white">{item.name}</Text>
          <Text className="text-xs text-slate-500">{item.description}</Text>
        </View>
      </View>
      <View className="p-1 rounded-full bg-slate-700">
        <Entypo name="location-pin" size={12} color="#ffffff" />
      </View>
    </View>
  );
};

export default ListCard;
