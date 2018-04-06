function NavbarHighlighter(data) {
  this.linkSelectorClass = data.linkSelectorClass;
  this.navBar = data.navBar;
  this.classNameToAdd = data.classNameToAdd;
  this.actionName = $('meta[name=action]').attr('content');
  this.controllerName = $('meta[name=controller]').attr('content');
}

NavbarHighlighter.prototype.getControllerSelector = function(selector) {
  if(selector) {
    return '[data-controller=' + selector + ']';
  } else {
    return '[data-controller=' + this.controllerName + ']';
  }
};

NavbarHighlighter.prototype.getActionSelector = function() {
  return '[data-action=' + this.actionName + ']';
};

NavbarHighlighter.prototype.classSelector = function(className) {
  return '.' + className;
};

NavbarHighlighter.prototype.highlightParentIfExist = function(element) {
  var dataParent = element.data('parent');
  if(dataParent) {
    $(this.getControllerSelector(dataParent)).addClass(this.classNameToAdd);
  }
};

NavbarHighlighter.prototype.init = function() {

  this.navBar.find(
    this.classSelector(this.linkSelectorClass)
  ).removeClass(this.classNameToAdd);

  var element = this.navBar.find(
    $(this.getControllerSelector() + this.getActionSelector())
  );

  element.addClass(this.classNameToAdd);

  this.highlightParentIfExist(element);

};

