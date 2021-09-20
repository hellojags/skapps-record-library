export const VERSION = 1;
export interface IDACResponse {
  submitted: boolean;
  error?: string;
}
export interface ISkappsRecordDAC {
  // Deploy App Functionality
  setDeployment(data: IDeploymentRecord): Promise<IDACResponse>;
  getDeployments(appIds?: string[]): Promise<any>; // If null will return all deployments
  
  // Publish App Functionality
  setPublishedApp(data: IPublishedAppRecord): Promise<IDACResponse>;
  getPublishedApps(appIds?: string[], userId?: string): Promise<any>;
  getPublishedAppIds(userId?: string): Promise<any>;

  // Publish App Stats/Interactions Functionality
  likeApp(appId:string): Promise<IDACResponse>;
  unlikeApp(appId:string): Promise<IDACResponse>;
  favouriteApp(appId:string): Promise<IDACResponse>;
  unfavouriteApp(appId:string): Promise<IDACResponse>;
  viewedApp(appId:string): Promise<IDACResponse>;
  accessedApp(appId:string): Promise<IDACResponse>;
  getStats(appIds?: string[], userId?: string): Promise<any>;
  // addComment(appId:string,data:any): Promise<IDACResponse>;
  // getComments(appId:string): Promise<any>;
}

// ## Deployment Models 
export interface IDeployedAppsDDIDX {
  version: number,
  appsIndex: IKeyValueMap<IDeployedAppsDDIDXRecord> | null,
  timestamp: number
}
export interface IDeployedAppsDDIDXRecord {
  appId: string,
  ddCounter: number,
  latestDataLink: string,
  lastUpdatedBy: string,
  skapps: string[]
}
export interface IDeployedAppsSDIDX {
  version: number,
  appsIndex: IKeyValueMap<IDeployedAppsSDIDXRecord> | null,
  timestamp: number
}
export interface IDeployedAppsSDIDXRecord {
  appId: string,
  sdCounter: number,
  latestDataLink: string,
}
export interface IDeploymentRecord {
  version: number,
  $type: string,//skapp
  $subType: string,//deployment
  appId: string,
  content: IDeploymentContent,
  ddCounter?: number,//This value will be set by DAC
  timestamp: number, //This value will be set by DAC
}
export interface IDeploymentContent {
  appName: string,
  appLogo: IMedia[],
  domainNames?: string[],
  entryPath: string,
  entryLink: string,
  dataLink: string,
  skynetPortal: string,
  defaultPath: string,
  notes?: string, // to store git commit or other deployment related notes. 
}

export const DEFAULT_DD_DEPLOYED_APPS_INDEX: IDeployedAppsDDIDX = {
  version: VERSION,
  appsIndex: null, // list of AppIds
  timestamp: (new Date()).valueOf()
}

export const DEFAULT_SD_DEPLOYED_APPS_INDEX: IDeployedAppsSDIDX = {
  version: VERSION,
  appsIndex: null, // list of AppIds
  timestamp: (new Date()).valueOf()
}

// Published App Model
export interface IPublishedAppsDDIDX {
  version: number,
  appsIndex: IKeyValueMap<IPublishedAppsDDIDXRecord> | null,
  timestamp: number
}
export interface IPublishedAppsDDIDXRecord {
  appId: string,
  ddCounter: number,
  latestDataLink: string,
  lastUpdatedBy: string,
  skapps: string[]
}
export interface IPublishedAppsSDIDX {
  version: number,
  appsIndex: IKeyValueMap<IPublishedAppsSDIDXRecord> | null,
  timestamp: number
}
export interface IPublishedAppsSDIDXRecord {
  appId: string,
  sdCounter: number,
  latestDataLink: string,
}
export interface IPublishedAppRecord {
  version: number,
  $type: string,//skapp
  $subType: string,//publishedApp
  appId: string,
  content: IPublishedAppContent,
  ddCounter?: number,//This value will be set by DAC
  timestamp: number, //This value will be set by DAC
}
export interface IPublishedAppContent {
  appLogo: IMediaRecord[],
  appName: string,
  appUrl: string,// domain url (hne, ens..etc) or entryLinkUrl or dataLinkUrl 
  appVersion: string, // x.x.x
  appStatus: string, // Alpha, Beta , Live
  category: string,
  tags?: string[],
  gitUrl?: string,
  demoUrl?: string,//"demoUrl": "[46 Character SKYLINK]",
  age: string;//"age": "[18+|general]",
  previewMedia?: IMedia[],
  appDescription: string,
  releaseNotes?: string,
  connections?: IKeyValueMap<string>,
}

export const DEFAULT_DD_PUBLISHED_APPS_INDEX: IPublishedAppsDDIDX = {
  version: VERSION,
  appsIndex: null, // list of AppIds
  timestamp: (new Date()).valueOf()
}

export const DEFAULT_SD_PUBLISHED_APPS_INDEX: IPublishedAppsSDIDX = {
  version: VERSION,
  appsIndex: null, // list of AppIds
  timestamp: (new Date()).valueOf()
}
// Published App Stats Model
export interface IPublishedAppsStatsDDIDX {
  version: number,
  appsIndex: IKeyValueMap<IPublishedAppsStatsDDIDXRecord> | null,
  timestamp: number
}
export interface IPublishedAppsStatsDDIDXRecord {
  appId: string,
  ddCounter: number,
  publishedAppStatsRecord: IPublishedAppStatsRecord | null,
  //latestDataLink : string,
  lastUpdatedBy: string,
  skapps: string[]
}
export interface IPublishedAppsStatsSDIDX {
  version: number,
  appsIndex: IKeyValueMap<IPublishedAppsStatsSDIDXRecord> | null,
  timestamp: number
}
export interface IPublishedAppsStatsSDIDXRecord {
  appId: string,
  sdCounter: number,
  publishedAppStatsRecord: IPublishedAppStatsRecord |null,
  //latestDataLink : string,
}
export interface IPublishedAppStatsRecord {
  version: number,
  $type: string,//skapp
  $subType: string,//publishedApp
  appId: string|null,
  content: IPublishedAppStatsContent,
  ddCounter?: number,//This value will be set by DAC
  timestamp: number, //This value will be set by DAC
}
export interface IPublishedAppStatsContent {
  favorite: number,
  liked: number,
  viewed: number, // counter increments everytime card is clicked to view details
  accessed: number, // counter increments everytime app URL is clicked
}

export const DEFAULT_DD_PUBLISHED_APPS_STATS_INDEX: IPublishedAppsStatsDDIDX = {
  version: VERSION,
  appsIndex: null, // list of AppIds
  timestamp: (new Date()).valueOf()
}

export const DEFAULT_SD_PUBLISHED_APPS_STATS_INDEX: IPublishedAppsStatsSDIDX = {
  version: VERSION,
  appsIndex: null, // list of AppIds
  timestamp: (new Date()).valueOf()
}
export const DEFAULT_PUBLISHED_APPS_STATS_RECORD: IPublishedAppStatsRecord = {
  version: VERSION,
  $type: "skapp",
  $subType: "interactions",//publishedApp
  appId: null,
  content: {
    favorite: 0,
    liked: 0,
    viewed: 0,
    accessed: 0,
  },
  ddCounter: 0,//This value will be set by DAC
  timestamp: (new Date()).valueOf()
}
//common Models
export interface IKeyValueMap<T> {
  [key: string]: T,
}
export interface IMedia {
  thumbnail: IMediaRecord[],
  originalContent: IMediaRecord[]
}

export interface IMediaRecord { // Image or Video
  ext: string,
  w: number,
  h: number,
  url: string, //data link sia://
}

// Published App Stats Model
export interface IPublishedAppsStats {
  version: number,
  publishedAppsStatsMap: IKeyValueMap<IPublishedAppStats> | null,// appId : IPublishedAppStats
  timestamp: number,
}
export interface IPublishedAppStats {
  latestPublishedAppStatsRecord: IPublishedAppStatsRecord,
  lastUpdatedBy: string, // skapp name
  skapps: string[] | null,
}
export interface IPublishedAppStatsRecord {
  version: number,
  $type: string,//skapp
  $subType: string,//stats
  appId: string|null,
  content: IPublishedAppStatsContent,
  timestamp: number
}
export interface IPublishedAppStatsContent {
  favorite: number,
  viewed: number, // counter increments everytime card is clicked to view details
  liked: number,
  accessed: number, // counter increments everytime app URL is clicked
}
export interface ISkappPublishedAppsStats {
  version: number,
  publishedAppRecords: IPublishedAppStatsRecord[] | null, // list of deploymentRecords
  timestamp: number,
}
export interface ISkappPublishedAppsStatsIndex {
  version: number,
  publishedAppIds: string[] | null,// list of AppIds for which stats are available (User has performed stats action)
  timestamp: number,
}

export enum skappActionType {
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

// ##### Domain Model
export interface IDomainIndex {
  version: number;
  domains: Map<string,IDomain>; // { skyspace.hns : {Domain JSON}, skyfeed.hns : {Domain JSON} }
  lastUpdatedBy: string;
}
export interface IDomain {
  version: number; // 1 for now
  domainType: string;//HNS, ENS..etc
  domainName: string;// skyfeed, skyspaces...etc
  domainRecords: IDomainRecord[]; // TXT for now
  status: string; //active, inactive
  timestamp: number; 
}
export interface IDomainRecord {
  recordType: number; // TXT for now
  recordValue: string; // sia:{skylinkv2}
  dataLink: string; // SkylinkV1 of uploaded code/site
}
export interface IDomainHistoryLog {
  version: number;
  historyRecord : IDomainHistoryRecord[];
}
export interface IDomainHistoryRecord
{
  domainType: string;//HNS, ENS..etc
  domainName: string;// skyfeed, skyspaces...etc
  dataLink: string; // skylinkV1 of uploaded data 
  updatedBy: string; //Updated by skapp name
  timestamp: number; 
}

// domain-dac/{skapp}.hns/domainName.domainType.json
export interface ISkappDomainIndex {
  version: number;
  domains: IDomain[];
  timestamp: number; 
}
export interface IOptions {
  skapp?: string
}