import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line, BarChart, Bar } from 'recharts';
import { ExternalLink } from 'lucide-react';

interface SimulationChartProps {
  title: string;
  currentSpending: number;
  estimatedSavings: number;
  isVisible?: boolean;
}

export function SimulationChart({ title, currentSpending, estimatedSavings, isVisible = false }: SimulationChartProps) {
  // Get the KPI label for each product
  const getKpiLabel = () => {
    switch(title) {
      case 'AEO':
        return 'revenue';
      case 'Order Management':
        return 'processing time';
      case 'Inventory Management':
        return 'accuracy';
      case 'Catalog':
        return 'SEO score';
      case 'Email & SMS':
        return 'conversion rate';
      case 'Shopper AI':
        return 'daily interactions';
      default:
        return 'performance';
    }
  };

  // Different data patterns for each product
  const getChartData = () => {
    switch(title) {
      case 'AEO':
        return [
          { day: 'Mon', revenue: 2100, projected: 2450 },
          { day: 'Tue', revenue: 2300, projected: 2680 },
          { day: 'Wed', revenue: 2200, projected: 2590 },
          { day: 'Thu', revenue: 2500, projected: 2920 },
          { day: 'Fri', revenue: 2800, projected: 3250 },
          { day: 'Sat', revenue: 1900, projected: 2240 },
          { day: 'Sun', revenue: 1700, projected: 2010 },
        ];
      
      case 'Order Management':
        return [
          { day: 'Mon', current: 4.2, optimized: 2.8 },
          { day: 'Tue', current: 4.5, optimized: 2.6 },
          { day: 'Wed', current: 4.8, optimized: 2.9 },
          { day: 'Thu', current: 4.3, optimized: 2.5 },
          { day: 'Fri', current: 5.1, optimized: 3.0 },
          { day: 'Sat', current: 3.8, optimized: 2.2 },
          { day: 'Sun', current: 3.5, optimized: 2.0 },
        ];
      
      case 'Inventory Management':
        return [
          { day: 'Mon', accuracy: 89, target: 94 },
          { day: 'Tue', accuracy: 90, target: 94 },
          { day: 'Wed', accuracy: 91, target: 94 },
          { day: 'Thu', accuracy: 92, target: 94 },
          { day: 'Fri', accuracy: 91, target: 94 },
          { day: 'Sat', accuracy: 93, target: 94 },
          { day: 'Sun', accuracy: 92, target: 94 },
        ];
      
      case 'Catalog':
        return [
          { day: 'Mon', score: 7.2, optimized: 8.5 },
          { day: 'Tue', score: 7.4, optimized: 8.6 },
          { day: 'Wed', score: 7.5, optimized: 8.7 },
          { day: 'Thu', score: 7.6, optimized: 8.7 },
          { day: 'Fri', score: 7.8, optimized: 8.8 },
          { day: 'Sat', score: 7.7, optimized: 8.7 },
          { day: 'Sun', score: 7.9, optimized: 8.9 },
        ];
      
      case 'Email & SMS':
        return [
          { day: 'Mon', current: 9.8, optimized: 12.2 },
          { day: 'Tue', current: 10.2, optimized: 12.8 },
          { day: 'Wed', current: 9.5, optimized: 11.9 },
          { day: 'Thu', current: 10.5, optimized: 13.1 },
          { day: 'Fri', current: 11.2, optimized: 13.8 },
          { day: 'Sat', current: 8.9, optimized: 11.2 },
          { day: 'Sun', current: 8.5, optimized: 10.8 },
        ];
      
      case 'Shopper AI':
        return [
          { day: 'Mon', interactions: 120, potential: 420 },
          { day: 'Tue', interactions: 132, potential: 445 },
          { day: 'Wed', interactions: 101, potential: 410 },
          { day: 'Thu', interactions: 134, potential: 465 },
          { day: 'Fri', interactions: 190, potential: 490 },
          { day: 'Sat', interactions: 130, potential: 380 },
          { day: 'Sun', interactions: 120, potential: 350 },
        ];
      
      default:
        return [
          { day: 'Mon', current: currentSpending * 0.9, optimized: (currentSpending - estimatedSavings) * 0.85 },
          { day: 'Tue', current: currentSpending * 0.95, optimized: (currentSpending - estimatedSavings) * 0.9 },
          { day: 'Wed', current: currentSpending * 1.1, optimized: (currentSpending - estimatedSavings) * 1.05 },
          { day: 'Thu', current: currentSpending * 1.05, optimized: (currentSpending - estimatedSavings) * 1.0 },
          { day: 'Fri', current: currentSpending * 1.15, optimized: (currentSpending - estimatedSavings) * 1.1 },
          { day: 'Sat', current: currentSpending * 0.85, optimized: (currentSpending - estimatedSavings) * 0.8 },
          { day: 'Sun', current: currentSpending * 0.8, optimized: (currentSpending - estimatedSavings) * 0.75 },
        ];
    }
  };

  const data = getChartData();

  // Render different chart types based on product
  const renderChart = () => {
    switch(title) {
      case 'AEO':
        return (
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e64210" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#e64210" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6b7280" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#6b7280" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="day" 
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#d1d5db' }}
            />
            <YAxis 
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#d1d5db' }}
              domain={[0, 4000]}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '12px'
              }}
              formatter={(value: number) => `$${value.toFixed(0)}`}
            />
            <Legend 
              verticalAlign="top" 
              align="right" 
              wrapperStyle={{ top: 24, right: 10, fontSize: '11px' }}
              iconSize={10}
            />
            <Area 
              type="monotone" 
              dataKey="projected" 
              stroke="#e64210" 
              fill="url(#colorProjected)" 
              name="With AEO"
              isAnimationActive={true}
              animationDuration={1200}
              animationBegin={0}
            />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#6b7280" 
              fill="url(#colorRevenue)" 
              name="Current Revenue"
              isAnimationActive={true}
              animationDuration={1200}
              animationBegin={200}
            />
          </AreaChart>
        );
      
      case 'Order Management':
        return (
          <BarChart data={data}>
            <defs>
              <linearGradient id="colorOrderOptimized" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e64210" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#e64210" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="day" 
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#d1d5db' }}
            />
            <YAxis 
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#d1d5db' }}
              tickFormatter={(value) => `${value}h`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '12px'
              }}
              formatter={(value: number) => `${value.toFixed(1)} hours`}
            />
            <Legend 
              verticalAlign="top" 
              align="right" 
              wrapperStyle={{ top: 24, right: 10, fontSize: '11px' }}
              iconSize={10}
            />
            <Bar 
              dataKey="current" 
              fill="#6b7280" 
              name="Current Time"
              isAnimationActive={true}
              animationDuration={1200}
              animationBegin={0}
            />
            <Bar 
              dataKey="optimized" 
              fill="url(#colorOrderOptimized)" 
              name="With Order Management"
              isAnimationActive={true}
              animationDuration={1200}
              animationBegin={200}
            />
          </BarChart>
        );
      
      case 'Inventory Management':
        return (
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e64210" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#e64210" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6b7280" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#6b7280" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="day" 
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#d1d5db' }}
            />
            <YAxis 
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#d1d5db' }}
              domain={[85, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '12px'
              }}
              formatter={(value: number) => `${value}%`}
            />
            <Legend 
              verticalAlign="top" 
              align="right" 
              wrapperStyle={{ top: 24, right: 10, fontSize: '11px' }}
              iconSize={10}
            />
            <Area 
              type="monotone" 
              dataKey="target" 
              stroke="#e64210" 
              fill="url(#colorTarget)" 
              name="Target"
              isAnimationActive={true}
              animationDuration={1200}
              animationBegin={0}
            />
            <Area 
              type="monotone" 
              dataKey="accuracy" 
              stroke="#6b7280" 
              fill="url(#colorAccuracy)" 
              name="Current Accuracy"
              isAnimationActive={true}
              animationDuration={1200}
              animationBegin={200}
            />
          </AreaChart>
        );
      
      case 'Catalog':
        return (
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorOptimized" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e64210" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#e64210" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6b7280" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#6b7280" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="day" 
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#d1d5db' }}
            />
            <YAxis 
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#d1d5db' }}
              domain={[0, 10]}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '12px'
              }}
              formatter={(value: number) => `${value.toFixed(1)}/10`}
            />
            <Legend 
              verticalAlign="top" 
              align="right" 
              wrapperStyle={{ top: 24, right: 10, fontSize: '11px' }}
              iconSize={10}
            />
            <Area 
              type="monotone" 
              dataKey="optimized" 
              stroke="#e64210" 
              fill="url(#colorOptimized)" 
              name="With Catalog"
              isAnimationActive={true}
              animationDuration={1200}
              animationBegin={0}
            />
            <Area 
              type="monotone" 
              dataKey="score" 
              stroke="#6b7280" 
              fill="url(#colorScore)" 
              name="Current Score"
              isAnimationActive={true}
              animationDuration={1200}
              animationBegin={200}
            />
          </AreaChart>
        );
      
      case 'Email & SMS':
        return (
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorEmailOptimized" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e64210" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#e64210" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorEmailCurrent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6b7280" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#6b7280" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="day" 
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#d1d5db' }}
            />
            <YAxis 
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#d1d5db' }}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '12px'
              }}
              formatter={(value: number) => `${value.toFixed(1)}%`}
            />
            <Legend 
              verticalAlign="top" 
              align="right" 
              wrapperStyle={{ top: 24, right: 10, fontSize: '11px' }}
              iconSize={10}
            />
            <Area 
              type="monotone" 
              dataKey="optimized" 
              stroke="#e64210" 
              fill="url(#colorEmailOptimized)" 
              name="With Automation"
              isAnimationActive={true}
              animationDuration={1200}
              animationBegin={0}
            />
          </AreaChart>
        );
      
      case 'Shopper AI':
        return (
          <BarChart data={data}>
             <defs>
              <linearGradient id="colorShopperPotential" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e64210" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#e64210" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="day" 
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#d1d5db' }}
            />
            <YAxis 
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#d1d5db' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '12px'
              }}
              formatter={(value: number) => `${value} interactions`}
            />
            <Legend 
              verticalAlign="top" 
              align="right" 
              wrapperStyle={{ top: 24, right: 10, fontSize: '11px' }}
              iconSize={10}
            />
            <Bar 
              dataKey="interactions" 
              fill="#d1d5db" 
              name="Current"
              isAnimationActive={true}
              animationDuration={1200}
              animationBegin={0}
            />
            <Bar 
              dataKey="potential" 
              fill="url(#colorShopperPotential)" 
              name="Potential"
              isAnimationActive={true}
              animationDuration={1200}
              animationBegin={200}
            />
          </BarChart>
        );
      
      default:
        return (
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorDefaultOptimized" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e64210" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#e64210" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorDefaultCurrent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6b7280" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#6b7280" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="day" 
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#d1d5db' }}
            />
            <YAxis 
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#d1d5db' }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#ffffff', 
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '12px'
              }}
              formatter={(value: number) => `$${value.toFixed(2)}`}
            />
            <Legend 
              verticalAlign="top" 
              align="right" 
              wrapperStyle={{ top: 24, right: 10, fontSize: '11px' }}
              iconSize={10}
            />
            <Area 
              type="monotone" 
              dataKey="optimized" 
              stroke="#e64210" 
              fill="url(#colorDefaultOptimized)" 
              name="With Automation"
              isAnimationActive={true}
              animationDuration={1200}
              animationBegin={0}
            />
          </AreaChart>
        );
    }
  };

  return (
    <div className="flex flex-col h-full relative pb-0">
      <div className="absolute top-0 left-16 z-10">
        <h4 className="text-[#111827] text-[14px]">Acme Inc&apos;s potential {getKpiLabel()}</h4>
      </div>
      <div className="flex-1 min-h-0 pt-3 -mb-4">
        <ResponsiveContainer width="100%" height={300} key={isVisible ? 'visible' : 'hidden'}>
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </div>
  );
}