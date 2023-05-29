import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

interface IndexPropsType {
  pageType: string;
}

interface StyeldPropsType {
  bgColor: string;
}

export default function Header(props: IndexPropsType) {
  const type = props.pageType;

  return (
    <Container bgColor={type}>
      <Wrap>
        <Link
          href="/"
          className='header_logo'
        >
          <Image
            src="/images/logo.svg"
            alt=''
            width={0} height={0}
            style={{ width: '100%', height: '100%' }}
            priority
          />
        </Link>
        <Header_menubar>
          <Link
            href="/feed" className='header_menubar_btn'
          >
            피드
          </Link>
          <Link
            href="/map" className='header_menubar_btn'
          >
            식신로드
          </Link>
          <Link
            href="/community" className='header_menubar_btn'
          >
            메뉴3
          </Link>
          <Link
            href="/community" className='header_menubar_btn'
          >
            메뉴4
          </Link>
        </Header_menubar>
        <Header_auth>
          <Link
            href="community" className='header_auth_btn'
          >
            로그인
          </Link>
          <Link
            href="community" className='header_auth_btn'
          >
            회원가입
          </Link>
        </Header_auth>
      </Wrap>
    </Container>
  )
}

const Container = styled.div<StyeldPropsType>`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  border-bottom: ${(props => props.bgColor === "index" ? "none" : "solid 2px #E6E6E6")};
  background-color: ${(props => props.bgColor === "index" ? "" : "#fff")};
  position: absolute;
  /* background-color: #000; */
  /* color: #fff; */
`

const Wrap = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .header_logo {
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Header_menubar = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .header_menubar_btn{
    width: 18%;
    height: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover{  
      background-color : #F2F2F2;
      border-radius: 10px;
    }
  }
`

const Header_auth = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header_auth_btn {
    width: 50%;
    height: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover{  
      background-color : #F2F2F2;
      border-radius: 10px;
    }
  }
`