import { html } from 'htm/react';

export const GlobalProgress = ({ seenCount, totalCount, onReset }) => {
  const percentage = Math.round((seenCount / totalCount) * 100);

  return html`
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-slate-800 mb-6 transition-colors duration-300">
      <h3 className="text-lg font-bold text-gray-800 dark:text-slate-100 mb-2">Total Learning Collection</h3>
      <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">
        You have studied <span className="font-bold text-blue-600 dark:text-blue-400">${seenCount}</span> out of <span className="font-bold text-gray-800 dark:text-slate-200">${totalCount}</span> questions in the entire database.
      </p>
      
      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-4 mb-6">
        <div 
          className="bg-green-500 h-4 rounded-full transition-all duration-1000 ease-out" 
          style=${{ width: `${percentage}%` }}
        ></div>
      </div>

      <button 
        onClick=${onReset}
        className="text-xs text-red-500 hover:text-red-700 dark:hover:text-red-400 underline"
      >
        Reset Progress
      </button>
    </div>
  `;
};
