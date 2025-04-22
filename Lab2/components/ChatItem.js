import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const ChatContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
  margin: 5px 10px;
  border-radius: 8px;
  background-color: ${props => props.theme.cardBackground};
  border-width: 1px;
  border-color: ${props => props.theme.borderColor};
  elevation: 2;
  shadow-color: ${props => props.theme.shadowColor};
  shadow-opacity: ${props => props.theme.shadowOpacity};
  shadow-radius: 3px;
  shadow-offset: 0px 1px;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 15px;
  border-width: 1px;
  border-color: ${props => props.theme.accent};
`;

const ChatInfo = styled.View`
  flex: 1;
`;

const ChatName = styled.Text`
  color: ${props => props.theme.text};
  font-size: 16px;
  font-weight: bold;
`;

const ChatMessage = styled.Text`
  color: ${props => props.theme.text};
  font-size: 14px;
  opacity: 0.8;
`;

const ChatItem = ({ chat }) => {
  const placeholderAvatar = 'https://via.placeholder.com/40.png?text=User';

  return (
    <ChatContainer>
      <Avatar
        source={{ uri: chat.avatar && typeof chat.avatar === 'string' ? chat.avatar : placeholderAvatar }}
        onError={(e) => console.log('Avatar Error:', e.nativeEvent.error)}
      />
      <ChatInfo>
        <ChatName>{chat.name}</ChatName>
        <ChatMessage>{chat.lastMessage}</ChatMessage>
      </ChatInfo>
    </ChatContainer>
  );
};

export default ChatItem;