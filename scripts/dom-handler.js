const DOMHandler = {
  module: null,
  parent: null,
  load(module, parent) {
    this.module = module;
    this.parent = parent;
    parent.innerHTML = module;
    module.addListeners();
  },
  reload() {
    this.load(this.module, this.parent);
  },
};

export default DOMHandler;
