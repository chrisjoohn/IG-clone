import React from 'react';
import {View, Image} from 'react-native';
import styled from 'styled-components/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import StoryContainer from '../../../components/containers/StoryContainer';

const TopBar = styled(View)`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: #fff;
`;

const TopLeftBtnGrp = styled(View)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

const LogoContainer = styled(View)`
  margin-left: 10px;
`;

const Logo = styled(Image)`
  height: 40px;
  width: 100px;
`;

const StyledIcon = styled(Ionicons)``;

const FeedScreen: React.FC = () => {
  return (
    <View>
      <TopBar>
        <LogoContainer>
          <Logo source={require('../../../assets/images/ig_text_logo.png')} />
        </LogoContainer>
        <TopLeftBtnGrp>
          <StyledIcon
            name="ios-logo-react"
            size={28}
            color="black"
            style={{marginRight: 30}}
          />
          <StyledIcon
            name="ios-chatbox-ellipses-outline"
            size={28}
            color="black"
            style={{marginRight: 20}}
          />
        </TopLeftBtnGrp>
      </TopBar>
      <StoryContainer />
    </View>
  );
};

export default FeedScreen;
