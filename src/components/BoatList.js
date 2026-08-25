import React from 'react';
import BoatCard from './BoatCard';
import EmptyState from './EmptyState';

const BoatList = ({ boats }) => {
  if (boats.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="boat-list">
      {boats.map((boat) => (
        <BoatCard key={boat.id} boat={boat} />
      ))}
    </div>
  );
};

export default BoatList;
