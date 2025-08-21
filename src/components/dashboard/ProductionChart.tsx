import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Cell, LabelList } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ProductionData {
  name: string;
  periodo1: number;
  periodo2: number;
  color: string;
}

interface ProductionChartProps {
  startDate: Date | undefined;
  endDate: Date | undefined;
}

const COLORS = [
  'hsl(var(--chart-blue))',
  'hsl(var(--chart-green))',
  'hsl(var(--chart-orange))',
  'hsl(var(--chart-red))',
  'hsl(var(--chart-purple))'
];

export function ProductionChart({ startDate, endDate }: ProductionChartProps) {
  const data: ProductionData[] = [
    {
      name: 'Dianteiro',
      periodo1: 1111,
      periodo2: 950,
      color: COLORS[0]
    },
    {
      name: 'Preparação',
      periodo1: 481,
      periodo2: 520,
      color: COLORS[1]
    },
    {
      name: 'Acoplamento',
      periodo1: 1102,
      periodo2: 1250,
      color: COLORS[2]
    },
    {
      name: 'Traseiro',
      periodo1: 398,
      periodo2: 420,
      color: COLORS[3]
    },
    {
      name: 'Acabamento',
      periodo1: 5327,
      periodo2: 4850,
      color: COLORS[4]
    }
  ];

  const formatDateRange = () => {
    if (startDate && endDate) {
      return `${format(startDate, "dd/MM/yyyy", { locale: ptBR })} - ${format(endDate, "dd/MM/yyyy", { locale: ptBR })}`;
    }
    return "Todos os períodos";
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-medium text-foreground">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.dataKey === 'periodo1' ? '10/08' : '19/08'}: {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Custom label component for period 1 bars
  const Period1Label = (props: any) => {
    const { x, y, width } = props;
    const labelY = y - 10;
    const centerX = x + width / 2;
    
    return (
      <text
        x={centerX}
        y={labelY}
        fill="hsl(var(--muted-foreground))"
        textAnchor="middle"
        fontSize={12}
        fontWeight="500"
      >
        10/08
      </text>
    );
  };

  // Custom label component for period 2 bars
  const Period2Label = (props: any) => {
    const { x, y, width } = props;
    const labelY = y - 10;
    const centerX = x + width / 2;
    
    return (
      <text
        x={centerX}
        y={labelY}
        fill="hsl(var(--muted-foreground))"
        textAnchor="middle"
        fontSize={12}
        fontWeight="500"
      >
        19/08
      </text>
    );
  };

  return (
    <Card className="border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-foreground">
          Geral (Todos) - {formatDateRange()}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 40,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barCategoryGap="20%"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                axisLine={{ stroke: 'hsl(var(--border))' }}
              />
              <YAxis 
                tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
                axisLine={{ stroke: 'hsl(var(--border))' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="periodo1" 
                radius={[4, 4, 0, 0]}
                name="periodo1"
              >
                <LabelList content={Period1Label} />
                {data.map((entry, index) => (
                  <Cell key={`cell-p1-${index}`} fill={entry.color} />
                ))}
              </Bar>
              <Bar 
                dataKey="periodo2" 
                radius={[4, 4, 0, 0]}
                name="periodo2"
              >
                <LabelList content={Period2Label} />
                {data.map((entry, index) => (
                  <Cell key={`cell-p2-${index}`} fill={entry.color} fillOpacity={0.7} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6 flex flex-wrap gap-6 justify-center">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-muted-foreground">
                {item.name}: {item.periodo1.toLocaleString()} | {item.periodo2.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}