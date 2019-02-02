import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';
import { ScreenComponent } from './screen/screen.component';

import { WorkflowGuard } from './workflow/workflow-guard.service';
import { WorkflowService } from './workflow/workflow.service';
import { StorageComponent } from './storage/storage.component';
import { BatteryComponent } from './battery/battery.component';


export const appRoutes: Routes = [
  // 1st Route
  { path: '', component: PersonalComponent },
  // 2nd Route
  { path: 'work', component: WorkComponent, canActivate: [WorkflowGuard] },
  // 3rd Route
  { path: 'address', component: AddressComponent, canActivate: [WorkflowGuard] },
  // 4th Route
  { path: 'screen', component: ScreenComponent, canActivate: [WorkflowGuard] },
  { path: 'storage', component: StorageComponent, canActivate: [WorkflowGuard] },
  { path: 'battery', component: BatteryComponent, canActivate: [WorkflowGuard] },
  { path: 'result', component: ResultComponent, canActivate: [WorkflowGuard] },
  // 5th Route
  // { path: '', redirectTo: '/personal', pathMatch: 'full' },
  // 6th Route
  // { path: '**', component: PersonalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
  providers: [WorkflowGuard]
})

export class AppRoutingModule { }