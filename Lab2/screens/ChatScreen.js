import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import ChatItem from '../components/ChatItem';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
  padding: 10px;
`;

const chatsData = [
  {
    id: '1',
    name: 'Ayush Oryan',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    lastMessage: 'Hey, want to play later?',
  },
  {
    id: '2',
    name: 'Roger123',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    lastMessage: 'Nice game yesterday!',
  },
  {
    id: '3',
    name: 'Player1',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    lastMessage: 'Check out this new mod!',
  },
];

const ChatScreen = () => (
  <Container>
    <FlatList
      data={chatsData}
      renderItem={({ item }) => <ChatItem chat={item} />}
      keyExtractor={item => item.id}
    />
  </Container>
);

export default ChatScreen;