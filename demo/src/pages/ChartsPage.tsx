import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { PageHeader, PageBreadcrumb, SectionCard } from '../components/ui-showcase';

const isDark = () => document.documentElement.classList.contains('dark');

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// ── Bar Chart (TailAdmin chart-01.js) ─────────────────────────────────────────

const barOptions: ApexOptions = {
  chart: {
    type: 'bar',
    height: 180,
    toolbar: { show: false },
    fontFamily: 'Outfit, sans-serif',
    background: 'transparent',
  },
  colors: ['#465fff'],
  plotOptions: {
    bar: {
      columnWidth: '39%',
      borderRadius: 5,
    },
  },
  dataLabels: { enabled: false },
  xaxis: {
    categories: MONTHS,
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: {
      style: {
        colors: isDark() ? '#9ca3af' : '#6b7280',
        fontSize: '12px',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: isDark() ? '#9ca3af' : '#6b7280',
        fontSize: '12px',
      },
    },
  },
  grid: {
    borderColor: isDark() ? '#1f2937' : '#f3f4f6',
    strokeDashArray: 4,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    markers: {
      shape: 'circle',
      size: 6,
    },
  },
  tooltip: {
    theme: isDark() ? 'dark' : 'light',
  },
};

const barSeries = [
  {
    name: 'Sales',
    data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
  },
];

// ── Radial Bar Chart (TailAdmin chart-02.js) ──────────────────────────────────

const radialOptions: ApexOptions = {
  chart: {
    type: 'radialBar',
    height: 330,
    sparkline: { enabled: true },
    background: 'transparent',
    fontFamily: 'Outfit, sans-serif',
  },
  colors: ['#465fff'],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        size: '80%',
      },
      track: {
        background: isDark() ? '#1f2937' : '#f3f4f6',
        strokeWidth: '97%',
      },
      dataLabels: {
        name: { show: false },
        value: {
          fontSize: '36px',
          fontWeight: 700,
          color: isDark() ? '#f9fafb' : '#111827',
          offsetY: 60,
          formatter: (val: number) => `${val}%`,
        },
      },
    },
  },
  tooltip: { enabled: false },
};

const radialSeries = [75.55];

// ── Line Chart (TailAdmin style) ──────────────────────────────────────────────

const lineOptions: ApexOptions = {
  chart: {
    type: 'line',
    height: 310,
    toolbar: { show: false },
    fontFamily: 'Outfit, sans-serif',
    background: 'transparent',
  },
  colors: ['#465fff', '#34d399'],
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  dataLabels: { enabled: false },
  markers: {
    size: 0,
    hover: { size: 5 },
  },
  xaxis: {
    categories: MONTHS,
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: {
      style: {
        colors: isDark() ? '#9ca3af' : '#6b7280',
        fontSize: '12px',
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: isDark() ? '#9ca3af' : '#6b7280',
        fontSize: '12px',
      },
    },
  },
  grid: {
    borderColor: isDark() ? '#1f2937' : '#f3f4f6',
    strokeDashArray: 4,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    markers: {
      shape: 'circle',
      size: 6,
    },
  },
  tooltip: {
    theme: isDark() ? 'dark' : 'light',
    shared: true,
    intersect: false,
  },
};

const lineSeries = [
  {
    name: 'Revenue',
    data: [20, 41, 35, 51, 49, 62, 69, 91, 148, 130, 100, 120],
  },
  {
    name: 'Target',
    data: [10, 30, 40, 45, 50, 55, 60, 70, 100, 110, 90, 100],
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export function ChartsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Charts"
        description="ApexCharts integration — bar, line, and radial charts"
        breadcrumb={
          <PageBreadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'UI Library', href: '/ui' },
              { label: 'Charts' },
            ]}
          />
        }
      />

      <SectionCard title="Bar Chart" desc="Monthly sales data — vertical bars with brand color">
        <ReactApexChart type="bar" height={180} options={barOptions} series={barSeries} />
      </SectionCard>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <SectionCard title="Line Chart" desc="Revenue vs target comparison over the year">
          <ReactApexChart type="line" height={310} options={lineOptions} series={lineSeries} />
        </SectionCard>

        <SectionCard title="Radial Progress" desc="Radial bar showing percentage completion">
          <div className="flex flex-col items-center">
            <ReactApexChart
              type="radialBar"
              height={330}
              options={radialOptions}
              series={radialSeries}
            />
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Overall completion rate</p>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
