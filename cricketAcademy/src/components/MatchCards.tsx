import React from 'react'

type CardProps={
    id: number,
    matchType: String,
    date: String,
    reportingTime: String,
    location: String,
    team: String,
    status: String
}

export type match={
    attendance: string
    id: number, 
    matchType: String,
    date: String,
    reportingTime: String,
    location: String,
    team: String,
    status: String
}

const MatchCards = ({matchType, date, reportingTime, location, team, status}: CardProps) => {
  return (
    <div className='border border-black rounded-2xl p-5'>
        <div><span className='font-semibold text-blue-800'>Match Type:</span> {matchType}</div>
        <div><span className='font-semibold text-blue-800'>Date:</span> {date}</div>
        <div><span className='font-semibold text-blue-800'>Reporting Time:</span> {reportingTime}</div>
        <div><span className='font-semibold text-blue-800'>Location:</span> {location}</div>
        <div><span className='font-semibold text-blue-800'>Teams:</span> {team}</div>
        <div><span className='font-semibold text-blue-800'>Status:</span> {status}</div>
    </div>
  )
}

export default MatchCards