import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";

interface DashboardHeaderProps {
  startDate: Date | undefined;
  endDate: Date | undefined;
  onStartDateChange: (date: Date | undefined) => void;
  onEndDateChange: (date: Date | undefined) => void;
  production: string;
  onProductionChange: (value: string) => void;
  process: string;
  onProcessChange: (value: string) => void;
}

export function DashboardHeader({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  production,
  onProductionChange,
  process,
  onProcessChange,
}: DashboardHeaderProps) {
  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
          <div className="w-3 h-3 bg-primary-foreground rounded-sm"></div>
        </div>
        <h2 className="text-lg font-semibold text-foreground">Indicadores de Desempenho</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Data Inicial */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Data Inicial</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !startDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, "dd/MM/yyyy", { locale: ptBR }) : "Selecionar data"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={onStartDateChange}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Data Final */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Data Final</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !endDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, "dd/MM/yyyy", { locale: ptBR }) : "Selecionar data"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={onEndDateChange}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Produção */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Produção</label>
          <Select value={production} onValueChange={onProductionChange}>
            <SelectTrigger>
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="linha1">Linha 1</SelectItem>
              <SelectItem value="linha2">Linha 2</SelectItem>
              <SelectItem value="linha3">Linha 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Processo */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Processo</label>
          <Select value={process} onValueChange={onProcessChange}>
            <SelectTrigger>
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="dianteiro">Dianteiro</SelectItem>
              <SelectItem value="preparacao">Preparação</SelectItem>
              <SelectItem value="acoplamento">Acoplamento</SelectItem>
              <SelectItem value="traseiro">Traseiro</SelectItem>
              <SelectItem value="acabamento">Acabamento</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Dados Consolidados */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Status</label>
          <div className="text-sm text-muted-foreground bg-muted px-3 py-2 rounded-md">
            Dados Consolidados
          </div>
        </div>
      </div>
    </div>
  );
}