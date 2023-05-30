import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import Header from '@/component/common/Header';
import ScrollUpBtn from '@/component/common/ScrollUpBtn';
import postData from './data.json'
import Title from '@/component/common/PageTab';

interface DataList {
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
                      <Image
                        src={item.profileImg}
                        alt=''
                        fill
                        // width={300} height={0}
                        style={{ width: '100%', height: '100%', objectFit: "cover", borderRadius: "50%" }}
                        priority
                      />
                    </Post_Title_Profile_Img>
                    &nbsp;
                    <Post_Title_Info>
                      {item.nickname}
                    </Post_Title_Info>
                  </Post_Title_Profile>
                  <Post_Wrap>
                    <Post_Img>
                      <Image
                        src={item.postImg}
                        alt=''
                        fill
                        // width={500} height={0}
                        style={{ width: '100%', height: '100%', objectFit: "contain", position: "absolute", top: "0", left: "0" }}
                        priority
                      />
                    </Post_Img>

                  </Post_Wrap>
                </Post_Title>
                <Post_Content>
                  {item.nickname}

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
      <Title title="피드 | 세상의 모든음식" />
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
  border: solid 1px #E6E6E6; 
`

const Post = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  /* align-items: center; */
  /* border-left: solid 1px #E6E6E6; */
  border-bottom: solid 1px #E6E6E6; 
  background-color: #fff;
  /* margin-bottom: 40px; */
`

const Post_Title = styled.div`
  width: 60%;
  height: 100%;
  /* border-top: solid 1px #E6E6E6; */
  /* border-bottom: solid 1px #E6E6E6; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

const Post_Title_Profile = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* background-color: blue; */

`

const Post_Title_Profile_Img = styled.div`
  width: 10%;
  height: 95%;
  border-radius: 50%;
  position: relative;
  /* border: solid 1px #E6E6E6; */
`

const Post_Title_Info = styled.div`
  width: 87%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 18px;
`

const Post_Img = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  /* align-items: center; */
  /* justify-content: center; */
  border-top: solid 1px #E6E6E6; 
  background-color: #000;

`

const Post_Content = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  /* align-items: center; */
  border-left: solid 1px #E6E6E6; 
`

const Post_Wrap = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  /* align-items: center; */
`