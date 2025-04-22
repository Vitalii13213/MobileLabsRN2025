import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
  padding: 20px;
`;

const Title = styled.Text`
  color: ${props => props.theme.text};
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  padding: 10px;
  background-color: ${props => props.theme.cardBackground};
  border-radius: 8px;
  border-width: 1px;
  border-color: ${props => props.theme.borderColor};
  elevation: 2;
  shadow-color: ${props => props.theme.shadowColor};
  shadow-opacity: ${props => props.theme.shadowOpacity};
  shadow-radius: 3px;
  shadow-offset: 0px 1px;
`;

const Section = styled.View`
  margin-bottom: 20px;
  background-color: ${props => props.theme.cardBackground};
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

const SectionTitle = styled.Text`
  color: ${props => props.theme.accent};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  padding: 5px 10px;
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.theme.accent};
`;

const SectionContent = styled.Text`
  color: ${props => props.theme.text};
  font-size: 14px;
  text-align: center;
`;

const Button = styled.TouchableOpacity`
  background-color: ${props => props.theme.accent};
  padding: 10px;
  border-radius: 8px;
  align-items: center;
  margin-top: 10px;
  border-width: 1px;
  border-color: ${props => props.theme.borderColor};
`;

const ButtonText = styled.Text`
  color: ${props => props.theme.text};
  font-size: 16px;
  font-weight: bold;
`;

const generateRandomCode = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 5; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
};

const SafetyScreen = () => {
  const [code, setCode] = useState(generateRandomCode());

  useEffect(() => {
    const interval = setInterval(() => {
      setCode(generateRandomCode());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Title>Account Protection</Title>
      <Section>
        <SectionTitle>{code}</SectionTitle>
        <SectionContent>
          You can now enter your code here to unlock your account.
          If you have not received a code, please contact support.
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Remove Authorization</SectionTitle>
        <Button onPress={() => alert('Authorization Removed')}>
          <ButtonText>Remove My Guide</ButtonText>
        </Button>
      </Section>
    </Container>
  );
};

export default SafetyScreen;
