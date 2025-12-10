import { Zap, Play, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  progress: number;
  buttonText: string;
  buttonVariant?: 'active' | 'activate' | 'continue';
  hasFreeplan?: boolean;
  kpiLabel: string;
  kpiValue: string;
  kpiChange?: string;
  timeEstimate: string;
  features: string[];
}

export function ProductCard({ name, progress, buttonText, buttonVariant = 'continue', hasFreeplan = false, kpiLabel, kpiValue, kpiChange, timeEstimate, features }: ProductCardProps) {
  const getButtonStyles = () => {
    if (buttonVariant === 'active') {
      return 'bg-[#374151] text-white cursor-default';
    }
    if (buttonVariant === 'activate') {
      return 'bg-[#1f2937] text-white hover:bg-[#111827]';
    }
    return 'bg-[#f3f4f6] text-[#1f2937] hover:bg-[#e5e7eb] border border-[#d1d5db]';
  };

  const getButtonIcon = () => {
    if (buttonVariant === 'activate') {
      return <Zap className="size-3" />;
    }
    if (buttonText === 'Start setup') {
      return <Play className="size-3" />;
    }
    return <ArrowRight className="size-3" />;
  };

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-lg p-6 h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-[#111827] mb-1">{name}</h3>
          {hasFreeplan && (
            <p className="text-[#6b7280] text-[12px]">Free plan available</p>
          )}
        </div>
        <button className={`px-4 py-2 rounded-md text-[12px] transition-colors flex items-center gap-2 ${getButtonStyles()}`}>
          {getButtonIcon()}
          {buttonText}
        </button>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between text-[12px]">
          <span className="text-[#6b7280]">Setup progress</span>
          <div className="flex items-center gap-2">
            <span className="text-[#6b7280]">{timeEstimate}</span>
            <span className="text-[#374151]">{progress}%</span>
          </div>
        </div>
        <div className="w-full bg-[#e5e7eb] rounded-full h-2">
          <div 
            className="bg-[#4b5563] h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mb-4 pb-4 border-b border-[#e5e7eb]">
        <p className="text-[#6b7280] text-[12px] mb-2">Features</p>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-[#111827] text-[12px] flex items-start gap-2">
              <span className="text-[#6b7280]">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <p className="text-[#6b7280] text-[12px] mb-1">{kpiLabel}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-[#111827] text-[18px]">{kpiValue}</span>
          {kpiChange && (
            <span className="text-[#6b7280] text-[12px]">{kpiChange}</span>
          )}
        </div>
      </div>
    </div>
  );
}