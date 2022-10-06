import { useContext } from "react";
import { ProductContext } from "../../context/products.context";
import ProductCard from "../../product-card/product-card.component";

import './shop.styles.scss';

const Shop = () => {
    const { products } = useContext(ProductContext);

    return (
        <div className="products-container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
                ))}
        </div>
    )
}

export default Shop;