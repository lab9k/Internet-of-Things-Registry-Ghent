import Papa from 'papaparse'
import { readPaginatedData } from '../datareader'
import { importAll } from './marker'
import Device from '../classes/Device'

function getCSVText(csvList) {
  const urls = Object.values(csvList)
  const promises = []
  urls.forEach((csv) => {
    promises.push(
      new Promise((resolve, reject) => {
        Papa.parse(csv, {
          download: true,
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: resolve,
          error: reject
        })
      })
        .then((t) => t.data)
        // eslint-disable-next-line no-console
        .catch((e) => console.error(e))
    )
  })
  return promises
}

function randomID(length) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export default async function getDevices() {
  const classes = []
  const csvList = importAll(require.context('../../csv', false, /\.(csv)$/))
  const csvPromises = getCSVText(csvList)
  const devicePromises = readPaginatedData(process.env.REACT_APP_API_ROOT)
  const devices = []
  await Promise.all([...csvPromises, devicePromises]).then((c) => devices.push(c))
  devices
    .flat(2)
    .forEach((c) => classes.push(Object.assign(new Device(), c, { id: randomID(15) })))
  return classes
}
