/**
 * Utility functions for handling images
 */

/**
 * Returns the provided image URL or a placeholder if the image fails to load
 * @param {string} imageUrl - Original image URL
 * @param {string} alt - Alternative text for the image
 * @param {number} width - Width for placeholder (default: 300)
 * @param {number} height - Height for placeholder (default: 400)
 * @returns {string} - Valid image URL or placeholder
 */
export const getImageWithFallback = (imageUrl, alt = 'Product Image', width = 300, height = 400) => {
  // If no image URL is provided, return a placeholder
  if (!imageUrl) {
    // Use a more reliable placeholder service
    return `https://picsum.photos/${width}/${height}?random=1`;
  }
  
  // Return the original URL (onError handler will be added when rendering)
  return imageUrl;
};

/**
 * Creates a placeholder image URL for products
 * @param {string} category - Product category (men, women, kids, etc)
 * @param {string} type - Product type (tshirt, jacket, etc)
 * @param {number} width - Width for placeholder
 * @param {number} height - Height for placeholder
 * @returns {string} - Placeholder image URL
 */
export const getPlaceholderByCategory = (category = '', type = '', width = 300, height = 400) => {
  // Generate a random number to prevent caching
  const random = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/${width}/${height}?random=${random}`;
};

/**
 * Creates an onError handler function for images
 * @param {Function} setImgSrc - State setter function to update image src
 * @param {string} category - Product category
 * @param {string} type - Product type
 * @param {number} width - Width for placeholder
 * @param {number} height - Height for placeholder
 * @returns {Function} - onError handler
 */
export const handleImageError = (setImgSrc, category = '', type = '', width = 300, height = 400) => {
  return () => {
    setImgSrc(getPlaceholderByCategory(category, type, width, height));
  };
};
