import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from '../form/sign-up-form/sign-up-form.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormRoutingModule } from './form-routing-module';

@NgModule({
    imports: [FormsModule, CommonModule, ReactiveFormsModule, FormRoutingModule],
    declarations: [SignUpFormComponent],
    exports: [SignUpFormComponent]
})
export class FormModule {
}
