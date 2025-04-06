import React from 'react'

type CardProps={
    id: number,
    matchType: String,
    date: String,
    reportingTime: String,
    location: String,
    opponent: String
}

export type match={
    id: number, 
    matchType: String,
    date: String,
    reportingTime: String,
    location: String,
    opponent: String
}

const MatchCards = ({matchType, date, reportingTime, location, opponent}: CardProps) => {
  return (
    <div>
        <div><span className='font-semibold text-blue-800'>Match Type:</span> {matchType}</div>
        <div><span className='font-semibold text-blue-800'>Date:</span> {date}</div>
        <div><span className='font-semibold text-blue-800'>Reporting Time:</span> {reportingTime}</div>
        <div><span className='font-semibold text-blue-800'>Location:</span> {location}</div>
        <div><span className='font-semibold text-blue-800'>Opponent:</span> {opponent}</div>
    </div>
  )
}

export default MatchCards