import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';


//aca las opciones de navegacion
export const navItems = [
  { key: 'overview', title: 'Catalog', href: paths.dashboard.overview, icon: 'chart-pie' },
  // { key: 'customers', title: 'Customers', href: paths.dashboard.customers, icon: 'users' },
  // { key: 'integrations', title: 'Integrations', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  // { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
  // { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];

// export const navItems = [
//   { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie' },
//   { key: 'customers', title: 'Customers', href: paths.dashboard.customers, icon: 'users' },
//   { key: 'integrations', title: 'Integrations', href: paths.dashboard.integrations, icon: 'plugs-connected' },
//   { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
//   { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
//   { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
// ] satisfies NavItemConfig[];
