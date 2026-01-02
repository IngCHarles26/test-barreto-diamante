'use client';

import { Cell, Legend, Pie, PieChart, PieLabelRenderProps, Tooltip } from 'recharts';
import { genRandomColors } from './components';



const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: PieLabelRenderProps) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }
  const {PI,cos,sin} = Math
  const RADIAN = PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const ncx = Number(cx);
  const x = ncx + radius * cos(-(midAngle ?? 0) * RADIAN);
  const ncy = Number(cy);
  const y = ncy + radius * sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > ncx ? 'start' : 'end'} dominantBaseline="central">
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

interface StaysPieChartProps {
  data: { name: string; value: number }[]
  title: string
}



export const StaysPieChart = ({data,title}:StaysPieChartProps) => {
  const len = data.length;
  const colors = genRandomColors(len);

  return (
    <div className='w-80'>
      <p className='text-lg text-center text-neutral-600 font-bold uppercase'>{title}</p>
      <PieChart style={{ width: '100%', aspectRatio: 1 }} responsive>
        <Pie
          data={data}
          labelLine={false}
          label={renderCustomizedLabel}
          fill="#8884d8"
          dataKey="value"
          isAnimationActive={true}
          >
        <Legend  />
        <Tooltip/>
        {data.map((entry, index) => (
          <Cell key={`cell-${entry.name}`} fill={colors[index % len]} />
        ))}
        </Pie>
        {/* <RechartsDevtools /> */}
      </PieChart>
    </div>
  );
}