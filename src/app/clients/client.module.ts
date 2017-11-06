import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import {ClientComponent} from './client.component';
import {ClientRegComponent} from './client-reg.component';
import {ClientService} from './client.service';
import {ProductListComponent} from '../products/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    imports: [
      RouterModule.forChild([
          { path: 'clients', component: ClientComponent },
          {path:'clientsreg', component:ClientRegComponent},
          {path:'products2',component:ProductListComponent}
         
          
      ]),
      ReactiveFormsModule,
      FormsModule,
      SharedModule],
      declarations: [
        ClientComponent,
        ClientRegComponent,
        
        
      ],
      providers: [
        ClientService,
       
        
      
    ],
   
  })
  export class ClientModule { }