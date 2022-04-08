import styled from 'styled-components/native';
import React from 'react';
import {View, Image, Text} from 'react-native';

import {Post as Props} from '../../common/PostTypes';

const Wrapper = styled(View)`
  padding: 10px 15px;
`;

const TopBar = styled(View)`
  display: flex;
  justify-content: space-between;
`;

const AuthorDetailContainer = styled(View)`
  display: flex;
  flex-direction: row;
`;

const AuthorDPContainer = styled(Image)`
  height: 30px;
  width: 30px;
  border-radius: 50px;
`;

const AuthorDetail = styled(View)`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
`;

const Username = styled(Text)`
  font-weight: bold;
`;

const Post: React.FC = props => {
  /*
  const {
    author: {username, displayPhoto},
    caption,
    url,
  } = props;
  */
  return (
    <Wrapper>
      <TopBar>
        <AuthorDetailContainer>
          <AuthorDPContainer
            source={{
              uri: 'https://i1.sndcdn.com/artworks-000810672895-5vv94q-t500x500.jpg',
            }}
          />
          <AuthorDetail>
            <Username>iam_doggo</Username>
          </AuthorDetail>
        </AuthorDetailContainer>
        <View style={{height: 400, width: '100%'}} />
      </TopBar>
    </Wrapper>
  );
};

export default Post;
