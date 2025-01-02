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
import { CustomerComponent } from './components/customer/customer.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:'',
        component: LayoutComponent,
        children: [
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
            {
                path: 'customer',
                component: CustomerComponent
            },
            {
                path: 'ng-if',
                component: NgIfComponent
            },
            {
                path: 'ng-for',
                component: NgForComponent
            }
        ]

    }
    
    // {
    //     path: 'lifeCycle',
    //     component: LifeCycleComponent
    // }

];
