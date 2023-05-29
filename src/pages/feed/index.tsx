import styled from 'styled-components';
import Image from 'next/image';

import Header from '@/component/common/Header';
import postData from './data.json'
import { useState } from 'react';
import ScrollUpBtn from '@/component/common/ScrollUpBtn';

export interface Data {
  data: Object;
}

export interface DataList {
  nickname: string,
  profileImg: string,
  content: string,
  postImg: string
}

export default function Feed() {
  const [data, setData] = useState(postData.data);

  const PostList = () => {
    return (
      <>
        {
          data.map((item: DataList, idx: number) => {
            return (
              <Post key={idx}>
                <Post_Title>
                  <Post_Title_Profile>
                    <Post_Title_Profile_Img>
                      프로필 이미지
                    </Post_Title_Profile_Img>
                  </Post_Title_Profile>
                  <Post_Title_Info>
                    {item.nickname}
                  </Post_Title_Info>
                </Post_Title>
                <Post_Img>

                </Post_Img>
                <Post_Content>
                  {item.content}
                </Post_Content>
              </Post>
            )
          })
        }
      </>
    )
  }

  return (
    <Wrap>
      <Header pageType={""} />
      <BlankBox />
      <Content>
        <PostList />
      </Content>
      <ScrollUpBtn />
    </Wrap>
  )
};

const Wrap = styled.div`
  width: 100%;
  height: 100vmax;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FAFAFA;

  .Post_C{
    border-radius: -50%;
  }
`

const BlankBox = styled.div`
  width: 100%;
  height: 7%;
  background-color: #FAFAFA;
`

const Content = styled.div`
  width: 60%;
  height: 88%;
  /* border-left: solid 1px;
  border-right: solid 1px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Post = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  border-left: solid 1px #E6E6E6;
  border-right: solid 1px #E6E6E6;
  background-color: #fff;
`

const Post_Title = styled.div`
  width: 100%;
  height: 10%;
  border-top: solid 1px #E6E6E6;
  border-bottom: solid 1px #E6E6E6;
  display: flex;
  align-items: center;
`

const Post_Title_Profile = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Post_Title_Profile_Img = styled.div`
  width: 100%;
  height: 80%;
  /* border: solid 1px; */
  /* border-radius: 50%; */
  position: relative;
`

const Post_Title_Info = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Post_Img = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
`

const Post_Content = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
`