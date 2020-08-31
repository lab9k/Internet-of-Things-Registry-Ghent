export function importAll(r) {
  const images = []
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item)
  })
  return images
}

/*
 * For adding types you must add a .png image with the same name as the category or
 * type IN LOWERCASE in the public/images folder. The programme will attempt to load
 * a corresponding type or category.
 * If no type image is found it will fall back to the category type. If no category
 * type is found it will
 * fallback to a letter.
 * */

export const markers = importAll(
  require.context('../../images', false, /\.(png|jpe?g|svg)$/)
)
const ICON_PATH = 'images/'

function getLetterMarker(category) {
  const firstLetter = `${ICON_PATH}${category.charAt(0).toLowerCase()}.png`
  return {
    iconSize: [25, 25],
    popupAnchor: [0, 0],
    visible: true,
    name: category,
    iconUrl: firstLetter
  }
}

export function getMarker(category) {
  const categoryMarker = markers[`${category.toLowerCase()}.png`]
  if (!categoryMarker) {
    return getLetterMarker(category)
  }
  return {
    iconSize: [25, 25],
    popupAnchor: [0, 0],
    visible: true,
    name: category,
    iconUrl: categoryMarker
  }
}
// checks if there is a specific type marker otherwise returns the category marker
export function getTypeMarker(category, type) {
  const typeMarker = markers[`${type.toLowerCase()}.png`]
  if (!typeMarker) {
    return getMarker(category)
  }
  return {
    iconSize: [25, 25],
    popupAnchor: [0, 0],
    visible: true,
    name: type,
    iconUrl: typeMarker
  }
}
