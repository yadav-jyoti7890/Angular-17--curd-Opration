import { Routes } from '@angular/router';
import { CreateComponent } from './component/create/create.component';
import { IndexComponent } from './component/index/index.component';
import { UpdateComponent } from './component/update/update.component';

export const routes: Routes = [
    {path:'create', component:CreateComponent},
    {path: 'update/:id', component:UpdateComponent},
    {path:'index',  component:IndexComponent}
    
     
];
