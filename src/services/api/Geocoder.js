import { readPaginatedData } from '../datareader';

export async function getLocations(string) {
  return readPaginatedData(process.env.REACT_APP_MAP_API_ROOT + string);
}

export async function getAddress(string) {
  return readPaginatedData(process.env.REACT_APP_ADDRESS_API_ROOT + string);
}
