import React, {Component} from "react";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import PropTypes from 'prop-types';
import {GoSearch} from 'react-icons/go';
import { SearchbarWrapper, SearchForm, SearchFormButton, SearchFormInput, Message } from "./Searchbar.styled";


const initialValues = {
  searchQuery: ""
}

const schema = yup.object().shape({
  searchQuery: yup.string().trim().required("Search is a required field")
})

export class Searchbar extends Component {
  
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

    handleSubmitSearchForm = (values, {resetForm}) => {
        this.props.onSubmit({...values});
        resetForm();
      };

    render() {
        return (     
         <SearchbarWrapper>
         <Formik initialValues={initialValues}
         onSubmit={this.handleSubmitSearchForm}
         validationSchema={schema}>
          <SearchForm>
          <SearchFormButton type="submit" aria-label="search">
          <GoSearch/>
          </SearchFormButton >
         <SearchFormInput
         name="searchQuery"
         type="text"
         placeholder="Search images and photos"
         />
         <ErrorMessage name="searchQuery" component={Message}/>
          </SearchForm>
        </Formik>
        </SearchbarWrapper>    
      )
    }
}