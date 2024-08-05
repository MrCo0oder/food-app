export interface SingleBusinessResponse {
  alias?: string;
  categories?: Category[];
  coordinates?: Coordinates;
  display_phone?: string;
  distance?: number;
  id?: string;
  image_url?: string;
  is_claimed?: boolean;
  is_closed?: boolean;
  date_opened?: string;
  date_closed?: string;
  location?: Location;
  name?: string;
  phone?: string;
  photos: string[];
  photo_details?: PhotoDetail[];
  photo_count?: number;
  price?: string;
  rating?: number;
  review_count?: number;
  hours?: Hours;
  special_hours?: SpecialHour[];
  transactions?: string[];
  url?: string;
  attributes?: Attributes;
  messaging?: Messaging;
  yelp_menu_url?: string;
  rapc?: Rapc;
}

export interface Attributes {
  business_temp_closed?: number;
  outdoor_seating?: boolean;
  liked_by_vegans?: boolean;
  liked_by_vegetarians?: boolean;
  hot_and_new?: Date;
}

export interface Category {
  alias?: string;
  title?: string;
}

export interface Coordinates {
  latitude?: number;
  longitude?: number;
}

export interface Hours {
  open?: Open[];
  hours_type?: string;
  is_open_now?: boolean;
}

export interface Open {
  is_overnight?: boolean;
  start?: number;
  end?: number;
  day?: number;
}

export interface Location {
  address1?: string;
  address2?: string;
  address3?: string;
  city?: string;
  country?: string;
  display_address?: string[];
  state?: string;
  zip_code?: string;
}

export interface Messaging {
  url?: string;
  use_case_text?: string;
  response_rate?: number;
  response_time?: number;
  is_enabled?: boolean;
}

export interface PhotoDetail {
  photo_id?: string;
  url?: string;
  caption?: string;
  width?: number | string;
  height?: number | string;
  is_user_submitted?: boolean | string;
  user_id?: null | string;
  label?: string;
}

export interface Rapc {
  is_enabled?: boolean;
  is_eligible?: boolean;
}

export interface SpecialHour {
  date?: Date;
  end?: string;
  is_closed?: null;
  is_overnight?: boolean;
  start?: string;
}