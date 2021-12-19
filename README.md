# Product Card

Paquete de pruebas para desplegar en NPM.

### Armando Cruz

## Ejemplo

```jsx
import { ProductCard } from '@armcruz/product-card';

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
```
