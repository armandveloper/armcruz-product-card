import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../.';

const product = {
  id: '1',
  title: 'Coffe Mug',
};

const App = () => {
  return (
    <ProductCard
      product={product}
      initialValues={{
        count: 4,
        maxCount: 10,
      }}
    >
      {({ count, isMaxCountReached, increaseBy, reset }) => {
        return (
          <>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </>
        );
      }}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
