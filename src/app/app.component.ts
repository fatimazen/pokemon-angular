import { Component , OnInit} from '@angular/core';
import { find } from 'rxjs';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
     
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;
  ngOnInit() {
    console.table(this.pokemonList);  
  }

  selectPokemon(pokemonId: string){
   const pokemon :Pokemon|undefined = this.pokemonList.find(Pokemon => pokemon.id == +pokemonId);

if(pokemon)
{
  console.log(`vous avez demandé le pokemon ${pokemon.name}`);
  this.pokemonSelected = pokemon;
}else
{
  console.loge(`Vous avez demandé un pokemon qui n' hesiste pas!`);
  this.pokemonSelected =pokemon;
}

  }
}
