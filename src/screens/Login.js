import React from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import images from '../common/images';

const Login = ({navigation}) => {
  return (
    <View className="flex justify-center h-screen bg-slate-900">
      <Text className="mb-8 text-4xl font-light text-center text-white">
        Welcome!
      </Text>
      <Text className="mb-4 ml-8 font-light text-white">Username :</Text>
      <TextInput className="px-4 mx-8 mb-4 text-white border-2 border-white rounded-3xl" />
      <Text className="mb-4 ml-8 font-light text-white">Password :</Text>
      <TextInput
        className="px-4 mx-8 mb-4 text-white border-2 border-white rounded-3xl"
        secureTextEntry={true}
      />
      <TouchableOpacity
        className="px-10 py-2 mx-8 bg-white rounded-3xl"
        onPress={() => navigation.navigate('Home')}>
        <Text className="text-xl text-center text-slate-500">Login</Text>
      </TouchableOpacity>
      <Text className="my-4 mr-8 font-light text-right text-white underline">
        Forgot password?
      </Text>
      <Text className="font-semibold text-center text-white">OR</Text>
      <View className="mx-8 mt-6">
        <TouchableOpacity className="flex flex-row items-center py-1 pl-2 my-2 bg-white rounded-3xl">
          <Image source={images.google} style={{width: 34, height: 34}} />
          <Text className="ml-4 text-slate-500">Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row items-center py-1 pl-2 my-2 bg-white rounded-3xl">
          <Icon name="facebook" size={32} color="#3b5998" />
          <Text className="ml-4 text-slate-500">Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
