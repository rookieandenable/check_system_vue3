/**
 * 日志存储
 */
const log4js = require('log4js')

const levels = {
  trace: log4js.levels.TRACE,
  debug: log4js.levels.DEBUG,
  info: log4js.levels.INFO,
  warn: log4js.levels.WARN,
  error: log4js.levels.ERROR,
  fatal: log4js.levels.FATAL
}

log4js.configure({
  appenders: {
    console: {type: 'console'},
    info: {
      type: 'file',
      filename: 'logs/all-logs.log'
    },
    error: {
      type: 'dateFile',
      filename: 'logs/log',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true
    }
  },
  categories: {
    default: {appenders: ['console'], level: 'debug'},
    info: {
      appenders: ['info', 'console'],
      level: 'info'
    },
    error: {
      appenders: ['error', 'console'],
      level: 'error'
    }
  }
})

/**
 * 日志输出 level: debug
 * @param {string} content
 */
exports.debug = function(content) {
  const logger = log4js.getLogger('debug')
  logger.level = levels.debug
  logger.debug(content)
}

/**
 * 日志输出 level: info
 * @param {string} content
 */
exports.info = function(content) {
  const logger = log4js.getLogger('info')
  logger.level = levels.info
  logger.info(content)
}

/**
 * 日志输出 level: error
 * @param {string} content
 */
exports.error = function(content) {
  const logger = log4js.getLogger('error')
  logger.level = levels.error
  logger.error(content)
}