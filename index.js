const a = require("the-letter-a"),
	c = require("the-letter-c"),
	e = require("the-letter-e"),
	h = require("the-letter-h"),
	k = require("the-letter-k"),
	r = require("the-letter-r"),
	s = require("the-letter-s")

const concatenater = require("concatenater")

const CREASHAKS = concatenater(c)
  .append(r)
  .append(e)
  .append(a)
  .append(s)
  .append(h)
  .append(a)
  .append(k)
  .append(s)
  .toString()

module.exports = CREASHAKS // expose the creashaks
