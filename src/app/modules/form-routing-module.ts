import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignUpFormComponent } from '../form/sign-up-form/sign-up-form.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: 'formRedirect', component: SignUpFormComponent }
    ])],
    exports:[RouterModule]
})
export class FormRoutingModule {
}
