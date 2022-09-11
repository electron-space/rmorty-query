import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Chars from './Chars';

export default function Characters() {
	const [page, setPage] = useState<number>(1);

	const fetchChars = async ({ queryKey }) => {
		const res = await fetch(
			`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
		);
		return res.json();
	};

	const { data, error, status, isPreviousData } = useQuery(
		['character', page],
		fetchChars,
		{
			keepPreviousData: true,
		}
	);

	if (status === 'loading') return <div>Loading...</div>;

	if (status === 'error') return <div>Error</div>;

	return (
		<div className='characters'>
			{data.results.map((character) => (
				<Chars key={character.id} character={character} />
			))}

			<div className=''>
				<button
					disabled={page === 1}
					onClick={() => setPage((prev) => prev - 1)}>
					Prev
				</button>
				<button
					disabled={isPreviousData && !data.info.next}
					onClick={() => setPage((prev) => prev + 1)}>
					Next
				</button>
			</div>
		</div>
	);
}
