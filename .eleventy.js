module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("jquery.hypher.js");
    eleventyConfig.addPassthroughCopy("en-us.js");

    // eleventyConfig("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js")
    return {
        dir: {
            output: 'docs'
        }
    }
};