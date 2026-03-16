import { memo, useEffect, useState } from 'react';
import { prepareExpenseBarChartData } from '../../utils/helper';
import CustomBarChart from '../../components/Charts/CustomBarChart';

const Last30DaysExpenses = ({ data }) => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        const result = prepareExpenseBarChartData(data)
        setChartData(result);
        return () => { }
    }, [data]);
    return (
        <div className='card col-span-1'>
            <div className='flex items-center justify-between'>
                <h5 className='text-lg'>Last 30 Days Expenses</h5>
            </div>
            {chartData && chartData.length > 0 ? (
                <CustomBarChart data = {chartData} />
            ) : (
                <p className='text-purple-500 text-sm text-center py-8'>No expense data for the last 30 days</p>
            )}
        </div>
    );
};

export default memo(Last30DaysExpenses);