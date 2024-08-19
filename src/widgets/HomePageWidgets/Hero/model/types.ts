export interface IHero {
  bgImage: string;
  topic: string;
  title: string;
  description: string;
  mainColor: string;
  accentColor: string;
  buttonColor: string;
}

export interface IHeroData {
  hero: IHero;
}
