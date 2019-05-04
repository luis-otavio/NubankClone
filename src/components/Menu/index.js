import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode';

import {
  Container, Code, Nav, NavItem, NavText, SignOutButtom, SignOutButtomText,
} from './styles';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 200],
        outputRange: [0, 1],
      }),
    }}
    >
      <Code>
        <QRCode
          value="https://github.com/luis-otavio"
          size={80}
          fgColor="#FFF"
          bgColor="#8B10AE"
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButtom onPress={() => {}}>
        <SignOutButtomText>SAIR DO APP</SignOutButtomText>
      </SignOutButtom>
    </Container>
  );
}
