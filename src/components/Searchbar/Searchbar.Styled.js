import { Form, Field } from 'formik';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';

const SearchbarStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: ${p => p.theme.colors.halloween[0]};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: ${p => p.theme.radii.medium};
  overflow: hidden;
`;

const SearchFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  color: ${p => p.theme.colors.halloween[5]};
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  outline: none;
`;

const IconBsSearch = styled(BsSearch)`
  /* position: absolute; */
  width: 18px;
  height: 18px;
  padding: 0;
  overflow: hidden;
  /* clip: rect(0, 0, 0, 0); */
  white-space: nowrap;
  /* clip-path: inset(50%); */
  border: 0;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: ${p => p.theme.colors.halloween[0]};
    transform: scale(1.3);
  }
`;

const SearchFormInput = styled(Field)`
  display: inline-block;
  width: 100%;
  color: ${p => p.theme.colors.halloween[5]};
  font: inherit;
  font-size: 22px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 22px;
  }
`;

export {
  SearchbarStyled,
  SearchForm,
  SearchFormButton,
  IconBsSearch,
  SearchFormInput,
};
