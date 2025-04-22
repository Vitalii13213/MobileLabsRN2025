import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import styled from 'styled-components/native';
import GameCard from '../components/GameCard';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
  padding: 10px;
`;

const Header = styled.View`
  padding: 20px;
  align-items: center;
  background-color: ${props => props.theme.cardBackground};
  border-radius: 8px;
  margin: 10px;
  border-width: 1px;
  border-color: ${props => props.theme.borderColor};
  elevation: 3;
  shadow-color: ${props => props.theme.shadowColor};
  shadow-opacity: ${props => props.theme.shadowOpacity};
  shadow-radius: 4px;
  shadow-offset: 0px 2px;
`;

const ThemeButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.accent};
  padding: 10px 20px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${props => props.theme.borderColor};
`;

const ThemeButtonText = styled.Text`
  color: ${props => props.theme.text};
  font-size: 16px;
  font-weight: bold;
`;

const gamesData = [
  {
    id: '1',
    title: 'Dead by Daylight',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg',
    price: '$19.99',
    description: 'A multiplayer horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors.',
  },
  {
    id: '2',
    title: 'Grand Theft Auto V',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg',
    price: '$29.99',
    description: 'An action-adventure game with a vast open world, blending storytelling and gameplay in new ways.',
  },
  {
    id: '3',
    title: 'Kerbal Space Program',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/220200/header.jpg',
    price: '$39.99',
    description: 'Build spacecraft, fly them, and try to help the Kerbals fulfill their ultimate mission of conquering space.',
  },
  {
    id: '4',
    title: '7 Days to Die',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/251570/header.jpg',
    price: '$14.99',
    description: 'A strategic city-building game set in the colonial era, where you manage resources and trade.',
  },
];

const StoreScreen = ({ toggleTheme }) => {
  const [games, setGames] = useState(gamesData);
  const [page, setPage] = useState(1);

  const loadMoreGames = () => {
    setTimeout(() => {
      const newGames = gamesData.map(game => ({
        ...game,
        id: `${game.id}-${page + 1}`,
      }));
      setGames([...games, ...newGames]);
      setPage(page + 1);
    }, 1000);
  };

  return (
    <Container>
      <Header>
        <ThemeButton onPress={toggleTheme}>
          <ThemeButtonText>Toggle Theme</ThemeButtonText>
        </ThemeButton>
      </Header>
      <FlatList
        data={games}
        renderItem={({ item }) => (
          <GameCard
            game={item}
            onPress={() => alert(item.description)}
          />
        )}
        keyExtractor={item => item.id}
        onEndReached={loadMoreGames}
        onEndReachedThreshold={0.5}
      />
    </Container>
  );
};

export default StoreScreen;