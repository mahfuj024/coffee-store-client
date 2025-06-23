import React, { useState } from 'react'
import { AuthContext } from './AuthContext'

function AuthProvider({ children }) {

    const [products, setProducts] = useState([])
    const handleAddToCart = (product) => {
        const newProduct = [...products, product]
        setProducts(newProduct)
    }

    const userInfo = {
        handleAddToCart,
        products,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider