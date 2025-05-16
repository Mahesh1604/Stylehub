import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Initial state
const initialState = {
  cartItems: localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems')) 
    : [],
  totalAmount: 0,
  totalItems: 0,
};

// Create context
const CartContext = createContext(initialState);

// Cart reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id && item.size === action.payload.size && item.color === action.payload.color
      );

      if (existingItemIndex !== -1) {
        // Item exists, update quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity: updatedCartItems[existingItemIndex].quantity + action.payload.quantity,
        };
        
        return updateCartState(state, updatedCartItems);
      } else {
        // Add new item
        const newCartItems = [...state.cartItems, action.payload];
        return updateCartState(state, newCartItems);
      }

    case 'REMOVE_FROM_CART':
      const filteredCartItems = state.cartItems.filter(
        (item) => !(item.id === action.payload.id && 
                  item.size === action.payload.size && 
                  item.color === action.payload.color)
      );
      return updateCartState(state, filteredCartItems);

    case 'UPDATE_QUANTITY':
      const updatedItems = state.cartItems.map(item => {
        if (item.id === action.payload.id && 
            item.size === action.payload.size && 
            item.color === action.payload.color) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
      return updateCartState(state, updatedItems);

    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
        totalAmount: 0,
        totalItems: 0,
      };

    default:
      return state;
  }
};

// Helper function to update cart state
const updateCartState = (state, cartItems) => {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Update localStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  return {
    ...state,
    cartItems,
    totalItems,
    totalAmount,
  };
};

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Calculate totals when cart items change
  useEffect(() => {
    const totalItems = state.cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const totalAmount = state.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    // Update state with new totals
    if (totalItems !== state.totalItems || totalAmount !== state.totalAmount) {
      dispatch({
        type: 'UPDATE_TOTALS',
        payload: { totalItems, totalAmount },
      });
    }
  }, [state.cartItems, state.totalItems, state.totalAmount]);

  // Cart actions
  const addToCart = (product, quantity = 1, size, color) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity,
        size,
        color,
      },
    });
  };

  const removeFromCart = (id, size, color) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id, size, color },
    });
  };

  const updateQuantity = (id, quantity, size, color) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity, size, color },
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
