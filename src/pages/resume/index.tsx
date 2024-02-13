import UserCard from '@components/business/user/card';
import DefaultHeader from '@components/ui/headers/default';
import List from '@components/ui/list';
import Repository from '@models/Repository';
import User from '@models/User';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserModel } from 'types';

export const ResumePage = () => {
  const { username } = useParams();
  const [user, setUser] = useState<UserModel | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUser = await User.findByUsername(username);
        setUser(fetchedUser);
        console.log('User11:', fetchedUser);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <DefaultHeader 
          text='User Information'
          className='mb-4' 
        />

        <UserCard 
          user={user}
          containerClassName='mb-4'  
        />

        <div className="mb-4">
          <DefaultHeader 
            text='Programming Languages'
            className='mb-4' 
          />
          <List 
            items={Repository.prepareForLanguagesList(user?.repos)}
          />
        </div>

        <div>
          <DefaultHeader 
            text='Recently Edited Repositories'
            className='mb-4' 
          />
          <List 
            items={Repository.prepareForProjectsList(user?.repos, 5)}
          />
        </div>
      </div>
    </div>
  );
};
