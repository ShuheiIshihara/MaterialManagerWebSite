export class Material{
  dataID: number;               // id
  fuel: number;                 // 燃料
  ammunition: number;           // 弾薬
  steel: number;                // 鋼材
  bauxite: number;              // ボーキサイト
  bucket: number;               // 高速修復材
  dMaterial: number;            // 開発資材
  screw: number;                // 改修資材
  banner: number;               // 高速建造材
  level: number;                // 提督レベル
  winning_sortie: number;       // 出撃の勝数
  defeatting_sortie: number;    // 出撃の敗数
  expedition: number;           // 遠征の回数
  successs_expedition: number;  // 遠征の成功数
  winning_exercises: number;    // 演習の勝数
  defeatting_exercises: number; // 演習の敗数
  veterans: number;             // 戦果
  ranking: number;              // 順位
  date: string;                 // 日付
}
