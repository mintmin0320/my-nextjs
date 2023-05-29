import { useCallback } from 'react';
import { Store } from '../types/store';
import { mutate } from 'swr';

export const STORE_KEY = '/stores';

const useStores = () => {
  const initializeStores = useCallback((stores: Store[]) => {
    //데이터를 인자로 받아 전역으로 저장하겠다
    mutate(STORE_KEY, stores); // 스토어 키에 스토어데이터를 전역으로 관리
  }, []);

  return {
    initializeStores,
  };
};
export default useStores;
