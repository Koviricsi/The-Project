function quantityChange(x) {
  if (x.value > 100) x.value = 100;
  else if (x.value < 1) x.value = 1;
}
