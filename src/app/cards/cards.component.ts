import { Component } from '@angular/core';
import { AppiService } from '../appi.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent {
 
  pokemons:any[]=[]

  constructor(
    private appiservice: AppiService
  ){}
  ngOnInit():void{
    this.appiservice.getPokemons()
    .subscribe((response:any)=>{
      /* this.totalPokemons=response.count; */

      response.results.forEach((result: { name: string; }) => {
        this.appiservice.getMoreData(result.name)
        .subscribe((response:any)=>{
          /* this.pokemons.push(response); */
          let type='';
    
          response.types.forEach((element: any) => {
            type=type+element.type.name.charAt(0).toUpperCase()+element.type.name.slice(1)+' '
          });

          this.pokemons.push({
                'name':response.name.charAt(0).toUpperCase()+response.name.slice(1),
                'img':response.sprites.front_default,
              'height':response.height,
              'health':response.stats[0].base_stat,
              'atack':response.stats[1].base_stat,
              'types':type});
        

        })
      });
    });
  }
}