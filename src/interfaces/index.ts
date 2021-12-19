import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductButtonsProps } from '../components/ProductButtons';

export interface ProductContextProps extends ProductCounter {
	product: Product;
	isMaxCountReached: boolean;
}

export interface Product {
	id: string;
	img?: string;
	title: string;
}

export interface ProductCounter {
	counter: number;
	isMaxCountReached: boolean;
	maxCount?: number;
	increaseBy: (value: number) => void;
	reset: () => void;
}

export interface ProductCardHOCProps {
	(props: ProductCardProps): JSX.Element;
	Title: (props: ProductTitleProps) => JSX.Element;
	Image: (props: ProductImageProps) => JSX.Element;
	Buttons: (props: ProductButtonsProps) => JSX.Element;
}

export interface OnChangeArgs {
	product: Product;
	count: number;
}

export interface CartState {
	[key: string]: ProductInCart;
}

export interface ProductInCart extends Product {
	count: number;
}

export interface IInitialValues {
	count?: number;
	maxCount?: number;
}

export interface ProductCardHandlers {
	count: number;
	isMaxCountReached: boolean;
	maxCount?: number;
	product: Product;

	increaseBy: (value: number) => void;
	reset: () => void;
}
