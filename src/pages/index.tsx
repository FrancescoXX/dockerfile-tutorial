import React, { useState, useEffect } from 'react';

const Page: React.FC = () => {
  const [votes, setVotes] = useState({ JavaScript: 0, Python: 0 });

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem('votes') || '{"JavaScript": 0, "Python": 0}');
    setVotes(savedVotes);
  }, []);

  const vote = (language: 'JavaScript' | 'Python') => {
    const newVotes = { ...votes, [language]: votes[language] + 1 };
    setVotes(newVotes);
    localStorage.setItem('votes', JSON.stringify(newVotes));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-2xl font-bold mb-4">Vote for your favorite language!</h1>
      <div className="flex space-x-4">
        <div className="flex flex-col items-center">
          <img src="/jslogo.png" alt="JavaScript" className="w-32 h-32 object-cover rounded-full shadow-lg mb-2"/>
          <button onClick={() => vote('JavaScript')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            JavaScript
          </button>
          <span className="mt-1">{votes.JavaScript} Votes</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/pythonlogo.png" alt="Python" className="w-32 h-32 object-cover rounded-full shadow-lg mb-2"/>
          <button onClick={() => vote('Python')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Python
          </button>
          <span className="mt-1">{votes.Python} Votes</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
