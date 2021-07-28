import React, {useEffect, useState, useCallback} from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import {useFocusEffect} from '@react-navigation/native';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import ButtonSync from '../../components/ButtonSync';

import {Container, List} from './styles';

import {AlbumDTO} from '../../dtos/AlbumDTO';
import {AlbumCard} from '../../components/AlbumCard';

import {api} from '../../services/api';

export default function Posts() {
  const dataKey = '@frwk:albums';
  const [albums, setAlbums] = useState<AlbumDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    setLoading(true);
    resetData();
    loadData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  async function loadData() {
    try {
      const data = await AsyncStorage.getItem(dataKey);
      if (data == null) {
        setSync(true);
      } else {
        setAlbums(JSON.parse(data!));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleLoadDataWeb() {
    try {
      setSync(false);
      setLoading(true);
      const response = await api.get('/albums');
      const {data} = response;
      resetData();
      await AsyncStorage.setItem(dataKey, JSON.stringify(data));
      loadData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function resetData() {
    try {
      await AsyncStorage.removeItem(dataKey);
      return true;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header title="Albums" sync={sync} callBack={handleLoadDataWeb} />
      {sync === true ? (
        <ButtonSync title="Sync Albums from web" callBack={handleLoadDataWeb} />
      ) : loading === true ? (
        <Loading />
      ) : (
        <List
          data={albums}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <AlbumCard data={item} />}
        />
      )}
    </Container>
  );
}
