

import React from 'react'
import {user} from '../constants/Profile.ts'

export type Profile = {
    profilePic: String,
    username: String,
    fullName:String,
    role: String,
    skillLevel: String,
    coachingType: String,
    email: String,
    phoneNo: String,
    emergencyNo: String,
    bloodGroup: String,
    height: number,
    weight: number,
    dob: String,
    age: number,
    gender: String,
    country: String,
    state: String,
    city: String,
    pincode: String,
    academyLocation: String,
    password: String
}

const Profile = () => {
  return (
    <div className='justify-items-center'>
        <img src={user.profilePic} className='h-50' />
        <div className='p-4 flex gap gap-20'>
            <div className='p-5 gap'>
                <span className='text-3xl font-semibold'>Personal Details</span>
                <hr></hr>
                <br></br>
                <div>
                <span className='font-bold'>Username:</span> {user.username}
                </div>
                <div>
                    <span className='font-bold'>Name:</span> {user.fullName}
                </div>
                <div>
                    <span className='font-bold'>Email:</span> {user.email}
                </div>
                <div>
                    <span className='font-bold'>Phone no:</span> {user.phoneNo}
                </div>
                
                <div>
                    <span className='font-bold'>Date of birth:</span> {user.dob}
                </div>
                <div>
                    <span className='font-bold'>Age:</span> {user.age}
                </div>
                <div>
                    <span className='font-bold'>Country:</span> {user.country}
                </div>
                <div>
                    <span className='font-bold'>State:</span> {user.state}
                </div>
                <div>
                    <span className='font-bold'>City:</span> {user.city}
                </div>
            </div>
            <div className='p-2 ml-5'>
                <span className='text-3xl font-semibold '>Fitness Details</span>
                <hr></hr>
                <br></br>
                    <div>
                        <span className='font-bold'>Blood Group:</span> {user.bloodGroup}
                    </div>
                    <div>
                        <span className='font-bold'>Height:</span> {user.height}
                    </div>
                    <div>
                        <span className='font-bold'>Weight:</span> {user.weight}
                    </div>
            </div>
            <div className='p-2 ml-5'>
                <span className='text-3xl font-semibold'>Skills</span>
                <hr></hr>
                <br></br>
                    <div>
                        <span className='font-bold'>Role:</span> {user.role}
                    </div>
                    <div>
                        <span className='font-bold'>Skill Level:</span> {user.skillLevel}
                    </div>
            </div>
            <div className='p-2 ml-5'>
                <span className='text-3xl font-semibold'>Coaching Details</span>
                <hr></hr>
                <br></br>
                    <div>
                        <span className='font-bold'>Coaching Type:</span> {user.coachingType}
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Profile