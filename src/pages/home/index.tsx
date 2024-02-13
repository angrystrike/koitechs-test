import React, { useState } from 'react';
import DefaultButton from '@components/ui/buttons/default';
import Input from '@components/ui/forms/Input';
import { useNavigate } from 'react-router-dom';
import DefaultHeader from '@components/ui/headers/default';
import Layout from '@components/layout';

const HomePage = () => {
  const navigate = useNavigate();
  
  async function navigateToResumePage() {
    navigate(`/${username}`);
  }

  const [username, setUsername] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <Layout>
      <form onSubmit={navigateToResumePage}>
        <DefaultHeader 
          text='Find GitHub Resume'
          className='mb-4' 
        />
        <div className="flex items-center justify-center mb-4">
          <Input
            className='px-4 py-2 mr-2'
            value={username}
            placeholder='Enter GitHub username'
            onChange={handleInputChange}
          />
          <DefaultButton 
            text="Submit"
            type='submit'
            className='px-6 py-2'
            onClick={navigateToResumePage} 
          />
        </div>
      </form>
    </Layout>
  );
};

export default HomePage;
