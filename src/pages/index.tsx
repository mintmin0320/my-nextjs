import styled from 'styled-components'

import Header from '@/component/common/Header'
import Title from '@/component/common/PageTab'

export default function Home() {
  return (
    <Wrap>
      <Title title="세모 | 세상의 모든음식" />
      <Header pageType='index' />
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image : url('images/indexImg2.svg');
  background-size : cover;
  background-repeat: no-repeat;
  background-position : center;
`