export class KanmusuData {
  no: String;
  name: String;
  level: String;
  cond: String;
}

/**
 * 出力用クラス
 */
export class FleetList {
  allFleet: KanmusuData[];
  firstFleet: KanmusuData[];
  thirdFleet: KanmusuData[];
}