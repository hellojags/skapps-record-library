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
export interface ISkappsRecordDAC {
  publishApp(appId:string,data:any): Promise<IDACResponse>;
  deployApp(appId:string,data:any): Promise<IDACResponse>;
  likeApp(appId:string): Promise<IDACResponse>;
  unlikeApp(appId:string): Promise<IDACResponse>;
  favouriteApp(appId:string): Promise<IDACResponse>;
  unfavouriteApp(appId:string): Promise<IDACResponse>;
  viewedApp(appId:string): Promise<IDACResponse>;
  accessedApp(appId:string): Promise<IDACResponse>;
  addComment(appId:string,data:any): Promise<IDACResponse>;
  publishedAppCount():Promise<any>;
  getPublishedApps(appIds:string[]): Promise<any>;
  getDeployedApps(appIds:string[]): Promise<any>;
  getSkappsInfo(appIds:string[]): Promise<any>;
  getSkappStats(appId:string): Promise<any>;
  getSkappComments(appId:string): Promise<any>;
  getPublishedAppDetailsByUserId(    userId:string,appId:string   ): Promise<any> ;
  getPublishedAppsByUserIds( userIds:string[] ): Promise<any>;
}
export interface IApp
  {
  id: string;
  version : string;//"version": "1",
  prevSkylink?:string ;//"prevSkylink":"",
  ts: string;
  }

  export interface IDeployedApp extends IApp{
    content: IAppContent;//"content": ,
  }
  export interface IPublishedApp extends IApp{
    content: IPublishAppContent;
  }

  export interface IPublishAppContent extends IAppContent
  {
    skappLogo:IImage;//"skappLogo": "[46 Character SKYLINK]",
    demoUrl:string;//"demoUrl": "[46 Character SKYLINK]",
    age:string;//"age": "[18+|general]",
    appUrl:string;//"appUrl": "skylink URL",
    category: string,
    tags?: string[],
    appStatus: string,
    appDescription: string,
    releaseNotes?: string,
    supportDetails?: string,
    connections?: any,
    previewImages?:IPreview
    
}

export interface IPreview {
  aspectRatio: string,
  images: IImage[]
}


export interface IImage {
  thumbnail: string,
  image: string
}

  export interface IAppContent{
    
    storageGateway:string;//"storageGateway": "skynetportalUrl",
    hns:string;//  "hns": "skyfeed",
    appname:string;
    skylink:string ;//  "skylink": "skylink",
    defaultPath:string; //  "defaultPath": "index.html or EMPTY",
    portalMinVersion:string; //  "portalMinVersion": "1.5",
    sourceCode:string;//  "sourceCode": "git url",
    history?: string[];//  "history": [ "list of skylinks"]
  }

export interface IAppInfo {
  skylink: string;    // skylink
  metadata: object;   // should be valid JSON
}
export interface IAppStats extends IApp
{
  content: IAppStatsContents;
}
export interface IAppStatsContents{
  favorite : number;
  viewed: number; // counter increments everytime card is clicked to view details
  liked : number;
  accessed : number; // counter increments everytime app URL is clicked 
}
export interface IAppComments extends IApp
{
  content: IAppCommentsContents
}
export interface IAppCommentsContents{
  comments : IComments[];
}
export interface IComments{
  timestamp: string;
  comment:string;
}

export interface IContentPersistence {
  timestamp: number;  // unix timestamp of recording
}
