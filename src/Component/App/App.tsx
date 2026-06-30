import type { VoteType } from '../../types/votes';
import type Vote from '../../types/votes';
import Cafeinfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import css from './App.module.css';
import { useState } from 'react';

export default function App() {
  const [votes, setVote] = useState<Vote>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVote(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVote({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;

  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  const canReset = totalVotes > 0;

  return (
    <div className={css.app}>
      <Cafeinfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={canReset}
      />
      {/* {totalVotes ? (  */}
      <VoteStats
        votes={votes}
        totalVotes={totalVotes}
        positiveRate={positiveRate}
      />
      {/* ) : (<Notification/>)
    
       } */}
    </div>
  );
}
