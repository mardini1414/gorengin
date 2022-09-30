import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import images from '../common/images';
import BalanceCardInformation from '../components/BalanceCardInformation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {dataLastVisited} from '../common/data';
import ListCard from '../components/ListCard';

const Home = () => {
  return (
    <View className="h-screen bg-slate-900">
      <View className="flex flex-row items-center justify-between m-4">
        <View>
          <Text className="text-xs text-white">Hello</Text>
          <Text className="text-lg text-white text-bold">Dian Magrib</Text>
        </View>
        <View className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
          <Image source={images.avatar} style={{width: 38, height: 38}} />
        </View>
      </View>
      <BalanceCardInformation />
      <View className="flex flex-row items-center px-2 m-4 border rounded-md border-slate-500">
        <Icon name="search" color="rgb(100, 116, 139)" size={14} />
        <TextInput
          placeholder="Find your favorite gorengan"
          className="py-1"
          placeholderTextColor={'rgb(100, 116, 139)'}
        />
      </View>
      <View className="flex flex-row justify-between mx-4">
        <Text className="font-semibold text-white">Last visited</Text>
        <TouchableOpacity>
          <Text className="text-slate-500">See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={dataLastVisited}
        keyExtractor={item => item.id}
        renderItem={ListCard}
        className="mt-4"
      />
    </View>
  );
};

export default Home;
