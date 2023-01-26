import PropTypes from 'prop-types';
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { IconBsSearch, SearchbarStyled, SearchForm, SearchFormButton, SearchFormInput } from './Searchbar.Styled';

const schema = yup.object({
  inputValue: yup.string().required(),
});

const initialValues = {
  inputValue: '',
};

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = async ({ inputValue }, { resetForm, setSubmitting }) => {
    await onSubmit(inputValue);
    setSubmitting(false);
    resetForm();
  };


  return (
    <SearchbarStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <SearchForm>
            <SearchFormButton type="submit">
              <IconBsSearch />
            </SearchFormButton>
            <SearchFormInput
              name="inputValue"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              />
          </SearchForm>
        )}
      </Formik>
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
