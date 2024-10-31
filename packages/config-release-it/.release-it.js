const version = "${version}";
const packageName = process.env.npm_package_name;
const scope = packageName.split("/")[1];

module.exports = {
  plugins: {
    "release-it-pnpm": {
      disableRelease: true,
    },

    // https://github.com/release-it/keep-a-changelog
    "@release-it/keep-a-changelog": {},
  },
  // https://github.com/release-it/release-it/blob/main/docs/git.md
  git: {
    push: true,
    tagName: `${packageName}-v${version}`,
    pushRepo: "git@github.com:JohnHuang-CT/my-turborepo.git",
    commitsPath: ".",
    commitMessage: `feat(${scope}): released version v${version} [no ci]`,
    requireCommits: true,
    requireCommitsFail: false,
  },

  // https://github.com/release-it/release-it/blob/main/docs/github-releases.md
  // github: {
  //   release: true,
  //   releaseName: `${packageName}-v${version}`,
  // },
};
