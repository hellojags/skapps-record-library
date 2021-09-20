export declare const VERSION = 1;
export interface IDACResponse {
    submitted: boolean;
    error?: string;
}
export interface ISkappsRecordDAC {
    setDeployment(data: IDeploymentRecord): Promise<IDACResponse>;
    getDeployments(appIds?: string[]): Promise<any>;
    setPublishedApp(data: IPublishedAppRecord): Promise<IDACResponse>;
    getPublishedApps(appIds?: string[], userId?: string): Promise<any>;
    getPublishedAppIds(userId?: string): Promise<any>;
    likeApp(appId: string): Promise<IDACResponse>;
    unlikeApp(appId: string): Promise<IDACResponse>;
    favouriteApp(appId: string): Promise<IDACResponse>;
    unfavouriteApp(appId: string): Promise<IDACResponse>;
    viewedApp(appId: string): Promise<IDACResponse>;
    accessedApp(appId: string): Promise<IDACResponse>;
    getStats(appIds?: string[], userId?: string): Promise<any>;
}
export interface IDeployedAppsDDIDX {
    version: number;
    appsIndex: IKeyValueMap<IDeployedAppsDDIDXRecord> | null;
    timestamp: number;
}
export interface IDeployedAppsDDIDXRecord {
    appId: string;
    ddCounter: number;
    latestDataLink: string;
    lastUpdatedBy: string;
    skapps: string[];
}
export interface IDeployedAppsSDIDX {
    version: number;
    appsIndex: IKeyValueMap<IDeployedAppsSDIDXRecord> | null;
    timestamp: number;
}
export interface IDeployedAppsSDIDXRecord {
    appId: string;
    sdCounter: number;
    latestDataLink: string;
}
export interface IDeploymentRecord {
    version: number;
    $type: string;
    $subType: string;
    appId: string;
    content: IDeploymentContent;
    ddCounter?: number;
    timestamp: number;
}
export interface IDeploymentContent {
    appName: string;
    appLogo: IMedia[];
    domainNames?: string[];
    entryPath: string;
    entryLink: string;
    dataLink: string;
    skynetPortal: string;
    defaultPath: string;
    notes?: string;
}
export declare const DEFAULT_DD_DEPLOYED_APPS_INDEX: IDeployedAppsDDIDX;
export declare const DEFAULT_SD_DEPLOYED_APPS_INDEX: IDeployedAppsSDIDX;
export interface IPublishedAppsDDIDX {
    version: number;
    appsIndex: IKeyValueMap<IPublishedAppsDDIDXRecord> | null;
    timestamp: number;
}
export interface IPublishedAppsDDIDXRecord {
    appId: string;
    ddCounter: number;
    latestDataLink: string;
    lastUpdatedBy: string;
    skapps: string[];
}
export interface IPublishedAppsSDIDX {
    version: number;
    appsIndex: IKeyValueMap<IPublishedAppsSDIDXRecord> | null;
    timestamp: number;
}
export interface IPublishedAppsSDIDXRecord {
    appId: string;
    sdCounter: number;
    latestDataLink: string;
}
export interface IPublishedAppRecord {
    version: number;
    $type: string;
    $subType: string;
    appId: string;
    content: IPublishedAppContent;
    ddCounter?: number;
    timestamp: number;
}
export interface IPublishedAppContent {
    appLogo: IMediaRecord[];
    appName: string;
    appUrl: string;
    appVersion: string;
    appStatus: string;
    category: string;
    tags?: string[];
    gitUrl?: string;
    demoUrl?: string;
    age: string;
    previewMedia?: IMedia[];
    appDescription: string;
    releaseNotes?: string;
    connections?: IKeyValueMap<string>;
}
export declare const DEFAULT_DD_PUBLISHED_APPS_INDEX: IPublishedAppsDDIDX;
export declare const DEFAULT_SD_PUBLISHED_APPS_INDEX: IPublishedAppsSDIDX;
export interface IPublishedAppsStatsDDIDX {
    version: number;
    appsIndex: IKeyValueMap<IPublishedAppsStatsDDIDXRecord> | null;
    timestamp: number;
}
export interface IPublishedAppsStatsDDIDXRecord {
    appId: string;
    ddCounter: number;
    publishedAppStatsRecord: IPublishedAppStatsRecord | null;
    lastUpdatedBy: string;
    skapps: string[];
}
export interface IPublishedAppsStatsSDIDX {
    version: number;
    appsIndex: IKeyValueMap<IPublishedAppsStatsSDIDXRecord> | null;
    timestamp: number;
}
export interface IPublishedAppsStatsSDIDXRecord {
    appId: string;
    sdCounter: number;
    publishedAppStatsRecord: IPublishedAppStatsRecord | null;
}
export interface IPublishedAppStatsRecord {
    version: number;
    $type: string;
    $subType: string;
    appId: string | null;
    content: IPublishedAppStatsContent;
    ddCounter?: number;
    timestamp: number;
}
export interface IPublishedAppStatsContent {
    favorite: number;
    liked: number;
    viewed: number;
    accessed: number;
}
export declare const DEFAULT_DD_PUBLISHED_APPS_STATS_INDEX: IPublishedAppsStatsDDIDX;
export declare const DEFAULT_SD_PUBLISHED_APPS_STATS_INDEX: IPublishedAppsStatsSDIDX;
export declare const DEFAULT_PUBLISHED_APPS_STATS_RECORD: IPublishedAppStatsRecord;
export interface IKeyValueMap<T> {
    [key: string]: T;
}
export interface IMedia {
    thumbnail: IMediaRecord[];
    originalContent: IMediaRecord[];
}
export interface IMediaRecord {
    ext: string;
    w: number;
    h: number;
    url: string;
}
export interface IPublishedAppsStats {
    version: number;
    publishedAppsStatsMap: IKeyValueMap<IPublishedAppStats> | null;
    timestamp: number;
}
export interface IPublishedAppStats {
    latestPublishedAppStatsRecord: IPublishedAppStatsRecord;
    lastUpdatedBy: string;
    skapps: string[] | null;
}
export interface IPublishedAppStatsRecord {
    version: number;
    $type: string;
    $subType: string;
    appId: string | null;
    content: IPublishedAppStatsContent;
    timestamp: number;
}
export interface IPublishedAppStatsContent {
    favorite: number;
    viewed: number;
    liked: number;
    accessed: number;
}
export interface ISkappPublishedAppsStats {
    version: number;
    publishedAppRecords: IPublishedAppStatsRecord[] | null;
    timestamp: number;
}
export interface ISkappPublishedAppsStatsIndex {
    version: number;
    publishedAppIds: string[] | null;
    timestamp: number;
}
export declare enum skappActionType {
    'VIEWED' = 0,
    'ACCESSED' = 1,
    'FAVORITE' = 2,
    'UNFAVORITE' = 3,
    'LIKED' = 4,
    'UNLIKED' = 5,
    'ADD_COMMENT' = 6,
    'EDIT_COMMENT' = 7,
    'REMOVE_COMMENT' = 8
}
export interface IDomainIndex {
    version: number;
    domains: Map<string, IDomain>;
    lastUpdatedBy: string;
}
export interface IDomain {
    version: number;
    domainType: string;
    domainName: string;
    domainRecords: IDomainRecord[];
    status: string;
    timestamp: number;
}
export interface IDomainRecord {
    recordType: number;
    recordValue: string;
    dataLink: string;
}
export interface IDomainHistoryLog {
    version: number;
    historyRecord: IDomainHistoryRecord[];
}
export interface IDomainHistoryRecord {
    domainType: string;
    domainName: string;
    dataLink: string;
    updatedBy: string;
    timestamp: number;
}
export interface ISkappDomainIndex {
    version: number;
    domains: IDomain[];
    timestamp: number;
}
export interface IOptions {
    skapp?: string;
}
//# sourceMappingURL=types.d.ts.map