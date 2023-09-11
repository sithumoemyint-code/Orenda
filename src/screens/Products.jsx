import React from 'react'
import { ProductBanner, ProductContactService, ProductList } from '../components'

const Products = () => {
    return (
        <>
            <ProductBanner />
            <ProductList />
            <ProductContactService />
        </>
    )
}

export default Products