import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: Object[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Main',
          url: '/',
        },
        {
          title: 'Progress Bar',
          url: 'progress',
        },
        {
          title: 'Graphics',
          url: 'first-graphic',
        },
        {
          title: 'Promises',
          url: 'promises',
        },
      ],
    },
  ];

  constructor() {}
}
