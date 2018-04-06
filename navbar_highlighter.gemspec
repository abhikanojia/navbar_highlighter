
lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "navbar_highlighter/version"

Gem::Specification.new do |spec|
  spec.name          = "navbar_highlighter"
  spec.version       = NavbarHighlighter::VERSION
  spec.authors       = ["Abhishek Kanojia"]
  spec.email         = ["abhishek.kanojia3193@gmail.com"]

  spec.summary       = %q{This gem provides an easy way to change navbar links based on controller and action in ruby on rails.}
  spec.description   = %q{This gem provides an easy way to change navbar links based on controller and action in ruby on rails. Usecase: Can be used to activate certain link based on controller. }
  spec.homepage      = "https://github.com/abhikanojia/navbar_highlighter"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "rspec", "~> 3.0"
end
