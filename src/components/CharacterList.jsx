import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    const fetchCharacters = async () => {
        const ts = '1';
        const publicKey = 'fb3467c7d977fddda6cd71cb0518dd66';
        const hash = '7320995791023f22a5e63849175a6567';

        try {
            const response = await fetch(
                `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
            );
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            const charData = data.data.results.map(character => ({
                id: character.id,
                name: character.name,
                image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
            }));
            console.log('Fetched Characters:', charData);
            setCharacters(charData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    return (
        <div>
            <h1>Marvel Characters</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                {characters.map(character => (
                    <Link key={character.id} to={`/character/${character.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div style={{ cursor: 'pointer', textAlign: 'center' }}>
                            <h2>{character.name}</h2>
                            <img src={character.image} alt={character.name} style={{ width: '100%' }} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CharacterList;
