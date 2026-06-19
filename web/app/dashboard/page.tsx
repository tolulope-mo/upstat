"use client";

import { useDateRange } from "@/components/hooks/useDateRange";
import DateRangeFilter from "@/components/pages/dashboard/DateRangeFilter";
import StatsOverview from "@/components/pages/dashboard/StatsOverview";

export default function Dashboard() {
  const dateRange = useDateRange();

  return (
    <div>
      <DateRangeFilter dateRange={dateRange} />
      <StatsOverview range={dateRange.selected} />
    </div>
  );
}