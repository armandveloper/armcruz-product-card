import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductTitle } from '../../src';
import { product } from '../data';

describe('ProductTitle', () => {
  test('can render the component with the prop title', () => {
    const wrapper = renderer.create(<ProductTitle title="Product 1" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('can render the component with the title from provider', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>{() => <ProductCard.Title />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
