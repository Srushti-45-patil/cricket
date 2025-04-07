import React from 'react'

export type Session = {
    attendance: string
    id: number,
    sessionType: String,
    date: String,
    time: String,
    duration: String,
    batch: String,
    coachAssigned: String,
    skillFocusAreas: String,
    note: String
}

type CardProps = {
    id: number,
    sessionType: String,
    date: String,
    time: String,
    duration: String,
    batch: String,
    coachAssigned: String,
    skillFocusAreas: String,
    note: String
}

const TaskCards = ({sessionType, date, time, duration, batch, coachAssigned, skillFocusAreas, note}: CardProps) => {
  return (
    <div className='border border-black rounded-2xl p-5'>
        <div><span className='font-semibold text-blue-800'>Session Type:</span> {sessionType}</div>
        <div><span className='font-semibold text-blue-800'>Date:</span> {date}</div>
        <div><span className='font-semibold text-blue-800'>Time:</span> {time}</div>
        <div><span className='font-semibold text-blue-800'>Duration:</span> {duration}</div>
        <div><span className='font-semibold text-blue-800'>Batch:</span> {batch}</div>
        <div><span className='font-semibold text-blue-800'>Coach Assigned:</span> {coachAssigned}</div>
        <div><span className='font-semibold text-blue-800'>Skill Focus Areas:</span> {skillFocusAreas}</div>
        <div><span className='font-semibold text-blue-800'>Note:</span> {note}</div>
    </div>
  )
}

export default TaskCards