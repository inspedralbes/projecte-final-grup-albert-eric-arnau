const referencesToId = (refs) =>
  refs.reduce((prev, curr) => [...prev, curr.id], []);
export default referencesToId;
