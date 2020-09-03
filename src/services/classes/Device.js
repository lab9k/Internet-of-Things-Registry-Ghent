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
    personalData,
    category,
    type,
    contactorg,
    dataprocessing,
    link,
    retention,
    linklabel,
    latitude,
    longitude
  ) {
    this.id = id
    this.title = title
    this.personalData = personalData
    this.category = category
    this.type = type
    this.contactorg = contactorg
    this.dataprocessing = dataprocessing
    this.link = link
    this.retention = retention
    this.linklabel = linklabel
    this.latitude = parseGeoLoc(latitude)
    this.longitude = parseGeoLoc(longitude)
  }
}
