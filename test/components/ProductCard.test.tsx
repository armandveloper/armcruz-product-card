import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src';
import { product } from '../data';

const { act } = renderer;

describe('ProductCard', () => {
  test('can render the component', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>{() => <h1>Product Card</h1>}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('can increase the counter', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>
        {({ count, increaseBy }) => {
          return (
            <>
              <h1>Product Card</h1>
              <span>{count}</span>
              <button onClick={() => increaseBy(1)}>+1</button>
            </>
          );
        }}
      </ProductCard>
    );

    let tree = wrapper.toJSON();

    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
