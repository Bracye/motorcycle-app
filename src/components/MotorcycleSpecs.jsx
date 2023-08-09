import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MotorcycleSpecs() {
  const [specsData, setSpecsData] = useState(null);
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const fetchMotorcycleSpecs = async () => {
      const options = {
        method: 'GET',
        url: 'https://motorcycle-specs-database.p.rapidapi.com/article/2012/BMW/F%20800%20GS%20Trophy',
        headers: {
          'X-RapidAPI-Key': '48ecb2c10amsh699aa641a9a45b3p13bc01jsn1ae890ade1ad',
          'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setSpecsData(response.data);
        
        // Fetch media content (image) using another API endpoint
        const mediaOptions = {
          method: 'GET',
          url: `https://motorcycle-specs-database.p.rapidapi.com/article/${response.data.articleID}/image/media`,
          headers: {
            'X-RapidAPI-Key': '48ecb2c10amsh699aa641a9a45b3p13bc01jsn1ae890ade1ad',
            'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com'
          }
        };
        const mediaResponse = await axios.request(mediaOptions);
        setImageURL(mediaResponse.data); // Assuming mediaResponse.data contains the image URL
      } catch (error) {
        console.error(error);
      }
    };

    fetchMotorcycleSpecs();
  }, []);

  return (
    <div>
      <h2>Motorcycle Specifications</h2>
      {specsData ? (
        <div>
          <h3>{specsData.makeName} - {specsData.modelName}</h3>
          <p>Year: {specsData.yearName}</p>
          <p>Category: {specsData.categoryName}</p>
          {imageURL && <img src={imageURL} alt="Motorcycle" />}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MotorcycleSpecs;
