const figures = require('figures')

const RED = '\x1b[31m';
const BLUE = "\x1b[34m";
const YELLOW = "\x1b[33m"
const GREEN = '\x1b[32m';
const NC = '\x1b[0m';

class Logger {
  info (msg) {
    console.log(`${BLUE}${figures.info} info${NC}  ${msg}`)
  }

  success (msg) {
    console.log(`${GREEN}${figures.tick} success${NC}  ${msg}`)
  }

  warn (msg) {
    console.log(`${YELLOW}${figures.warning} warn${NC}  ${msg}`)
  }

  error (msg) {
    console.log(`${RED}${figures.cross} error${NC}  ${msg}`)
  }
}

module.exports = new Logger()