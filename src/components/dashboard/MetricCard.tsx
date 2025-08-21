import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  trend: "up" | "down";
  trendValue?: string;
}

export function MetricCard({ title, value, subtitle, trend, trendValue }: MetricCardProps) {
  return (
    <Card className="border-border shadow-sm">
      <CardContent className="p-6">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-metric-primary">{value}</span>
            {trend === "down" && (
              <TrendingDown className="h-4 w-4 text-metric-primary" />
            )}
            {trend === "up" && (
              <TrendingUp className="h-4 w-4 text-metric-secondary" />
            )}
          </div>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
          <div className="w-full bg-muted h-1 rounded">
            <div className="h-1 bg-metric-primary rounded w-3/4"></div>
          </div>
          {trendValue && (
            <p className="text-xs text-muted-foreground">{trendValue}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}