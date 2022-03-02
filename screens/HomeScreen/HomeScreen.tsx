import React from 'react';
import {Text, View, Button} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import BaseParamList from '../BaseParamList';

import FeedScreen from './FeedScreen';

Ionicons.loadFont();

type Props = NativeStackNavigationProp<BaseParamList, 'Home'>;

const Tab = createBottomTabNavigator();

const ExploreScreen = () => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <Text>Explore</Text>
    </View>
  );
};

const ActivityScreen = () => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <Text>Activity</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <Text>Profile</Text>
    </View>
  );
};

const ReelsScreen = () => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <Text>Reels</Text>
    </View>
  );
};

const HomeScreen: React.FC<Props> = () => {
  const navigation = useNavigation<Props>();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = focused ? 'md-home' : 'md-home-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'ios-earth' : 'ios-earth-outline';
          } else if (route.name === 'Activity') {
            iconName = focused ? 'heart-sharp' : 'heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused
              ? 'person-circle-sharp'
              : 'person-circle-outline';
          } else if (route.name === 'Reels') {
            iconName = focused ? 'ios-play-circle' : 'ios-play-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Reels" component={ReelsScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
