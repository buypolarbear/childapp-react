import Calendar from './pages/Calendar';
import Login from './pages/Login';
import Reports from './pages/Reports';

export const LINKS = [
  { path: '/', name: 'Login', component: Login },
  { path: '/calendar', name: 'Calendar', component: Calendar },
  { path: '/reports', name: 'Reports', component: Reports },
];
