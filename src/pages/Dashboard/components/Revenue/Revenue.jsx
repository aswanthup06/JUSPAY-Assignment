import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "./Revenue.css";

const raw = [
  { month: "Jan", value: 10 }, 
  { month: "Feb", value: 8 },
  { month: "Mar", value: 5 },
  { month: "Apr", value: 12 },
  { month: "May", value: 18 },
  { month: "Jun", value: 27 },
];

const previous = [4, 12, 18, 15, 10, 22]; 
const knownCutIndex = 3;

// Create data with proper structure
const data = raw.map((d, i) => ({
  month: d.month,
  previous: previous[i],
  current: d.value,
  isForecast: i > knownCutIndex,
}));

// Custom dot component
const CustomDot = (props) => {
  const { cx, cy, payload } = props;
  
  // Only render dots for non-forecast data points
  if (!payload.isForecast) {
    return (
      <circle 
        cx={cx} 
        cy={cy} 
        r={4} 
        fill="#111111" 
        stroke="#fff" 
        strokeWidth={2}
      />
    );
  }
  
  return null;
};

export default function Revenue() {
  return (
    <div className="revenue-section">
      <div className="revenue-header">
        <div className="secondary-heading">Revenue</div>
        <div className="revenue-legend">
          <span className="legend-item">
            <span className="legend-dot current" />
            <span className="legend-text">
              Current Week <strong>$58,211</strong>
            </span>
          </span>
          <span className="legend-item">
            <span className="legend-dot previous" />
            <span className="legend-text">
              Previous Week <strong>$68,768</strong>
            </span>
          </span>
        </div>
      </div>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={data} 
            margin={{ top: 10, right: 5, left: 0, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#d9dbdeff" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false}
              padding={{ left: 10, right: 10 }}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[0, 10, 20, 30]}
              domain={[0, 30]}
              tickFormatter={(v) => `${v}M`}
              width={35}
              tick={{ fontSize: 12 }}
              padding={{ top: 10, bottom: 10 }}
            />
            <Tooltip 
              formatter={(value) => `${value}M`}
              contentStyle={{
                backgroundColor: '#fff',
                borderRadius: '6px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                border: 'none',
                fontSize: '12px'
              }}
            />

            {/* Previous line - blue */}
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#4da6ff"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: "#4da6ff" }}
              isAnimationActive={false}
            />

            {/* Current line - black with dashed segment for forecast */}
            <Line
              type="monotone"
              dataKey="current"
              stroke="#111111"
              strokeWidth={3}
              dot={<CustomDot />}
              activeDot={{ r: 6, fill: "#111111" }}
              isAnimationActive={false}
              strokeDasharray={data.map(d => d.isForecast ? "6 6" : "0")}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}