#!/usr/bin/env node

import { spawn } from "child_process";
import fs from "fs";
import path from "path";

const changelogPath = path.resolve(process.cwd(), "CHANGELOG.md");

const getSectionContent = (sectionTitle) => {
  try {
    const content = fs.readFileSync(changelogPath, "utf-8");
    const sectionHeader = `## [${sectionTitle}]`;
    const nextHeader = "## [";

    const startIndex = content.indexOf(sectionHeader);
    if (startIndex === -1) {
      console.log(`Section "${sectionTitle}" not found in CHANGELOG.md.`);
      return null;
    }

    const endIndex = content.indexOf(
      nextHeader,
      startIndex + sectionHeader.length
    );
    const sectionContent = content
      .substring(
        startIndex + sectionHeader.length,
        endIndex === -1 ? content.length : endIndex
      )
      .trim();

    return sectionContent || null; // 如果为空，则返回 null
  } catch (error) {
    console.error("Error reading CHANGELOG.md:", error.message);
    return null;
  }
};

// 检查是否存在非空内容
const isChangelogNonEmpty = () => {
  const content = getSectionContent("Unreleased");
  return content !== null && content.length > 0;
};

// 如果 CHANGELOG.md 有内容，执行 release-it
if (isChangelogNonEmpty()) {
  const args = process.argv.slice(2);
  const releaseProcess = spawn("npx", ["release-it", ...args], {
    stdio: "inherit",
  });

  releaseProcess.on("close", (code) => {
    if (code !== 0) {
      console.error(`release-it process exited with code ${code}`);
      process.exit(code);
    }
  });
} else {
  console.log(
    'No content in the "Unreleased" section of CHANGELOG.md. Skipping release.'
  );
  process.exit(0);
}
