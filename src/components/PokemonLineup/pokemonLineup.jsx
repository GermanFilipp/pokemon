import React from "react";
import { connect } from "react-redux";
import isEmpty from "lodash.isempty";
import { func, number, arrayOf, shape, string, objectOf } from "prop-types";

import PokemonCard from "components/PokemonCard";
import { EmptyState } from "components/Common";
import {
  removeFromLineup,
  editLineup
} from "redux/actions/pokemonLineupActions";

const PokemonLineup = props => (
  <div className="col-12">
    <div className="row">
      <div className="col-12 border-bottom mb-3">
        <div className="main-panel">
          <h4 className="main-title">Pokemon Lineup</h4>
        </div>
      </div>
      <div className="col-12 border-bottom">
        <div className="main-images">
          {!isEmpty(props.pokemonsIds) ? (
            props.pokemonsIds.map(id => {
              return (
                <div key={id} className="main-card">
                  <PokemonCard
                    handleEditPokemon={props.handleEditPokemon}
                    handleRemovePokemon={props.handleRemovePokemon}
                    pokemon={props.pokemons[id]}
                  />
                </div>
              );
            })
          ) : (
            <EmptyState className="mb-3 ml-3">
              Yours Pokemon Lineup is empty
            </EmptyState>
          )}
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    pokemons: state.pokemonLineup.pokemons,
    pokemonsIds: state.pokemonLineup.pokemonsIds
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleRemovePokemon: id => {
      dispatch(removeFromLineup(id));
    },
    handleEditPokemon: obj => {
      dispatch(editLineup(obj.id));
    }
  };
};

PokemonLineup.propTypes = {
  handleEditPokemon: func.isRequired,
  handleRemovePokemon: func.isRequired,
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
  pokemonsIds: arrayOf(number)
};

PokemonLineup.defaultProps = {
  pokemons: {},
  pokemonsIds: []
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonLineup);
