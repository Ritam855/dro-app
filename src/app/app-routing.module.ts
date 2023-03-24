/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { reliefitemComponent } from './reliefitem/reliefitem.component';
import { requestComponent } from './request/request.component';

import { osdmaComponent } from './osdma/osdma.component';
import { reliefcampComponent } from './reliefcamp/reliefcamp.component';
import { distributorComponent } from './distributor/distributor.component';
import { civiliansComponent } from './civilians/civilians.component';

import { InitiaterequestComponent } from './Initiaterequest/Initiaterequest.component';
import { TransferreliefitemComponent } from './Transferreliefitem/Transferreliefitem.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reliefitem', component: reliefitemComponent },
  { path: 'request', component: requestComponent },
  { path: 'osdma', component: osdmaComponent },
  { path: 'reliefcamp', component: reliefcampComponent },
  { path: 'distributor', component: distributorComponent },
  { path: 'civilians', component: civiliansComponent },
  { path: 'Initiaterequest', component: InitiaterequestComponent },
  { path: 'Transferreliefitem', component: TransferreliefitemComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
