import styled from 'styled-components';

const DetailSection = () => {
  return (
    <Container>
      <Content>
        <button className='arrowButton'>
          dd
          {/* <IoIosArrowUp size={20} color="#666666" /> */}
        </button>
        <p className='title'>매장을 선택해주세요</p>
      </Content>
    </Container>
  );
};
export default DetailSection;

const Container = styled.div`
position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 101;

  padding: $section-padding-top 16px 16px;
  background-color: white;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  box-shadow: 0 -2px 8px 0 rgba(136, 136, 136, 0.3);

  transition: transform 800ms;
  transform: translateY(
    calc(100% - #{$header-height} - #{$section-padding-top})
  );
  &.selected {
    transform: translateY(calc(100% - 160px));
  }
  &.expanded {
    transform: translateY(0);
  }
`

const Content = styled.div`
  height: $header-height;

display: flex;
flex-direction: column;

.arrowButton {
  height: 20px;
  align-self: center;

  border: none;
  background-color: transparent;

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
  &.expanded {
    transform: rotate(180deg);
  }

  @keyframes bounce {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-5px);
    }
  }
  svg {
    animation: bounce 500ms infinite alternate ease-in;
  }
}

.title {
  margin: 4px 0;
  font-size: 1rem;
  font-weight: 500;
}
`