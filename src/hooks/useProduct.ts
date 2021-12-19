import * as React from 'react';
import {
	IInitialValues,
	OnChangeArgs,
	Product,
	ProductCounter,
} from '../interfaces';

interface UseProductArgs {
	product: Product;
	onChange?: (args: OnChangeArgs) => void;
	value?: number;
	initialValues?: IInitialValues;
}

export const useProduct = ({
	product,
	onChange,
	value = 0,
	initialValues,
}: UseProductArgs): ProductCounter => {
	const [counter, setCounter] = React.useState<number>(
		initialValues?.count || value
	);

	const isMounted = React.useRef(false);

	const isControlled = React.useRef(!!onChange);

	const isMaxCountReached = counter === initialValues?.maxCount;

	const reset = () => setCounter(initialValues?.count || value);

	const increaseBy = (value: number) => {
		if (isControlled.current) {
			return onChange!({ product, count: value });
		}
		const newValue =
			initialValues?.maxCount && value === 1
				? Math.min(counter + value, initialValues.maxCount)
				: Math.max(counter + value, 0);
		setCounter(newValue);
		onChange && onChange({ product, count: newValue });
	};

	React.useEffect(() => {
		if (!isMounted.current) return;
		setCounter(value);
	}, [value]);

	React.useEffect(() => {
		isMounted.current = true;
	}, []);

	return {
		counter,
		isMaxCountReached,
		maxCount: initialValues?.maxCount,
		increaseBy,
		reset,
	};
};
