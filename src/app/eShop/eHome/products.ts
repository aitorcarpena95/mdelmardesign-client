export interface IProducts {
    id: number;
    sku: String;
    name: String;
    stock: String;
    price: number;
    image: String;
    description: String;
    tags: String;
    productCategory: Object;

}

export interface IProdCat {
  id: number;
  name: String;
  description: String;
}
