import React, { ChangeEvent, HTMLAttributes } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import SearchBar from '@client/components/SearchBar/SearchBar';

import styles from './FilterBar.module.scss';

interface IFilterBar extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  onChange: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
}

const FilterBar = ({ onChange, className, ...props }: IFilterBar) => {
  const router = useRouter();

  const handleSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e, e.target.value);
  };

  const handleButtonClick = (): void => {
    router.push('/create-post');
  };

  return (
    <div className={clsx(styles['filter-bar'], className)} {...props}>
      <div className={styles['filter-bar__filters']}>
        <div className={styles.search}>
          <span className={styles.search__text}>Search:</span>
          <SearchBar className={styles['search__search-bar']} onChange={handleSelectChange} />
        </div>
        {/* <div className={styles.filterBar__date"> */}
        {/*  <div className={styles.filterBar__date-picker date-picker"> */}
        {/*    <span className={styles.date-picker__unit">Week</span> */}
        {/*    <span className={styles.date-picker__unit">Month</span> */}
        {/*    <span className={styles.date-picker__unit">Year</span> */}
        {/*  </div> */}
        {/* </div> */}
      </div>
      <div className={clsx(styles['filter-bar__add-post'], styles['add-post'])}>
        <button
          type="button"
          className={clsx(styles['add-post__button'], styles['action-button'])}
          onClick={handleButtonClick}
        >
          Create post
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
