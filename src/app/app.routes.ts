import { Routes } from '@angular/router';
import { Dashboard } from './page/dashboard/dashboard';
import { EmployeeManegment } from './page/employee-manegment/employee-manegment';
import { Home } from './page/home/home';
import { Leave } from './page/leave/leave';
import { Payroll } from './page/payroll/payroll';
import { Recruitment } from './page/recruitment/recruitment';
import { Header } from './page/header/header';

export const routes: Routes = [
    {
        path: '/dashoard',
        component: Dashboard
    },
    {
        path: '/employeemanegment',
        component: EmployeeManegment
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/leave',
        component: Leave
    },
    {
        path: '/payroll',
        component: Payroll
    },
    {
        path:'/performance',
        component:Performance
    },
    {
        path:'/recruitment',
        component:Recruitment
    },
    {
        path:'/header',
        component:Header
    }
];
