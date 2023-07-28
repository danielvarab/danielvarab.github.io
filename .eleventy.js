module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    return {
        dir: { 
            output: 'docs' 
        }
    }
};