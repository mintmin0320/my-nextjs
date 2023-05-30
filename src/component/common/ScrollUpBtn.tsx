import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong } from '@fortawesome/free-solid-svg-icons';

export default function ScrollUpBtn() {
  const [ScrollY, setScrollY] = useState(0);
  const handleFollow = () => {
    setScrollY(window.scrollY);
  }

  const _handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);  // ScrollY 의 값을 초기화
  }

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    }
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow);
    }
  })

  return (
    <Container>
      <button
        className="topBtn"
        onClick={_handleTop}
      >
        <FontAwesomeIcon icon={faUpLong} size='2x' />
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
    background: #5882FA;
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
