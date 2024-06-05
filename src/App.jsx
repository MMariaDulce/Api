
import styled from 'styled-components';

import { useState } from 'react';


const HeaderContainer = styled.header`
  width: 100%;
  height: 30vh; 
  background-color: #152473; 
  
`;

const Title = styled.h1`
  font-size: 1.2rem;
  text-align: center;
  color: aliceblue;
  padding-top: 150px;
  position: flex;
`;

const Input = styled.input`
display: flex;
text-align: center;
width: 360px;
`
const Button = styled.button`
border-radius:7px;
background-color:#1a78a8;
color: white;
padding:6px;
`

const Subtitle = styled.p`
color: white;
text-align: center;
`

const Header = () => {
const [city, setCity] = useState(0)

const handlChange = (e) => {
    setCity(e.target.value)
}

const handleSearch = () => {
    fetch(`viacep.com.br/ws/${city}/json/`)
    .then((response)=>{
    if(response.status == 200){
        console.log(response.status)
    }
    })
    .then((response) => {
        console.log(response.json())
    })
};

  return (
    <HeaderContainer>
    <Title>Verifique a previsão do tempo</Title>
    <Subtitle>Digite o nome da sua cidade:</Subtitle>
    <Input type="text" value={city} onChange={handlChange} />
    <Button onClick={handleSearch}>Pesquisar</Button>
    </HeaderContainer>
  );
};

export default Header;