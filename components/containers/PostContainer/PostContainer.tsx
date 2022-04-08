import React from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';

import {PostContainerProps as Props} from '../../../common/PostTypes';

const Wrapper = styled(View)`
  height: 100%;
  width: 100%;
  background: #fff;
  padding-top: 30px;
`;

const PostContainer: React.FC<Props> = props => {
  const {posts, Component} = props;
  return (
    <Wrapper>{posts && posts.map((post, i) => <Component key={i} />)}</Wrapper>
  );
};

export default PostContainer;
