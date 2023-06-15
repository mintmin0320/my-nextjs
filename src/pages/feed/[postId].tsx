
import { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import { NextSeo } from 'next-seo';

import Header from '@/component/common/Header';

import { Box, Rating } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleArrowRight, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

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
  post: IPropsData
}

const PostDetail = ({ post }: IRes) => {
  const [count, setCount] = useState<number>(0);

  const handleCntChange = (direction: string) => {
    if (count !== 0 && direction === 'left') setCount(count - 1);
    if (count < post.postImg.length - 1 && direction === 'right') setCount(count + 1);
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
        <Post_Top_Box>
          <Post_Image_Btn_Box>
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              style={{ cursor: "pointer" }}
              size='3x'
              onClick={() => handleCntChange("left")}
            />
          </Post_Image_Btn_Box>
          <Post_Img_Box>
            <Image
              src={post.postImg[count]}
              alt=''
              width={100}
              height={100}
              sizes="(max-width: 768px)"
              placeholder='blur'
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0WhFsDwADzwF2mLYSJgAAAABJRU5ErkJggg=="
              style={{ width: '100%', height: '100%', objectFit: "contain", position: "absolute", top: "0", left: "0" }}
              priority
            />
          </Post_Img_Box>
          <Post_Image_Btn_Box>
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              style={{ cursor: "pointer" }}
              size='3x'
              onClick={() => handleCntChange("right")}
            />
          </Post_Image_Btn_Box>
        </Post_Top_Box>
        <Post_Content_Box>
          <Post_Content_Nickname>
            {post.nickname} <div style={{ marginTop: "5px" }}>{post.content}</div>
          </Post_Content_Nickname>
          <Post_Content_Review>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Rating
                name="hover-feedback"
                value={post.star}
                precision={0.5}
                size='large'
                readOnly
              />
            </Box>
          </Post_Content_Review>
        </Post_Content_Box>
      </Content>
    </Wrap>
  );
};
export default PostDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = (await import('./data.json')).default;
  const post = res.data;
  const paths = post.map((post) => ({ params: { postId: post.postId } }));

  return { paths, fallback: true };
  //  빌드타입에 경로 생성 false 면 없는 경로 바로 404 true는 바로 짧은 로딩 안됨 최소한의 경로만 미리 생성하고 추가 요청이 생기면 추가로 로드
  // 한정되면 false 추가 사항이 생길 수 있다면 true
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = (await import('./data.json')).default;
  const post = res.data.find((post) => post.postId === params?.postId);
  return { props: { post } };
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FAFAFA;
`

const BlankBox = styled.div`
  width: 100%;
  height: 14%;
  background-color: #FAFAFA;
`

const Content = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: solid 1px #E6E6E6; 
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`

const Post_Top_Box = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
`

const Post_Image_Btn_Box = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Post_Img_Box = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
`

const Post_Content_Box = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  padding: 8px;
`

const Post_Content_Nickname = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
`

const Post_Content_Review = styled.div`
  width: 100%;
  height: 30%;
`