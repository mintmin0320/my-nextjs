import { useCallback } from 'react';
import { mutate } from 'swr';
import type { Store } from '../types/store';

export const CURRENT_STORE_KEY = '/current-store';

const useCurrentStore = () => {
  const setCurrentStore = useCallback((store: Store) => {
    mutate(CURRENT_STORE_KEY, store);
  }, []);

  const clearCurrentStore = useCallback(() => {
    mutate(CURRENT_STORE_KEY, null);
  }, []);

  return {
    setCurrentStore,
    clearCurrentStore,
  };
};
export default useCurrentStore;

// 현재 선택된 스토어를 만들기 위한 hook