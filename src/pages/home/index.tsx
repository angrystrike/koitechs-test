import User from '@models/User';
import Repository from '@models/Repository';
import React, { ChangeEvent, useState } from 'react';
import DefaultButton from '@components/ui/buttons/default';
import Input from '@components/ui/forms/Input';
import { useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Find GitHub Resume</h1>
        <div className="flex items-center justify-center mb-4">
          <Input
            className='px-4 py-2 mr-2'
            value={username}
            placeholder='Enter GitHub username'
            onChange={handleInputChange}
          />
          <DefaultButton 
            text="Submit"
            className='px-6 py-2'
            onClick={navigateToResumePage} 
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
