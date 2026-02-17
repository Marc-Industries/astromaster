import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { CheckCircleIcon, XCircleIcon, LanguageIcon } from '@heroicons/react/24/solid';

interface QuizCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  isLastQuestion: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer, isLastQuestion }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedOption(null);
    setIsRevealed(false);
    setShowTranslation(false);
  }, [question.id]);

  const handleOptionClick = (index: number) => {
    if (isRevealed) return;
    setSelectedOption(index);
    setIsRevealed(true);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      onAnswer(selectedOption === question.correctAnswerIndex);
    }
  };

  const toggleTranslation = () => {
    if (!question.translation) {
      alert("Translation not available for this question yet.");
      return;
    }
    setShowTranslation(!showTranslation);
  };

  const useTranslation = showTranslation && question.translation;

  const currentText = useTranslation ? question.translation!.text : question.text;
  const currentOptions = useTranslation ? question.translation!.options : question.options;
  const currentExplanation = useTranslation 
    ? question.translation!.explanation 
    : (question.explanation || "Correct answer marked based on source material.");

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden max-w-2xl mx-auto border border-gray-100 dark:border-slate-800 transition-colors duration-300">
      {/* Header / Translation Toggle */}
      <div className="bg-slate-50 dark:bg-slate-800/50 p-3 flex justify-end border-b border-gray-100 dark:border-slate-700">
        <button
          onClick={toggleTranslation}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors
            ${showTranslation ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700'}
          `}
        >
          <LanguageIcon className="w-4 h-4" />
          {showTranslation ? 'Italiano' : 'English'}
        </button>
      </div>

      {/* Question Body */}
      <div className="p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-slate-100 mb-6 leading-tight">
          {currentText}
        </h2>

        <div className="space-y-3">
          {currentOptions.map((option, index) => {
            let buttonStyle = "border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 hover:border-blue-300 dark:hover:border-blue-700 text-gray-700 dark:text-slate-300";
            
            if (isRevealed) {
              if (index === question.correctAnswerIndex) {
                buttonStyle = "bg-green-50 dark:bg-green-900/20 border-green-500 text-green-800 dark:text-green-400 font-medium";
              } else if (index === selectedOption) {
                buttonStyle = "bg-red-50 dark:bg-red-900/20 border-red-500 text-red-800 dark:text-red-400";
              } else {
                buttonStyle = "opacity-50 border-gray-100 dark:border-slate-800 text-gray-400 dark:text-slate-600";
              }
            } else if (selectedOption === index) {
              buttonStyle = "border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300";
            }

            return (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={isRevealed}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${buttonStyle}`}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-bold opacity-60">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                  {isRevealed && index === question.correctAnswerIndex && (
                    <CheckCircleIcon className="w-6 h-6 text-green-500 ml-auto flex-shrink-0" />
                  )}
                  {isRevealed && index === selectedOption && index !== question.correctAnswerIndex && (
                    <XCircleIcon className="w-6 h-6 text-red-500 ml-auto flex-shrink-0" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback Section */}
        {isRevealed && (
          <div className="mt-8 animate-fade-in">
            <div className={`p-4 rounded-lg border-l-4 ${selectedOption === question.correctAnswerIndex ? 'bg-green-50 dark:bg-green-900/10 border-green-500' : 'bg-blue-50 dark:bg-blue-900/10 border-blue-500'}`}>
              <p className={`font-bold mb-1 ${selectedOption === question.correctAnswerIndex ? 'text-green-800 dark:text-green-400' : 'text-blue-800 dark:text-blue-400'}`}>
                {selectedOption === question.correctAnswerIndex ? 'Correct!' : 'Explanation'}
              </p>
              <p className="text-gray-700 dark:text-slate-300 text-sm leading-relaxed">
                {currentExplanation}
              </p>
            </div>
            
            <button
              onClick={handleNext}
              className="mt-6 w-full py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-transform active:scale-95 shadow-lg"
            >
              {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
