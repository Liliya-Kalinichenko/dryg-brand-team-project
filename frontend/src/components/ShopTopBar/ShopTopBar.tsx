import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import cn from 'classnames';
import './ShopTopBar.scss';

import { CATEGORIES_FILTER } from '../../contants/others';
import { getSearchWith } from '../../helpers/searchHelper';
import { SearchParams } from '../../types/Categories';

type ContextType = {
  setIsFilterOpen: (value: boolean) => void;
};

export const ShopTopBar: React.FC = React.memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentOption = searchParams.get(SearchParams.Category) || '';
  const { setIsFilterOpen } = useOutletContext<ContextType>();

  const handleSelectOption = (newParam: any) => {
    setSearchParams(getSearchWith(newParam, searchParams));
  };

  return (
    <div className="ShopTopBar">
      <div className="ShopTopBar__categories">
        <button
          type="button"
          className={cn('ShopTopBar__categories-item', {
            'is-active': currentOption === ''
          })}
          onClick={() =>
            handleSelectOption({
              [SearchParams.Category]: null,
              [SearchParams.Page]: null,
              [SearchParams.Search]: null
            })
          }
        >
          View All
        </button>

        {Object.entries(CATEGORIES_FILTER).map(([key, value]) => (
          <button
            key={key}
            type="button"
            className={cn('ShopTopBar__categories-item', {
              'is-active': currentOption === key
            })}
            onClick={() =>
              handleSelectOption({
                [SearchParams.Category]: key,
                [SearchParams.Page]: null,
                [SearchParams.Search]: null
              })
            }
          >
            {value}
          </button>
        ))}
      </div>

      <button
        className="ShopTopBar__filter"
        onClick={() => setIsFilterOpen(true)}
      >
        <div className="icon icon--filter"></div>
        <span className="ShopTopBar__filter-title">FILTER</span>
      </button>
    </div>
  );
});
