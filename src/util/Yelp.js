const apiKey = '';
const url = 'https://api.yelp.com/v3/businesses/search';
// This object will store the functionality needed to interact with the Yelp API.
const Yelp = {
  search(term, location, sortBy) {
    // Use interpolation
    // prepend this URL with the CORS Anywhere URL
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      })
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          //console.log(jsonResponse.businesses);
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.address1,
              city: business.city,
              state: business.state,
              zipCode: business.zip_code,
              category: business.categories.title,
              rating: business.rating,
              reviewCount: business.review_count
            };
          });
        }
      });
  },
};

export default Yelp;