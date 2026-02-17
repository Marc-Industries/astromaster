import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = Math.round(((current) / total) * 100);

  return (
    <div className="w-full bg-gray-200 dark:bg-slate-800 rounded-full h-2.5 mb-4">
      <div 
        className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
        style={{ width: `${percentage}%` }}
      ></div>
      <p className="text-xs text-gray-500 dark:text-slate-500 mt-1 text-right">{current}/{total}</p>
    </div>
  );
};