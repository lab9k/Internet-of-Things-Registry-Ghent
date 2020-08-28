import { readPaginatedData } from '../datareader';
import { importAll } from './marker';
import Papa from 'papaparse'
let devices = null;

async function getCSVText(csvList) {
  const urls = Object.values(csvList);
  const csvs = [];
  const promises = [];
  urls.forEach(csv => {
    promises.push(new Promise(((resolve, reject) => {
      Papa.parse(csv, {
        download: true,
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: resolve,
        error: reject
      })
    })).then(t => csvs.push(t.data)).catch(e => console.log(e)))
  })
  await Promise.all(promises);
  return csvs;
}

export async function getDevices() {
  // TODO CONVERT TO Promise.All()
  const classes = [];
  const csvList = importAll(require.context('../../csv', false, /\.(csv)$/));
  const csvs = await getCSVText(csvList);
  csvs.forEach((csv) => csv.forEach((c) => classes.push(Object.assign(new Device(), c, {id: randomID(15)}))));
  console.log('printing deviceList');
  const devicesList = [...(await readPaginatedData(process.env.REACT_APP_API_ROOT))];
  console.log(devicesList)
  devicesList.forEach((c) => classes.push(Object.assign(new Device(), c)));

  console.log(classes);
  return classes;
}
function randomID(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
export async function getDevice(id) {
  if (!devices) {
    devices = getDevices();
  }
  const all = await devices;
  return all.find((element) => element.id === id);
}
export class Device {
  constructor(id, title, category, type, dataowner, dataprocessing, link, retention, latitude, longitude) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.type = type;
    this.dataowner = dataowner;
    this.dataprocessing = dataprocessing;
    this.link = link;
    this.retention = retention;
    this.latitude = this.parseGeoLoc(latitude);
    this.longitude = this.parseGeoLoc(longitude);
  }
  parseGeoLoc(float) {
    if (float === undefined) { return 0; }
    return Number.parseFloat(float);
  }
}
