const yargs = require("yargs")

yargs
	.version("1.2.3")
	.options({ version: { hidden: true } })
	.argv

