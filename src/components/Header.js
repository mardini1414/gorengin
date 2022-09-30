import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';

const Header = ({navigation}) => {
  return (
    <TouchableOpacity className="my-4" onPress={() => navigation.goBack()}>
      <MaterialIcon
        name="arrow-back-ios"
        color={'rgb(203, 213, 255)'}
        size={18}
      />
    </TouchableOpacity>
  );
};

export default Header;
