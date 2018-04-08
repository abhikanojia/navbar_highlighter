module Helper
  def navbar_highlighter_tags
    ''.tap do |str|
      str.concat("<meta name='controller' content='#{controller_name}'>")
      str.concat("\n")
      str.concat("<meta name='action' content='#{action_name}'>")
      str.concat("\n")
      str.concat("<meta name='current_url' content='#{request.original_url}'>")
    end.html_safe
  end

  def current_url
    request.original_url
  end
end

ActionView::Base.send :include, Helper
