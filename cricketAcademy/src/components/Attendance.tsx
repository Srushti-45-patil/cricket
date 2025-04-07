import { useState } from 'react';
import { matches } from '../constants/Matches.ts';
import { sessions } from '../constants/Sessions.ts';

const Attendance = () => {
  const today = new Date();
  const [reasons, setReasons] = useState<{ [key: string]: string }>({});

  const conductedSessions = sessions.filter((session) => {
    const sessionDate = new Date(session.date);
    return sessionDate < today;
  });

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Present':
        return 'bg-green-200 text-green-800 font-bold border-green-400 shadow-lg';
      case 'Absent':
        return 'bg-red-200 text-red-800 font-bold border-red-400 shadow-lg';
      case 'Excused':
        return 'bg-yellow-200 text-yellow-800 font-bold border-yellow-400 shadow-lg';
      case 'Late':
        return 'bg-orange-200 text-orange-800 font-bold border-orange-400 shadow-lg';
      default:
        return 'bg-violet-200 text-violet-800 font-bold border-violet-400 shadow-lg'; // Not yet updated
    }
  };

  const handleReasonChange = (id: string | number, reason: string) => {
    setReasons((prev) => ({ ...prev, [id]: reason }));
  };

  const needsReason = (status: string) => status === 'Absent' || status === 'Late';

  return (
    <div>
      {/* Match Attendance */}
      <div className="mt-5 mx-10">
        <h2 className="text-xl font-semibold mb-2">Match Attendance</h2>
        <div className="grid grid-cols-4 gap-5">
          {matches.length > 0 ? (
            matches.map((match) => {
              const status = match.attendance || 'Not yet updated';
              return (
                <div key={match.id} className={`border p-4 rounded ${getStatusStyle(status)}`}>
                  <p className="text-black font-semibold">{match.matchType}</p>
                  <p className="text-black">Date: {match.date}</p>
                  <p className="p-2 rounded-lg text-center">Status: {status}</p>
                  {needsReason(status) && (
                    <div className="mt-2">
                      <label className="block text-sm font-medium text-gray-700">Reason:</label>
                      <textarea
                        value={reasons[match.id] || ''}
                        onChange={(e) => handleReasonChange(match.id, e.target.value)}
                        className="w-full mt-1 p-2 border rounded bg-white text-black placeholder-gray-500 font-normal"
                        placeholder={`Enter reason for ${status.toLowerCase()}...`}
                      />
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <p className="text-center col-span-4 text-gray-500">No matches found.</p>
          )}
        </div>
      </div>

      {/* Session Attendance */}
      <div className="mt-10 mx-10">
        <h2 className="text-xl font-semibold mb-2">Session Attendance</h2>
        <div className="grid grid-cols-4 gap-5">
          {conductedSessions.length > 0 ? (
            conductedSessions.map((session) => {
              const status = session.attendance || 'Not yet updated';
              return (
                <div key={session.id} className={`border p-4 rounded ${getStatusStyle(status)}`}>
                  <p className="text-black font-semibold">{session.sessionType}</p>
                  <p className="text-black">Date: {session.date}</p>
                  <p className="text-black">Time: {session.time}</p>
                  <p className="text-black">Duration: {session.duration}</p>
                  <p className="text-black">Batch: {session.batch}</p>
                  <p className="text-black">Coach Assigned: {session.coachAssigned}</p>
                  <p className="text-black">Skill Focus Areas: {session.skillFocusAreas}</p>
                  <p className="text-black">Note: {session.note}</p>
                  <p className="p-2 rounded-lg text-center">Status: {status}</p>
                  {needsReason(status) && (
                    <div className="mt-2">
                      <label className="block text-sm font-medium text-gray-700">Reason:</label>
                      <textarea
                        value={reasons[session.id] || ''}
                        onChange={(e) => handleReasonChange(session.id, e.target.value)}
                        className="w-full mt-1 p-2 border rounded bg-white text-black placeholder-gray-500 font-normal"
                        placeholder={`Enter reason for ${status.toLowerCase()}...`}
                      />
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <p className="text-center col-span-4 text-gray-500">No conducted sessions found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Attendance;