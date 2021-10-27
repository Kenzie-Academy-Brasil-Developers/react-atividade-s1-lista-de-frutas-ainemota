const FilterRedFruits = ({ fruits }) => {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruits.name}>{fruit.name}</li>
      ))}
    </ul>
  );
};

export default FilterRedFruits;
