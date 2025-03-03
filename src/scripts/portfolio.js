async function fetchData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Example usage
fetchData('https://api.example.com/data')
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));