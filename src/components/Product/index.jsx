import React from 'react';
import PropTypes from 'prop-types';

import { numberWithSpaces } from '@hooks/useCart';

import Skeleton from './Skeleton';

const Product = ({
  id,
  parentId,
  title,
  imageUrl,
  price,
  isLoaded = true,
  onAddToCart,
  onAddToFavorite,
  isItemAdded,
  isFavAdded,
  isProcessed,
}) => {
  const obj = { id, parentId, title, imageUrl, price };

  const handleAddToCart = () => {
    onAddToCart(obj);
  };

  const handleAddToFavorite = () => {
    onAddToFavorite(obj);
  };

  return isLoaded ? (
    <article className='products__item item-product'>
      <div className='item-product__btns'>
        {onAddToFavorite && (
          <button
            onClick={handleAddToFavorite}
            disabled={isProcessed}
            className={`item-product__btn ${
              isFavAdded(parentId)
                ? 'item-product__btn--like'
                : 'item-product__btn--unlike'
            }`}
            type='button'
          >
            {isFavAdded(parentId) ? (
              <svg
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect width='32' height='32' rx='7' fill='#' />
                <path d='M22.5849 12.2231C22.3615 11.7098 22.0394 11.2446 21.6365 10.8537C21.2333 10.4615 20.758 10.1499 20.2363 9.93576C19.6954 9.7128 19.1152 9.59868 18.5295 9.60002C17.7077 9.60002 16.906 9.82329 16.2092 10.245C16.0425 10.3459 15.8842 10.4567 15.7342 10.5775C15.5841 10.4567 15.4258 10.3459 15.2591 10.245C14.5624 9.82329 13.7606 9.60002 12.9388 9.60002C12.3471 9.60002 11.7737 9.71248 11.232 9.93576C10.7086 10.1508 10.2369 10.46 9.83181 10.8537C9.42843 11.2442 9.10619 11.7095 8.88337 12.2231C8.65168 12.7573 8.53333 13.3246 8.53333 13.9084C8.53333 14.4592 8.64668 15.0331 8.8717 15.6169C9.06006 16.1048 9.33009 16.6109 9.67513 17.122C10.2219 17.9307 10.9736 18.7742 11.9071 19.6293C13.4539 21.0467 14.9857 22.0258 15.0507 22.0655L15.4458 22.3169C15.6208 22.4277 15.8458 22.4277 16.0209 22.3169L16.4159 22.0655C16.4809 22.0242 18.0111 21.0467 19.5596 19.6293C20.493 18.7742 21.2448 17.9307 21.7915 17.122C22.1366 16.6109 22.4083 16.1048 22.5949 15.6169C22.82 15.0331 22.9333 14.4592 22.9333 13.9084C22.935 13.3246 22.8166 12.7573 22.5849 12.2231Z' />
              </svg>
            ) : (
              <svg
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='0.5'
                  y='0.5'
                  width='31'
                  height='31'
                  rx='6.5'
                  fill='white'
                />
                <path
                  d='M21.149 11.356L21.1484 11.3554C20.8095 11.0258 20.4097 10.7636 19.9705 10.5833L19.9696 10.5829C19.5139 10.3951 19.0249 10.2989 18.5311 10.3L18.5295 10.3C17.8346 10.3 17.1584 10.4887 16.5717 10.8438L16.5717 10.8439C16.4313 10.9288 16.2985 11.0218 16.173 11.1228L15.7341 11.476L15.2953 11.1228C15.1698 11.0218 15.037 10.9288 14.8966 10.8439L14.8966 10.8438C14.3099 10.4887 13.6337 10.3 12.9388 10.3C12.4373 10.3 11.9546 10.395 11.4987 10.5829L11.498 10.5832C11.057 10.7644 10.6606 11.0243 10.3197 11.3556L10.3187 11.3566L10.3187 11.3566C9.98111 11.6834 9.71174 12.0725 9.52557 12.5016L21.149 11.356ZM21.149 11.356C21.4865 11.6835 21.756 12.0728 21.9429 12.5021C22.1365 12.9486 22.2347 13.4203 22.2333 13.9064V13.9084C22.2333 14.3625 22.1399 14.8512 21.9418 15.3651L21.9412 15.3667M21.149 11.356L21.9412 15.3667M12.3799 19.1131L12.38 19.1132C13.1291 19.7996 13.8773 20.3822 14.4475 20.7988C14.732 21.0066 14.9709 21.1721 15.1415 21.2873C15.2268 21.345 15.2948 21.3899 15.3428 21.4212C15.3936 21.4543 15.417 21.469 15.4155 21.468L15.4266 21.4748L15.4266 21.4749L15.7333 21.6701L16.0401 21.4749L16.0402 21.4748C16.0914 21.4423 17.5822 20.4902 19.0868 19.1131H12.3799ZM12.3799 19.1131C11.4753 18.2845 10.7634 17.4818 10.255 16.7299M12.3799 19.1131L10.255 16.7299M21.9412 15.3667C21.7771 15.7954 21.5328 16.2542 21.2114 16.7303M21.9412 15.3667L21.2114 16.7303M10.255 16.7299C9.93467 16.2553 9.69124 15.796 9.52486 15.3651L10.255 16.7299ZM21.2114 16.7303C20.7031 17.482 19.9913 18.2845 19.087 19.1129L21.2114 16.7303ZM9.23333 13.9084C9.23333 13.4208 9.33184 12.9483 9.52554 12.5017L9.52472 15.3648C9.32672 14.851 9.23333 14.3624 9.23333 13.9084Z'
                  strokeWidth='1.4'
                />
              </svg>
            )}
          </button>
        )}
      </div>
      <a href='/' className='item-product__picture'>
        <img src={imageUrl} alt='Кроссовки' className='item-product__image' />
      </a>
      <div className='item-product__description'>
        <a href='/' className='item-product__link'>
          <h4 className='item-product__text'>{title}</h4>
        </a>
      </div>
      <div className='item-product__info-order'>
        <span className='item-product__title'>Цена:</span>
        <div className='item-product__details'>
          <span className='item-product__price'>
            {numberWithSpaces(price)} руб.
          </span>
          {onAddToCart && (
            <button
              onClick={handleAddToCart}
              disabled={isProcessed}
              className={`item-product__btn ${
                isItemAdded(parentId) ? '' : 'item-product__btn--add'
              }`}
              type='button'
            >
              {isItemAdded(parentId) ? (
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    width='32'
                    height='32'
                    rx='8'
                    fill='url(#paint0_linear)'
                  />
                  <g clipPath='url(#clip0)'>
                    <g filter='url(#filter0_d)'>
                      <path
                        d='M19.6567 11.6207C19.8394 11.4363 20.0876 11.3318 20.3471 11.3299C20.6066 11.3279 20.8563 11.4288 21.0416 11.6105C21.227 11.7921 21.3329 12.0398 21.3362 12.2993C21.3395 12.5588 21.24 12.809 21.0594 12.9954L15.8327 19.5294C15.7429 19.626 15.6346 19.7036 15.5141 19.7575C15.3937 19.8114 15.2636 19.8404 15.1317 19.8429C14.9998 19.8454 14.8687 19.8213 14.7463 19.772C14.6239 19.7227 14.5127 19.6492 14.4194 19.556L10.954 16.092C10.7699 15.9078 10.6665 15.6579 10.6665 15.3975C10.6666 15.137 10.7701 14.8872 10.9544 14.703C11.1386 14.5189 11.3885 14.4155 11.6489 14.4155C11.9094 14.4156 12.1592 14.5191 12.3434 14.7034L15.084 17.4447L19.6307 11.6514C19.639 11.6408 19.6479 11.6308 19.6574 11.6214L19.6567 11.6207Z'
                        fill='white'
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id='filter0_d'
                      x='10.6665'
                      y='11.3298'
                      width='10.6698'
                      height='10.5132'
                      filterUnits='userSpaceOnUse'
                      colorInterpolationFilters='sRGB'
                    >
                      <feFlood floodOpacity='0' result='BackgroundImageFix' />
                      <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                        result='hardAlpha'
                      />
                      <feOffset dy='2' />
                      <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
                      />
                      <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow'
                      />
                      <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect1_dropShadow'
                        result='shape'
                      />
                    </filter>
                    <linearGradient
                      id='paint0_linear'
                      x1='16'
                      y1='0'
                      x2='16'
                      y2='32'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#89F09C' />
                      <stop offset='1' stopColor='#3CC755' />
                    </linearGradient>
                    <clipPath id='clip0'>
                      <rect
                        width='10.6667'
                        height='10.6667'
                        fill='white'
                        transform='translate(10.6667 10.6667)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    x='0.5'
                    y='0.5'
                    width='31'
                    height='31'
                    rx='7.5'
                    fill='white'
                  />
                  <path d='M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z' />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>
    </article>
  ) : (
    <Skeleton />
  );
};

Product.propTypes = {
  id: PropTypes.number,
  parentId: PropTypes.number,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  isLoaded: PropTypes.bool.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onAddToFavorite: PropTypes.func.isRequired,
  isItemAdded: PropTypes.func.isRequired,
  isFavAdded: PropTypes.func.isRequired,
  isProcessed: PropTypes.bool.isRequired,
};

Product.defaultProps = {
  id: undefined,
  parentId: undefined,
  imageUrl: 'images/products/01.jpg',
  title: 'Мужские Кроссовки Nike Blazer Mid Suede',
  price: 12999,
};

export default Product;
