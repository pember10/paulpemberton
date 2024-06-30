import React, { useEffect, useState } from 'react';

interface IRepoProps {
    id: number;
    name: string;
    description: string;
    url: string;
};

const HighlightedReposSection: React.FC = () => {
  const [interestingRepos, setInterestingRepos] = useState<IRepoProps[]>([]);

//   useEffect(() => {
//     fetch('https://api.github.com/users/pember10/repos')
//       .then(response => response.json())
//       .then(data => setInterestingRepos(data));
//   }, []);

//https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}

    useEffect(() => {

        const urls = [
            'https://api.github.com/repos/MinecraftForge/MinecraftForge',
            'https://api.github.com/repos/facebook/react-native',
            'https://api.github.com/repos/graphite-project/graphite-web',
        ];

        Promise.all(urls.map(url => 
            fetch(url).then(response => response.json())
        )).then(dataArray => {
            const repos = dataArray.map((data, index) => ({
                id: data.id,
                name: data.name,
                description: data.description,
                url: urls[index],
            }));
            setInterestingRepos(repos);
        });
    }, []);

  return (
    <section>
      {interestingRepos.map((repo: any) => (
        <article key={repo.id}>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
        </article>
        ))}
    </section>
  );
};

export default HighlightedReposSection;