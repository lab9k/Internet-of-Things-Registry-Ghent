function parseGeoLoc(float) {
  if (float === undefined) {
    return 0
  }
  return Number.parseFloat(float)
}

export default class Device {
  constructor(
    id,
    title,
    category,
    type,
    dataowner,
    dataprocessing,
    link,
    retention,
    latitude,
    longitude
  ) {
    this.id = id
    this.title = title
    this.category = category
    this.type = type
    this.dataowner = dataowner
    this.dataprocessing = dataprocessing
    this.link = link
    this.retention = retention
    this.latitude = parseGeoLoc(latitude)
    this.longitude = parseGeoLoc(longitude)
  }
}
