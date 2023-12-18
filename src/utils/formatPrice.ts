export const formatPrice = (price: number) => {
  const brReais = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return brReais.format(price);
};
