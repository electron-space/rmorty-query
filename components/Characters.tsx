import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Chars from './Chars';

export default function Characters() {
	const fetchChars = async () => {
		const res = await fetch('https://rickandmortyapi.com/api/character');
		return res.json();
	};

	const { data, error, status } = useQuery(['character'], fetchChars);

	if (status === 'loading') return <div>Loading...</div>;

	if (status === 'error') return <div>Error</div>;

	return (
		<div className='characters'>
			{data.results.map((character) => (
				<Chars key={character.id} character={character} />
			))}
		</div>
	);
}
