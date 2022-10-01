import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';
import ChatHeader from '../components/ChatHeader';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {dataChat} from '../common/data';
import ChatBubble from '../components/ChatBubble';

const Chat = ({navigation}) => {
  const [text, setText] = useState('');
  const flatListRef = useRef();

  const scrollToEnd = () => {
    flatListRef.current.scrollToEnd({animated: true});
  };

  useEffect(() => {
    scrollToEnd();
  }, []);

  const addChat = data => {
    dataChat.push({
      id: new Date().getTime(),
      userId: 1,
      data,
    });

    scrollToEnd();
    setText('');
  };

  return (
    <View className="flex-1 bg-slate-700">
      <ChatHeader navigation={navigation} />
      <KeyboardAvoidingView className="flex-1">
        <FlatList
          ref={flatListRef}
          data={dataChat}
          renderItem={ChatBubble}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          className="m-4"
        />
      </KeyboardAvoidingView>
      <View className="flex items-center m-4">
        <View className="flex flex-row items-center justify-center w-full gap-3">
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
      </View>
    </View>
  );
};

export default Chat;
