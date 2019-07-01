# lkft.linaro.org

This repository is the source for
[https://lkft.linaro.org](https://staging.lkft.linaro.org/). It is a static website built with Jekyll
along with Linaro's seriously_simple_static_starter theme.

## Developing

To simplify the development process, a pre-built Docker container is used that has all of the tools and libraries required. That simplifies the prerequisities to just needing to install Docker on your computer in order to build this website using the provided tools.

* Change into the directory of the cloned repository
* Run the `build-site.sh` script

That will download the container if it isn't already on your computer and then build the site. There are various environment variables that can be set to override the default behaviour of the build process. Documentation for this can be found at https://github.com/linaro-its/jekyll-build-container/wiki.

Documentation for the theme used by the website can be found at https://github.com/linaro-marketing/seriously_simple_static_starter.

**IMPORTANT!** If you change Gemfile, you **must** create a Pull Request against https://github.com/linaro-its/jekyll-build-container and update the Dockerfile to match the new gem requirements for this site.

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
