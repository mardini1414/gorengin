import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Chat from '../../screens/Chat';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {View, StyleSheet} from 'react-native';
import Location from '../../screens/Location';
import Scan from '../../screens/Scan';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'rgb(15, 23, 42)',
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: 'rgb(100, 116, 139)',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarStyle: {display: 'none'},
          headerShown: false,
          tabBarIcon: ({color}) => (
            <IonicIcon name="chatbox" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="QrScan"
        component={Scan}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View
              className="relative p-1 bg-white rounded bottom-4"
              style={styles.qrScan}>
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={32}
                color={'rgb(15, 23, 42)'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Entypo name="location-pin" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  qrScan: {
    shadowColor: 'rgb(15, 23, 42)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 10,
  },
});

export default Tabs;
