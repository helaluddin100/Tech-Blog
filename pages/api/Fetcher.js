const Fetcher = async (...args) => {
  const res = await fetch(...args);
  const data = await res.json();
  return data;
};
export default Fetcher;
