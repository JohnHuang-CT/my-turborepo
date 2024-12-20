const version = "${version}";
const packageName = process.env.npm_package_name;
const scope = packageName.split("/")[1];

module.exports = {
  plugins: {
    "@weber-jojo/release-it-pnpm": {
      disableRelease: true,
    },

    // https://github.com/release-it/keep-a-changelog
    "@weber-jojo/release-it-keep-a-changelog": {
      filename: "CHANGELOG.md",
      strictLatest: false,
      addUnreleased: true,
    },
  },
  // https://github.com/release-it/release-it/blob/main/docs/git.md
  git: {
    tagName: `${packageName}@${version}`,
    commitMessage: `chore(${scope}): released version v${version} [no ci]`,
    requireCommits: true,
    requireCommitsFail: false,
  },

  npm: false,
};
