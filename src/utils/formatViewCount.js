function formatViewCount(n) {
  n = parseInt(n);
  if (n >= 1000000) {
    return (n / 1000000).toFixed(1) + "M";
  } else if (n >= 1000) {
    return Math.floor(n / 1000) + "K";
  } else {
    return n.toString();
  }
}

export { formatViewCount };
