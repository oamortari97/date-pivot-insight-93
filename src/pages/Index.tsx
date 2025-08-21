import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { ProductionChart } from "@/components/dashboard/ProductionChart";
import { MetricCard } from "@/components/dashboard/MetricCard";

const Index = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date("2025-08-11"));
  const [endDate, setEndDate] = useState<Date | undefined>(new Date("2025-08-20"));
  const [production, setProduction] = useState("todos");
  const [process, setProcess] = useState("todos");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="p-6 space-y-6">
        <DashboardHeader
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          production={production}
          onProductionChange={setProduction}
          process={process}
          onProcessChange={setProcess}
        />
        
        <ProductionChart startDate={startDate} endDate={endDate} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            title="Média de Produção"
            value="1.683,8"
            subtitle="Meta: 1602"
            trend="down"
          />
          <MetricCard
            title="Média de Meta"
            value="187"
            subtitle="Meta: 218"
            trend="down"
          />
          <MetricCard
            title="Índice de Eficiência"
            value="36.12%"
            subtitle="Meta: 100%"
            trend="down"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
