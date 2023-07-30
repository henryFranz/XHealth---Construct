import styled from 'styled-components';

export const ContainerStyle = styled.div`
  width: 89%;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  margin-top: 20px;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
`;

export const Card = styled.a`
  position: relative;
  width: 350px;
  height: 350px;
  text-align: center;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 10px #00000033;
  cursor: pointer;
  border: solid 1px #d4c00bf1;

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
`;

export const Poster = styled.div`
  :hover {
    transform: scale(1.1);
    transition: 0.3s all;
  }
`;

export const Details = styled.div`
  font-family: 'Oswald', sans-serif;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #bbb512;
  opacity: 0;
  transition: 300ms;

  ${Card}:hover & {
    opacity: 1;
  }

  h1 {
    background-color: rgba(219, 236, 236, 0.24);
    width: 300px;
    font-size: 30px;
    border-radius: 3.0px;
  }

  h2 {
    background-color: rgba(219, 236, 236, 0.24);
    margin-top: 2px;
    border: solid 1px #00000005;
    color: #292828;
    box-shadow: 2px 2px 2px #000;
  }
`;
