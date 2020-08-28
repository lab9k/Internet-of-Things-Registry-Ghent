import Papa from "papaparse"
import { readPaginatedData } from "../datareader"
import { importAll } from "./marker"
import Device from "../classes/Device"

let devices = null

async function getCSVText(csvList) {
  const urls = Object.values(csvList)
  const csvs = []
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
          error: reject,
        })
      })
        .then((t) => csvs.push(t.data))
        // eslint-disable-next-line no-console
        .catch((e) => console.error(e))
    )
  })
  await Promise.all(promises)
  return csvs
}

function randomID(length) {
  let result = ""
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const charactersLength = characters.length
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export async function getDevices() {
  // TODO CONVERT TO Promise.All()
  const classes = []
  const csvList = importAll(require.context("../../csv", false, /\.(csv)$/))
  const csvs = await getCSVText(csvList)
  csvs.forEach((csv) =>
    csv.forEach((c) =>
      classes.push(Object.assign(new Device(), c, { id: randomID(15) }))
    )
  )
  const devicesList = [
    ...(await readPaginatedData(process.env.REACT_APP_API_ROOT)),
  ]
  devicesList.forEach((c) => classes.push(Object.assign(new Device(), c)))
  return classes
}

export async function getDevice(id) {
  if (!devices) {
    devices = getDevices()
  }
  const all = await devices
  return all.find((element) => element.id === id)
}
