interface Product {
  operation(): string;
}

class Burger implements Product {
  public operation(): string {
    return "Burger: Results";
  }
}

class Kebab implements Product {
  public operation(): string {
      return 'Kebab: Operation';
  }
}

class Pizza implements Product {
  public operation(): string {
      return 'Pizza: Operation';
  }
}

enum ProductType {
  PIZZA,
  KEBAB,
  BURGER
}


function productCreation(productType: ProductType) {
  const productCreationDict = {
    PIZZA: () => new Pizza(),
    KEBAB: () => new Kebab(),
    BURGER: () => new Burger()
  }

  return productCreationDict[productType];
}

const burger = productCreation(ProductType.BURGER);

console.log(burger.operation);