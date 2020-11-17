export function CheckmarkFilter() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
}
