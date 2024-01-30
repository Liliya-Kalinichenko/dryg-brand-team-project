import { useEffect, useMemo, useState } from 'react';
import { ProductList } from '../../components/ProductList';
import './ShopPage.scss';
import { Product } from '../../types/Product';
import { ShopTopBar } from '../../components/ShopTopBar';
import { useLocation, useSearchParams } from 'react-router-dom';
import { applyFilterAndSort } from '../../helpers/applyFilterAndSort';
import { SearchParams } from '../../types/Categories';
import { NoSearchResults } from '../../components/NoSearchResults';
import { Pagination } from '../../components/Pagination';
import { getProducts } from '../../api/shop';
import { ITEMS_PER_PAGE, SORT_BY } from '../../contants/others';
import { Loader } from '../../components/Loader';


export const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {pathname, search } = useLocation();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(search)

  const filters = searchParams.toString().split('&')
    .filter(filter => !filter.includes('category') && !filter.includes('page'));

  useEffect(() => {
    setIsLoading(true);
    getProducts(search)
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => {
        console.log(e)
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [search])

  const handleRemoveFilter = (filter: string) => {
    const newSearchParams = filters.filter(f => f !== filter).join('&');
    setSearchParams(new URLSearchParams(newSearchParams));
  }

  // const filteredProducts = useMemo(() => {
  //   return applyFilterAndSort(products, searchParams);
  // }, [products, searchParams]);

  const totalProducts = products.length;
  const currentPage = +(searchParams.get(SearchParams.Page) || '1');
  const pagesAmount = Math.ceil(totalProducts / ITEMS_PER_PAGE);

  const firstItem = (currentPage * +ITEMS_PER_PAGE) - ITEMS_PER_PAGE;
  const lastItem = (ITEMS_PER_PAGE * currentPage) < totalProducts
    ? ITEMS_PER_PAGE * currentPage
    : totalProducts;

  const visibleProducts = useMemo(() => {
    return products.slice(firstItem, lastItem);
  }, [products, firstItem, lastItem]);

  return (
    <div className="ShopPage">
      <ShopTopBar />

      {filters[0] !== '' && !!filters.length && (
        <div className="ShopPage__filters">
          {filters.map(filter => {
            const filterName = filter.split('=')[1];
            const filterCategory = filter.split('=')[0];

            return (
              <button
                className="ShopPage__filters-button"
                key={filter} 
                type="button" 
                onClick={() => handleRemoveFilter(filter)}
              >
                <span className="ShopPage__filters-name">
                  {filterCategory === SearchParams.Sort ? SORT_BY[filterName] :filterName}
                </span>
                <div className="icon icon--close"></div>
              </button>
            )
          })}
        </div>
      )}

      {isLoading ? (<Loader />) : (
        <>
          {!totalProducts && <NoSearchResults/>}

          {!!totalProducts && (
            <ProductList products={visibleProducts} />
          )}

          {!!totalProducts && pagesAmount !== 1 && (
            <Pagination
              pagesAmount={pagesAmount}
              currentPage={currentPage}
            />
          )}
        </>
      )}      
    </div>
  );
};
