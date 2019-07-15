import * as packageJSONFile from '../package.json'

// Get package.json and convert to object
const pJSON = JSON.parse(JSON.stringify(packageJSONFile)).default
const  dependencies = [ 'nuxt', 'nuxt-ts' ]

const formattedDependencies = JSON.stringify(getDependencies(dependencies))
.replace(/{/g, '{\n    ').replace(/,"/g, ',\n    "').replace(/":"/g, '": "').replace(/"}/g, '"\n  }')

const packageJSON = `
{
  "author": "${pJSON.author}",
  "username": "@daveberning",
  "version": "27.0",
  "dependencies": ${formattedDependencies},
  "devDependencies": {
    "coffee": "^1.0"
    "dale": "3.0",
    "hank": "2.0"
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
  let depArr = []
  Object.keys(pJSON.dependencies).forEach((dep) => {
    dependencies.forEach((dependency) => {
      if (dependency === dep) {
        let obj = {}

        obj[dep] = pJSON.dependencies[dep]
        depArr.push(obj)
      }
    })
  })
  return Object.assign({}, ...depArr)
}

export default packageJSON