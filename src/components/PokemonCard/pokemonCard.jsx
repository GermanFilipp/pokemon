import React from "react";
import { Image } from "components/Common";
import { string, func, number, shape, arrayOf } from "prop-types";

const PokemonCard = props => (
  <div className="border p-3">
    <Image val={props.pokemon.image} />
    <p className="main-card-title">
      {props.pokemon.name}
      {props.pokemon.nickname && `(${props.pokemon.nickname})`}
    </p>
    <div className="main-card-buttons">
      <button
        className="btn btn-primary"
        onClick={() => props.handleEditPokemon(props.pokemon)}
        type="button"
      >
        Edit
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => props.handleRemovePokemon(props.pokemon.id)}
        type="button"
      >
        Remove
      </button>
    </div>
  </div>
);

PokemonCard.propTypes = {
  handleEditPokemon: func.isRequired,
  handleRemovePokemon: func.isRequired,
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
  }).isRequired
};

export default PokemonCard;
