# box-shadow-example

Passing build w\o refs: `npm run build`

Failing build build w\ refs: `npm run build-refs`

Failing build output:
```/<project path>/box-shadow-example/node_modules/style-dictionary/lib/common/formatHelpers/sortByReference.js:35
    if (a.original && dictionary.usesReference(a.original.value)) {
          ^

TypeError: Cannot read properties of undefined (reading 'original')
    at sorter (/<project path>/box-shadow-example/node_modules/style-dictionary/lib/common/formatHelpers/sortByReference.js:35:11)
    at sorter (/<project path>/box-shadow-example/node_modules/style-dictionary/lib/common/formatHelpers/sortByReference.js:57:16)
    at Array.sort (<anonymous>)
    at formattedVariables (/<project path>/box-shadow-example/node_modules/style-dictionary/lib/common/formatHelpers/formattedVariables.js:56:32)
    at Object.css/variables [as format] (/<project path>/box-shadow-example/node_modules/style-dictionary/lib/common/formats.js:49:7)
    at buildFile (/<project path>/box-shadow-example/node_modules/style-dictionary/lib/buildFile.js:103:37)
    at /<project path>/box-shadow-example/node_modules/style-dictionary/lib/buildFiles.js:33:7
    at Array.forEach (<anonymous>)
    at buildFiles (/<project path>/box-shadow-example/node_modules/style-dictionary/lib/buildFiles.js:31:18)
    at Object.buildPlatform (/<project path>/box-shadow-example/node_modules/style-dictionary/lib/buildPlatform.js:62:3)

```

**Validation/parsing/error handling/etc excluded for brevity.**
