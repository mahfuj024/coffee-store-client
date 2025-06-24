import React, { useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.init"

function AuthProvider({ children }) {

    const [products, setProducts] = useState([])

    const handleAddToCart = (product) => {
        const newProduct = [...products, product]
        setProducts(newProduct)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        handleAddToCart,
        products,
        createUser,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider