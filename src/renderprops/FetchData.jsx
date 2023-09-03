/* eslint-disable no-unused-vars */
import PropTypes from "prop-types"; // Import PropTypes
import React, { useEffect, useState } from "react";

const FetchData = ({ url, children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [url]);

  if (!data) {
    return null; 
  }

  return <>{children(data)}</>;
};

// Define propTypes for your component
FetchData.propTypes = {
  url: PropTypes.string.isRequired, // Ensure that 'url' is a required string prop
  children: PropTypes.func.isRequired, // Ensure that 'children' is a required function prop
};

export default FetchData;
