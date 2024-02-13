import UserCard from '@components/business/user/card';
import Layout from '@components/layout';
import DefaultButton from '@components/ui/buttons/default';
import DefaultHeader from '@components/ui/headers/default';
import List from '@components/ui/list';
import Repository from '@models/Repository';
import User from '@models/User';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserModel } from 'types';

export const ResumePage = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<UserModel | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUser = await User.findByUsername(username);
        setUser(fetchedUser);
        console.log('User11:', fetchedUser);
      } catch (error) {
        console.error('Error fetching user1111:', error);
      }
    };

    fetchData();
  }, [username]);

  const generate = () => {
    if (!user) {
      return (
        <div className='flex flex-col justify-center'>
          <DefaultHeader 
            text='Github user with such username was not found'
            className='text-center mb-4' 
          />
          <DefaultButton
            text="Go Back"
            className='px-6 py-2'
            onClick={() => { navigate('/') }} 
          />
        </div>
      );
    }

    return (
      <div>
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
            className='mb-2' 
          />
          <List 
            items={Repository.prepareForLanguagesList(user?.repos)}
          />
        </div>

        <div>
          <DefaultHeader 
            text='Recently Edited Repositories'
            className='mb-2' 
          />
          <List 
            items={Repository.prepareForProjectsList(user?.repos, 5)}
          />
        </div>

        <div className='flex'>
          <DefaultButton
            text="Go to Home page"
            className='mt-5 px-6 py-2 mx-auto'
            onClick={() => { navigate('/') }} 
          />
          </div>
      </div>
    );
  }

  return (
    <Layout>
      {generate()}
    </Layout>
  );
};
