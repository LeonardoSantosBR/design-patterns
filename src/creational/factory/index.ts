interface Product {
  name: string;
  price: string;
  code: string;
  country: string;
  tags: string[];
  listTags(): void;
}

class ConcreteProduct implements Product {
  public name: string;
  public price: string;
  public code: string;
  public country: string;
  public tags: Array<string> = [];

  constructor(
    name: string,
    price: string,
    code: string,
    country: string,
    tags: Array<string>,
  ) {
    this.name = name;
    this.price = price;
    this.code = code;
    this.country = country;
    this.tags = tags;
  }
  public listTags(): void {
    this.tags.map((tg) => console.log(tg));
  }
}

abstract class Creator {
  abstract factoryMethod(
    name: string,
    price: string,
    code: string,
    country: string,
    tags: string[],
  ): Product;
}

class ConcreteCreator extends Creator {
  factoryMethod(
    name: string,
    price: string,
    code: string,
    country: string,
    tags: string[],
  ): Product {
    return new ConcreteProduct(name, price, code, country, tags);
  }
}

const creator = new ConcreteCreator();

const product = creator.factoryMethod(
  'placa de video',
  '1200$',
  '#CDGDF',
  'Brazil',
  ['placa', 'computador', 'pc', 'informática'],
);

product.listTags();
