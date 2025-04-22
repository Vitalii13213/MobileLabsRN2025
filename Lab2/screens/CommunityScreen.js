import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import NewsPost from '../components/NewsPost';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
  padding: 10px;
`;

const newsData = [
  {
    id: '1',
    title: 'Kingdom Come: Deliverance',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/379430/header.jpg',
    content: 'Florida now offers free access for a limited time. Dive into this medieval RPG!',
  },
  {
    id: '2',
    title: 'New Update for Cyberpunk 2077',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
    content: 'Patch 2.1 brings new missions and improved gameplay mechanics.',
  },
];

const CommunityScreen = () => (
  <Container>
    <FlatList
      data={newsData}
      renderItem={({ item }) => <NewsPost post={item} />}
      keyExtractor={item => item.id}
    />
  </Container>
);

export default CommunityScreen;
