// will migrate later
function createDiv(label, className) {
  let div = document.createElement('div');
  div.className = className;
  div.appendChild(document.createTextNode(label));
  return div;
}

class TreeGenerator {
  constructor(outputElId, buildingElId, productKey) {
    this.treeOutput = document.getElementById(outputElId);
    this.buildingsOutput = document.getElementById(buildingElId);
    this.treeOutput.innerHTML = '';
    this.buildingsOutput.innerHTML = '';
    this.treeItems = {
      [productKey]: products[productKey]
    };
    this.buildingsToBuild = [];
  }

  buildBuildingsToBuild(product) {
    let productsBuilding = [
      ...product.buildings ?? [],
      ...product.storages ?? [],
      ...product.workers ?? [],
      ...product.generatedFrom ?? [],
    ];

    this.buildingsToBuild = [
      ...new Set([
        ...this.buildingsToBuild,
        ...productsBuilding,
      ]),
    ];

    productsBuilding.forEach((building) => {
      // const building = products[buildingKey];
      if (Object.prototype.hasOwnProperty.call(building, 'build-materials')) {
        building['build-materials'].forEach((material) => {
          this.buildBuildingsToBuild(products[material.key]);
        });
      }
    });
  }

  buildTree(product) {
    // this.buildBuildingsToBuild(product);

    if (!Object.prototype.hasOwnProperty.call(product, 'children')) {
      product.children = [];
    }

    if (Object.prototype.hasOwnProperty.call(product, 'requires')) {
      product.requires.forEach((item) => {
        item.product = {
          [item.craft.name]: this.buildTree(products[item.craft.name])
        };
      });
    }

    return product;
  }

  drawBuildMaterials(item, drawToEl) {
    if (Object.prototype.hasOwnProperty.call(item, 'build-materials')) {
      let buildMaterialsEl = document.createElement('div');
      buildMaterialsEl.className = 'product-build-materials';
      item['build-materials'].forEach((material) => {
        buildMaterialsEl.appendChild(createDiv(`${material.quantity} ${material.key}`, 'product-build-material'));
      });
      drawToEl.appendChild(buildMaterialsEl);
      return buildMaterialsEl;
    }
  }

  drawTreeCard(product, quantity) {
    const productKey = Object.keys(product)[0];
    const item = products[productKey];
    const card = document.createElement('div');

    card.className = 'product-card';

    if (quantity > 0) {
      card.appendChild(createDiv(quantity, 'product-quantity'));
    }

    card.appendChild(createDiv(item.name, 'product-name'));
    if (item.generatedFrom && item.generatedFrom[0]) {
      card.appendChild(createDiv(item.generatedFrom[0].name, 'building-generated-from'));
    }
    this.drawBuildMaterials(item, card);

    card.addEventListener('mouseover', () => {
      const buildingsToHighlight = [
        ...new Set([
          ...item.buildings ?? [],
          ...item.storages ?? [],
          ...item.workers ?? [],
        ]),
      ];

      Array.from(document.querySelectorAll('.buildings-item'))
        .forEach((buildingEl) => buildingEl.classList.remove('selected'));

      buildingsToHighlight.forEach((buildingName) => {
        let buildingEl = document.getElementById(`buildings-item-${buildingName}`);
        buildingEl.classList.add('selected');
      })
    });
    card.addEventListener('mouseout', () => {
      Array.from(document.querySelectorAll('.buildings-item'))
        .forEach((buildingEl) => buildingEl.classList.remove('selected'));
    });

    return card;
  }

  drawTreeLayout(product, quantity, parentDiv) {
    let productKey = Object.keys(product)[0];
    let div = document.createElement('div');

    div.className = 'tree-item';
    div.appendChild(this.drawTreeCard(product, quantity));

    if (product[productKey].requires) {
      let hasChildren = false;
      let childDiv = document.createElement('div');

      childDiv.className = 'tree-children';
      product[productKey].requires.forEach((item) => {
        if (typeof item.required === 'undefined' || item.required === true) {
          hasChildren = true;
          this.drawTreeLayout(item.product, item.quantity, childDiv);
        }
      });

      if (hasChildren) {
        div.classList.add('has-children');
      }

      div.appendChild(childDiv);
    }

    parentDiv.appendChild(div);
  }

  drawBuildings(product, parentDiv) {
    this.buildingsToBuild.forEach((item) => {
      if (item) {
        let div = document.createElement('div');

        div.className = 'buildings-item';
        div.id = `buildings-item-${item}`;
        div.appendChild(document.createTextNode(item));
        this.drawBuildMaterials(products[item], div);

        parentDiv.appendChild(div);
      }
    });
  }

  generate(productKey) {
    this.buildTree(products[productKey]);
    this.drawTreeLayout(this.treeItems, 0, this.treeOutput);
    this.drawBuildings(this.treeItems, this.buildingsOutput);
    document.getElementById('output-wrapper').style.visibility = 'visible';
  }
}

document.getElementById('share-row').addEventListener('click', () => {
  let screenshot = document.getElementById('screenshot');
  const options = {
    backgroundColor: '#74B3CE',
  };

  document.styleSheets[1].cssRules[0].style.width = (document.getElementById('tree-output-wrapper').getBoundingClientRect().width + 80) + 'px';
  document.styleSheets[1].cssRules[0].style.height = (document.getElementById('tree-output-wrapper').getBoundingClientRect().height + 120) + 'px';
  html2canvas(screenshot, options).then(function(canvas) {
    var imgageData = canvas.toDataURL("image/png");
    var a = document.createElement("a");
    a.href = imgageData; //Image Base64 Goes here
    a.download = "Image.png"; //File name Here
    a.click(); //Downloaded file
  });
});