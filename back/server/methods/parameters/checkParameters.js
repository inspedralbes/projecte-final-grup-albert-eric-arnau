const checkParameters = (data, keys) => {
  let responseKeys = Object.keys(data);
  return keys.every((checkKeys) => responseKeys.includes(checkKeys));
};

export default checkParameters;
