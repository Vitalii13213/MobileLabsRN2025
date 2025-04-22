import React from 'react';
import { FlatList, Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
  padding: 20px;
  align-items: center;
`;

const ProfileCard = styled.View`
  align-items: center;
  background-color: ${props => props.theme.cardBackground};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  border-width: 1px;
  border-color: ${props => props.theme.borderColor};
  elevation: 3;
  shadow-color: ${props => props.theme.shadowColor};
  shadow-opacity: ${props => props.theme.shadowOpacity};
  shadow-radius: 4px;
  shadow-offset: 0px 2px;
`;

const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
  border-width: 2px;
  border-color: ${props => props.theme.accent};
`;

const Username = styled.Text`
  color: ${props => props.theme.text};
  font-size: 24px;
  font-weight: bold;
`;

const Status = styled.Text`
  color: ${props => props.theme.accent};
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 20px;
`;

const Button = styled.TouchableOpacity`
  background-color: ${props => props.theme.accent};
  padding: 10px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  border-width: 1px;
  border-color: ${props => props.theme.borderColor};
`;

const ButtonText = styled.Text`
  color: ${props => props.theme.text};
  font-size: 16px;
  font-weight: bold;
`;

const SectionTitle = styled.Text`
  color: ${props => props.theme.text};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  padding: 5px 10px;
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.theme.accent};
  align-self: flex-start;
`;

const GameItem = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.cardBackground};
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${props => props.theme.borderColor};
  elevation: 2;
  shadow-color: ${props => props.theme.shadowColor};
  shadow-opacity: ${props => props.theme.shadowOpacity};
  shadow-radius: 3px;
  shadow-offset: 0px 1px;
`;

const GameImage = styled.Image`
  width: 60px;
  height: 80px;
  border-radius: 4px;
  margin-right: 10px;
  border-width: 1px;
  border-color: ${props => props.theme.borderColor};
`;

const GameTitle = styled.Text`
  color: ${props => props.theme.text};
  font-size: 16px;
  font-weight: bold;
`;

const recentlyPlayed = [
  {
    id: '1',
    title: 'Dead by Daylight',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/381210/header.jpg',
  },
  {
    id: '2',
    title: 'Top Thief Auto V',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg',
  },
];

const ProfileScreen = () => {
  const placeholderAvatar = 'https://via.placeholder.com/100.png?text=User';
  const placeholderGameImage = 'https://via.placeholder.com/60x80.png?text=Game';

  return (
    <Container>
      <ProfileCard>
        <Avatar
          source={{ uri: 'https://randomuser.me/api/portraits/men/3.jpg' || placeholderAvatar }}
          onError={(e) => console.log('Profile Avatar Error:', e.nativeEvent.error)}
        />
        <Username>Fortune Luminous Drop</Username>
        <Status>Online</Status>
        <Button onPress={() => alert('Edit Profile')}>
          <ButtonText>Edit Profile</ButtonText>
        </Button>
      </ProfileCard>
      <SectionTitle>Recently Played</SectionTitle>
      <FlatList
        data={recentlyPlayed}
        renderItem={({ item }) => (
          <GameItem>
            <GameImage
              source={{ uri: item.image && typeof item.image === 'string' ? item.image : placeholderGameImage }}
              onError={(e) => console.log('Profile GameImage Error:', e.nativeEvent.error)}
            />
            <GameTitle>{item.title}</GameTitle>
          </GameItem>
        )}
        keyExtractor={item => item.id}
        style={{ width: '100%' }}
      />
    </Container>
  );
};

export default ProfileScreen;