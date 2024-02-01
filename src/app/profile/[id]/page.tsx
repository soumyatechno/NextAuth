import React from 'react';

const Profile = ({params}:any) => {
  return (
    <div 
    className='flex flex-col justify-center min-h-screen py-2 items-center text-white'>
      Profile
      <h1 className='text-2xl'>Profile page<span className='bg-orange-300'>{params.id}</span></h1>
    </div>
  )
}

export default Profile