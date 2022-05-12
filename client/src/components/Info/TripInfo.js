import React from 'react';
import styled from 'styled-components';
import LogoSrc from '../../Assets/COVID-19_travel_banner-2021.png';
import Container from './Container';

const Background = styled.div`
  background-image: url(${LogoSrc});
  opacity: 0.5;
  font-size: 30px;
  margin-top: 30px;

  > div {
    display: inline;
    background-color: white;
    opacity: 0.9;
    color: black;
  }
`;

const Message = styled.div`
  font-size: 30px;
  text-align: center;
  margin-top: 150px;
  font-family: SsurroundFont;
`;

function TripInfo() {
  return (
    <Container direction={'row'} back={' rgba(225, 0, 0, .3)'}>
      <Background>
        <div>{0}</div>
        <br />
        <div>{'맛집 투어 여행!'}</div>
        <br />
        <div>{1500000}</div>
        <br />
        <div>{'JPY'}</div>
        <br />
        <div>{'일본'}</div>
        <br />
        <div>
          {'2022-05-01'} ~ {'2022-05-10'}
        </div>
      </Background>
      <Message>다녀올 여행지에 대한 정보를 입력하여</Message>
    </Container>
  );
}

export default TripInfo;
