import React from 'react';

function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const btnActiveCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            onClick={() => {
              btnActiveCategory(i);
            }}
            className={activeIndex === i ? 'active' : ''}>
            {value}
          </li>
        ))}

      </ul>
    </div>
  );
}

export default Categories;
