import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import ChatHeader from '../components/ChatHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {dataChat} from '../common/data';
import ChatBubble from '../components/ChatBubble';

const Chat = ({navigation}) => {
  const [text, setText] = useState('');

  const addChat = data => {
    dataChat.push({
      id: new Date().getTime(),
      userId: 1,
      data,
    });

    setText('');
  };

  return (
    <KeyboardAvoidingView className="justify-between h-full bg-slate-700">
      <ChatHeader navigation={navigation} />
      <FlatList
        data={dataChat}
        renderItem={ChatBubble}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        className="self-center m-4"
        inverted
      />
      <KeyboardAvoidingView className="flex items-center mx-4">
        <View className="flex flex-row items-center justify-center w-full gap-3 mb-3">
          <View className="p-3 rounded-full bg-slate-900">
            <Entypo name="attachment" size={16} color="rgb(203, 213, 255)" />
          </View>
          <View className="w-9/12 rounded-lg bg-slate-500">
            <TextInput
              placeholder="Start typing"
              style={{height: 40, color: '#ffffff', paddingHorizontal: 10}}
              value={text}
              onChangeText={e => setText(e)}
            />
          </View>
          <TouchableOpacity
            className="p-3 rounded-full bg-slate-900"
            onPress={() => addChat(text)}>
            <Ionicons name="send" size={16} color="rgb(203, 213, 255)" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </KeyboardAvoidingView>
  );
};

export default Chat;
