import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import './index.css';
// import App from './App';

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: tomato;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// const Button = styled.button`
//   /* Adapt the colors based on primary prop */
//   background: ${props => (props.primary ? 'palevioletred' : 'white')};
//   color: ${props => (props.primary ? 'white' : 'palevioletred')};

//   font-size: 1em;
//   margin: 1em;
//   padding: 1em 2em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
//   cursor: pointer;

//   transition: color, background 250ms linear;

//   &:hover {
//     background: ${props => (props.primary ? 'white' : 'palevioletred')};
//     color: ${props => (props.primary ? 'palevioletred' : 'white')};
//   }
// `;
const Link = ({ className, children }) => (
  <a className={className} href="1">
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Wrapper>
      <Title>Hello World!</Title>
    </Wrapper>
    {/* <div>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </div> */}
    <div>
      <Link>Unstyled, boring Link</Link>
      <br />
      <StyledLink>Styled, exciting Link</StyledLink>
    </div>
  </React.StrictMode>,
);
