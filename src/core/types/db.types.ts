//Extra
  export type DBCountry = {
    id: string
    name: string
  }

  export type DBCity = {
    id: string
    name: string
    countryId: DBCountry['id']
  }

  export type DBTouristReport = {
    id: number
    month: number
    year: number
    sheet: string
    pdf: string
  }

  export type DBAssetType = {
    id: number
    name: string
  }

  export type DBAsset = {
    id: number
    barCode: number
    createdAt: Date
    placedAt: Date
    description: string
    assetTypeId: DBAssetType['id']
  }


// Pagos
  export type DBPayType = 'cash' | 'transfer' | 'e-wallet'

  export type DBPayProof = {
    id: number
    date: Date
    amount: number
    operationNumber: string
    fileId: string
    payedFor: string
  }

  export type DBPayedDay = {
    id: number
    date: Date
    price: number
    stayId: string
    payType: DBPayType
    payProofId: DBPayProof['id']
  }

// Room
  export type DBRoomStatus = 'busy' | 'free' | 'separate'

  export type DBRoomType = {
    id: number
    name: string
  }

  export type DBFloor = {
    id: number
    image: string
  }

  export type DBFloorPosition = {
    id: number
    posW: number
    posH: number
    floorId: DBFloor['id'] | null
  }

  export type DBRoom = {
    id: number
    number: string
    active: boolean
    status: DBRoomStatus
    floorId: DBFloor['id'] | null
    roomTypeId: DBRoomType['id']
  }

  export type DBReservation = {
    id: number
    price: number | null
  }