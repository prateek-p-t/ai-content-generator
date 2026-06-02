"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const stats = [
  {
    title: "Total Generations",
    value: "128",
  },
  {
    title: "Templates Used",
    value: "12",
  },
  {
    title: "Words Generated",
    value: "58,430",
  },
  {
    title: "Credits Remaining",
    value: "872",
  },
];

const data = [
  { day: "Mon", generations: 12 },
  { day: "Tue", generations: 18 },
  { day: "Wed", generations: 9 },
  { day: "Thu", generations: 24 },
  { day: "Fri", generations: 15 },
  { day: "Sat", generations: 30 },
  { day: "Sun", generations: 21 },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6 mb-10">
        {stats.map((item) => (
          <div
            key={item.title}
            className="border rounded-xl p-6"
          >
            <h2 className="text-muted-foreground">
              {item.title}
            </h2>

            <p className="text-3xl font-bold mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-6">
          Weekly Content Generations
        </h2>

        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="generations"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}