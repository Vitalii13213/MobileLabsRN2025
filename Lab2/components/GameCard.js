import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const CardContainer = styled.View`
  flex-direction: row;
  background-color: ${props => props.theme.cardBackground};
  margin: 10px;
  border-radius: 8px;
  overflow: hidden;
  border-width: 1px;
  border-color: ${props => props.theme.borderColor};
  elevation: 3;
  shadow-color: ${props => props.theme.shadowColor};
  shadow-opacity: ${props => props.theme.shadowOpacity};
  shadow-radius: 4px;
  shadow-offset: 0px 2px;
`;

const GameImage = styled.Image`
  width: 120px;
  height: 160px;
`;

const InfoContainer = styled.View`
  flex: 1;
  padding: 15px;
  justify-content: space-between;
  border-left-width: 1px;
  border-left-color: ${props => props.theme.borderColor};
`;

const GameTitle = styled.Text`
  color: ${props => props.theme.text};
  font-size: 16px;
  font-weight: bold;
`;

const GamePrice = styled.Text`
  color: ${props => props.theme.accent};
  font-size: 14px;
  font-weight: bold;
`;

const GameCard = ({ game, onPress }) => {
  const placeholderImage = 'https://via.placeholder.com/120x160.png?text=Game+Image';

  return (
    <TouchableOpacity onPress={onPress}>
      <CardContainer>
        <GameImage
          source={{ uri: game.image && typeof game.image === 'string' ? game.image : placeholderImage }}
          onError={(e) => console.log('GameImage Error:', e.nativeEvent.error)}
        />
        <InfoContainer>
          <GameTitle>{game.title}</GameTitle>
          <GamePrice>{game.price}</GamePrice>
        </InfoContainer>
      </CardContainer>
    </TouchableOpacity>
  );
};

export default GameCard;