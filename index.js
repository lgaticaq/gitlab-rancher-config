module.exports = {
  plugins: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/gitlab',
    'semantic-release-gitlab-registry',
    'semantic-release-rancher'
  ]
}
