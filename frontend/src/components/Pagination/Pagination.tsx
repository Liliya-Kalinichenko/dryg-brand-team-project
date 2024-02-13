import { Link, useSearchParams } from 'react-router-dom';
import cn from 'classnames';
import './Pagination.scss';

import { SearchParams } from '../../types/Categories';
import { getNumbers } from '../../helpers/helpers';
import { getSearchWith } from '../../helpers/searchHelper';

type Props = {
  currentPage: number;
  pagesAmount: number;
};

export const Pagination: React.FC<Props> = ({ currentPage, pagesAmount }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pages = getNumbers(1, pagesAmount);

  const handleSlideLeft = () => {
    setSearchParams(
      getSearchWith(
        {
          [SearchParams.Page]: `${currentPage - 1}`
        },
        searchParams
      )
    );
  };

  const handleSlideRight = () => {
    setSearchParams(
      getSearchWith(
        {
          [SearchParams.Page]: `${currentPage + 1}`
        },
        searchParams
      )
    );
  };

  return (
    <div className="Pagination" data-cy="pagination">
      <button
        type="button"
        onClick={handleSlideLeft}
        disabled={currentPage === 1}
      >
        <div className="icon icon--arrow-left"></div>
      </button>

      <div className="Pagination__pages">
        {pages.map((page) => (
          <Link
            to={{
              search: getSearchWith(
                {
                  [SearchParams.Page]: page.toString()
                },
                searchParams
              )
            }}
            key={page}
            className={cn('Pagination__pages-link', {
              active: currentPage === page
            })}
          >
            {page}
          </Link>
        ))}
      </div>

      <button
        type="button"
        onClick={handleSlideRight}
        disabled={currentPage === pages.length}
      >
        <div className="icon icon--arrow-right"></div>
      </button>
    </div>
  );
};
