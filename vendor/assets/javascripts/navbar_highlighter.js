function NavbarHighlighter(data) {
  this.linkSelectorClass = data.linkSelectorClass;
  this.navBar = data.navBar;
  this.classNameToAdd = data.classNameToAdd;
  this.actionName = $('meta[name=action]').attr('content');
  this.controllerName = $('meta[name=controller]').attr('content');
}

NavbarHighlighter.prototype.getControllerSelector = function() {
  return '[data-controller=' + this.controllerName + ']';
};

NavbarHighlighter.prototype.getActionSelector = function() {
  return '[data-action=' + this.actionName + ']';
};

NavbarHighlighter.prototype.classSelector = function(className) {
  return '.' + className;
};

NavbarHighlighter.prototype.init = function() {

  this.navBar.find(
    this.classSelector(this.linkSelectorClass)
  ).removeClass(this.classNameToAdd);

  this.navBar.find(
    $(this.getControllerSelector() + this.getActionSelector())
  ).addClass(this.classNameToAdd);

};

