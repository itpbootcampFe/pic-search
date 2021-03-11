# pic-search

React pic-search app covering event handling, http request, hooks

https://itpbootcampfe.github.io/pic-search

### gh-pages

- `yarn add -D gh-pages`
- then add to pakage.json :
  {
  ...
  script:{
  ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  },
  ...
  "homepage": "https://itpbootcampfe.github.io/pic-search"
  }
- to deploy to github run `yarn deploy`
- go to github repo settings and select gh-page branch fror your github pages repo.
