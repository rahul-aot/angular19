import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { SignalComponent } from './components/signal/signal.component';
import { LinkSignalComponent } from './components/link-signal/link-signal.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { GetApiComponent } from './components/API/get-api/get-api.component';
import { PostApiComponent } from './components/API/post-api/post-api.component';
import { PutApiComponent } from './components/API/put-api/put-api.component';
import { DeleteApiComponent } from './components/API/delete-api/delete-api.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dataBinding',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'dataBinding',
        component: DataBindingComponent
    },
    {
        path: 'ng-class',
        component: NgClassComponent
    },
    {
        path: 'control-flow',
        component: ControlStatementComponent
    },
    {
        path: 'signal',
        component: SignalComponent
    },
    {
        path: 'linkSignal',
        component: LinkSignalComponent
    },
    {
        path: 'templateForm',
        component: TemplateFormComponent
    },
    {
        path: 'reactiveForm',
        component: ReactiveFormComponent
    },
    {
        path: 'getApi',
        component: GetApiComponent
    },
    {
        path: 'postApi',
        component: PostApiComponent
    },
    {
        path: 'putApi',
        component: PutApiComponent
    },
    {
        path: 'deleteApi',
        component: DeleteApiComponent
    },

];
