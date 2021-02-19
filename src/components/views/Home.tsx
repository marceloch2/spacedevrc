import React, {ReactElement, useEffect, useCallback, useState} from 'react';

import {useNavigation} from '@react-navigation/native';

import MapView, {Marker} from 'react-native-maps';

import DatePicker from 'react-native-datepicker';
import {Container, Pickers, Launchs, ListItems, NoData} from '../styled';

import {
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';

import {useRecoilValue, useSetRecoilState} from 'recoil';

import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';
dayjs.extend(durationPlugin);

import {launchStore} from '../../store/atoms';
import {agenciesStore} from '../../store/atoms';
import {loading} from '../../store/atoms';

import spaceDevService from '../../services/spaceDevService';

interface Props {}

function Home(props: Props): ReactElement {
  const navigation = useNavigation();
  const getLaunchs = useRecoilValue(launchStore);
  const setLaunchs = useSetRecoilState(launchStore);

  const getAgencies = useRecoilValue(agenciesStore);
  const setAgencies = useSetRecoilState(agenciesStore);

  const isLoading = useRecoilValue(loading);
  const setIsLoading = useSetRecoilState(loading);

  const todayFormatted = dayjs().format('YYYY-MM-DD');
  const todayMPlusThree = dayjs()
    .add(dayjs.duration({month: 3}))
    .format('YYYY-MM-DD');

  const [startDate, setStartDate] = useState('1982-10-08');
  const [endDate, setEndDate] = useState(todayMPlusThree);

  const fetchInit = useCallback(async () => {
    try {
      setIsLoading(true);
      const fetchLaunchs = await spaceDevService(
        `launch?net__gte=${startDate}&net__lte=${endDate}`,
      );
      const fetchAgencies = await spaceDevService(`agencies`);

      setLaunchs(fetchLaunchs);
      setAgencies(fetchAgencies);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      Alert.alert(error.message);
    }
  }, []);

  useEffect(() => {
    fetchInit();
  }, [startDate, endDate]);

  return isLoading ? (
    <Text>loading...</Text>
  ) : (
    <Container>
      <MapView
        testID="map"
        style={{
          height: '60%',
          width: '100%',
        }}
        zoomEnabled={true}
        ref={(ref) => {
          this.mapView = ref;
        }}>
        {getLaunchs.map((launch, index) => {
          return (
            <Marker
              key={launch.id}
              coordinate={{
                latitude: parseFloat(launch.pad.latitude),
                longitude: parseFloat(launch.pad.longitude),
              }}
              title={launch.name}
              description={launch.name}
            />
          );
        })}
      </MapView>

      <Launchs>
        <Pickers>
          <DatePicker
            testID="startDate"
            date={startDate}
            mode="date"
            placeholder="Start Date"
            format="YYYY-MM-DD"
            minDate={startDate}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(startDate) => {
              setStartDate(startDate);
            }}
          />
          <DatePicker
            testID="endDate"
            date={endDate}
            mode="date"
            placeholder="End Date"
            format="YYYY-MM-DD"
            minDate={endDate}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={setEndDate}
            onDateChange={(endDate) => {
              setEndDate(endDate);
            }}
          />
        </Pickers>

        {getLaunchs.length ? (
          getLaunchs.map((launch) => {
            return <ListItems key={launch.id}>{launch.name}</ListItems>;
          })
        ) : (
          <NoData>List is empty</NoData>
        )}
      </Launchs>
    </Container>
  );
}

export default Home;
