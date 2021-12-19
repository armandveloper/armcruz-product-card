import * as React from 'react';
import {
	ProductContextProps,
	Product,
	OnChangeArgs,
	IInitialValues,
	ProductCardHandlers,
} from '../interfaces';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

export interface Props {
	// children?: React.ReactNode;
	children: (args: ProductCardHandlers) => JSX.Element;
	className?: string;
	product: Product;
	style?: React.CSSProperties;
	onChange?: (args: OnChangeArgs) => void;
	value?: number;
	initialValues?: IInitialValues;
}

export const ProductContext = React.createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({
	children,
	product,
	className = '',
	style,
	onChange,
	value,
	initialValues,
}: Props) => {
	const { counter, isMaxCountReached, maxCount, increaseBy, reset } =
		useProduct({
			product,
			onChange,
			value,
			initialValues,
		});

	return (
		<Provider
			value={{
				counter,
				increaseBy,
				product,
				isMaxCountReached,
				reset,
			}}
		>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children({
					count: counter,
					isMaxCountReached,
					maxCount,
					product,
					increaseBy,
					reset,
				})}
			</div>
		</Provider>
	);
};
