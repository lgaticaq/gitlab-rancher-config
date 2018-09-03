# gitlab-rancher-config

[![npm version](https://img.shields.io/npm/v/gitlab-rancher-config.svg?style=flat-square)](https://www.npmjs.com/package/gitlab-rancher-config)
[![npm downloads](https://img.shields.io/npm/dm/gitlab-rancher-config.svg?style=flat-square)](https://www.npmjs.com/package/gitlab-rancher-config)
[![Build Status](https://img.shields.io/travis/lgaticaq/gitlab-rancher-config.svg?style=flat-square)](https://travis-ci.org/lgaticaq/gitlab-rancher-config)
[![Coverage Status](https://img.shields.io/coveralls/lgaticaq/gitlab-rancher-config/master.svg?style=flat-square)](https://coveralls.io/github/lgaticaq/gitlab-rancher-config?branch=master)
[![Code Climate](https://img.shields.io/codeclimate/github/lgaticaq/gitlab-rancher-config.svg?style=flat-square)](https://codeclimate.com/github/lgaticaq/gitlab-rancher-config)
[![devDependency Status](https://img.shields.io/david/dev/lgaticaq/gitlab-rancher-config.svg?style=flat-square)](https://david-dm.org/lgaticaq/gitlab-rancher-config#info=devDependencies)

> [Semantic-release](https://github.com/semantic-release/semantic-release) shareable config for [GitLab](https://gitlab.com) with [Rancher](https://rancher.com/docs/rancher/v1.6/en/).

## Usage

### Local installation

```bash
npm i -D semantic-release gitlab-rancher-config
```

In `package.json`:

```json
{
  "release": {
    "extends": "gitlab-rancher-config"  
  }
}
```

### Global installation

```bash
$ npm i -g semantic-release gitlab-rancher-config
$ semantic-release -e gitlab-rancher-config
```

## Configuration

### GitLab authentication

The GitLab authentication configuration is **required** and can be set via [environment variables](#environment-variables).

See [GitLab authentication](https://github.com/semantic-release/gitlab#gitlab-authentication).

### Npm registry authentication

The npm authentication configuration is **required** and can be set via [environment variables](#environment-variables).

See [Npm registry authentication](https://github.com/semantic-release/npm#npm-registry-authentication)

### Environment variables

| Variable                     | Description                                                                                   |
|------------------------------|----------------------------------------------------------------------                         |
| `GL_TOKEN` or `GITLAB_TOKEN` | **Required.** The token used to authenticate with GitLab repository.                          |
| `NPM_TOKEN`                  | **Required.** Npm token created via [npm token create](https://docs.npmjs.com/getting-started/working_with_tokens#how-to-create-new-tokens) |
| `PLUGIN_SERVICE`             | **Required.** Stack name and service name. Ex: `my_stack/my_name`                             |
| `RANCHER_ACCESS_KEY`         | **Required.** A valid environment API access key                                              |
| `RANCHER_SECRET_KEY`         | **Required.** A valid environment API secret key                                              |
| `RANCHER_URL`                | **Required.** The environment API endpoint. Ex: `https://rancher.domain.com/v1/projects/{ID}` |

### Additional options

This shareable config uses the [`@semantic-release/changelog`](https://github.com/semantic-release/changelog), [`@semantic-release/git`](https://github.com/semantic-release/git), [`@semantic-release/gitlab`](https://github.com/semantic-release/gitlab), [`@semantic-release/npm`](https://github.com/semantic-release/npm), [`semantic-release-gitlab-registry`](https://github.com/lgaticaq/semantic-release-gitlab-registry) and [`semantic-release-rancher`](https://github.com/lgaticaq/semantic-release-rancher) plugins. See the documentation of each plugins for additional options.
Options can be set in the Semantic-release configuration.

For example to set a custom GitLab URL:

```json
{
  "release": {
    "extends": "gitlab-rancher-config",
    "gitlabUrl": "https://custom.gitlab.com"
  }
}
```

## License

[MIT](https://tldrlegal.com/license/mit-license)