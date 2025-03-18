
import React, { memo } from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { CircleCheck, RefreshCw, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

// Activity type definition for better type safety
type ActivityType = 'rebalance' | 'fee' | 'deposit' | 'withdraw';

interface Activity {
  id: number;
  type: ActivityType;
  pool: string;
  time: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  iconBg: string;
}

// Memoized activity item component for better performance
const ActivityItem = memo(({ activity }: { activity: Activity }) => (
  <li key={activity.id} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
    <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full ${activity.iconBg} flex items-center justify-center`}>
      <activity.icon className={`h-4 w-4 ${activity.iconColor}`} />
    </div>
    <div className="flex-grow">
      <div className="flex items-center space-x-2">
        <Badge variant="outline" className="px-2 text-xs">
          {activity.pool}
        </Badge>
        <Badge variant="outline" className={`
          px-2 text-xs
          ${activity.type === 'rebalance' ? 'bg-blue-50 text-blue-600' : ''}
          ${activity.type === 'fee' ? 'bg-green-50 text-green-600' : ''}
          ${activity.type === 'deposit' ? 'bg-purple-50 text-purple-600' : ''}
          ${activity.type === 'withdraw' ? 'bg-orange-50 text-orange-600' : ''}
        `}>
          {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
        </Badge>
        <span className="text-xs text-muted-foreground">{activity.time}</span>
      </div>
      <p className="mt-1 text-sm">{activity.description}</p>
    </div>
  </li>
));

ActivityItem.displayName = 'ActivityItem';

const RecentActivity = () => {
  // Extract activities data to a constant
  const activities: Activity[] = [
    {
      id: 1,
      type: 'rebalance',
      pool: 'SOL-USDC',
      time: '2 hours ago',
      description: 'Auto-rebalance to 0.65x-1.50x range due to increased volatility',
      icon: RefreshCw,
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-50'
    },
    {
      id: 2,
      type: 'fee',
      pool: 'SOL-BONK',
      time: '5 hours ago',
      description: 'Earned 0.05 SOL in trading fees',
      icon: TrendingUp,
      iconColor: 'text-green-500',
      iconBg: 'bg-green-50'
    },
    {
      id: 3,
      type: 'deposit',
      pool: 'SOL-USDC',
      time: '1 day ago',
      description: 'Deposited 5 SOL + 250 USDC into pool',
      icon: ArrowDownRight,
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-50'
    },
    {
      id: 4,
      type: 'withdraw',
      pool: 'JitoSOL-USDC',
      time: '3 days ago',
      description: 'Withdrew 0.5 SOL + 25 USDC from pool',
      icon: ArrowUpRight,
      iconColor: 'text-orange-500',
      iconBg: 'bg-orange-50'
    },
    {
      id: 5,
      type: 'rebalance',
      pool: 'JitoSOL-USDC',
      time: '5 days ago',
      description: 'Auto-rebalance to 0.85x-1.15x range due to decreased volatility',
      icon: RefreshCw,
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-50'
    }
  ];

  return (
    <Card className="bg-white/80 backdrop-blur-sm shadow-sm">
      <CardContent className="p-6">
        <ul className="space-y-4">
          {activities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default memo(RecentActivity);
