import { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Clock } from 'lucide-react';
import { PageHeader, PageBreadcrumb, SectionCard } from '../components/ui-showcase';

// ── Helpers ───────────────────────────────────────────────────────────────────

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

// ── Sample events ─────────────────────────────────────────────────────────────

function makeEventDate(offsetDays: number): Date {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d;
}

const SAMPLE_EVENTS = [
  {
    id: 1,
    title: 'Team Standup',
    date: makeEventDate(0),
    time: '09:00 AM',
    location: 'Zoom',
    color: 'bg-brand-500',
    dot: 'bg-brand-500',
  },
  {
    id: 2,
    title: 'Design Review',
    date: makeEventDate(2),
    time: '02:00 PM',
    location: 'Conference Room B',
    color: 'bg-violet-500',
    dot: 'bg-violet-500',
  },
  {
    id: 3,
    title: 'Quarterly Planning',
    date: makeEventDate(5),
    time: '10:30 AM',
    location: 'Main Hall',
    color: 'bg-success-500',
    dot: 'bg-success-500',
  },
  {
    id: 4,
    title: 'Product Demo',
    date: makeEventDate(7),
    time: '04:00 PM',
    location: 'Client HQ',
    color: 'bg-warning-500',
    dot: 'bg-warning-500',
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export function CalendarPage() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selected, setSelected] = useState<Date | null>(today);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfWeek = getFirstDayOfWeek(year, month);
  const daysInPrevMonth = getDaysInMonth(year, month - 1);

  // Build a 6-row × 7-col grid (42 cells)
  const cells: Array<{ date: Date; isCurrentMonth: boolean }> = [];

  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    cells.push({ date: new Date(year, month - 1, daysInPrevMonth - i), isCurrentMonth: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(year, month, d), isCurrentMonth: true });
  }
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ date: new Date(year, month + 1, d), isCurrentMonth: false });
  }

  function prevMonth() {
    setCurrentDate(new Date(year, month - 1, 1));
  }

  function nextMonth() {
    setCurrentDate(new Date(year, month + 1, 1));
  }

  function getEventsForDate(date: Date) {
    return SAMPLE_EVENTS.filter((e) => isSameDay(e.date, date));
  }

  const selectedEvents = selected ? getEventsForDate(selected) : [];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Calendar"
        description="Interactive calendar with event display"
        breadcrumb={
          <PageBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Calendar' }]} />
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* ── Calendar grid ── */}
        <div className="lg:col-span-2">
          <SectionCard title="Monthly Calendar" desc="Click a date to view its events">
            {/* Month navigation */}
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-base font-semibold text-gray-800 dark:text-white/90">
                {MONTHS[month]} {year}
              </h4>
              <div className="flex items-center gap-1">
                <button
                  onClick={prevMonth}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextMonth}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Weekday headers */}
            <div className="mb-1 grid grid-cols-7">
              {WEEKDAYS.map((day) => (
                <div
                  key={day}
                  className="py-2 text-center text-xs font-medium text-gray-400 dark:text-gray-500"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Day cells */}
            <div className="grid grid-cols-7 gap-y-1">
              {cells.map(({ date, isCurrentMonth }, idx) => {
                const isToday = isSameDay(date, today);
                const isSelected = selected ? isSameDay(date, selected) : false;
                const events = getEventsForDate(date);

                return (
                  <div key={idx} className="flex flex-col items-center gap-0.5 py-0.5">
                    <button
                      onClick={() => setSelected(date)}
                      className={[
                        'flex h-10 w-10 items-center justify-center rounded-full text-sm transition-colors',
                        isToday
                          ? 'bg-brand-500 font-semibold text-white'
                          : isSelected
                            ? 'bg-brand-100 text-brand-700 dark:bg-brand-500/20 dark:text-brand-300 font-semibold'
                            : isCurrentMonth
                              ? 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800'
                              : 'text-gray-300 dark:text-gray-600',
                      ].join(' ')}
                    >
                      {date.getDate()}
                    </button>
                    {isCurrentMonth && events.length > 0 && (
                      <div className="flex gap-0.5">
                        {events.slice(0, 3).map((e) => (
                          <span key={e.id} className={`h-1.5 w-1.5 rounded-full ${e.dot}`} />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-4 flex flex-wrap gap-4 border-t border-gray-100 pt-4 dark:border-gray-800">
              {[
                { dot: 'bg-brand-500', label: 'Standup' },
                { dot: 'bg-violet-500', label: 'Design' },
                { dot: 'bg-success-500', label: 'Planning' },
                { dot: 'bg-warning-500', label: 'Demo' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <span className={`h-2 w-2 rounded-full ${item.dot}`} />
                  <span className="text-xs text-gray-500 dark:text-gray-400">{item.label}</span>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        {/* ── Events panel ── */}
        <div className="space-y-6">
          <SectionCard
            title={
              selected
                ? `${MONTHS[selected.getMonth()]} ${selected.getDate()}, ${selected.getFullYear()}`
                : 'Select a date'
            }
            desc={
              selectedEvents.length > 0
                ? `${selectedEvents.length} event${selectedEvents.length > 1 ? 's' : ''} scheduled`
                : 'No events scheduled'
            }
          >
            {selectedEvents.length === 0 ? (
              <div className="flex flex-col items-center gap-2 py-8 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                  <Clock className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
                <p className="text-sm text-gray-400 dark:text-gray-500">No events for this day</p>
              </div>
            ) : (
              <div className="space-y-3">
                {selectedEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 p-3 dark:border-gray-800"
                  >
                    <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${event.dot}`} />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                        {event.title}
                      </p>
                      <div className="mt-1 flex flex-col gap-0.5">
                        <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <Clock className="h-3 w-3" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <MapPin className="h-3 w-3" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </SectionCard>

          {/* Upcoming events */}
          <SectionCard title="Upcoming Events" desc="Next scheduled events">
            <div className="space-y-3">
              {SAMPLE_EVENTS.map((event) => (
                <div key={event.id} className="flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${event.color} text-xs font-bold text-white`}
                  >
                    {event.date.getDate()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-800 dark:text-white/90">
                      {event.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {MONTHS[event.date.getMonth()].slice(0, 3)} {event.date.getDate()} &middot;{' '}
                      {event.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
