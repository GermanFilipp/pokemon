import React from "react";
import { Formik, Field, Form } from "formik";
import { string, func, number, shape, arrayOf } from "prop-types";

import { Select } from "components/Common";

const PokemonForm = props => (
  <div>
    <h1>Edit Your Pokemon</h1>
    <Formik
      enableReinitialize
      initialValues={{
        ...props.pokemon,
        nickname: props.pokemon.nickname || ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        props.handleSubmit(values);
        setSubmitting(false);
      }}
    >
      {({
        values,
        isSubmitting,
        setFieldValue,
        setFieldTouched,
        touched,
        errors,
        resetForm
      }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="name">Pokemon Name:</label>
            <Field
              className="form-control"
              id="name"
              name="name"
              placeholder="Write pokemon name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="nickname">Pokemon Nickname:</label>
            <Field
              className="form-control"
              id="nickname"
              name="nickname"
              placeholder="Write pokemon nickname"
            />
          </div>

          <div className="form-group">
            <label htmlFor="weight">Pokemon weight:</label>
            <Field
              className="form-control"
              id="weight"
              name="weight"
              placeholder="Write pokemon weight"
            />
          </div>

          <div className="form-group">
            <label htmlFor="height">Pokemon height:</label>
            <Field
              className="form-control"
              id="height"
              name="height"
              placeholder="Write pokemon height"
            />
          </div>

          <Select
            error={errors.stats}
            name="stats"
            onBlur={setFieldTouched}
            onChange={setFieldValue}
            options={props.stats}
            title="Pokemon Stats"
            touched={touched.stats}
            value={values.stats}
          />

          <Select
            error={errors.heldItems}
            name="heldItems"
            onBlur={setFieldTouched}
            onChange={setFieldValue}
            options={props.heldItems}
            title="Pokemon Held Items"
            touched={touched.heldItems}
            value={values.heldItems}
          />

          <Select
            error={errors.abilities}
            name="abilities"
            onBlur={setFieldTouched}
            onChange={setFieldValue}
            options={props.abilities}
            title="Pokemon Stats"
            touched={touched.abilities}
            value={values.abilities}
          />

          <button
            className="btn btn-secondary mr-2"
            onClick={props.handleClearForm}
            type="button"
          >
            Clear Form
          </button>
          <button
            className="btn btn-secondary mr-2"
            onClick={resetForm}
            type="button"
          >
            Reset
          </button>
          <button
            className="btn btn-primary"
            disabled={isSubmitting}
            type="submit"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
PokemonForm.propTypes = {
  abilities: arrayOf(
    shape({
      label: string,
      value: string
    })
  ),
  handleClearForm: func.isRequired,
  handleSubmit: func.isRequired,
  heldItems: arrayOf(
    shape({
      label: string,
      value: string
    })
  ),
  pokemon: shape({
    id: number,
    name: string,
    image: string,
    weight: number,
    height: number,
    nickname: string,
    stats: arrayOf(
      shape({
        label: string,
        value: string
      })
    ),
    heldItems: arrayOf(
      shape({
        label: string,
        value: string
      })
    ),
    abilities: arrayOf(
      shape({
        label: string,
        value: string
      })
    )
  }).isRequired,
  stats: arrayOf(
    shape({
      label: string,
      value: string
    })
  )
};

PokemonForm.defaultProps = {
  abilities: [],
  heldItems: [],
  stats: []
};

export default PokemonForm;
