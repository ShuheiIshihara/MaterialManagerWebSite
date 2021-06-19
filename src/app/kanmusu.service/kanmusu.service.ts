import { KanmusuData } from '../kanmusu-data/kanmusu-data';
import { FleetList } from '../kanmusu-data/kanmusu-data';

import 'rxjs/add/operator/toPromise';

export class KanmusuService {

  kanmusuList: KanmusuData[] = [];
  firstFleetList: KanmusuData[] = [];
  thirdFleetList: KanmusuData[] = [];

  /**
   * 艦娘のコンディション値加工
   * 
   * @param data 艦娘データ
   * @param isSort ソートフラグ
   * @param isCond コンディションフラグ
   */
  getKanmusuList(data: string, isSort: boolean, isCond: boolean): FleetList {

    var jsonData = JSON.parse(data);

    // 出撃艦隊一覧
    var fleetList = jsonData["api_data"].api_deck_port

    // 第1艦隊
    var firstFleet;
    // 第3艦隊(遊撃艦隊)
    var thirdFleet;
    
    for (var i = 0; i < fleetList.length; i++) {
      if(fleetList[i].api_id == "1") {
        firstFleet = fleetList[i].api_ship;
      }
      if(fleetList[i].api_id == "3") {
        thirdFleet = fleetList[i].api_ship;
      }
    }

    // 艦娘一覧
    var shipList = jsonData["api_data"].api_ship;

    for (var i = 0; i < shipList.length; i++) {

      var kData = new KanmusuData();
      kData.no = shipList[i].api_id;
      kData.name = this.getKanmusuName(shipList[i].api_ship_id);
      kData.level = shipList[i].api_lv;
      kData.cond = shipList[i].api_cond;

      if ((isSort == true && shipList[i].api_bull == "20") || isSort == false || isSort == undefined) {
        this.kanmusuList.push(kData);
      }

      for (var h = 0; h < firstFleet.length; h++) {
        if(shipList[i].api_id == firstFleet[h]){
          this.firstFleetList.push(kData);
        }
      }

      for (var h = 0; h < thirdFleet.length; h++) {
        if(shipList[i].api_id == thirdFleet[h]){
          this.thirdFleetList.push(kData);
        }
      }
    }
    var result = new FleetList();
    result.allFleet = this.kanmusuList;
    result.firstFleet = this.firstFleetList;
    result.thirdFleet = this.thirdFleetList;

    return result;
  }

  getKanmusuName(id: string): string {
    var nameList: { [key: string]: string } = {};
    nameList["237"] = "電改";
    nameList["204"] = "深雪改";
    nameList["498"] = "村雨改二";
    nameList["246"] = "五月雨改";
    nameList["258"] = "長月改";
    nameList["160"] = "那珂改二";
    nameList["145"] = "時雨改二";
    nameList["247"] = "涼風改";
    nameList["477"] = "天竜改二";
    nameList["236"] = "雷改";
    nameList["221"] = "名取改";
    nameList["264"] = "青葉改";
    nameList["147"] = "ベールヌイ";
    nameList["193"] = "足柄改二";
    nameList["197"] = "蒼龍改二";
    nameList["146"] = "木曾改二";
    nameList["159"] = "神通改二";
    nameList["296"] = "千歳航改二";
    nameList["567"] = "不知火改二";
    nameList["293"] = "夕張改";
    nameList["277"] = "赤城改";
    nameList["215"] = "球磨改";
    nameList["417"] = "加古改二";
    nameList["437"] = "暁改二";
    nameList["229"] = "島風改";
    nameList["152"] = "霧島改二";
    nameList["326"] = "初春改二";
    nameList["187"] = "明石改";
    nameList["149"] = "金剛改二";
    nameList["468"] = "朝潮改二丁";
    nameList["411"] = "扶桑改二";
    nameList["240"] = "若葉改";
    nameList["151"] = "榛名改二";
    nameList["294"] = "舞風改";
    nameList["88"] = "日向改";
    nameList["158"] = "川内改二";
    nameList["270"] = "愛宕改";
    nameList["228"] = "雪風改";
    nameList["282"] = "祥鳳改";
    nameList["412"] = "山城改二";
    nameList["408"] = "隼鷹改二";
    nameList["399"] = "伊58改";
    nameList["119"] = "北上改二";
    nameList["118"] = "大井改二";
    nameList["428"] = "摩耶改二";
    nameList["297"] = "千代田航改二";
    nameList["322"] = "時津風改";
    nameList["200"] = "阿武隈改二";
    nameList["504"] = "熊野改二";
    nameList["553"] = "伊勢改二";
    nameList["427"] = "鳥海改二";
    nameList["73"] = "最上改";
    nameList["184"] = "大鯨";
    nameList["398"] = "伊168改";
    nameList["283"] = "飛鷹改";
    nameList["157"] = "龍驤改二";
    nameList["556"] = "浦風丁改";
    nameList["547"] = "多摩改二";
    nameList["150"] = "比叡改二";
    nameList["400"] = "伊8改";
    nameList["166"] = "あきつ丸改";
    nameList["566"] = "陽炎改二";
    nameList["144"] = "夕立改二";
    nameList["195"] = "綾波改二";
    nameList["141"] = "五十鈴改二";
    nameList["285"] = "鳳翔改";
    nameList["401"] = "伊19改";
    nameList["142"] = "衣笠改二";
    nameList["487"] = "鬼怒改二";
    nameList["497"] = "白露改二";
    nameList["416"] = "古鷹改二";
    nameList["269"] = "高雄改";
    nameList["426"] = "吹雪改二";
    nameList["276"] = "陸奥改";
    nameList["308"] = "弥生改";
    nameList["107"] = "千代田甲";
    nameList["106"] = "千歳甲";
    nameList["434"] = "睦月改二";
    nameList["548"] = "文月改二";
    nameList["261"] = "望月改";
    nameList["435"] = "如月改二";
    nameList["260"] = "三日月改";
    nameList["259"] = "菊月改";
    nameList["418"] = "皐月改二";
    nameList["407"] = "潮改二";
    nameList["196"] = "飛龍改二";
    nameList["192"] = "那智改二";
    nameList["488"] = "由良改二";
    nameList["420"] = "叢雲改二";
    nameList["189"] = "筑摩改二";
    nameList["278"] = "加賀改";
    nameList["188"] = "利根改二";
    nameList["478"] = "龍田改二";
    nameList["568"] = "黒潮改二";
    nameList["558"] = "浜風乙改";
    nameList["560"] = "瑞鳳改二乙";
    nameList["231"] = "曙改";
    nameList["208"] = "敷波改";
    nameList["430"] = "葛城改";
    nameList["503"] = "鈴谷改二";
    nameList["402"] = "まるゆ改";
    nameList["329"] = "野分改";
    nameList["446"] = "Italia";
    nameList["198"] = "霰改二";
    nameList["316"] = "天津風改";
    nameList["447"] = "Roma改";
    nameList["450"] = "秋津洲改";
    nameList["232"] = "漣改";
    nameList["559"] = "谷風丁改";
    nameList["321"] = "大淀改";
    nameList["301"] = "秋雲改";
    nameList["406"] = "雲龍改";
    nameList["563"] = "巻雲改二";
    nameList["345"] = "高波改";
    nameList["309"] = "卯月改";
    nameList["218"] = "長良改";
    nameList["436"] = "呂500";
    nameList["467"] = "瑞鶴改二甲";
    nameList["466"] = "翔鶴改二甲";
    nameList["305"] = "阿賀野改";
    nameList["325"] = "清霜改";
    nameList["324"] = "早霜改";
    nameList["121"] = "三隈改";
    nameList["557"] = "磯風乙改";
    nameList["307"] = "矢作改";
    nameList["199"] = "大潮改二";
    nameList["490"] = "荒潮改二";
    nameList["489"] = "満潮改二";
    nameList["179"] = "Z1 zwei";
    nameList["194"] = "羽黒改二";
    nameList["319"] = "妙高改二";
    nameList["543"] = "長波改二";
    nameList["180"] = "Z3 zwei";
    nameList["464"] = "霞改二";
    nameList["542"] = "夕雲改二";
    nameList["136"] = "大和改";
    nameList["203"] = "初雪改";
    nameList["202"] = "白雪改";
    nameList["239"] = "子日改";
    nameList["323"] = "春雨改";
    nameList["306"] = "能代改";
    nameList["469"] = "江風改二";
    nameList["348"] = "瑞穂改";
    nameList["541"] = "長門改二";
    nameList["350"] = "海風改";
    nameList["352"] = "速吸改";
    nameList["347"] = "Libeccio改";
    nameList["327"] = "朝雲改";
    nameList["419"] = "初霜改二";
    nameList["349"] = "風雲改";
    nameList["346"] = "照月改";
    nameList["318"] = "龍鳳改";
    nameList["344"] = "朝霜改";
    nameList["230"] = "朧改";
    nameList["185"] = "龍鳳";
    nameList["343"] = "香取改";
    nameList["300"] = "初風改";
    nameList["356"] = "鹿島改";
    nameList["177"] = "Prinz Eugen改";
    nameList["353"] = "Graf Zepplin改";
    nameList["354"] = "嵐改";
    nameList["355"] = "萩風改";
    nameList["357"] = "初月改";
    nameList["314"] = "酒匂改";
    nameList["496"] = "Zara due";
    nameList["359"] = "沖波改";
    nameList["330"] = "秋月改";
    nameList["178"] = "Bismarck drei";
    nameList["183"] = "大淀";
    nameList["156"] = "大鳳改";
    nameList["206"] = "磯波改";
    nameList["476"] = "神風改";
    nameList["334"] = "U-551改";
    nameList["403"] = "伊401改";
    nameList["429"] = "天城改";
    nameList["361"] = "Pola改";
    nameList["362"] = "親潮改";
    nameList["363"] = "春風改";
    nameList["360"] = "Iowa改";
    nameList["546"] = "武蔵改二";
    nameList["57"] = "大井改";
    nameList["191"] = "伊19";
    nameList["58"] = "北上改";
    nameList["366"] = "水無月改";
    nameList["367"] = "伊26改";
    nameList["365"] = "Aquila改";
    nameList["364"] = "Warspite改";
    nameList["191"] = "伊19";
    nameList["127"] = "伊58";
    nameList["126"] = "伊168";
    nameList["368"] = "浦波改";
    nameList["128"] = "伊8";
    nameList["328"] = "山雲改";
    nameList["369"] = "山風改";
    nameList["372"] = "Commndan Test";
    nameList["370"] = "朝風改";
    nameList["545"] = "Saratoga Mk.2";
    nameList["153"] = "大鳳";
    nameList["373"] = "藤浪改";
    nameList["371"] = "松風改";
    nameList["374"] = "伊13改";
    nameList["375"] = "伊14改";
    nameList["509"] = "熊野航改二";
    nameList["508"] = "鈴谷航改二";
    nameList["494"] = "伊13";
    nameList["377"] = "国後改";
    nameList["499"] = "神威改";
    nameList["376"] = "占守改";
    nameList["529"] = "大鷹改二";
    nameList["383"] = "択捉改";
    nameList["513"] = "ガングート改";
    nameList["391"] = "狭霧改";
    nameList["387"] = "旗風改";
    nameList["390"] = "天霧改";
    nameList["392"] = "Richelieu改";
    nameList["525"] = "松輪";
    nameList["441"] = "Littorio";
    nameList["530"] = "伊504";
    nameList["393"] = "Ark Royal改";
    nameList["162"] = "神威";
    nameList["550"] = "Saratoga Mk.2 Mod";
    nameList["540"] = "対馬";
    nameList["531"] = "佐渡";
    nameList["493"] = "伊400";
    nameList["537"] = "涼月改";
    nameList["551"] = "日振";
    nameList["552"] = "大東";
    nameList["394"] = "Jervis改";
    nameList["396"] = "Gambier Bay改";
    nameList["395"] = "タシュケント改";
    nameList["511"] = "ガングート";
    nameList["492"] = "Richelieu";
    nameList["397"] = "Intrepid改";
    nameList["181"] = "天津風";
    nameList["680"] = "浜波改";
    nameList["171"] = "Bismarck";
    nameList["681"] = "Samuel B.Robert";
    nameList["565"] = "服江";
    nameList["110"] = "翔鶴";
    nameList["111"] = "瑞鶴";
    nameList["163"] = "まるゆ";
    nameList["454"] = "嵐";
    nameList["120"] = "三隈";
    nameList["534"] = "神鷹";
    nameList["579"] = "Gotland改";
    nameList["580"] = "Maestrale改";
    nameList["576"] = "Nelson改";
    nameList["432"] = "Graf Zeppelin";
    nameList["439"] = "Warspite";
    nameList["176"] = "Prinz Eugen";
    nameList["515"] = "Ark Royal";
    nameList["483"] = "伊26";
    nameList["449"] = "Pola";
    nameList["271"] = "麻耶改";
    nameList["521"] = "春日丸";
    nameList["686"] = "岸波改";
    nameList["82"] = "伊勢改";
    nameList["574"] = "Gotland";
    nameList["117"] = "瑞鳳改";
    nameList["123"] = "衣笠";
    nameList["13"] = "綾波";
    nameList["81"] = "陸奥";
    nameList["43"] = "時雨";
    nameList["40"] = "若葉";
    nameList["59"] = "古鷹";
    nameList["94"] = "漣";
    nameList["68"] = "麻耶";
    nameList["51"] = "天竜";
    nameList["65"] = "羽黒";
    nameList["14"] = "敷波";
    nameList["165"] = "卯月";
    nameList["64"] = "足柄";
    nameList["101"] = "木曾";
    nameList["9"] = "吹雪";
    nameList["31"] = "望月";
    nameList["47"] = "涼風";
    nameList["500"] = "神威改母";
    nameList["606"] = "伊400改";
    nameList["555"] = "瑞鳳改二";
    nameList["687"] = "峯雲改";
    nameList["689"] = "Johnston改";
    nameList["586"] = "日進甲";
    nameList["688"] = "早波改";
    nameList["564"] = "風雲改二";
    nameList["1496"] = "Colorado改";
    nameList["491"] = "Commandantest";
    nameList["692"] = "Fletcher改";
    nameList["585"] = "石垣";
    nameList["691"] = "G.Garibaldi改";
    nameList["535"] = "Luigi Torelli";
    nameList["584"] = "石垣";
    nameList["532"] = "涼月";
    nameList["381"] = "神鷹改";
    nameList["112"] = "瑞鶴改";
    nameList["288"] = "翔鶴改";
    nameList["587"] = "海風改二";
    nameList["573"] = "陸奥改二";
    nameList["554"] = "日向改二";
    nameList["591"] = "金剛改二";
    nameList["594"] = "赤城改二";
    nameList["520"] = "Janus";
    nameList["589"] = "L.d.S.D.d.Abru";
    nameList["614"] = "Grecale";
    nameList["611"] = "御蔵";
    nameList["592"] = "比叡改二丙";
    nameList["629"] = "Fletcher Mk2";
    nameList["358"] = "Zara改";
    nameList["619"] = "Grecale改";
    nameList["693"] = "L.d.S.D.d.Abruzzi改";
    nameList["893"] = "Janus改";
    nameList["451"] = "瑞穂";
    nameList["331"] = "天城";
    nameList["609"] = "De Ruyter改";
    nameList["618"] = "Perth改";
    nameList["600"] = "Houston改";
    nameList["626"] = "神州丸改";
    nameList["695"] = "秋霜改";
    nameList["579"] = "平戸";
    nameList["445"] = "秋津洲";
    nameList["696"] = "Atlanta改";
    nameList["700"] = "薄雲改";
    nameList["634"] = "迅鯨";
    nameList["131"] = "大和";
    nameList["570"] = "平戸";
    nameList["155"] = "伊401";
    nameList["275"] = "長門改";
    nameList["636"] = "伊47";
    nameList["495"] = "伊4";
    nameList["637"] = "第四号海防艦";
    nameList["562"] = "Johnston";
    nameList["641"] = "松";
    nameList["615"] = "Helena";
    nameList["632"] = "有明";
    nameList["114"] = "阿武隈";
    nameList["697"] = "South Dakota改";
    nameList["703"] = "有明改";
    nameList["603"] = "Hornet";
    nameList["644"] = "桃";
    nameList["882"] = "伊203";
    nameList["655"] = "Northampton";
    nameList["601"] = "Colorado";
    nameList["517"] = "占守";
    nameList["671"] = "巻波";
    nameList["124"] = "鈴谷";
    nameList["125"] = "熊野";
    nameList["602"] = "South Dakota";
    nameList["85"] = "霧島";
    nameList["32"] = "初雪";
    nameList["27"] = "山城";
    nameList["17"] = "陽炎";
    nameList["93"] = "朧";
    nameList["113"] = "鬼怒";
    nameList["26"] = "扶桑";
    nameList["60"] = "加古";
    nameList["11"] = "深雪";
    nameList["642"] = "竹";
    nameList["621"] = "神州丸";
    nameList["654"] = "Washington";
    nameList["519"] = "Jervis";
    nameList["514"] = "Sheffield";
    nameList["658"] = "Scirocco改";
    nameList["704"] = "Hornet改";
    nameList["612"] = "屋代";
    nameList["290"] = "阿武隈改";
    nameList["620"] = "Helena改";
    nameList["702"] = "松改";
    nameList["701"] = "第四号海防艦改";
    nameList["607"] = "伊47改";
    nameList["639"] = "迅鯨改";
    nameList["630"] = "Gotland andra";
    nameList["536"] = "神鷹改二";
    nameList["569"] = "沖波改二";
    nameList["578"] = "朝霜改二";
    nameList["888"] = "龍鳳改二";
    nameList["662"] = "能代改二";
    nameList["668"] = "矢矧改二乙";
    nameList["648"] = "秋雲改二";
    nameList["649"] = "高波改二";
    nameList["665"] = "曙改二";
    nameList["627"] = "敷波改二";
    nameList["698"] = "加賀改二";
    nameList["506"] = "最上改二";
    nameList["656"] = "雪風改二";
    nameList["623"] = "夕張改二特";
    nameList["652"] = "球磨改二";
    nameList[""] = "";
    var result = nameList[id];

    return result == null ? "名称不明(" + id + ")" : result;
  }
}
