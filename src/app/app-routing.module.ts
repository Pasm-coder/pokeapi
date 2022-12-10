import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { PokelistComponent } from './pokelist/pokelist.component';


const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'list', component: PokelistComponent},
  { path: 'cards', component: CardsComponent},
  { path: 'my_team', component: MyTeamComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }