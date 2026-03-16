import { memo } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from "recharts"
import CustomTooltip from './CustomTooltip';

const CustomBarChart = ({data}) => {
    const getBarColor = (index) => {
        return (index%2 === 0) ? "#875cf5" : "#a78bfa";
    };
    const CustomTooltipContent = ({active, payload}) => {
        if(active && payload && payload.length){
            return (
                <div className='bg-white shadow-md rounded-lg p-2 border border-gray-300'>
                    <p className='text-xs font-semibold text-purple-800 mb-1'>
                        {payload[0].payload.category}
                    </p>
                    <p className='text-sm test-gray-600 '>
                        Amount: <span className='text-sm font-medium text-gray-900 '>{payload[0].payload.amount} </span>
                    </p>
                </div>
            );
        }
        return null;
    };
  return (
    <div className='bg-white mt-6'>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data = {data}>
                <CartesianGrid strokeDasharray="3 3" stroke='#e5e7eb' />
                <XAxis dataKey={data[0]?.category ? "category" : "month"} tick = {{fontSize: 12, fill: "#555"}} stroke="#d1d5db" />
                <YAxis tick={{fontSize:12, fill:"#555"}} stroke='#d1d5db' />
                <Tooltip content={<CustomTooltipContent />} />
                <Bar
                dataKey="amount"
                fill='#875cf5'
                radius={[10,10,0,0]}
                >
                    {data.map((entry, index) => (
                        <Cell key = {index} fill = {getBarColor(index)} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    </div>
  );
};

export default memo(CustomBarChart);