// assets
import { IconKey, IconTable, IconCalendar, IconFileInvoice, IconBrandProducthunt } from '@tabler/icons';

// constant
const icons = {
  IconKey,
  IconTable,
  IconCalendar,
  IconFileInvoice,
  IconBrandProducthunt
};

// ==============================|| WAITER MENU ITEMS ||============================== //

const waiter = {
  id: 'waiter',
  title: 'Waiter',
  caption: 'this for the waiter controle menu screen',
  type: 'group',
  children: [
    {
      id: 'invoice',
      title: 'Invoice',
      type: 'item',
      url: '/waiter/util-typography',
      icon: icons.IconBrandProducthunt,
      breadcrumbs: false
    },
    {
      id: 'calendar',
      title: 'calendar',
      type: 'item',
      url: '/waiter/util-typography',
      icon: icons.IconCalendar,
      breadcrumbs: false
    },
    {
      id: 'recette',
      title: 'recette',
      type: 'item',
      url: '/waiter/util-typography',
      icon: icons.IconFileInvoice,
      breadcrumbs: false
    }
  ]
};

export default waiter;
