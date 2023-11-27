export interface ImageDataGroup {
  [name: string]: ImageDataObject
}
export interface ImageMapList extends Map<string, ImageDataInfo> { }
export interface ImageDataObject {
  list: Array<ImageDataInfo>
  gallery?: string
  title?: string
  name?: string
  description?: string
  path?: string
  share?: string
  timeFormat?: string
  timeReplace?: string
}
export interface ImageDataInfo {
  src: string
  path?: string
  title: string
  name?: string
  description: string
  tags: Array<string>
  time: number | Date
  link?: string
  dir?: string
  base?: string
  group?: string
  share?: string
  timeFormat?: string
  timeReplace?: string
  thumbnail?: string
  topImage?: boolean
}
export interface soundItem {
  title: string
  path: string
  name: string
  albums: Array<albumsItem>
  setupSound?: string
}
export interface albumsItem {
  title: string
  list: Array<listItem>
}
export interface listItem {
  src: string
  title: string
  setup?: boolean
}