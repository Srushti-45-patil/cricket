import { useState } from 'react';
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cards from './MatchCards.tsx';
import { matches } from '../constants/Matches.ts';

const DashBoard = () => {
  const [filter, setFilter] = useState('All'); // ✅ State for selected filter

  // ✅ Function to parse date string into Date object (assuming format: "DD MMMM YYYY")
  const parseDate = (dateStr: String) => {
    const [day, month, year] = dateStr.split(' '); // Split by space ("28 March 2025")
    const monthIndex = new Date(`${month} 1, ${year}`).getMonth(); // Get month index
    return new Date(year, monthIndex, day); // Convert to Date object
  };

  // ✅ Function to filter sessions based on the selected filter
  const filteredMatches = matches.filter((match) => {
    const matchDate = parseDate(match.date);
    const today = new Date();

    if (filter === 'All') return true;
    if (filter === 'Today') return matchDate.toDateString() === today.toDateString();
    if (filter === 'This Week') {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(today.getDate() - 7);
      return matchDate >= oneWeekAgo && matchDate <= today;
    }
    if (filter === 'This Month') {
      return (
        matchDate.getMonth() === today.getMonth() &&
        matchDate.getFullYear() === today.getFullYear()
      );
    }
    return true;
  });

  return (
    <div>
      <div className="ml-[300px] mt-4 h-fit w-fit justify-self-end mr-20">
        <FontAwesomeIcon className="text-xl" icon={faFilter} />
        <select
          name="role"
          className="p-2 border rounded ml-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Today">Today</option>
          <option value="This Week">This Week</option>
          <option value="This Month">This Month</option>
        </select>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-5 mr-10 ml-10">
        {filteredMatches.length > 0 ? (
          filteredMatches.map((match) => (
            <Cards
              key={match.id}
              id={match.id}
              matchType={match.matchType}
              date={match.date}
              reportingTime={match.reportingTime}
              location={match.location}
              team={match.team}
              status={match.status}
            />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No sessions found.</p>
        )}
      </div>
    </div>
  );
};

export default DashBoard;