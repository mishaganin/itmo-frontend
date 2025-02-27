import React, { ChangeEvent, HTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './SearchBar.module.scss';

interface ISearchBar extends HTMLAttributes<HTMLInputElement> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onChange, className, ...props }: ISearchBar) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <input
      className={clsx(styles['search-bar'], className)}
      type="text"
      placeholder="Enter the keywords.."
      onChange={handleChange}
      {...props}
    />
  );
};

export default SearchBar;
