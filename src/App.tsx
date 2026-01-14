import { useState, useEffect } from 'react';
import { CountdownDisplay } from './components/CountdownDisplay';

export default function App() {
  const targetDate = new Date('2026-03-10T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        {/* Mission Badge */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full border-4 border-[#ff8c00] flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
            <div className="text-center">
              <div className="text-[#ff8c00] text-2xl font-mono">M-10</div>
              <div className="text-[#888] text-xs font-mono mt-1">2026</div>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl mb-4 text-[#ff8c00] font-mono tracking-wider">
          MISSION DEPLOY
        </h1>
        
        <div className="mb-8">
          <p className="text-[#888] text-lg md:text-xl font-mono tracking-wide">
            T-MINUS COUNTDOWN TO LAUNCH
          </p>
        </div>

        {/* Countdown Display */}
        <CountdownDisplay timeLeft={timeLeft} />

        {/* Launch Details */}
        <div className="mt-12 p-6 border-2 border-[#333] bg-[#0f0f0f] max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-4 text-left font-mono text-sm">
            <div className="text-[#888]">LAUNCH DATE:</div>
            <div className="text-[#ff8c00]">MARCH 10, 2026</div>
            
            <div className="text-[#888]">PLATFORM:</div>
            <div className="text-[#ff8c00]">EXOSEARCH</div>
            
            <div className="text-[#888]">STATUS:</div>
            <div className="text-[#4ade80]">GO FOR LAUNCH</div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-[#555] font-mono text-sm">
          <p>MISSION CONTROL • STANDING BY</p>
        </div>
      </div>
    </div>
  );
}