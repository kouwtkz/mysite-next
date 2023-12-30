
import { MediaImageItemType } from "@/imageScripts/MediaImageDataType";

export interface CharaType {
  id?: string
  name: string,
  honorific?: string,
  description?: string,
  path?: string,
  icon?: string,
  image?: string,
  headerImage?: string,
  media?: {
    icon?: MediaImageItemType | null,
    image?: MediaImageItemType | null,
    headerImage?: MediaImageItemType | null,
  }
  playlist?: [string] | string,
  time?: Date,
}

export interface CharaObjectType {
  [name: string]: CharaType
}