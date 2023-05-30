import Link from 'next/link';
import Header from '@/component/common/Header';
import styled from 'styled-components';
import Map from '@/component/map/Map';
import { NextPage } from 'next';
import { Coordinates, Store } from '@/types/store';
import { useEffect, useMemo } from 'react';
import useStores from '@/hooks/useStores';
import useMap, { INITIAL_CENTER, INITIAL_ZOOM } from '@/hooks/useMap';
import { NaverMap } from '@/types/map';
import Markers from '@/component/map/Markers';
import useCurrentStore from '@/hooks/useCurrentStore';
import ShareBtn from '@/component/common/ShareBtn';
import { useRouter } from 'next/router';
import DetailSection from '@/component/map/DetailSection';
import Title from '@/component/common/PageTab';

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
  const { initializeStores } = useStores();
  const { initializeMap } = useMap();
  const { clearCurrentStore } = useCurrentStore();

  /** url query 로부터 initial zoom, center 값 설정 */
  const router = useRouter();
  /**
   * router.asPath === '/?zoom={}&lat={}&lng={}'
   * https://developer.mozilla.org/ko/docs/Web/API/URLSearchParams
   */
  const query = useMemo(() => new URLSearchParams(router.asPath.slice(1)), []); // eslint-disable-line 
  // asPath는 쿼리 뒤에 /map/?zomm~~~ 이 부분

  //map이 로드되면 map 데이터를 전역으로 관리할 수 있게 됨
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    // 선택된 상태에서 맵을 클릭하면 선택 해제됨
    naver.maps.Event.addListener(map, 'click', clearCurrentStore);
  };

  //url 쿼리 파라미터에 줌이 있으면 그 값을 INITIAL_ZOOM으로 사용 없으면 기존값
  const initialZoom = useMemo(
    () => (query.get('zoom') ? Number(query.get('zoom')) : INITIAL_ZOOM),
    [query]
  );

  // 위와 동일하게 있으면 센터값으로 설정
  const initialCenter = useMemo<Coordinates>(
    () =>
      query.get('lat') && query.get('lng')
        ? [Number(query.get('lat')), Number(query.get('lng'))]
        : INITIAL_CENTER,
    [query]
  );


  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <Container>
      <Title title="식신로드 | 세상의 모든음식" />
      <Header pageType='index' />
      <Content>
        <Blank_Box />
        <Map
          onLoad={onLoadMap}
          initialZoom={initialZoom}
          initialCenter={initialCenter}
        />
        <Markers />
        {/* <DetailSection /> */}
      </Content>
      <ShareBtn />
    </Container>
  );
}

export default Home;

export async function getStaticProps() {
  /** TODO: next api routes로 불러오기 */
  const stores = (await import('../../component/map/stores.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Blank_Box = styled.div`
  width: 100%;
  height: 10%;
`
