import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const PostContainer = styled.View`
  background-color: ${props => props.theme.cardBackground};
  margin: 10px;
  border-radius: 8px;
  padding: 15px;
  border-width: 1px;
  border-color: ${props => props.theme.borderColor};
  elevation: 3;
  shadow-color: ${props => props.theme.shadowColor};
  shadow-opacity: ${props => props.theme.shadowOpacity};
  shadow-radius: 4px;
  shadow-offset: 0px 2px;
`;

const PostImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${props => props.theme.borderColor};
`;

const PostTitle = styled.Text`
  color: ${props => props.theme.text};
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

const PostContent = styled.Text`
  color: ${props => props.theme.text};
  font-size: 14px;
  margin-top: 5px;
`;

const NewsPost = ({ post }) => {
  const placeholderImage = 'https://via.placeholder.com/300x200.png?text=News+Image';

  return (
    <PostContainer>
      <PostImage
        source={{ uri: post.image && typeof post.image === 'string' ? post.image : placeholderImage }}
        onError={(e) => console.log('PostImage Error:', e.nativeEvent.error)}
      />
      <PostTitle>{post.title}</PostTitle>
      <PostContent>{post.content}</PostContent>
    </PostContainer>
  );
};

export default NewsPost;