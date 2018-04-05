require "navbar_highlighter/version"
require 'navbar_highlighter/helper' if defined? ActionView

module NavbarHighlighter
  module Rails
    require "navbar_highlighter/engine"
  end
end
