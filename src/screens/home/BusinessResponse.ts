
export interface BusinessResponse {
  businesses: Business[]
  region: Region
  total: number
}

export interface Business {
  alias: string
  categories: Category[]
  coordinates: Coordinates
  display_phone: string
  distance: number
  id: string
  image_url: string
  is_closed: boolean
  location: Location
  name: string
  phone: string
  price: string
  rating: number
  review_count: number
  transactions: string[]
  url: string
  business_hours: BusinessHours
}

export interface Category {
  alias: string
  title: string
}

export interface Coordinates {
  latitude: number
  longitude: number
}

export interface Location {
  address1: string
  address2: string
  address3: string
  city: string
  country: string
  display_address: string[]
  state: string
  zip_code: string
}

export interface BusinessHours {
  open: Open[]
  hours_type: string
  is_open_now: boolean
}

export interface Open {
  is_overnight: boolean
  start: number
  end: number
  day: number
}

export interface Region {
  center: Center
}

export interface Center {
  latitude: number
  longitude: number
}

