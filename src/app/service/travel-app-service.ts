import { TravelApp } from "../static-data/travel-app"

export default class TravelAppService {
  public getData(tableName: string): any[] {
    return TravelApp[tableName];
  }
}
