import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  justify-content: center;
  font-size: 70px;
  img {
    width: 100px;
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  background-color: aliceblue;
  border-radius: 20px;
  margin: 20px;
`;

export const UserDiv = styled.div`
display: flex;
flex-direction: column;
border-radius: 10px;
height: auto;
background-color: royalblue;
padding:10px;
margin: 10px;
p{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin:5px
}

`;
export const FriendDiv = styled.div`
display: flex;
flex-direction: column;
border-radius: 10px;
height: auto;
background-color: lightgray;
padding:10px;
margin: 10px;
p{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin:5px
}
`;
export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: grey;
  align-items: center;
  justify-content: center;
`;
