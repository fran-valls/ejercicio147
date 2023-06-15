export interface Localizacion {
  ip:            string;
  success:       boolean;
  type:          string;
  continent:     string;
  continentCode: string;
  country:       string;
  countryCode:   string;
  region:        string;
  regionCode:    string;
  city:          string;
  latitude:      number;
  longitude:     number;
  isEu:          boolean;
  postal:        string;
  callingCode:   string;
  capital:       string;
  borders:       string;
  flag:          Flag;
  connection:    Connection;
  timezone:      Timezone;
}

export interface Connection {
  asn:    number;
  org:    string;
  isp:    string;
  domain: string;
}

export interface Flag {
  img:          string;
  emoji:        string;
  emojiUnicode: string;
}

export interface Timezone {
  id:          string;
  abbr:        string;
  isDst:       boolean;
  offset:      number;
  utc:         string;
  currentTime: Date;
}
