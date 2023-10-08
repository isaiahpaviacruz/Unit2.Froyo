function countFroyoFlavors() {
    // Prompt the user to enter a list of comma-separated froyo flavors
    const input = prompt('Enter a list of comma-separated froyo flavors:');
    
    if (!input) {
      console.log('No input provided. Exiting...');
      return;
    }
  
    // Split the input into an array of flavors
    const flavors = input.split(',');
  
    // Create an object to store the counts of each flavor
    const flavorCounts = {};
  
    // Count the occurrences of each flavor
    flavors.forEach(flavor => {
      const trimmedFlavor = flavor.trim(); // Remove leading/trailing whitespace
      flavorCounts[trimmedFlavor] = (flavorCounts[trimmedFlavor] || 0) + 1;
    });
  
    // Display the flavor counts in a table in the console
    console.table(flavorCounts);
  }
  
  // Call the function to initiate the process
  countFroyoFlavors();
//   Here's how the function works:
  
//   It prompts the user to enter a list of comma-separated froyo flavors using the prompt function.
//   It checks if the user provided input. If not, it logs a message and exits.
//   It splits the input into an array of flavors using the split method.
//   It creates an object (flavorCounts) to store the counts of each flavor.
//   It counts the occurrences of each flavor in the array and updates the counts in the flavorCounts object.
//   Finally, it displays the flavor counts in a table format in the browser console using console.table.
//   When the user enters the froyo flavors (e.g., "vanilla,vanilla,vanilla,strawberry,coffee,coffee"), calling countFroyoFlavors() will process the input and display the counts in the browser console as a table, just as you described.
  
  
  
  
  
  