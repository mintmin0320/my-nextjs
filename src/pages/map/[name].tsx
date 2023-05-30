import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import type { Store } from '@/types/store';
import DetailHeader from '@/component/map/DetailHeader';
import DetailContent from '@/component/map/DetailContent';
import styles from '../../styles/detail.module.scss'
import useCurrentStore from '../../hooks/useCurrentStore';

interface Props {
  store: Store;
}

const StoreDetail: NextPage<Props> = ({ store }) => {
  const expanded = true;

  const router = useRouter();
  const { setCurrentStore } = useCurrentStore();

  const goToMap = () => {
    setCurrentStore(store);
    router.push(`
      /?zoom=15&lat=${store.coordinates[0]}&lng=${store.coordinates[1]}
    `);
  };

  return (
    <div className={`${styles.detailSection} ${styles.expanded}`}>
      <DetailHeader
        currentStore={store}
        expanded={expanded}
        onClickArrow={goToMap}
      />
      <DetailContent currentStore={store} expanded={expanded} />
    </div>
  );
};
export default StoreDetail;

/** https://nextjs.org/docs/basic-features/data-fetching/get-static-paths */
//패이지의 경로를 정적으로 생성 빌드 시 데이터를 확인하고 필요한 경로를 미리 프리렌더링
export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import('../../component/map/stores.json')).default;
  const paths = stores.map((store) => ({ params: { name: store.name } }));

  return { paths, fallback: false };
  //  빌드타입에 경로 생성 false 면 없는 경로 바로 404 true는 바로 짧은 로딩 안됨 최소한의 경로만 미리 생성하고 추가 요청이 생기면 추가로 로드
  // 한정되면 false 추가 사항이 생길 수 있다면 true
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import('../../component/map/stores.json')).default;
  const store = stores.find((store) => store.name === params?.name);

  return { props: { store } };
};
