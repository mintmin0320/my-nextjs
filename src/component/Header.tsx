import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export interface ImdexPropsType {
  pageType: string;
}

export interface StyeldPropsType {
  bgColor: string;
}

export default function Header(props: ImdexPropsType) {
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
            href="/community" className='header_menubar_btn'
          >
            피드
          </Link>
          <Link
            href="/community" className='header_menubar_btn'
          >
            메뉴2
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
  border-bottom: solid 2px #E6E6E6;
  background-color: ${(props => props.bgColor === "index" ? "" : "#fff")};
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
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    /* color: white; */

    &:hover{  
      background-color : skyblue;
      color : #fff;
    }
  }
`

const Header_menubar_btn = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* color: white; */

  &:hover{  
    background-color : skyblue;
    color : #fff;
  }
`

const Header_auth = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header_auth_btn {
    width: 45%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover{  
      background-color : skyblue;
      color : #fff;
    }
  }
`