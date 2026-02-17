import React, { useState, useEffect, useCallback } from 'react';
import { html } from 'htm/react';
import { questionBank } from './data/questions.js';
import { AppView } from './types.js';
import { QuizCard } from './components/QuizCard.js';
import { ProgressBar } from './components/ProgressBar.js';
import { GlobalProgress } from './components/GlobalProgress.js';
import { TOTAL_QUIZ_QUESTIONS, STORAGE_KEY_SEEN } from './constants.js';
import { BookOpenIcon, PlayCircleIcon, InformationCircleIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const App = () => {
  const [view, setView] = useState(AppView.HOME);
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [seenQuestionIds, setSeenQuestionIds] = useState(new Set());
  const [score, setScore] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize Dark Mode
  useEffect(() => {
    const isDark = localStorage.getItem('astroquiz_theme') === 'dark' || 
      (!('astroquiz_theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('astroquiz_theme', newMode ? 'dark' : 'light');
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Load seen questions from local storage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY_SEEN);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setSeenQuestionIds(new Set(parsed));
        }
      } catch (e) {
        console.error("Failed to parse seen questions", e);
      }
    }
  }, []);

  // Save seen questions whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_SEEN, JSON.stringify(Array.from(seenQuestionIds)));
  }, [seenQuestionIds]);

  const startQuiz = useCallback(() => {
    // Randomize and slice questions
    const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, TOTAL_QUIZ_QUESTIONS);
    setActiveQuestions(selected);
    setCurrentIndex(0);
    setScore(0);
    setView(AppView.QUIZ);
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(s => s + 1);
    
    // Mark current question as seen
    const currentQ = activeQuestions[currentIndex];
    setSeenQuestionIds(prev => new Set(prev).add(currentQ.id));

    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      alert(`Quiz Finished! Score: ${isCorrect ? score + 1 : score}/${activeQuestions.length}`);
      setView(AppView.INFO);
    }
  };

  const handleResetProgress = () => {
    if (confirm("Are you sure you want to reset your global learning progress?")) {
      setSeenQuestionIds(new Set());
    }
  };

  return html`
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-gray-900 dark:text-slate-100 pb-20 transition-colors duration-300">
      <!-- Navbar -->
      <nav className="bg-white dark:bg-slate-900 shadow-sm border-b border-gray-200 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-blue-900 dark:text-blue-400">
            <${BookOpenIcon} className="w-6 h-6 text-blue-600 dark:text-blue-500" />
            <span>AstroMaster</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-sm font-medium">
              <button 
                onClick=${() => setView(AppView.HOME)}
                className=${`transition-colors ${view === AppView.HOME ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-slate-200'}`}
              >
                Home
              </button>
              <button 
                onClick=${() => setView(AppView.INFO)}
                className=${`transition-colors ${view === AppView.INFO ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-slate-200'}`}
              >
                Info
              </button>
            </div>
            <!-- Theme Toggle -->
            <button 
              onClick=${toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-gray-500 dark:text-slate-400"
              aria-label="Toggle Dark Mode"
            >
              ${darkMode ? html`<${SunIcon} className="w-5 h-5" />` : html`<${MoonIcon} className="w-5 h-5" />`}
            </button>
          </div>
        </div>
      </nav>

      <!-- Main Content -->
      <main className="max-w-4xl mx-auto px-4 py-8">
        
        ${view === AppView.HOME && html`
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 animate-fade-in">
            <div className="space-y-4 max-w-lg">
              <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Master Astronomy & Physics
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Practice 150+ questions. Track your progress. Translate instantly.
              </p>
            </div>

            <div className="grid gap-4 w-full max-w-xs">
              <button
                onClick=${startQuiz}
                className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-200 dark:shadow-blue-900/20 transition-all hover:scale-105 active:scale-95"
              >
                <${PlayCircleIcon} className="w-6 h-6" />
                Start Quiz (${TOTAL_QUIZ_QUESTIONS} Qs)
              </button>
              
              <button
                onClick=${() => setView(AppView.INFO)}
                className="flex items-center justify-center gap-3 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-xl font-semibold transition-all"
              >
                <${InformationCircleIcon} className="w-6 h-6 text-slate-400 dark:text-slate-500" />
                My Progress
              </button>
            </div>
          </div>
        `}

        ${view === AppView.INFO && html`
          <div className="max-w-xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Your Statistics</h2>
            <${GlobalProgress} 
              seenCount=${seenQuestionIds.size} 
              totalCount=${questionBank.length} 
              onReset=${handleResetProgress}
            />
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
              <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">How it works</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-blue-800 dark:text-blue-200/80">
                <li>Quizzes are generated randomly from the pool.</li>
                <li>Each unique question you see is tracked.</li>
                <li>Use the language toggle inside the quiz to translate difficult questions.</li>
              </ul>
            </div>

            <button
               onClick=${startQuiz}
               className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-md hover:bg-blue-700 transition-colors"
            >
              Start New Quiz
            </button>
          </div>
        `}

        ${view === AppView.QUIZ && activeQuestions.length > 0 && html`
          <div className="max-w-2xl mx-auto">
            <${ProgressBar} current=${currentIndex + 1} total=${activeQuestions.length} />
            <${QuizCard} 
              question=${activeQuestions[currentIndex]} 
              onAnswer=${handleAnswer}
              isLastQuestion=${currentIndex === activeQuestions.length - 1}
            />
          </div>
        `}
      </main>
    </div>
  `;
};

export default App;
