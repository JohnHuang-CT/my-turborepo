const version = "${version}";
const packageName = process.env.npm_package_name;
const scope = packageName.split("/")[1];

module.exports = {
  plugins: {
    "release-it-pnpm": {
      disableRelease: true,
    },

    // https://github.com/release-it/keep-a-changelog
    "@release-it/keep-a-changelog": {
      filename: "CHANGELOG.md",
      strictLatest: false,
      addUnreleased: true,
    },
  },
  // https://github.com/release-it/release-it/blob/main/docs/git.md
  git: {
    push: true,
    tagName: `${packageName}@${version}`,
    pushRepo: "git@github.com:JohnHuang-CT/my-turborepo.git",
    commitsPath: ".",
    commitMessage: `feat(${scope}): released version v${version} [no ci]`,
    requireCommits: true,
    requireCommitsFail: false,
    requireCleanWorkingDir: false,
  },

  // https://github.com/release-it/release-it/blob/main/docs/github-releases.md
  // github: {
  //   release: true,
  //   releaseName: `${packageName}-v${version}`,
  // },
};
