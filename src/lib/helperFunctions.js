export function getInstaFromUrl(url) {
  return url.split('').splice(26).slice(0, -1).join('');
}

export function formatDate(integer) {
  const str = integer.toString();
  if (str.length === 5) {
    return str.slice(0, 1) + '/' + str.slice(1, 3) + '/' + str.slice(3, 5);
  } else if (str.length === 6) {
    return str.slice(0, 2) + '/' + str.slice(2, 4) + '/' + str.slice(4, 6);
  }
}

export function makeDirectionsUrl(address) {
  return `https://www.google.com/maps/dir//${address}`;
}
