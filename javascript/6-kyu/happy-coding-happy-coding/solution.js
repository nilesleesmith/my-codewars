function happyCoding(nickname){
  // check for the hapy and coding order.
  const s = nickname.toLowerCase();
  const hasHappy = s.split(' ').includes('happy');
  const hasCoding = s.split(' ').includes('coding');
  if (hasHappy && hasCoding)
    return s.indexOf('happy') < s.indexOf('coding') ? 1 : 2;
  if (hasCoding) return 3;
  if (hasHappy) return 4;
  return 5;
}
