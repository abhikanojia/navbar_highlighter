function NavbarHighlighter(data) {
  this.links = data.links;
  this.navBar = data.navBar;
  this.classNameToAdd = data.classNameToAdd;
  this.actionName = data.actionName;
  this.controllerName = data.controllerName;
  this.actionDataAttribute = data.controllerDataAttribute;
  this.controllerDataAttribute = data.controllerDataAttribute;
}

NavbarHighlighter.prototype.getControllerSelector = function() {
  return '[data-controller=' + this.controllerName + ']';
};

NavbarHighlighter.prototype.getActionSelector = function() {
  return '[data-action=' + this.actionName + ']';
};

NavbarHighlighter.prototype.init = function() {
  this.links.removeClass(this.classNameToAdd);
  $(this.getControllerSelector() + this.getActionSelector()).addClass(this.classNameToAdd);
};
