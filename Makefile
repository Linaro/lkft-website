serve:
	bundler exec jekyll serve -w -l
install:
	bundler install
update:
	bundler update
clean:
	rm -rf _site builds.html

