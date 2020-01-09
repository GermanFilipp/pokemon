import React from "react";
import { connect } from "react-redux";
import {
  func,
  number,
  arrayOf,
  bool,
  shape,
  string,
  objectOf
} from "prop-types";

import PokemonForm from "components/PokemonForm";
import { EmptyState } from "components/Common";
import {
  saveEditedLineup,
  clearForm
} from "redux/actions/pokemonLineupActions";
import { fetchPokemonSettings } from "redux/actions/formActions";

class PokemonData extends React.Component {
  componentDidMount() {
    if (!this.props.settingsLoaded) {
      this.props.fetchPokemonSettings();
    }
  }

  render() {
    return (
      <div className="col-12">
        <div className="row">
          <div className="col-12 border-bottom">
            <div className="main-panel">
              <h4 className="main-title">Pokemon Data</h4>
            </div>
          </div>
          <div className="col-12">
            <div className="main-form">
              {this.props.editedPokemonId ? (
                <PokemonForm
                  abilities={this.props.abilities}
                  handleClearForm={this.props.handleClearForm}
                  handleSubmit={this.props.handleSavePokemon}
                  heldItems={this.props.heldItems}
                  pokemon={this.props.pokemons[this.props.editedPokemonId]}
                  stats={this.props.stats}
                />
              ) : (
                <EmptyState>
                  You can customize your pokemon information here. Go nuts.
                </EmptyState>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stats: state.form.stats,
    heldItems: state.form.heldItems,
    abilities: state.form.abilities,
    settingsLoaded: state.form.loaded,
    pokemons: state.pokemonLineup.pokemons,
    editedPokemonId: state.pokemonLineup.editedPokemonId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSavePokemon: object => {
      dispatch(saveEditedLineup(object));
    },
    fetchPokemonSettings: () => {
      dispatch(fetchPokemonSettings());
    },
    handleClearForm: () => {
      dispatch(clearForm());
    }
  };
};

PokemonData.propTypes = {
  abilities: arrayOf(
    shape({
      label: string,
      value: string
    })
  ),
  editedPokemonId: number,
  fetchPokemonSettings: func.isRequired,
  handleClearForm: func.isRequired,
  handleSavePokemon: func.isRequired,
  heldItems: arrayOf(
    shape({
      label: string,
      value: string
    })
  ),
  pokemons: objectOf(
    shape({
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
    })
  ),
  settingsLoaded: bool.isRequired,
  stats: arrayOf(
    shape({
      label: string,
      value: string
    })
  )
};

PokemonData.defaultProps = {
  abilities: [],
  editedPokemonId: null,
  heldItems: [],
  pokemons: {},
  stats: []
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonData);
