export interface IContentCreation {
  skylink: string; // skylink
  metadata: object; // should be valid JSON
}

export interface IContentInteraction {
  skylink: string; // skylink
  metadata: object; // should be valid JSON
}

export interface IDACResponse {
  submitted: boolean;
  error?: string;
}

export enum skappActionType {
  'PUBLISH',
  'REPUBLISH',
  'DEPLOY',
  'REDEPLOY',
  'VIEWED',
  'ACCESSED',
  'FAVORITE',
  'UNFAVORITE',
  'LIKED',
  'UNLIKED',
  'ADD_COMMENT',
  'EDIT_COMMENT',
  'REMOVE_COMMENT'
  }
export interface IContentRecordDAC {
  publishApp(userid:string,appId:string,data:any): Promise<IDACResponse>;
  deployApp(userid:string,appId:string,data:any): Promise<IDACResponse>;
}
