serve: _includes/builds.html
	bundler exec jekyll serve
update: _includes/builds.html
	bundler update
_includes/builds.html: generate_builds.py
	python3 generate_builds.py > _includes/builds.html
clean:
	rm -rf _site builds.html

