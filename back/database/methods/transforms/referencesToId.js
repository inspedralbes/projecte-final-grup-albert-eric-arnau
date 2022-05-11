const referencesToId = (arrayWithReferences) => {
  arrayWithReferences.forEach((element, index, array) => {
    array[index] = element.id;
  });
  return arrayWithReferences;
};

export default referencesToId;
