import React, { useState } from 'react';
import { theorySections, mustKnowFlashcards } from '../data/theory';
import { ChevronDownIcon, ChevronUpIcon, AcademicCapIcon, LightBulbIcon } from '@heroicons/react/24/solid';

const FlashCardItem: React.FC<{ question: string; answer: string; index: number }> = ({ question, answer, index }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <button
      onClick={() => setRevealed(r => !r)}
      className="w-full text-left bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-2">
        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 text-xs font-bold flex items-center justify-center mt-0.5">
          {index + 1}
        </span>
        <div className="flex-1">
          <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm">{question}</p>
          {revealed ? (
            <p className="mt-2 text-sm text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3 animate-fade-in">
              {answer}
            </p>
          ) : (
            <p className="mt-2 text-xs text-slate-400 dark:text-slate-500 italic">Tocca per vedere la risposta</p>
          )}
        </div>
      </div>
    </button>
  );
};

export const TheoryGuide: React.FC = () => {
  const [openSections, setOpenSections] = useState<Set<number>>(new Set([0]));
  const [showFlashcards, setShowFlashcards] = useState(false);

  const toggleSection = (idx: number) => {
    setOpenSections(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx); else next.add(idx);
      return next;
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center gap-2">
          <AcademicCapIcon className="w-6 h-6 text-indigo-500" />
          Teoria & Formulario
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Definizioni, formule e concetti chiave spiegati per capire, non solo per memorizzare.
        </p>
      </div>

      {/* Toggle between Formulario and Flashcards */}
      <div className="flex bg-slate-100 dark:bg-slate-800 rounded-xl p-1 gap-1">
        <button
          onClick={() => setShowFlashcards(false)}
          className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${
            !showFlashcards ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          📚 Formulario
        </button>
        <button
          onClick={() => setShowFlashcards(true)}
          className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${
            showFlashcards ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          🎴 Flashcard ({mustKnowFlashcards.length})
        </button>
      </div>

      {!showFlashcards ? (
        <div className="space-y-3">
          {theorySections.map((section, idx) => {
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
                  </span>
                  {isOpen ? (
                    <ChevronUpIcon className="w-5 h-5 flex-shrink-0 text-slate-400" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 flex-shrink-0 text-slate-400" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 space-y-3 animate-fade-in">
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed border-l-2 border-indigo-200 dark:border-indigo-800 pl-3">
                        {p}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-lg p-3">
            <LightBulbIcon className="w-5 h-5 text-amber-500 flex-shrink-0" />
            Le 12 domande "must-know": prova a rispondere a mente prima di rivelare la soluzione.
          </div>
          {mustKnowFlashcards.map((card, idx) => (
            <FlashCardItem key={idx} index={idx} question={card.question} answer={card.answer} />
          ))}
        </div>
      )}
    </div>
  );
};
