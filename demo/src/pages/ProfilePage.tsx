import { MapPin, Mail, Phone, Globe, Edit2, UserPlus } from 'lucide-react';
import { PageHeader, PageBreadcrumb, SectionCard } from '../components/ui-showcase';

// ── Data ──────────────────────────────────────────────────────────────────────

const PERSONAL_INFO = [
  { label: 'First Name', value: 'Musharof' },
  { label: 'Last Name', value: 'Chowdhury' },
  { label: 'Email address', value: 'musharof@example.com' },
  { label: 'Phone', value: '+1 (555) 363-3984' },
  { label: 'Bio', value: 'Team Manager' },
  { label: 'Department', value: 'Product & Design' },
];

const ADDRESS_INFO = [
  { label: 'Country', value: 'United States' },
  { label: 'City / State', value: 'Arizona, United States' },
  { label: 'Postal Code', value: 'ERT 2489' },
  { label: 'TAX ID', value: 'AS4568384' },
];

const STATS = [
  { label: 'Posts', value: '142' },
  { label: 'Followers', value: '4.8K' },
  { label: 'Following', value: '312' },
];

const RECENT_ACTIVITY = [
  {
    id: 1,
    action: 'Commented on',
    target: 'Q2 Dashboard Design',
    time: '2 hours ago',
    dot: 'bg-brand-500',
  },
  {
    id: 2,
    action: 'Reviewed PR',
    target: 'feat/profile-page',
    time: '5 hours ago',
    dot: 'bg-success-500',
  },
  {
    id: 3,
    action: 'Created issue',
    target: 'Calendar event dots misaligned',
    time: 'Yesterday',
    dot: 'bg-warning-500',
  },
  {
    id: 4,
    action: 'Merged',
    target: 'chore: update dependencies',
    time: '2 days ago',
    dot: 'bg-violet-500',
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function EditButton({ label }: { label: string }) {
  return (
    <button className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-800 lg:inline-flex lg:w-auto dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
      <Edit2 className="h-4 w-4" />
      {label}
    </button>
  );
}

function InfoGrid({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
      {items.map((item) => (
        <div key={item.label}>
          <p className="mb-1 text-xs leading-normal text-gray-500 dark:text-gray-400">
            {item.label}
          </p>
          <p className="text-sm font-medium text-gray-800 dark:text-white/90">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function ProfilePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Profile"
        description="User profile with avatar, bio, and account settings"
        breadcrumb={<PageBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Profile' }]} />}
      />

      {/* ── Cover + avatar card ── */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        {/* Cover gradient */}
        <div className="from-brand-500 h-36 bg-gradient-to-r to-violet-600" />

        {/* Avatar row */}
        <div className="px-6 pb-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            {/* Avatar */}
            <div className="-mt-12 flex items-end gap-4">
              <div className="bg-brand-500 flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border-4 border-white text-3xl font-bold text-white dark:border-gray-900">
                MC
              </div>
              <div className="pb-1">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                  Musharof Chowdhury
                </h3>
                <div className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                  <span>Team Manager</span>
                  <span className="hidden h-3.5 w-px bg-gray-300 sm:block dark:bg-gray-700" />
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    Arizona, United States
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Social buttons */}
              {[
                {
                  label: 'Facebook',
                  icon: (
                    <svg className="fill-current" width="18" height="18" viewBox="0 0 20 20">
                      <path d="M11.6666 11.2503H13.7499L14.5833 7.91699H11.6666V6.25033C11.6666 5.39251 11.6666 4.58366 13.3333 4.58366H14.5833V1.78374C14.3118 1.7477 13.2858 1.66699 12.2023 1.66699C9.94025 1.66699 8.33325 3.04771 8.33325 5.58342V7.91699H5.83325V11.2503H8.33325V18.3337H11.6666V11.2503Z" />
                    </svg>
                  ),
                },
                {
                  label: 'X / Twitter',
                  icon: (
                    <svg className="fill-current" width="18" height="18" viewBox="0 0 21 20">
                      <path d="M15.6705 1.875H18.4272L12.4047 8.75833L19.4897 18.125H13.9422L9.59717 12.4442L4.62554 18.125H1.86721L8.30887 10.7625L1.51221 1.875H7.20054L11.128 7.0675L15.6705 1.875ZM14.703 16.475H16.2305L6.37054 3.43833H4.73137L14.703 16.475Z" />
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  icon: (
                    <svg className="fill-current" width="18" height="18" viewBox="0 0 20 20">
                      <path d="M5.78381 4.16645C5.78351 4.84504 5.37181 5.45569 4.74286 5.71045C4.11391 5.96521 3.39331 5.81321 2.92083 5.32613C2.44836 4.83904 2.31837 4.11413 2.59216 3.49323C2.86596 2.87233 3.48886 2.47942 4.16715 2.49978C5.06804 2.52682 5.78422 3.26515 5.78381 4.16645ZM5.83381 7.06645H2.50048V17.4998H5.83381V7.06645ZM11.1005 7.06645H7.78381V17.4998H11.0672V12.0248C11.0672 8.97475 15.0422 8.69142 15.0422 12.0248V17.4998H18.3338V10.8914C18.3338 5.74978 12.4505 5.94145 11.0672 8.46642L11.1005 7.06645Z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <button
                  key={s.label}
                  title={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
                >
                  {s.icon}
                </button>
              ))}

              <button className="bg-brand-500 hover:bg-brand-600 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors">
                <UserPlus className="h-4 w-4" />
                Follow
              </button>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-5 flex gap-6 border-t border-gray-100 pt-5 dark:border-gray-800">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-lg font-bold text-gray-800 dark:text-white/90">{stat.value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Personal Information ── */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 lg:p-6 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <h4 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90">
              Personal Information
            </h4>
            <InfoGrid items={PERSONAL_INFO} />
          </div>
          <EditButton label="Edit" />
        </div>
      </div>

      {/* ── Address + Recent Activity grid ── */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Address */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 lg:p-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <h4 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90">
                Address
              </h4>
              <InfoGrid items={ADDRESS_INFO} />
            </div>
            <EditButton label="Edit" />
          </div>
        </div>

        {/* Contact & Links */}
        <SectionCard title="Contact & Links" desc="Public contact information">
          <div className="space-y-4">
            {[
              { icon: Mail, label: 'Email', value: 'musharof@example.com' },
              { icon: Phone, label: 'Phone', value: '+1 (555) 363-3984' },
              { icon: Globe, label: 'Website', value: 'musharof.dev' },
              { icon: MapPin, label: 'Location', value: 'Arizona, United States' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                  <Icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{label}</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-white/90">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* ── Recent Activity ── */}
      <SectionCard title="Recent Activity" desc="Latest actions and contributions">
        <div className="space-y-4">
          {RECENT_ACTIVITY.map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${item.dot}`} />
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {item.action}{' '}
                  <span className="font-medium text-gray-800 dark:text-white/90">
                    {item.target}
                  </span>
                </p>
                <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-500">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
