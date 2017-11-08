import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'


@NgModule({
    imports:[RouterModule.forRoot([
        {path:'form', loadChildren:'./modules/form-module#FormModule'}
    ],{enableTracing:true})],
    exports:[RouterModule]
})
export class AppRoutingModule {

}
