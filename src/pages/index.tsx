import styled from 'styled-components'
import { NextSeo } from 'next-seo';

import Header from '@/component/common/Header'

export default function Home() {
  return (
    <Wrap>
      <NextSeo
        title='세모'
        description='음식 사진을 공유하고 후기를 남기는 서비스입니다.'
      />
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