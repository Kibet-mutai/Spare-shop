import { PopularProducts } from "./PopularProducts";
import ProductDeals from "./ProductDeals";
import { Offers } from "./Offers";
export const ProductsExport = () => {
  return (
    <>
      <ProductDeals />
      <Offers />
      <PopularProducts />
    </>
  );
};
