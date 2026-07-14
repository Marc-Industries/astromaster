import React, { useState } from 'react';
import { Question } from '../types';
import { ChevronDownIcon, ChevronUpIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';

interface WrongAnswersReviewProps {
  wrongQuestions: Question[];
}

export const WrongAnswersReview: React.FC<WrongAnswersReviewProps> = ({ wrongQuestions }) => {
  const [openId, setOpenId] = useState<number | null>(null);

  if (wrongQuestions.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-slate-800 mb-6 transition-colors duration-300">
        <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100 mb-2">Domande da rivedere</h3>
        <p className="text-sm text-gray-600 dark:text-slate-400">
          Nessuna domanda sbagliata al momento. Continua così! Quando risponderai in modo errato a una domanda, la troverai qui per poterla ripassare.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-slate-800 mb-6 transition-colors duration-300">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100 flex items-center gap-2">
          <ExclamationTriangleIcon className="w-5 h-5 text-amber-500" />
          Domande da rivedere
        </h3>
        <span className="text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 px-2.5 py-1 rounded-full">
          {wrongQuestions.length}
        </span>
      </div>
      <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">
        Queste sono le domande a cui hai risposto in modo errato l'ultima volta. Una volta che le rispondi correttamente durante un quiz, spariranno automaticamente da questa lista.
      </p>

      <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
        {wrongQuestions.map((q) => {
          const isOpen = openId === q.id;
          return (
            <div key={q.id} className="border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenId(isOpen ? null : q.id)}
                className="w-full flex items-center justify-between gap-3 p-3 text-left bg-gray-50 dark:bg-slate-800/50 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-slate-300">{q.text}</span>
                {isOpen ? (
                  <ChevronUpIcon className="w-4 h-4 flex-shrink-0 text-gray-400" />
                ) : (
                  <ChevronDownIcon className="w-4 h-4 flex-shrink-0 text-gray-400" />
                )}
              </button>
              {isOpen && (
                <div className="p-3 bg-white dark:bg-slate-900 space-y-2 animate-fade-in">
                  {q.options.map((opt, idx) => (
                    <div
                      key={idx}
                      className={`text-sm p-2 rounded-md border ${
                        idx === q.correctAnswerIndex
                          ? 'border-green-400 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 font-medium'
                          : 'border-gray-100 dark:border-slate-800 text-gray-500 dark:text-slate-500'
                      }`}
                    >
                      <span className="font-bold mr-1">{String.fromCharCode(65 + idx)}.</span>
                      {opt}
                    </div>
                  ))}
                  {q.explanation && (
                    <p className="text-xs text-gray-500 dark:text-slate-400 pt-1 italic">{q.explanation}</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
