import React from 'react';
import {View, Text} from 'react-native';

const ChatBubble = ({item}) => {
  return (
    <View>
      {item.userId === 1 ? (
        <View className="flex flex-row justify-end">
          <View className="p-4 mb-4 w-min bg-slate-900 rounded-t-md rounded-bl-md">
            <Text className="text-slate-50">{item.data}</Text>
          </View>
        </View>
      ) : (
        <View className="flex flex-row justify-start">
          <View className="p-4 mb-4 w-min bg-slate-800 rounded-t-md rounded-br-md">
            <Text className="text-slate-50">{item.data}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default ChatBubble;
