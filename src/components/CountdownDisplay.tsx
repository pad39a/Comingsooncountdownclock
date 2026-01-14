interface CountdownDisplayProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export function CountdownDisplay({ timeLeft }: CountdownDisplayProps) {
  const units = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
      {units.map((unit) => (
        <div 
          key={unit.label}
          className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-4 border-[#ff8c00] p-6 md:p-8"
        >
          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#888]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#888]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#888]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#888]" />
          
          {/* Digital Display Effect */}
          <div className="relative">
            <div className="text-5xl md:text-6xl font-mono text-[#4ade80] tabular-nums tracking-tighter mb-2 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm font-mono text-[#888] tracking-widest">
              {unit.label}
            </div>
          </div>

          {/* Scan Line Effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4ade80] to-transparent opacity-10 animate-scan" />
          </div>
        </div>
      ))}
    </div>
  );
}