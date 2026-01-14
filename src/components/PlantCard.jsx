function PlantCard({ plant, onToggleSoldOut }) {
  const { id, name, image, price, soldOut } = plant;

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button
        className={soldOut ? '' : 'primary'}
        onClick={() => onToggleSoldOut(id)}
      >
        {soldOut ? 'Out of Stock' : 'In Stock'}
      </button>
    </li>
  );
}

export default PlantCard;