import React, {useState} from 'react';
import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';

const COLORS = {
  primaryDark: "#dfad8b",
  primaryLight: "#0f3f54",

}
const MenuLabel = styled.label`
  background-color: #dfad8b;
  border-radius: 50%;
  border: #0f3f54;
  height: 4rem;
  width: 4rem;
  cursor: pointer;
  z-index: 12;
  text-align: center;
`;
const NavBackground = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 150px;
  background-image: radial-gradient(
    ${COLORS.primaryDark},
    ${COLORS.primaryLight}
  );
  height: 5rem;
  witdh: 5rem;
  border-radius: 10%;
  transform: ${(props) => (  props.clicked ? ("scale(80)") : ("scale(0)"))};
  transition: transform .5s;
  z-index: 10;
`;

const Navigation = styled.nav`
    height: 100vh;
    position: fixed;
    top: 10px;
    right: 0;
    z-index: 10;
    width: ${(props) => (props.clicked ? "100%" : "0%")};
    transition: 0.9;
`;
const List = styled.ul`
    position: absolute;
    list-style: none;
    top 20%;
    right 2%;
    transform: translade(-50%, -50%);
    text-align: center;
    width: 100%;
    z-index: 15;
`;
const ItemLink = styled(NavLink)`
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    text-decoration: none;
    color: ${COLORS.primaryLight};
    padding: 1rem 2rem;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      #14222D 50%
      z-index: 15;
    );

    background-size: 200%;
    transition: all 0.3s;

    &:hover,
    &:active {
      background-position: 100%;
      color: &{COLORS.primaryDark};
      transfor: tranladeX(1rem) ;
    }
`;
function Nolog() {
  const [click, setClick] = useState(false);
  const CambioClick = () => {
    
    setClick(!click)
    
  };
  return (
          <>
            <MenuLabel htmlFor='navi-toggle' onClick={CambioClick} className="hamburguesa" > {click === true ? <p className='Texto_hamburguesa'  > X </p> : <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="75" fill="currentColor"  viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>} 
            </MenuLabel>
            <NavBackground clicked={click}>
              &nbsp;
            </NavBackground>
            <Navigation clicked={click}>
              <List>
                <li>
                  <ItemLink onClick={CambioClick} to="/Login"> Iniciar Sesión </ItemLink >
                </li>
                <li>
                  <ItemLink onClick={CambioClick} to="/Registro"> Registrarse </ItemLink >
                </li>
              </List>
            </Navigation>
              <>
                <Link to='/Login' className='Click' > <button type="button" className='Router_Botones'> Iniciar sesión </button> </Link>
                <Link to='/Registro' className='Click'> <button type="button" className='Router_Botones'> Registrarse </button> </Link>
              </>
            
          </>
       
  )
}

export default Nolog;