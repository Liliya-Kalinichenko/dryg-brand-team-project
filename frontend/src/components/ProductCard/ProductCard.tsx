import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ProductCard.scss';

import { MEDIA_URL } from '../../contants/endpoints';
import { AddToFavButton } from '../AddToFavButton';
import { Product } from '../../types/Product';
import { AddedModal } from '../AddedModal';
import { RemovedModal } from '../RemovedModal';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = React.memo(({ product }) => {
  const [isAddedModalOpen, setIsAddedModalOpen] = useState(false);
  const [isRemovedModalOpen, setIsRemovedModalOpen] = useState(false);

  const { name, price, images, slug } = product;

  return (
    <div className="ProductCard">
      <Link to={`/shop/products/${slug}`} className="ProductCard__main">
        <div className="ProductCard__photo">
          <LazyLoadImage
            src={MEDIA_URL + images[0]}
            alt={name}
            className="ProductCard__photo-front"
            wrapperClassName="ProductCard__photo-front"
            effect="blur"
            placeholderSrc="img/placeholder.png"
          />
          <LazyLoadImage
            src={MEDIA_URL + images[1]}
            alt={name}
            className="ProductCard__photo-back"
            wrapperClassName="ProductCard__photo-back"
          />
        </div>

        <div className="ProductCard__content">
          <div className="ProductCard__container">
            <h4 className="ProductCard__title">{name}</h4>

            <p className="ProductCard__price">
              {`${Number.parseInt(price)} UAH`}
            </p>
          </div>

          <AddToFavButton
            product={product}
            setIsAddedModalOpen={setIsAddedModalOpen}
            setIsRemovedModalOpen={setIsRemovedModalOpen}
          />
        </div>
      </Link>

      {isAddedModalOpen && (
        <AddedModal setIsAddedModalOpen={setIsAddedModalOpen} />
      )}

      {isRemovedModalOpen && (
        <RemovedModal setIsRemovedModalOpen={setIsRemovedModalOpen} />
      )}
    </div>
  );
});
