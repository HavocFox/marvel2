import React from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';

const CharacterDetails = () => {
    const { id } = useParams();
    return <CharacterDetail id={id} />;
};

export default CharacterDetails;
