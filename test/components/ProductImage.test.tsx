import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src';
import { product2 } from '../data';

describe('ProductImage', () => {
  test('can render the component with the prop img', () => {
    const wrapper = renderer.create(<ProductImage img="/coffee-mug2.png" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('can render the component with the img from provider', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {() => <ProductCard.Image />}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
