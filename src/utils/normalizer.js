import startcase from "lodash.startcase";

export function normalizeSearchResult(payload) {
  if (!payload) {
    return null;
  }

  return {
    id: payload.id,
    name: payload.name,
    image: payload.sprites.front_default,
    weight: payload.weight,
    height: payload.height,
    nickname: null,
    stats: payload.stats.map(val => ({
      value: val.stat.name,
      label: startcase(val.stat.name)
    })),
    heldItems: payload.held_items.map(val => ({
      value: val.item.name,
      label: startcase(val.item.name)
    })),
    abilities: payload.abilities.map(val => ({
      value: val.ability.name,
      label: startcase(val.ability.name)
    }))
  };
}

export function normalizeSettingsResult(payload) {
  if (!payload) {
    return {};
  }
  return {
    stats: payload.stats.results.map(val => ({
      value: val.name,
      label: startcase(val.name)
    })),
    heldItems: payload.heldItems.results.map(val => ({
      value: val.name,
      label: startcase(val.name)
    })),
    abilities: payload.abilities.results.map(val => ({
      value: val.name,
      label: startcase(val.name)
    }))
  };
}
