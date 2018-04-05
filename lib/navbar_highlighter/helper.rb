module NavbarHighlighter
  module Helper
    def meta_tags
      '<meta content="<%= controller_name %>">'.html_safe
    end
  end
end
