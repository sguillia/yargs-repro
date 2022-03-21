const yargs = require("yargs")

const res = yargs
	.version(false)
	.options({ version: { string: true, alias: "v", hidden: true } })
	.argv
console.log(res)
