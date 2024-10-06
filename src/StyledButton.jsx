import styled from 'styled-components';

const StyledButton = styled.button`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgButtonColor || 'blue'};
  color: ${props => props.textColor || 'white'};
  border: none;
  padding: 10px;
  cursor: pointer;

  img {
    margin-right: 10px;
  }
`;

export default StyledButton;
