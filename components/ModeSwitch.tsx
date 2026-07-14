import React from 'react';
import { QuizMode } from '../constants';

interface ModeSwitchProps {
  modes: QuizMode[];
  selected: QuizMode;
  onSelect: (mode: QuizMode) => void;
}

export const ModeSwitch: React.FC<ModeSwitchProps> = ({ modes, selected, onSelect }) => {
  const selectedIndex = Math.max(0, modes.findIndex(m => m.key === selected.key));

  return (
    <div className="w-full">
      <div className="relative grid grid-cols-3 bg-slate-100 dark:bg-slate-800 rounded-2xl p-1.5">
        {/* Sliding highlight */}
        <div
          className="absolute top-1.5 bottom-1.5 left-1.5 rounded-xl bg-blue-600 dark:bg-blue-600 shadow-md transition-transform duration-300 ease-out"
          style={{
            width: 'calc((100% - 12px) / 3)',
            transform: `translateX(${selectedIndex * 100}%)`,
          }}
        />
        {modes.map((mode) => {
          const isSelected = mode.key === selected.key;
          return (
            <button
              key={mode.key}
              onClick={() => onSelect(mode)}
              className={`relative z-10 flex flex-col items-center justify-center py-2.5 rounded-xl transition-colors duration-300 ${
                isSelected
                  ? 'text-white'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              <span className="font-bold text-sm leading-tight">{mode.label}</span>
              <span className={`text-[11px] leading-tight ${isSelected ? 'text-blue-100' : 'opacity-70'}`}>
                {mode.count} domande
              </span>
            </button>
          );
        })}
      </div>
      <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-2">
        {selected.description}
      </p>
    </div>
  );
};
