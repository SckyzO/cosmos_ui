import { Link } from 'react-router-dom';
import {
  Square,
  Tag,
  Bell,
  List,
  Navigation,
  BarChart2,
  ToggleLeft,
  Layers,
  ChevronRight,
  Loader2,
  AlignLeft,
  RotateCcw,
  Hash,
  Clock,
  Volume2,
  Info,
  User,
  LayoutGrid,
  SlidersHorizontal,
  Code2,
  Minus,
  PanelRight,
  CreditCard,
  Image,
} from 'lucide-react';
import { PageHeader, PageBreadcrumb } from '../components/ui-showcase';

const SECTIONS = [
  {
    title: 'Actions',
    items: [
      { label: 'Buttons', path: '/ui/buttons', icon: Square },
      { label: 'Button Group', path: '/ui/buttons-group', icon: LayoutGrid },
      { label: 'Dropdowns', path: '/ui/dropdowns', icon: ChevronRight },
    ],
  },
  {
    title: 'Display',
    items: [
      { label: 'Badges', path: '/ui/badges', icon: Tag },
      { label: 'Alerts', path: '/ui/alerts', icon: Bell },
      { label: 'Cards', path: '/ui/cards', icon: CreditCard },
      { label: 'Ribbons', path: '/ui/ribbons', icon: Tag },
      { label: 'Stats Cards', path: '/ui/stats-cards', icon: BarChart2 },
      { label: 'Carousel', path: '/ui/carousel', icon: Image },
    ],
  },
  {
    title: 'Navigation',
    items: [
      { label: 'Breadcrumb', path: '/ui/breadcrumb', icon: Navigation },
      { label: 'Pagination', path: '/ui/pagination', icon: List },
      { label: 'Links', path: '/ui/links', icon: AlignLeft },
      { label: 'Tabs', path: '/ui/tabs', icon: Layers },
      { label: 'Stepper', path: '/ui/stepper', icon: Hash },
    ],
  },
  {
    title: 'Overlay',
    items: [
      { label: 'Modals', path: '/ui/modals', icon: Square },
      { label: 'Popovers', path: '/ui/popovers', icon: Info },
      { label: 'Tooltips', path: '/ui/tooltips', icon: Info },
      { label: 'Drawer', path: '/ui/drawer', icon: PanelRight },
      { label: 'Toast', path: '/ui/toast', icon: Volume2 },
      { label: 'Notifications', path: '/ui/notifications', icon: Bell },
    ],
  },
  {
    title: 'Forms',
    items: [
      { label: 'Form Elements', path: '/ui/form-elements', icon: ToggleLeft },
      { label: 'Tag Input', path: '/ui/tag-input', icon: Tag },
      { label: 'Range Slider', path: '/ui/range-slider', icon: SlidersHorizontal },
      { label: 'OTP Input', path: '/ui/otp-input', icon: Code2 },
    ],
  },
  {
    title: 'Feedback',
    items: [
      { label: 'Spinners', path: '/ui/spinners', icon: Loader2 },
      { label: 'Progress Bar', path: '/ui/progress-bar', icon: Minus },
      { label: 'Skeleton', path: '/ui/skeleton', icon: RotateCcw },
      { label: 'Empty State', path: '/ui/empty-state', icon: Square },
    ],
  },
  {
    title: 'Content',
    items: [
      { label: 'Avatars', path: '/ui/avatars', icon: User },
      { label: 'List', path: '/ui/list', icon: List },
      { label: 'Timeline', path: '/ui/timeline', icon: Clock },
      { label: 'Accordion', path: '/ui/accordion', icon: ChevronRight },
    ],
  },
];

export function UILibraryPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="UI Library"
        description="All cosmos_ui components — 32 building blocks"
        breadcrumb={
          <PageBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'UI Library' }]} />
        }
      />

      <div className="space-y-8">
        {SECTIONS.map((section) => (
          <div key={section.title}>
            <h3 className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase dark:text-gray-500">
              {section.title}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {section.items.map(({ label, path, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className="hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 dark:hover:border-brand-700/50 dark:hover:bg-brand-500/10 dark:hover:text-brand-400 flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 text-sm font-medium text-gray-700 transition-all dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
