import type { VoteType } from '../../types/votes';
import type Vote from '../../types/votes';
import Cafeinfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import css from './App.module.css';
import { useState } from 'react';

export default function App() {
  const [vote, setVote] = useState<Vote>({
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
  return (
    <div className={css.app}>
      <Cafeinfo />
      <VoteOptions />
    </div>
  );
}
