import React from 'react';
import { Character } from '../types/types';

export default function Chars({ character }: { character: Character }) {
	return (
		<div className='card'>
			<img src={character.image} alt='character name' />
			<div className='text-container'>
				<h3>{character.name}</h3>
				<p className='status'>
					{character.status} - {character.species}
				</p>
				<p className='title'>Prev Planet: {character.location.name}</p>
			</div>
		</div>
	);
}
