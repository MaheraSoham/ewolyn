"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface StateData {
  id: string;
  name: string;
  msmeCount: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const indianStates: StateData[] = [
  { id: "JK", name: "Jammu & Kashmir", msmeCount: "8L+ MSMEs", x: 20, y: 8, width: 12, height: 10 },
  { id: "LA", name: "Ladakh", msmeCount: "0.5L+ MSMEs", x: 32, y: 5, width: 8, height: 8 },
  { id: "HP", name: "Himachal Pradesh", msmeCount: "7L+ MSMEs", x: 28, y: 15, width: 8, height: 6 },
  { id: "PB", name: "Punjab", msmeCount: "15L+ MSMEs", x: 22, y: 18, width: 6, height: 5 },
  { id: "HR", name: "Haryana", msmeCount: "18L+ MSMEs", x: 26, y: 22, width: 6, height: 5 },
  { id: "DL", name: "Delhi", msmeCount: "28L+ MSMEs", x: 28, y: 24, width: 2, height: 2 },
  { id: "UK", name: "Uttarakhand", msmeCount: "6L+ MSMEs", x: 32, y: 20, width: 6, height: 5 },
  { id: "RJ", name: "Rajasthan", msmeCount: "24L+ MSMEs", x: 15, y: 25, width: 15, height: 18 },
  { id: "UP", name: "Uttar Pradesh", msmeCount: "39L+ MSMEs", x: 30, y: 25, width: 18, height: 12 },
  { id: "BR", name: "Bihar", msmeCount: "18L+ MSMEs", x: 48, y: 32, width: 10, height: 8 },
  { id: "SK", name: "Sikkim", msmeCount: "1L+ MSMEs", x: 58, y: 28, width: 3, height: 3 },
  { id: "AR", name: "Arunachal Pradesh", msmeCount: "2L+ MSMEs", x: 62, y: 22, width: 12, height: 10 },
  { id: "NL", name: "Nagaland", msmeCount: "1.5L+ MSMEs", x: 72, y: 32, width: 4, height: 5 },
  { id: "MN", name: "Manipur", msmeCount: "1.8L+ MSMEs", x: 72, y: 38, width: 4, height: 4 },
  { id: "MZ", name: "Mizoram", msmeCount: "1.2L+ MSMEs", x: 70, y: 43, width: 4, height: 5 },
  { id: "TR", name: "Tripura", msmeCount: "2.5L+ MSMEs", x: 68, y: 40, width: 4, height: 4 },
  { id: "ML", name: "Meghalaya", msmeCount: "2L+ MSMEs", x: 64, y: 35, width: 5, height: 4 },
  { id: "AS", name: "Assam", msmeCount: "12L+ MSMEs", x: 62, y: 30, width: 10, height: 8 },
  { id: "WB", name: "West Bengal", msmeCount: "26L+ MSMEs", x: 56, y: 38, width: 8, height: 12 },
  { id: "JH", name: "Jharkhand", msmeCount: "13L+ MSMEs", x: 50, y: 40, width: 8, height: 8 },
  { id: "OR", name: "Odisha", msmeCount: "16L+ MSMEs", x: 52, y: 48, width: 10, height: 12 },
  { id: "CT", name: "Chhattisgarh", msmeCount: "11L+ MSMEs", x: 42, y: 45, width: 10, height: 10 },
  { id: "MP", name: "Madhya Pradesh", msmeCount: "20L+ MSMEs", x: 28, y: 38, width: 16, height: 14 },
  { id: "GJ", name: "Gujarat", msmeCount: "41L+ MSMEs", x: 10, y: 42, width: 12, height: 15 },
  { id: "MH", name: "Maharashtra", msmeCount: "82L+ MSMEs", x: 20, y: 52, width: 16, height: 14 },
  { id: "GA", name: "Goa", msmeCount: "3L+ MSMEs", x: 20, y: 66, width: 3, height: 3 },
  { id: "KA", name: "Karnataka", msmeCount: "34L+ MSMEs", x: 22, y: 68, width: 12, height: 14 },
  { id: "TG", name: "Telangana", msmeCount: "19L+ MSMEs", x: 34, y: 62, width: 8, height: 8 },
  { id: "AP", name: "Andhra Pradesh", msmeCount: "22L+ MSMEs", x: 38, y: 66, width: 10, height: 12 },
  { id: "TN", name: "Tamil Nadu", msmeCount: "49L+ MSMEs", x: 30, y: 78, width: 12, height: 12 },
  { id: "KL", name: "Kerala", msmeCount: "14L+ MSMEs", x: 22, y: 80, width: 8, height: 12 },
  { id: "LD", name: "Lakshadweep", msmeCount: "0.1L+ MSMEs", x: 8, y: 78, width: 2, height: 3 },
  { id: "AN", name: "Andaman & Nicobar", msmeCount: "0.5L+ MSMEs", x: 78, y: 75, width: 3, height: 12 },
  { id: "PY", name: "Puducherry", msmeCount: "1.5L+ MSMEs", x: 36, y: 82, width: 2, height: 2 },
  { id: "CH", name: "Chandigarh", msmeCount: "2L+ MSMEs", x: 24, y: 20, width: 2, height: 2 },
  { id: "DD", name: "Dadra & Nagar Haveli and Daman & Diu", msmeCount: "1L+ MSMEs", x: 12, y: 48, width: 3, height: 3 }
];

export default function IndiaMap() {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [startPan, setStartPan] = useState({ x: 0, y: 0 });
  const [hoveredState, setHoveredState] = useState<StateData | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleNativeWheel = (e: WheelEvent) => {
      if (isHovering) {
        e.preventDefault();
        e.stopPropagation();
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        setScale(prevScale => Math.min(Math.max(prevScale * delta, 0.5), 3));
      }
    };

    container.addEventListener('wheel', handleNativeWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleNativeWheel);
  }, [isHovering]);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsPanning(true);
    setStartPan({ x: event.clientX - position.x, y: event.clientY - position.y });
    setHoveredState(null);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isPanning) return;
    setPosition({ x: event.clientX - startPan.x, y: event.clientY - startPan.y });
  };

  const handleMouseUp = () => setIsPanning(false);

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleStateHover = (state: StateData, event: React.MouseEvent) => {
    if (!isPanning) {
      setHoveredState(state);
      setMousePos({ x: event.clientX, y: event.clientY });
    }
  };

  return (
    <div
      className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden"
      style={{ minHeight: '480px' }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        ref={containerRef}
        className={`relative w-full h-full flex items-center justify-center ${isPanning ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: isPanning ? 'none' : 'transform 0.3s ease-out',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          <Image
            src="/complete-india-map.png"
            alt="Complete India Map"
            width={600}
            height={650}
            className="w-full h-auto object-contain"
            priority
            draggable={false}
          />

          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            style={{ pointerEvents: isPanning ? 'none' : 'auto' }}
          >
            {indianStates.map((state) => (
              <rect
                key={state.id}
                x={state.x}
                y={state.y}
                width={state.width}
                height={state.height}
                fill="transparent"
                stroke="transparent"
                className="cursor-pointer hover:fill-[rgba(76,175,80,0.2)] transition-all duration-200"
                onMouseEnter={(e) => handleStateHover(state, e)}
                onMouseLeave={() => setHoveredState(null)}
              />
            ))}
          </svg>
        </div>
      </div>

      {hoveredState && !isPanning && (
        <div
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: mousePos.x + 20,
            top: mousePos.y + 20
          }}
        >
          <div className="bg-slate-900 backdrop-blur-xl rounded-xl px-5 py-4 text-white shadow-2xl border-2 border-cyan-500/50 min-w-[180px] animate-fade-in">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <div className="font-bold text-base text-cyan-300">{hoveredState.name}</div>
            </div>
            <div className="text-sm text-white font-medium">{hoveredState.msmeCount}</div>
            <div className="text-xs text-slate-400 mt-2">Click for details</div>
          </div>
        </div>
      )}

      <div className="absolute bottom-3 right-3 flex items-center gap-2">
        <button
          onClick={handleReset}
          className="bg-white/90 hover:bg-white text-slate-700 text-xs px-3 py-2 rounded-lg transition-all duration-200 shadow-md"
          title="Reset View"
        >
          Reset
        </button>
        <div className="bg-white/90 text-slate-700 text-xs px-3 py-2 rounded-lg shadow-md">
          {Math.round(scale * 100)}%
        </div>
      </div>
    </div>
  );
}
