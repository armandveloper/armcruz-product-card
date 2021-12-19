import * as React from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface Props {
	className?: string;
	img?: string;
	style?: React.CSSProperties;
}

export const ProductImage = ({ className = '', img = '', style }: Props) => {
	const { product } = React.useContext(ProductContext);

	return (
		<img
			className={`${styles.productImg} ${className}`}
			src={img || product.img || noImage}
			alt={product.title || ''}
			style={style}
		/>
	);
};
