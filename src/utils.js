const getUniques = (first, second) =>
  new Set([...Object.keys(first || {}), ...Object.keys(second || {})]);

export { getUniques };
