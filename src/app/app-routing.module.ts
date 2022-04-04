import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ConvertComponent } from './components/convert/convert.component';

const routes: Routes = 
[
  { path: 'convert', component: ConvertComponent  },
  { path: 'about', component: AboutComponent  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
