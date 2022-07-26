import React from 'react';
import { useQuery } from '@tanstack/react-query';

type T {
	name: string;
  }

export default function Characters() {
	const fetchChars = async () => {
		const res = await fetch('https://rickandmortyapi.com/api/character');
		return res.json();
	};

	const { data, error, status } = useQuery('character', fetchChars);

	if (status === 'loading') return <div>Loading...</div>;

	if (status === 'error') return <div>Error</div>;

	return (
		<div>
			{data.results.map((character) => (
				<div>{character.name}</div>
			))}
		</div>
	);
}
