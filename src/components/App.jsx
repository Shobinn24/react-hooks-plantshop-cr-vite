import { useState, useEffect } from 'react';
import Header from './Header';
import PlantPage from './PlantPage';

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch plants on component mount
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(response => response.json())
      .then(data => setPlants(data))
      .catch(error => console.error('Error fetching plants:', error));
  }, []);

  // Add new plant
  const handleAddPlant = (newPlant) => {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlant),
    })
      .then(response => response.json())
      .then(data => {
        setPlants([...plants, data]);
      })
      .catch(error => console.error('Error adding plant:', error));
  };

  // Mark plant as sold out
  const handleToggleSoldOut = (id) => {
    setPlants(plants.map(plant => 
      plant.id === id 
        ? { ...plant, soldOut: !plant.soldOut }
        : plant
    ));
  };

  // Filter plants based on search term
  const displayedPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={displayedPlants}
        onAddPlant={handleAddPlant}
        onToggleSoldOut={handleToggleSoldOut}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
    </div>
  );
}

export default App;
