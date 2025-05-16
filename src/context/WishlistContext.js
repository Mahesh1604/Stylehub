import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Create context
const WishlistContext = createContext();

// Initial state
const initialState = {
  wishlistItems: localStorage.getItem('wishlist')
    ? JSON.parse(localStorage.getItem('wishlist'))
    : [],
};

// Actions
const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
const CLEAR_WISHLIST = 'CLEAR_WISHLIST';

// Reducer
const wishlistReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      // Check if item already exists in wishlist
      if (state.wishlistItems.find(item => item.id === action.payload.id)) {
        return state; // Item already exists, no change
      }
      // Add new item to wishlist
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload],
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          item => item.id !== action.payload
        ),
      };

    case CLEAR_WISHLIST:
      return {
        ...state,
        wishlistItems: [],
      };

    default:
      return state;
  }
};

// Provider component
export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(state.wishlistItems));
  }, [state.wishlistItems]);

  // Add item to wishlist
  const addToWishlist = (product) => {
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: product,
    });
  };

  // Remove item from wishlist
  const removeFromWishlist = (productId) => {
    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: productId,
    });
  };

  // Clear wishlist
  const clearWishlist = () => {
    dispatch({ type: CLEAR_WISHLIST });
  };

  // Check if an item is in the wishlist
  const isInWishlist = (productId) => {
    return state.wishlistItems.some(item => item.id === productId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems: state.wishlistItems,
        wishlistCount: state.wishlistItems.length,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the wishlist context
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
