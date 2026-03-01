import { Package, Watch, Smartphone, Tablet, Headphones } from 'lucide-react';
import { PageHeader, PageBreadcrumb, SectionCard } from '../components/ui-showcase';

// ── Types ─────────────────────────────────────────────────────────────────────

type OrderStatus = 'Delivered' | 'Pending' | 'Canceled';
type UserStatus = 'Active' | 'Inactive' | 'Suspended';

interface Order {
  icon: typeof Package;
  product: string;
  category: string;
  price: string;
  status: OrderStatus;
}

interface User {
  name: string;
  email: string;
  role: string;
  status: UserStatus;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const ORDERS: Order[] = [
  {
    icon: Package,
    product: 'MacBook Pro 16"',
    category: 'Laptops',
    price: '$2,499.00',
    status: 'Delivered',
  },
  {
    icon: Watch,
    product: 'Apple Watch Ultra',
    category: 'Wearables',
    price: '$799.00',
    status: 'Pending',
  },
  {
    icon: Smartphone,
    product: 'iPhone 15 Pro Max',
    category: 'Smartphones',
    price: '$1,199.00',
    status: 'Delivered',
  },
  {
    icon: Tablet,
    product: 'iPad Pro 12.9"',
    category: 'Tablets',
    price: '$1,099.00',
    status: 'Canceled',
  },
  {
    icon: Headphones,
    product: 'AirPods Pro',
    category: 'Audio',
    price: '$249.00',
    status: 'Delivered',
  },
];

const USERS: User[] = [
  { name: 'Liam Anderson', email: 'liam.anderson@example.com', role: 'Admin', status: 'Active' },
  { name: 'Sophia Martinez', email: 'sophia.m@example.com', role: 'Editor', status: 'Active' },
  { name: 'Noah Thompson', email: 'noah.t@example.com', role: 'Viewer', status: 'Inactive' },
  { name: 'Olivia Williams', email: 'olivia.w@example.com', role: 'Editor', status: 'Active' },
  { name: 'Ethan Johnson', email: 'ethan.j@example.com', role: 'Viewer', status: 'Suspended' },
  { name: 'Ava Brown', email: 'ava.b@example.com', role: 'Admin', status: 'Active' },
];

// ── Badge helpers ─────────────────────────────────────────────────────────────

const orderStatusClass: Record<OrderStatus, string> = {
  Delivered:
    'rounded-full bg-success-50 px-2 py-0.5 text-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500',
  Pending:
    'rounded-full bg-warning-50 px-2 py-0.5 text-xs font-medium text-warning-600 dark:bg-warning-500/15 dark:text-orange-400',
  Canceled:
    'rounded-full bg-error-50 px-2 py-0.5 text-xs font-medium text-error-600 dark:bg-error-500/15 dark:text-error-500',
};

const userStatusClass: Record<UserStatus, string> = {
  Active:
    'rounded-full bg-success-50 px-2 py-0.5 text-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-500',
  Inactive:
    'rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400',
  Suspended:
    'rounded-full bg-error-50 px-2 py-0.5 text-xs font-medium text-error-600 dark:bg-error-500/15 dark:text-error-500',
};

const thCls = 'py-3 pr-4 text-left first:pl-4';
const tdCls = 'py-3.5 pr-4 first:pl-4';

// ── Page ──────────────────────────────────────────────────────────────────────

export function TablesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Tables"
        description="Data table patterns with sorting, filtering, and status badges"
        breadcrumb={
          <PageBreadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'UI Library', href: '/ui' },
              { label: 'Tables' },
            ]}
          />
        }
      />

      {/* Orders table */}
      <SectionCard
        title="Recent Orders"
        desc="Table with product icons, categories, prices, and status badges"
      >
        <div className="w-full overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-y border-gray-100 dark:border-gray-800">
                <th className={thCls}>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Product</p>
                </th>
                <th className={thCls}>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Category</p>
                </th>
                <th className={thCls}>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Price</p>
                </th>
                <th className={thCls}>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Status</p>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {ORDERS.map((order) => (
                <tr
                  key={order.product}
                  className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/40"
                >
                  <td className={tdCls}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                        <order.icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {order.product}
                      </span>
                    </div>
                  </td>
                  <td className={tdCls}>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {order.category}
                    </span>
                  </td>
                  <td className={tdCls}>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {order.price}
                    </span>
                  </td>
                  <td className={tdCls}>
                    <span className={orderStatusClass[order.status]}>{order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* Users table */}
      <SectionCard
        title="Basic Data Table"
        desc="Simple striped table with hover states — users, roles, and statuses"
      >
        <div className="w-full overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-y border-gray-100 dark:border-gray-800">
                <th className={thCls}>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Name</p>
                </th>
                <th className={thCls}>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Email</p>
                </th>
                <th className={thCls}>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Role</p>
                </th>
                <th className={thCls}>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Status</p>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {USERS.map((user, i) => (
                <tr
                  key={user.email}
                  className={`transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/40 ${
                    i % 2 === 0 ? '' : 'bg-gray-50/50 dark:bg-gray-800/20'
                  }`}
                >
                  <td className={tdCls}>
                    <div className="flex items-center gap-3">
                      <div className="bg-brand-100 dark:bg-brand-500/15 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                        <span className="text-brand-600 dark:text-brand-400 text-xs font-semibold">
                          {user.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {user.name}
                      </span>
                    </div>
                  </td>
                  <td className={tdCls}>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{user.email}</span>
                  </td>
                  <td className={tdCls}>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{user.role}</span>
                  </td>
                  <td className={tdCls}>
                    <span className={userStatusClass[user.status]}>{user.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}
