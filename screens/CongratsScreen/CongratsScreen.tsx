import React from 'react';
import {Text, View, Button} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import BaseParamList from '../BaseParamList';

type Props = NativeStackNavigationProp<BaseParamList, 'Congrats'>;

const CongratsScreen: React.FC<Props> = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'black',
      }}>
      <Text style={{fontSize: 34, fontWeight: 'bold', color: '#fff'}}>
        Hello World!
      </Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default CongratsScreen;
