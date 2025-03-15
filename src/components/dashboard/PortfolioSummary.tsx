
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const PortfolioSummary = () => {
  // Sample data for the chart
  const data = [
    { date: 'Jun 1', value: 10000 },
    { date: 'Jun 5', value: 10200 },
    { date: 'Jun 10', value: 10450 },
    { date: 'Jun 15', value: 10400 },
    { date: 'Jun 20', value: 10800 },
    { date: 'Jun 25', value: 11000 },
    { date: 'Jun 30', value: 11200 },
    { date: 'Jul 5', value: 11600 },
    { date: 'Jul 10', value: 11800 },
    { date: 'Jul 15', value: 12000 },
    { date: 'Jul 20', value: 12200 },
    { date: 'Jul 25', value: 12450 },
  ];

  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm border border-gray-100">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h3 className="text-lg font-semibold">Portfolio Growth</h3>
            <p className="text-muted-foreground text-sm">Past 60 days performance</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <button className="px-3 py-1 text-xs rounded-full bg-primary text-primary-foreground">
              30d
            </button>
            <button className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
              60d
            </button>
            <button className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
              90d
            </button>
            <button className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
              All
            </button>
          </div>
        </div>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#888' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#888' }}
                tickFormatter={(value) => `$${value.toLocaleString()}`} 
              />
              <Tooltip 
                formatter={(value) => [`$${value.toLocaleString()}`, 'Value']}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  border: 'none'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#8884d8" 
                fillOpacity={1} 
                fill="url(#colorValue)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">Total Gain</p>
            <h4 className="text-xl font-semibold text-green-600">+$2,450</h4>
            <p className="text-xs text-muted-foreground">+24.5% all time</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">Average Daily Yield</p>
            <h4 className="text-xl font-semibold">$38.91</h4>
            <p className="text-xs text-muted-foreground">+0.39% per day</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">Impermanent Loss</p>
            <h4 className="text-xl font-semibold text-green-600">-$120</h4>
            <p className="text-xs text-muted-foreground">95% mitigated by AI</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioSummary;
