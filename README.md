# lkft.linaro.org

This repository is the source for
[https://lkft.linaro.org](https://staging.lkft.linaro.org/). It runs Jekyll
along with Linaro's jumbo-jekyll-theme.

## Developing

* Set BUNDLE_PATH for bundler, e.g. `export BUNDLE_PATH=$HOME/.bundle`
* Install ruby >= 2.4.2 (required by jumbo-jekyll-theme).
* Install jekyll and bundler (`gem install jekyll bundler`)
* Install lkft-website (`bundler install`)
* Build and serve site locally (`bundler exec jekyll serve`)

You may also run "make" to build and serve the site locally.

## Redirects

`_data/routingrules.json` contains redirect rules that are deployed to
Lambda@Edge to deliver fast redirects. It is parsed and deployed using
https://github.com/marksteele/edge-rewrite.

## Contributing

To contribute to this site, please raise an issue in
[Github](https://github.com/linaro/lkft-website/issues) or open a pull request
up against the *[staging](https://github.com/Linaro/lkft-website/tree/staging)*
branch.

The staging branch is online at
[https://staging.lkft.linaro.org/](https://staging.lkft.linaro.org/).

