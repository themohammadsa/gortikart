import './product-list.css';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useProductContext } from '../../context/ProductContext';
import { useHomeContext } from '../../context/HomeContext';
import { ProductCard } from '../../components/productCard/ProductCard';
import { Categorise } from '../../components/categorise/Categorise';
import { Footer } from '../../components/footer/Footer';
import { Toast } from '../../components/toast/Toast';
import { Loader } from '../../components/loader/Loader';

export const ProductList = () => {
  const { dispatch, filteredData, loader } = useHomeContext();
  const { payloadParse } = useProductContext();
  const { searchResult, category } = useParams();

  const URL = new URLSearchParams(useLocation().search);
  const URLSearchValue = URL.get('results');

  useEffect(() => {
    {
      searchResult === 'search'
        ? dispatch({
            type: 'SEARCH',
            payload: URLSearchValue,
          })
        : dispatch({
            type: 'SEARCH',
            payload: '',
          });
    }
    {
      category &&
        dispatch({
          type: 'FILTER_BY',
          key: 'CATEGORIES',
          action: {
            payload: payloadParse(category),
          },
        });
    }
  }, [URLSearchValue, category]);

  return (
    <div>
      <div className="flex-column align-center bottom-spacing">
        <div className="product-page-grid">
          <div className="grid-left-categorise">
            <Categorise />{' '}
          </div>
          {!loader ? (
            <div className="loader">
              <Loader />
            </div>
          ) : (
            <div className="flex-column grid-right-categorise">
              <div className="product-list-grid">
                {filteredData.map((product, index) => {
                  return (
                    <div key={index}>
                      <ProductCard product={product} />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>{' '}
      <Toast />
      <Footer />
    </div>
  );
};
