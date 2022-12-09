export class HeroesModel {

  protected _heroName: string = '';

  private _heroRank: number = 0;

  protected _heroTitle: string = ''

  get heroTitle(): string {
    return this._heroTitle;
  }

  set heroTitle(title: string) {
    this._heroTitle = title;
  }

  get heroRank(): number {
    return this._heroRank;
  }

  set heroRank(age: number) {
    this._heroRank = age;
  }

  set heroName(heroName: string) {
    this._heroName = heroName;
  }

  get heroName(): string {
    return this._heroName;
  }

}
