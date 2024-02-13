import React, { useState } from 'react';
import axios from 'axios';

const GitHubInfo = () => {
  return (
    <h1>Gas</h1>
  );
};

export default GitHubInfo;
// const GitHubInfo = () => {
//   const [username, setUsername] = useState('');
//   const [userData, setUserData] = useState(null);
//   const [repos, setRepos] = useState([]);

//   const handleInputChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const userResponse = await axios.get(`https://api.github.com/users/${username}`);
//       const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);

//       console.log('User Information:');
//       console.log('Name:', userResponse.data.name);
//       console.log('Number of Public Repositories:', userResponse.data.public_repos);
//       console.log('Member Since:', new Date(userResponse.data.created_at).toLocaleDateString());

//       const languagesCount = {};
//       reposResponse.data.forEach(repo => {
//         const language = repo.language;
//         if (language) {
//           languagesCount[language] = (languagesCount[language] || 0) + 1;
//         }
//       });

//       console.log('\nUsed Programming Languages:');
//       const totalRepos = reposResponse.data.length;
//       for (const language in languagesCount) {
//         const percentage = ((languagesCount[language] / totalRepos) * 100).toFixed(2);
//         console.log(`${language} - ${percentage}%`);
//       }

//       console.log('\nRecently Updated Repositories:');
//       reposResponse.data.forEach(repo => {
//         console.log(repo.name, '- Last Updated:', new Date(repo.updated_at).toLocaleDateString());
//       });

//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter GitHub Username"
//           value={username}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Submit</button>
//       </form>

//       {userData && (
//         <div>
//           <h2>User Information</h2>
//           <p>Name: {userData.name}</p>
//           <p>Followers: {userData.followers}</p>
//           <p>Following: {userData.following}</p>
//         </div>
//       )}

//       {repos.length > 0 && (
//         <div>
//           <h2>Repositories</h2>
//           <ul>
//             {repos.map(repo => (
//               <li key={repo.id}>
//                 <a href={repo.html_url}>{repo.name}</a>
//                 <p>Language: {repo.language}</p>
//                 <p>Last Updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GitHubInfo;
