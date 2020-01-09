import React from "react";
import isEmpty from "lodash.isempty";
import { func, string } from "prop-types";
import { Formik, Field, Form } from "formik";

const SearchPokemonForm = props => (
  <div>
    <Formik
      enableReinitialize
      initialValues={{
        pokemonName: props.searchablePokemonValue || ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        if (!isEmpty(values.pokemonName)) {
          props.handleSubmit(values.pokemonName);
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="d-flex">
            <div className="flex-grow-1 mr-2">
              <Field
                className="form-control"
                name="pokemonName"
                placeholder="Write pokemon name"
              />
            </div>
            <div className="flex-shrink-0">
              <button
                className="btn btn-primary"
                disabled={isSubmitting}
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

SearchPokemonForm.propTypes = {
  handleSubmit: func.isRequired,
  searchablePokemonValue: string
};

SearchPokemonForm.defaultProps = {
  searchablePokemonValue: ""
};

export default SearchPokemonForm;
