import React from 'react';
import {TextProps} from 'react-native';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container, Title, ContainerResetButton} from './styles';

interface Props extends TextProps {
  title: string;
  sync: boolean;
  callBack: () => void;
}

export default function Header({title, sync, callBack}: Props) {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Title>{title}</Title>

      {sync === false ? (
        <ContainerResetButton onPress={callBack}>
          <Icon name="cloud-refresh" size={32} color={'#fff'} />
        </ContainerResetButton>
      ) : null}
    </Container>
  );
}
