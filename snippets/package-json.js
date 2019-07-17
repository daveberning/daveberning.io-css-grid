import * as packageJSONFile from '../package.json'
import moment from 'moment'

// Get package.json and convert to object
const pJSON = JSON.parse(JSON.stringify(packageJSONFile)).default
const dependencies = [ 'nuxt', 'nuxt-sass-resources-loader', 'prismjs' ]

const formattedDependencies = JSON.stringify(getDependencies(dependencies))
.replace(/{/g, '{\n    ')
.replace(/,"/g, ',\n    "')
.replace(/":"/g, '": "')
.replace(/"}/g, '"\n  }')

const packageJSON = `
{
  "author": "${pJSON.author}",
  "username": "@daveberning",
  "version": "${age()}",
  "dependencies": ${formattedDependencies},
  "devDependencies": {
    "coffee": "^1.0",
    "macOS": "^10.17",
    "webstorm": "^2019.02",
    "vs-code": "^1.0.0"
  },
  "favoriteBands": {
    "green-day": "1994.02",
    "nirvana": "1993.11",
    "foo-fighters": "2011.04",
    "the-beatles": "1963.06"
  }
}
`

function getDependencies(dependencies) {
  const depArr = []
  Object.keys(pJSON.dependencies).forEach((dep) => {
    dependencies.forEach((dependency) => {
      if (dependency === dep) {
        const obj = {}

        obj[dep] = pJSON.dependencies[dep]
        depArr.push(obj)
      }
    })
  })
  return Object.assign({}, ...depArr)
}

function age() {
  if (process.client) {
    const date = new Date()

    const s = moment([1991, 8, 4])
    const a = moment([date.getFullYear() - 1, 8, 4])
    const b = moment([date.getFullYear(), date.getMonth() + 1, new Date().getDate()])

    let d = ''

    const age = b.diff(s, 'years')
    const days = b.diff(a, 'days')

    if (((days/365) * 100).toFixed(0).toString() === '100') {
      d = '0'
    } else {
      if (((days/365) * 100).toFixed(0).toString().length == 1) {
        d = `${((days/365) * 100).toFixed(0)}0`
      } else {
        d = `${((days/365) * 100).toFixed(0).toString().substring(0,2)}`
      }
    }

    return `${age}.${d}`
  }
}

export default packageJSON