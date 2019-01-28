serve: .bundle
	bundler exec jekyll serve -w -l
.bundle:
	bundler install --path .bundle
update:
	bundler update
clean:
	rm -rf _site .bundle

