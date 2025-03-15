
import React from 'react';
import { DollarSign, TrendingUp, BarChart3, Clock } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const DashboardOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="bg-white/80 backdrop-blur-sm hover:shadow-md transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-lg bg-primary-muted">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Value</p>
              <h3 className="text-2xl font-bold">$12,456.78</h3>
              <div className="flex items-center mt-1">
                <div className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +5.2% 
                </div>
                <span className="text-xs text-muted-foreground ml-2">this week</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm hover:shadow-md transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-lg bg-blue-50">
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Earned Fees</p>
              <h3 className="text-2xl font-bold">$734.21</h3>
              <div className="flex items-center mt-1">
                <div className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +2.7% 
                </div>
                <span className="text-xs text-muted-foreground ml-2">this week</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm hover:shadow-md transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-lg bg-green-50">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Average APR</p>
              <h3 className="text-2xl font-bold">18.3%</h3>
              <div className="flex items-center mt-1">
                <div className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +0.5% 
                </div>
                <span className="text-xs text-muted-foreground ml-2">this week</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm hover:shadow-md transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-lg bg-purple-50">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Next Rebalance</p>
              <h3 className="text-lg font-bold">~2 hours</h3>
              <div className="flex items-center mt-1">
                <span className="text-xs text-muted-foreground">Last: 4 hours ago</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
