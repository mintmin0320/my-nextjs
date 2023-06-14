import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import styled from 'styled-components';

import Header from '@/component/common/Header';
import ScrollUpBtn from '@/component/common/ScrollUpBtn';
import ScrollIndiactor from '@/component/common/ScrollProgressbar';
import postData from './data.json';

import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';


interface DataList {
  nickname: string,
  profileImg: string,
  content: string,
  postImg: string
}

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function Feed() {
  const [data, setData] = useState(postData.data);
  const [value, setValue] = useState<number | null>(2);
  const [hover, setHover] = useState(-1);


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
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                        sizes="(max-width: 768px)"
                        placeholder='blur'
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0WhFsDwADzwF2mLYSJgAAAABJRU5ErkJggg=="
                        style={{ width: '100%', height: '100%', objectFit: "cover", position: "absolute", top: "0", left: "0" }}
                        priority
                      />
                    </Post_Img>

                  </Post_Wrap>
                </Post_Title>
                <Post_Content>
                  <Post_Review>
                    {item.content}
                  </Post_Review>
                  <Box
                    sx={{
                      width: "100%",
                      height: "30%",
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Rating
                      name="hover-feedback"
                      value={value}
                      precision={0.5}
                      getLabelText={getLabelText}
                      size='small'
                      readOnly
                    />
                    {value !== null && (
                      <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                    )}
                  </Box>
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
      <NextSeo
        title='피드'
        description='음식 사진을 공유하고 소통하는 페이지입니다.'
      />
      <Header pageType={""} />
      <BlankBox />
      <Content>
        <PostList />
      </Content>
      <ScrollUpBtn />
      <ScrollIndiactor />
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-content: start;
  /* flex-direction: column; */
  /* align-items: center; */
  border: solid 1px #E6E6E6; 
`

const Post = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px #E6E6E6; 
  background-color: #fff;
  cursor: pointer;

  &:hover{  
      background-color : #F2F2F2;
    }
`

const Post_Title = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
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
  height: 80%;
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
  font-size: 17px;
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
  /* max-width: 400px; */
`

const Post_Content = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  border-left: solid 1px #E6E6E6; 
`

const Post_Review = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  border-left: solid 1px #E6E6E6; 
`

const Post_Wrap = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  /* align-items: center; */
`