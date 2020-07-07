
const ingredientsWithQuantity = (namesArray, arrayOfQuantity) => {
  const quantityArray = [...arrayOfQuantity];
  return namesArray.reduce((acc, currentElement, index) => {
    if (currentElement !== '' && currentElement !== null) {
      quantityArray[index] = quantityArray[index] || 'A seu gosto';
      acc.push([currentElement, quantityArray[index]]);
    }
    return acc;
  }, []);
};


export default ingredientsWithQuantity;
