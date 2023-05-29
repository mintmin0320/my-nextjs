import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import useMap from '@/hooks/useMap';
import copy from 'copy-to-clipboard';

export default function ShareBtn() {
  const { getMapOptions } = useMap();
  const router = useRouter();

  const replaceAndCopyUrl = useCallback(() => {
    const mapOptions = getMapOptions();
    const query = `?zoom=${mapOptions.zoom}&lat=${mapOptions.center[0]}&lng=${mapOptions.center[1]}`;

    router.replace(query);
    copy(location.origin + '/map/' + query);
  }, [router, getMapOptions]);
  //url의 쿼리를 위 query로 대체

  return (
    <Container>
      <button
        className="topBtn"
        onClick={replaceAndCopyUrl}
      >
        <FontAwesomeIcon icon={faUpRightFromSquare} />
      </button>
    </Container>
  )
};

const Container = styled.div`
  .topBtn {
    position: fixed; 
    bottom: 40px; 
    right: 40px;
    width: 50px; 
    height: 50px;
    border-radius: 100%;
    border: 0 none;
    background: #0064ff;
    color: white;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: -0.06em;
    cursor: pointer;
  }

  .topBtn:hover,
  .topBtn:focus,
  .topBtn:active { 
    outline: 0 none; 
  } 
`
