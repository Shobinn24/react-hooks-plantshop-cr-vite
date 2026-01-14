import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';
import Search from './Search';

function PlantPage({ plants, onAddPlant, onToggleSoldOut, searchTerm, onSearchChange }) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <PlantList plants={plants} onToggleSoldOut={onToggleSoldOut} />
    </main>
  );
}

export default PlantPage;