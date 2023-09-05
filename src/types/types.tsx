export interface ICandidates {
  id: number;
  firstname: string;
  lastname: string;
  birthday: string;
  gender: string;
  address: AddressType;
  image: string;
  age: string;
}
export type Jobs = {
  jobs: CardsType[];
  onActiveCards: () => void;
  onCompletedCards: () => void;
  onUnfinishedCards: () => void;
  ascDate: () => void;
  descDate: () => void;
};
export type CardsType = {
  id: number;
  title: string;
  spec: string;
  subTitle: string;
  text: string;
  cardType: string;
  logo: string;
  date: string;
  candidates: string;
};

interface AddressType {
  id: number;
  city: string;
}
