module.exports = {
  verifyConditions: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/gitlab',
    'semantic-release-gitlab-registry',
    'semantic-release-rancher'
  ],
  prepare: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git'
  ],
  publish: [
    '@semantic-release/npm',
    '@semantic-release/gitlab',
    'semantic-release-gitlab-registry',
    'semantic-release-rancher'
  ],
  success: false,
  fail: false
}
