import React, { useState } from 'react';
import { cheatSheetData } from '../data/cheatsheet';
import { ChevronDownIcon, ChevronUpIcon, SparklesIcon } from '@heroicons/react/24/solid';

export const CheatSheet: React.FC = () => {
  // First section open by default so the page doesn't look empty on load
  const [openSections, setOpenSections] = useState<Set<number>>(new Set([0]));

  const toggleSection = (idx: number) => {
    setOpenSections(prev => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-2">
          <SparklesIcon className="w-6 h-6 text-amber-500" />
          Ripasso Lampo
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          I trucchi e i fatti chiave da ricordare, divisi per argomento. Perfetto per un ripasso veloce prima dell'esame.
        </p>
      </div>

      <div className="space-y-3">
        {cheatSheetData.map((section, idx) => {
          const isOpen = openSections.has(idx);
          return (
            <div
              key={section.title}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-md border border-gray-100 dark:border-slate-800 overflow-hidden transition-colors duration-300"
            >
              <button
                onClick={() => toggleSection(idx)}
                className="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <span className="flex items-center gap-3 font-bold text-slate-800 dark:text-slate-100">
                  <span className="text-xl">{section.emoji}</span>
                  {section.title}
                  <span className="text-xs font-normal text-slate-400 dark:text-slate-500">
                    ({section.tips.length})
                  </span>
                </span>
                {isOpen ? (
                  <ChevronUpIcon className="w-5 h-5 flex-shrink-0 text-slate-400" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 flex-shrink-0 text-slate-400" />
                )}
              </button>

              {isOpen && (
                <ul className="px-5 pb-5 space-y-2.5 animate-fade-in">
                  {section.tips.map((tip, tIdx) => (
                    <li
                      key={tIdx}
                      className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                    >
                      <span className="text-blue-500 dark:text-blue-400 font-bold flex-shrink-0">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
