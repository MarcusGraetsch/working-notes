const fs = require("fs");
const path = require("path");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  // Ignore process log companion files (read by filter, not built as pages)
  eleventyConfig.ignores.add("src/writing/*.process.md");

  // Copy static files
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/graph");

  // Render a companion .process.md file if it exists
  const md = markdownIt({ html: true });
  eleventyConfig.addFilter("renderProcessFile", function(inputPath) {
    if (!inputPath) return "";
    const processPath = inputPath.replace(/\.md$/, ".process.md");
    const fullPath = path.resolve(processPath);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, "utf-8");
      return md.render(content);
    }
    return "";
  });

  // RFC 3339 date for Atom feed
  eleventyConfig.addFilter("dateToRfc3339", function(date) {
    return new Date(date).toISOString();
  });

  // Head filter (limit array length)
  eleventyConfig.addFilter("head", function(array, n) {
    return array.slice(0, n);
  });

  // Escape filter for XML
  eleventyConfig.addFilter("escape", function(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  });

  // Pad start filter (for BBS-style numbering)
  eleventyConfig.addFilter("padStart", function(value, length, char) {
    return String(value).padStart(length, char || "0");
  });

  // Date display filter
  eleventyConfig.addFilter("dateDisplay", function(date) {
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const d = new Date(date);
    return months[d.getMonth()] + " " + d.getFullYear();
  });

  // Posts collection sorted by date (newest first)
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("post").sort((a, b) => b.date - a.date);
  });

  // All unique tags from posts
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    const tags = new Set();
    collectionApi.getFilteredByTag("post").forEach(item => {
      if (item.data.tags) {
        item.data.tags.forEach(tag => {
          if (tag !== "post") tags.add(tag);
        });
      }
    });
    return [...tags].sort();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["md", "html", "njk"],
    markdownTemplateEngine: "njk"
  };
};
