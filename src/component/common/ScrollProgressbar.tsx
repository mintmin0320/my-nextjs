import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function ScrollIndiactor() {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled)
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ProgressMainWrapper>
      {scrollTop <= 40 ? <ProgressMainStyle33 style={{ width: `${scrollTop}%` }} /> : scrollTop <= 75 ? <ProgressMainStyle66 style={{ width: `${scrollTop}%` }} /> : <ProgressMainStyle99 style={{ width: `${scrollTop}%` }} />}
    </ProgressMainWrapper>
  )
};

const ProgressMainWrapper = styled.div`
  width: 100%;
  height: 1px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`

const ProgressMainStyle33 = styled.div`
  height: 2px;
  background: #2E9AFE;
`

const ProgressMainStyle66 = styled.div`
  height: 2px;
  background: #0080FF;
`

const ProgressMainStyle99 = styled.div`
  height: 2px;
  background: #0101DF;
`