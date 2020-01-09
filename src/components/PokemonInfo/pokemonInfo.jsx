import React from "react";
import { func, number, arrayOf, shape, string, bool } from "prop-types";
import { Property, Properties, Image, EmptyState } from "components/Common";

const Error = () => <div>Can&apos;t find this pokemon</div>;

const Info = props => (
  <div className="mb-2">
    <Image val={props.pokemon.image} />
    <Property title="Name" value={props.pokemon.name} />
    <Property title="Weight" value={props.pokemon.weight} />
    <Property title="Height" value={props.pokemon.height} />
    <Properties dataset={props.pokemon.stats} title="Stats" />
    <Properties dataset={props.pokemon.heldItems} title="Held Items" />
    <Properties dataset={props.pokemon.abilities} title="Abilities" />
    <button
      className="btn btn-secondary mr-2"
      onClick={props.handleClear}
      type="button"
    >
      Clear
    </button>
    {props.pokemonLineupLength < 6 && (
      <button
        className="btn btn-primary"
        onClick={() => props.handleAddToLineup(props.pokemon)}
        type="button"
      >
        Add To Lineup
      </button>
    )}
  </div>
);

const PokemonInfo = props => {
  if (props.fetchError) {
    return <Error />;
  }
  if (!props.pokemon) {
    return <EmptyState>Your pokedex</EmptyState>;
  }

  return (
    <Info
      handleAddToLineup={props.handleAddToLineup}
      handleClear={props.handleClear}
      pokemon={props.pokemon}
      pokemonLineupLength={props.pokemonLineupLength}
    />
  );
};

PokemonInfo.propTypes = {
  fetchError: bool.isRequired,
  handleAddToLineup: func.isRequired,
  handleClear: func.isRequired,
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
  }),
  pokemonLineupLength: number.isRequired
};

PokemonInfo.defaultProps = {
  pokemon: {}
};

Info.propTypes = {
  handleAddToLineup: func.isRequired,
  handleClear: func.isRequired,
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
  pokemonLineupLength: number.isRequired
};
export default PokemonInfo;
