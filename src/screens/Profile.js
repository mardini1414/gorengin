import React from 'react';
import {Text, View, Image} from 'react-native';
import images from '../common/images';
import Header from '../components/Header';
import ListProfileMenu from '../components/ListProfileMenu';

const Profile = ({navigation}) => {
  return (
    <View className="h-screen bg-slate-700">
      <View className="mx-4">
        <Header navigation={navigation} />
      </View>
      <View className="flex items-center justify-center h-52">
        <View className="flex items-center justify-center">
          <View className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
            <Image source={images.avatar} style={{width: 54, height: 54}} />
          </View>
          <Text className="mt-2 text-white">Dian Magrib</Text>
        </View>
      </View>
      <ListProfileMenu navigation={navigation} />
    </View>
  );
};

export default Profile;
