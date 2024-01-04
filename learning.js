/**
 * Generate a personalized greeting for the given name.
 * @param {string} name - The name for the greeting.
 * @returns {string} - The personalized greeting.
 */
function generateGreeting(name) {
    // Check if the input is a non-empty string
    if (typeof name === 'string' && name.trim() !== '') {
      return `Hello, ${name}! Welcome to our website.`;
    } else {
      // Handle invalid input
      console.error('Please provide a non-empty string as the name.');
      return undefined; // or throw an error based on your preference
    }
  }
  
  // Example usage with the name "Shital":
  const userName = 'Shital';
  const greeting = generateGreeting(userName);
  
  if (greeting !== undefined) {
    console.log(greeting);
  }

//   In this modified example:

// The generateGreeting function takes a name as input and generates a personalized greeting using string interpolation.
// It checks if the input is a non-empty string before generating the greeting.
// The example usage section demonstrates how to call the function with the name "Shital" and log the resulting greeting to the console.