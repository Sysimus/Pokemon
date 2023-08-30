async function fetchDataFromApi() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon'; 
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      if (Array.isArray(data)) {
        return data; // Return the fetched data as an array
      } else {
        throw new Error('Fetched data is not an array');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      return []; // Return an empty array or handle the error as needed
    }
  }
  
  // Usage
  fetchDataFromApi()
    .then(dataArray => {
      console.log('Fetched data array:', dataArray);
      // Use the fetched data array here
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
    export default dataArray;