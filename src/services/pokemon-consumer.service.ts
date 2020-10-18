import axios from 'axios';
import { Pokemon } from '../models/Pokemon.interface';
import { PokemonList } from '../models/PokemonList.interface';

export class PokemonConsumer {
    public getPokemonList(offset = 100, max = 10): Promise<PokemonList> {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/`).then((pokemons) => {
            console.log('pokemons getted --> ', pokemons);
            return pokemons.statusText === 'ok' ? pokemons.data : null;
        }).catch(err => {
            console.log('error getting pokemon list --> ', err);
            return null;
        });
    }

    public getPokemon(url: string): Promise<Pokemon> {
        return axios.get(url).then((pokemon) => {
            console.log('getted pokemon --> ', pokemon.data);
            return pokemon.statusText === 'ok' ? pokemon.data : null;
        }).catch(err => {
            console.log('error getting pokemon --> ', err);
            return null;
        });
    }
}
