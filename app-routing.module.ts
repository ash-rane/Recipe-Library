import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchRecipeComponent } from './search-recipe/search-recipe.component';
import { ShowingSearchResultComponent } from './showing-search-result/showing-search-result.component';
import { DetailsScreenComponent } from './details-screen/details-screen.component';

const routes: Routes = [
  { path: '', component: SearchRecipeComponent },
  { path: 'results', component: ShowingSearchResultComponent },
  {path: 'recipe/:id', component: DetailsScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
