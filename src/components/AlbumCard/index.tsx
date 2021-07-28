import React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';
import {AlbumDTO} from '../../dtos/AlbumDTO';

import {Container, ContainerCode, Code, Title, ContainerTitle} from './styles';

interface Props extends RectButtonProps {
  data: AlbumDTO;
}

export function AlbumCard({data}: Props) {
  return (
    <Container>
      <ContainerCode>
        <Code>{'#' + data.id}</Code>
      </ContainerCode>
      <ContainerTitle>
        <Title>{data.title}</Title>
      </ContainerTitle>
    </Container>
  );
}
