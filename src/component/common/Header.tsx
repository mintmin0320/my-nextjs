import { useState } from 'react';
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

interface IndexPropsType {
  pageType: string;
}

interface StyeldPropsType {
  bgColor: string;
}


export default function Header(props: IndexPropsType) {
  const type = props.pageType;
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const AuthModal = () => {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Modal_Wrap>
            <Modal_Title>
              세모 - 세상의 모든음식
            </Modal_Title>
            <Modal_Auth_box>
              <TextField
                id="filled-password-input"
                label="Id"
                type="text"
                autoComplete="current-password"
                variant="filled"
                className='modal_input'
              />
              <TextField
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                className='modal_input'
              />
              <Modal_Btn>로그인</Modal_Btn>
              <Modal_Btn>회원가입</Modal_Btn>
              <Modal_Hr />
              <Modal_Hr />
              <Modal_Btn>비회원 방문</Modal_Btn>
            </Modal_Auth_box>
          </Modal_Wrap>
        </Box>
      </Modal>
    );
  }

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
          <button
            className='header_auth_btn'
            onClick={() => setOpen(true)}
          >
            로그인
          </button>
          <Link
            href="community" className='header_auth_btn'
          >
            회원가입
          </Link>
        </Header_auth>
      </Wrap>
      {open && (<AuthModal />)}
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
    border: 0;
    background-color:transparent;
    font-size: 16px;

    &:hover{  
      background-color : #F2F2F2;
      border-radius: 10px;
    }
  }
`

const Modal_Wrap = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Modal_Title = styled.div`
  width: 50%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bolder;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const Modal_Auth_box = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  .modal_input {
    width: 100%;
    /* height: 10%; */
    /* margin-bottom: 28px; */
  }
`

const Modal_Btn = styled.div`
  width: 100%;
  height: 20%;
  /* margin-bottom: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #D8D8D8;
  cursor: pointer;
  background-color: #5882FA;
  color: #fff;
`

const Modal_Hr = styled.div`
  width: 100%;
  height: 5%;
  border-top: solid 1px #D8D8D8;
`