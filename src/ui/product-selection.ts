import Item from "../item";

export default class ProductSelector {
  productSelector: HTMLSelectElement;
  productList: Item[];

  constructor(elId, productList) {
    this.productSelector = (document.getElementById(elId) as HTMLSelectElement);
    this.productList = productList;
  }

  populate() {
    let options = Object.keys(this.productList).map((key) => {
      const product = this.productList[key];
      let option = document.createElement('option');
      option.value = key;
      option.appendChild(document.createTextNode(product.name));
      return option;
    });

    let fragment = document.createDocumentFragment();
    options.forEach((option) => fragment.appendChild(option));
    this.productSelector.appendChild(fragment);
  }

  addEvent() {
    this.productSelector.addEventListener('change', (event) => {
      // @ts-ignore
      let treeGenerator = new TreeGenerator('tree-output', 'buildings-output', event.target.value);
      treeGenerator.generate((event.target as HTMLSelectElement).value);
      document.getElementById('share-row').classList.add('show');
    });

    Array.from(document.querySelectorAll('.product-quick-access')).forEach((item) => {
      item.addEventListener('click', (event) => {
        this.productSelector.value = (event.target as HTMLElement).getAttribute('data-product-key');
        this.productSelector.dispatchEvent(new Event('change'));
      });
    });
  }
}
