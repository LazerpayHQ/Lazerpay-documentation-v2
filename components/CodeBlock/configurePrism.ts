const initializePrism = (Prism) => {
    Prism.languages.json = {
        'property': {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
            lookbehind: true,
            greedy: true
        },
        'string': {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            lookbehind: true,
            greedy: true
        },
        'comment': {
            pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
            greedy: true
        },
        'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
        'punctuation': /[{}[\],]/,
        'operator': /:/,
        'boolean': /\b(?:false|true)\b/,
        'null': {
            pattern: /\bnull\b/,
            alias: 'keyword'
        }
    };

    Prism.languages.curl = {
        'curl': /\bcurl\b/,
        'url': /https?:[a-zA-Z0-9:.?=\/\-_{}]*/,
        'parameter': {
            pattern: /[A-Za-z0-9\[\]-_]+ *(?=[=])/,
        },
        'value': [{
            pattern: /([=])([A-Za-z0-9-_.]*)/,
            lookbehind: true,
        }, {
            pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        }, {
            pattern: /(\-u )([A-Za-z0-9-_.{}]*)/,
            lookbehind: true,
        }],
        'punctuation': /[{}['’\],]/,
        'method': /(?:POST|GET|PATCH)/g,
        'option': / *--[a-zA-Z-]*\b/,
    };

    Prism.languages.webmanifest = Prism.languages.json;
}
export { initializePrism };