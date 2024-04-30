import React, { ChangeEvent, HTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import SearchBar from '@client/components/SearchBar/SearchBar';
import './FilterBar.scss';

interface IFilterBar extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  onChange: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
}

const FilterBar = ({ onChange, className, ...props }: IFilterBar) => {
  const navigate = useNavigate();
  const handleSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e, e.target.value);
  };

  const handleButtonClick = (): void => {
    navigate('/create-post');
  };

  return (
    <div className={clsx('filter-bar', className)} {...props}>
      <div className="filter-bar__filters">
        <div className="filter-bar__search search">
          <span className="search__text">Search:</span>
          <SearchBar className="search__search-bar" onChange={handleSelectChange} />
        </div>
        {/* <div className="filter-bar__date"> */}
        {/*  <div className="filter-bar__date-picker date-picker"> */}
        {/*    <span className="date-picker__unit">Week</span> */}
        {/*    <span className="date-picker__unit">Month</span> */}
        {/*    <span className="date-picker__unit">Year</span> */}
        {/*  </div> */}
        {/* </div> */}
      </div>
      <div className="filter-bar__add-post add-post">
        <button
          type="button"
          className="add-post__button action-button"
          onClick={handleButtonClick}
        >
          Create post
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
