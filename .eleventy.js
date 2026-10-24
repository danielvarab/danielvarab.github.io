module.exports = function (eleventyConfig) {
    // static files copied as-is (src/assets → docs/assets)
    eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

    // "2026-10-24" — used on the blog index and post pages
    eleventyConfig.addFilter("isoDate", (value) => {
        const d = value instanceof Date ? value : new Date(value);
        return Number.isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "docs"
        },
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
};
