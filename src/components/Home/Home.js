import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Home(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  return (
    <header className="flex-row px-1">
      <h1 class=" is-black">
        <a data-testid="link" href="/Home">
         Mohammed Elzanaty
        </a>
      </h1>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className="mx-2">
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${currentCategory.name === category.name && !contactSelected && `navActive`
                }`}
              key={category.name}
            >
              <span onClick={() => {
                setCurrentCategory(category);
                setContactSelected(false);
              }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Home;
