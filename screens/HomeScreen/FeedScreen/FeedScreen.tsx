import React from 'react';
import {View, Text} from 'react-native';

const FeedScreen: React.FC = () => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <Text>Feed Screen</Text>
    </View>
  );
};

export default FeedScreen;
