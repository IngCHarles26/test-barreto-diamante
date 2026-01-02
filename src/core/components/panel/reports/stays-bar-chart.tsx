'use client'

import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { genSingleColor } from "./components";

interface StaysBarChartProps {
  data: {name: string; cant: number}[]
  title: string
}

export const StaysBarChart = ({data,title}:StaysBarChartProps) => {
  const color = genSingleColor();

  return (
    <div className="w-full max-w-160 ">
      <p className='text-lg text-center text-neutral-600 font-bold uppercase'>{title}</p>
      <BarChart style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }} responsive data={data}>
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />
        <Bar dataKey="cant" fill={color} isAnimationActive={true} />
      </BarChart>
    </div>
  )
}
