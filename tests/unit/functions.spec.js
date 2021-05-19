import { shallowMount } from "@vue/test-utils";
import axios from 'axios';
import functions from "../../src/functions";
jest.mock('axios');
describe("functions", () => {
  it("La funcion debe llamar a la api de pokemones hasta que los tenga todos", async() => {
    const firstResponse = {data:{
      "count": 1118,
      "next": "https://pokeapi.co/api/v2/pokemon?offset=5&limit=5",
      "previous": null,
      "results": [
          {
              name: "bulbasaur",
              url: "https://pokeapi.co/api/v2/pokemon/1/"
          },
          {
              name: "ivysaur",
              url: "https://pokeapi.co/api/v2/pokemon/2/"
          },
          {
              name: "venusaur",
              url: "https://pokeapi.co/api/v2/pokemon/3/"
          },
          {
              name: "charmander",
              url: "https://pokeapi.co/api/v2/pokemon/4/"
          },
          {
              name: "charmeleon",
              url: "https://pokeapi.co/api/v2/pokemon/5/"
          }
      ]
  }}
  const secondResponse = {data:{
    "count": 1118,
    "next": null,
    "previous": "https://pokeapi.co/api/v2/pokemon?offset=1108&limit=5",
    "results": [
        {
            name: "duraludon-gmax",
            url: "https://pokeapi.co/api/v2/pokemon/10216/"
        },
        {
            name: "eternatus-eternamax",
            url: "https://pokeapi.co/api/v2/pokemon/10217/"
        },
        {
            name: "urshifu-single-strike-gmax",
            url: "https://pokeapi.co/api/v2/pokemon/10218/"
        },
        {
            name: "urshifu-rapid-strike-gmax",
            url: "https://pokeapi.co/api/v2/pokemon/10219/"
        },
        {
            name: "toxtricity-low-key-gmax",
            url: "https://pokeapi.co/api/v2/pokemon/10220/"
        }
    ]
}}
const result = [{name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}, {name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/"}, {name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/"}, {name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/"}, {name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/"}, {name: "duraludon-gmax", url: "https://pokeapi.co/api/v2/pokemon/10216/"}, {name: "eternatus-eternamax", url: "https://pokeapi.co/api/v2/pokemon/10217/"}, {name: "urshifu-single-strike-gmax", url: "https://pokeapi.co/api/v2/pokemon/10218/"}, {name: "urshifu-rapid-strike-gmax", url: "https://pokeapi.co/api/v2/pokemon/10219/"}, {name: "toxtricity-low-key-gmax", url: "https://pokeapi.co/api/v2/pokemon/10220/"}]
    axios.get.mockImplementationOnce(() => Promise.resolve(firstResponse))
    .mockImplementationOnce(() => Promise.resolve(secondResponse))
    let pokemons = await functions.getPokemons_recursive("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
    expect(pokemons).toEqual(result);
  });
});
