import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.medium};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.halloween[0]};
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  border: 0;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    color: ${p => p.theme.colors.halloween[0]};
    background-color: ${p => p.theme.colors.white};
    border: ${p => p.theme.borders.normal}${p => p.theme.colors.halloween[0]};
    letter-spacing: ${p => p.theme.space[1]}px;
  }
`;

export { Button };
