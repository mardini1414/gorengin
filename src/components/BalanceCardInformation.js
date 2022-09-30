import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const BalanceCardInformation = () => {
  return (
    <View
      className="relative flex items-center justify-center h-40 mx-4 my-6 bg-white rounded-lg"
      style={styles.card}>
      <View className="flex justify-between h-16">
        <Text className="text-xs text-center text-gray-400">Total balance</Text>
        <Text className="text-3xl font-bold text-center text-slate-900">
          Rp.56.000,00
        </Text>
      </View>
      <View className="absolute flex flex-row justify-between w-full px-4 bottom-4">
        <Text className="text-green-500">+ 45.000,34</Text>
        <Text className="text-red-500">- 23.000,12</Text>
      </View>
      <TouchableOpacity className="relative flex items-center justify-center w-10 h-10 mx-auto bg-green-500 rounded-full -bottom-12">
        <Icon name="plus" size={24} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'rgb(15, 23, 42)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default BalanceCardInformation;
