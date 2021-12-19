# Product Card

Paquete de pruebas para desplegar en NPM.

### Armando Cruz

## Ejemplo

```jsx
import { ProductCard } from 'armcruz-product-card';

<ProductCard
  product={product}
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
