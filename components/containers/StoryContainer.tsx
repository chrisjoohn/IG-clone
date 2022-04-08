import React from 'react';
import styled from 'styled-components/native';
import {View, Text, ScrollView} from 'react-native';

const Wrapper = styled(View)`
  display: flex;
  background: #fff;
`;

const ScrollContainer = styled(ScrollView)`
  width: 100%;
`;

const ScrollContent = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;

const Story = styled(View)`
  height: 70px;
  width: 70px;
  background-color: gray;
  border-radius: 70px;
  margin: 10px 10px 10px 0;
`;

const stories = [null, null, null, null, null, null, null, null, null];

const StoryContainer: React.FC = () => {
  return (
    <Wrapper>
      <ScrollContainer horizontal={true}>
        <ScrollContent>
          {stories.map((story, i) => (
            <Story key={i} />
          ))}
        </ScrollContent>
      </ScrollContainer>
    </Wrapper>
  );
};

export default StoryContainer;
