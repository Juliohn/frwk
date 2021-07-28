import styled from 'styled-components/native';

import {FlatList} from 'react-native';

import {PostDTO} from '../../dtos/PostDTO';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background_primary};
  flex: 1;
`;

export const List = styled(FlatList as new () => FlatList<PostDTO>).attrs({
  contentContainerStyle: {
    padding: 5,
  },
  showsVerticalScrollIndicator: false,
})``;
