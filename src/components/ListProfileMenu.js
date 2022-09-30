import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ListProfileMenu = ({navigation}) => {
  return (
    <View className="h-screen pt-10 rounded-t-xl bg-slate-900">
      <View className="flex flex-row items-center justify-between p-2 mx-4">
        <View className="flex flex-row items-center gap-3">
          <View className="p-2 rounded-lg bg-slate-700">
            <Ionicons name="settings" color={'rgb(203, 213, 255)'} size={14} />
          </View>
          <Text className="text-slate-300">Settings</Text>
        </View>
        <MaterialIcon
          name="arrow-forward-ios"
          color={'rgb(203, 213, 225)'}
          size={14}
        />
      </View>
      <View className="flex flex-row items-center justify-between p-2 mx-4">
        <View className="flex flex-row items-center gap-3">
          <View className="p-2 rounded-lg bg-slate-700">
            <Entypo name="wallet" color={'rgb(203, 213, 255)'} size={14} />
          </View>
          <Text className="text-slate-300">Billing details</Text>
        </View>
        <MaterialIcon
          name="arrow-forward-ios"
          color={'rgb(203, 213, 225)'}
          size={14}
        />
      </View>
      <View className="flex flex-row items-center justify-between p-2 mx-4">
        <View className="flex flex-row items-center gap-3">
          <View className="p-2 rounded-lg bg-slate-700">
            <MaterialCommunityIcons
              name="account"
              color={'rgb(203, 213, 255)'}
              size={14}
            />
          </View>
          <Text className="text-slate-300">User informations</Text>
        </View>
        <MaterialIcon
          name="arrow-forward-ios"
          color={'rgb(203, 213, 225)'}
          size={14}
        />
      </View>
      <View className="mx-6 my-10 border-b border-slate-700"></View>
      <View className="flex flex-row items-center justify-between p-2 mx-4">
        <View className="flex flex-row items-center gap-3">
          <View className="p-2 rounded-lg bg-slate-700">
            <Ionicons
              name="information-circle"
              color={'rgb(203, 213, 255)'}
              size={14}
            />
          </View>
          <Text className="text-slate-300">Information</Text>
        </View>
        <MaterialIcon
          name="arrow-forward-ios"
          color={'rgb(203, 213, 225)'}
          size={14}
        />
      </View>
      <TouchableOpacity
        className="flex flex-row items-center justify-between p-2 mx-4"
        onPress={() => navigation.navigate('Login')}>
        <View className="flex flex-row items-center gap-3">
          <View className="p-2 rounded-lg bg-slate-700">
            <Ionicons
              name="md-arrow-forward"
              color={'rgb(203, 213, 255)'}
              size={14}
            />
          </View>
          <Text className="text-slate-300">Logout</Text>
        </View>
        <MaterialIcon
          name="arrow-forward-ios"
          color={'rgb(203, 213, 225)'}
          size={14}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ListProfileMenu;
