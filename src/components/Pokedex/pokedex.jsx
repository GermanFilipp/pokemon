import React from "react";
import { connect } from "react-redux";
import { string, func, bool, number, shape, arrayOf } from "prop-types";

import { fetchPokemon, clearPokedex } from "redux/actions/pokedexActions";
import { addToLineup } from "redux/actions/pokemonLineupActions";

import SearchPokemonForm from "components/SearchPokemonForm";
import PokemonInfo from "components/PokemonInfo";

const Pokedex = props => (
  <div className="col-12">
    <div className="row">
      <div className="col-12 border-bottom mb-3">
        <div className="main-panel">
          <h4 className="main-title">Pokedex</h4>
        </div>
      </div>
      <div className="col-12 mb-3">
        <SearchPokemonForm
          handleSubmit={props.handleFetchPokemon}
          searchablePokemonValue={props.searchablePokemonValue}
        />
      </div>
      <div className="col-12">
        <PokemonInfo
          fetchError={props.fetchError}
          handleAddToLineup={props.handleAddToLineup}
          handleClear={props.handleClear}
          pokemon={props.pokemonSearchResult}
          pokemonLineupLength={props.pokemonLineupLength}
        />
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    searchablePokemonValue: state.pokedex.searchablePokemonValue,
    pokemonSearchResult: state.pokedex.pokemonSearchResult,
    fetchError: state.pokedex.fetchError,
    pokemonLineupLength: state.pokemonLineup.pokemonsIds.length
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFetchPokemon: values => {
      dispatch(fetchPokemon({ values }));
    },
    handleAddToLineup: values => {
      dispatch(addToLineup(values));
    },
    handleClear: () => {
      dispatch(clearPokedex());
    }
  };
};

Pokedex.propTypes = {
  fetchError: bool.isRequired,
  handleAddToLineup: func.isRequired,
  handleClear: func.isRequired,
  handleFetchPokemon: func.isRequired,
  pokemonLineupLength: number.isRequired,
  pokemonSearchResult: shape({
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
  }),
  searchablePokemonValue: string
};

Pokedex.defaultProps = {
  pokemonSearchResult: null,
  searchablePokemonValue: null
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
