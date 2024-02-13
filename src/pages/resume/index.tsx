import React from 'react';

export const ResumePage = () => {
  const userData = {
    firstName: 'John',
    lastName: 'Doe',
    publicRepositories: 20,
    memberSince: '2020-01-01',
    languages: [
      { name: 'HTML', percentage: 15 },
      { name: 'JavaScript', percentage: 45 },
      { name: 'CSS', percentage: 35 },
      { name: 'Bash', percentage: 5 },
    ],
    repositories: [
      { name: 'Project A', url: 'https://github.com/user/project-a' },
      { name: 'Project B', url: 'https://github.com/user/project-b' },
      { name: 'Project C', url: 'https://github.com/user/project-c' },
    ],
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">User Information</h1>

        <div className="mb-4">
          <p className="text-lg">Name: {userData.firstName} {userData.lastName}</p>
          <p className="text-lg">Public Repositories: {userData.publicRepositories}</p>
          <p className="text-lg">Member Since: {userData.memberSince}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Programming Languages</h2>
          <ul>
            {userData.languages.map((lang, index) => (
              <li key={index} className="text-lg">{lang.name}: {lang.percentage}%</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Recently Edited Repositories</h2>
          <ul>
            {userData.repositories.map((repo, index) => (
              <li key={index} className="text-lg">
                <a href={repo.url} className="text-blue-600 hover:underline">{repo.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
