import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import NotFound from './components/NotFound';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <NavLink 
                        to="/" 
                        style={({ isActive }) => ({
                            color: isActive ? 'blue' : 'black'
                        })}
                    >
                        Home
                    </NavLink>
                    {' | '}
                    <NavLink 
                        to="/browse" 
                        style={({ isActive }) => ({
                            color: isActive ? 'blue' : 'black'
                        })}
                    >
                        Browse Characters
                    </NavLink>
                    {' | '}
                    <NavLink 
                        to="/comics" 
                        style={({ isActive }) => ({
                            color: isActive ? 'blue' : 'black'
                        })}
                    >
                        Comics
                    </NavLink>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/browse" element={<BrowseCharacters />} />
                    <Route path="/character/:id" element={<CharacterDetails />} />
                    <Route path="/comics" element={<Comics />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
