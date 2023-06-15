import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import styled from 'styled-components';

import Header from '@/component/common/Header';
import ScrollUpBtn from '@/component/common/ScrollUpBtn';
import ScrollIndiactor from '@/component/common/ScrollProgressbar';

import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { GetStaticProps } from 'next';

interface IPropsData {
  postId: string,
  nickname: string,
  profileImg: string,
  content: string,
  postImg: string[],
  storeName: string,
  star: number
}

interface IRes {
  props: IPropsData[]
}


export default function Feed({ props }: IRes) {
  const router = useRouter()

  const PostList = () => {
    return (
      <>
        {
          props.map((item: IPropsData) => {
            return (
              <Post
                key={item.postId}
                onClick={() => {
                  router.push({
                    pathname: `/feed/${item.postId}`,
                    query: { postId: item.postId },
                  })
                }}
              >
                <Post_Title>
                  <Post_Title_Profile>
                    <Post_Title_Profile_Img>
                      <Image
                        src={item.profileImg}
                        alt=''
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ width: '100%', height: '100%', objectFit: "cover", borderRadius: "50%" }}
                        priority
                      />
                    </Post_Title_Profile_Img>
                    &nbsp;
                    <Post_Title_Info>{item.nickname}</Post_Title_Info>
                  </Post_Title_Profile>
                  <Post_Wrap>
                    <Post_Img>
                      <Image
                        src={item.postImg[0]}
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
                  <Post_Review>{item.storeName}</Post_Review>
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
                      value={item.star}
                      precision={0.5}
                      size='small'
                      readOnly
                    />
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

export const getStaticProps: GetStaticProps = async () => {
  const res = (await import('./data.json')).default;
  const props = res.data;
  return { props: { props } }
}

const Wrap = styled.div`
  width: 100%;
  height: 70vmax;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FAFAFA;
`

const BlankBox = styled.div`
  width: 100%;
  height: 12%;
  background-color: #FAFAFA;
`

const Content = styled.div`
  width: 60%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-content: start;
`

const Post = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  cursor: pointer;

  &:hover{  
      background-color : #F2F2F2;
    }
`

const Post_Title = styled.div`
  width: 100%;
  height: 80%;
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
`

const Post_Title_Profile_Img = styled.div`
  width: 10%;
  height: 80%;
  border-radius: 50%;
  position: relative;
`

const Post_Title_Info = styled.div`
  width: 87%;
  height: 100%;
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
  /* border-top: solid 1px #E6E6E6;  */
  background-color: #000;
`

const Post_Content = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  padding: 6px;
  /* border-left: solid 1px #E6E6E6;  */
`

const Post_Review = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
`

const Post_Wrap = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
`