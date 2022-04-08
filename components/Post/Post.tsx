import styled from 'styled-components/native';
import React from 'react';
import { View, Image, Text } from 'react-native';

import { Post as Props } from '../../common/PostTypes';

const Wrapper = styled(View)`
  padding: 10px 0px;
`;

const TopBar = styled(View)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 10px;
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

const MediaContainer = styled(View)`
  min-height: 400px;
  width: 100%;
`;

const Media = styled(Image)`
  width: 100%;
  max-height: 400px;
  height: 400px;
`

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
      </TopBar>
      <MediaContainer >
        <Media
          source={{
            uri: 'https://i1.sndcdn.com/artworks-000810672895-5vv94q-t500x500.jpg',
          }} />
      </MediaContainer>
    </Wrapper>
  );
};

export default Post;
