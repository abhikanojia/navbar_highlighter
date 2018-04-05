module Helper
  def navbar_highlighter_tags
    ''.tap do |str|
      str.concat("<meta name='controller' content='#{controller_name}' >")
      str.concat("<meta name='action' content='#{action_name}' >")
    end.html_safe
  end
end

ActionView::Base.send :include, Helper
