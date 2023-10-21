import React from 'react';
import { SearchContext } from '../../App';

import img from '../../assets/img/clear.png';
import styles from './Search.module.scss';

function Search() {

  const {searchValue, setSearchValue} = React.useContext(SearchContext)

  return (
    <div className={styles.block}>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы ..."
      />
      {searchValue && <img onClick={()=> setSearchValue('') } className={styles.clear} src={img} alt="" />}
    </div>
  );
}

export default Search;
