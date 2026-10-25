function greet (name, owner) {
  // Check if the name is the owner.
  if (name == owner) {
    return 'Hello boss';
  }
  else {
    return 'Hello guest';
  }
}