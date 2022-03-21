export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface GameItemTypes {
  _id: string;
  status: string;
  gameName: string;
  thumbnail: string;
  category: CategoryTypes;
}

export interface BankTypes {
  _id: string;
  name: string;
  bankName: string;
  noRekening: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BankTypes[];
}

export interface NominalTypes {
  _id: string;
  coinName: string;
  coinQuantity: number;
  price: number;
}

export interface SignUpTypes {
  name: string;
  email: string;
  password: string;
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
}

export interface JWTPayloadTypes {
  player: UserTypes;
  iat: number;
}

export interface CheckoutTypes {
  accountUser: string;
  bank: string;
  name: string;
  nominal: string;
  payment: string;
  voucher: string;
}

export interface GetServersidePropsTypes {
  req: {
    cookies: {
      token: string;
    };
  };
}

export interface HistoryVoucherTopupTypes {
  category: string;
  coinName: string;
  coinQuantity: string;
  gameName: string;
  price: number;
  thumbnail: string;
}

export interface HistoryTransactionTypes {
  _id: string;
  historyVoucherTopup: HistoryVoucherTopupTypes;
  value: number;
  status: string;
}

export interface TopupCategoriesTypes {
  _id: string;
  value: number;
  name: string;
}
