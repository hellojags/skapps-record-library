import { DacLibrary } from "skynet-js";
import { Permission } from "skynet-mysky-utils";
import { IContentInteraction, ISkappsRecordDAC, IDACResponse } from "./types";
export declare class SkappsRecordDAC extends DacLibrary implements ISkappsRecordDAC {
    private client;
    constructor();
    getPermissions(): Permission[];
    publishApp(appId: string, data: any): Promise<IDACResponse>;
    deployApp(appId: string, data: any): Promise<IDACResponse>;
    likeApp(appId: string): Promise<IDACResponse>;
    unlikeApp(appId: string): Promise<IDACResponse>;
    favouriteApp(appId: string): Promise<IDACResponse>;
    unfavouriteApp(appId: string): Promise<IDACResponse>;
    viewedApp(appId: string): Promise<IDACResponse>;
    accessedApp(appId: string): Promise<IDACResponse>;
    addComment(appId: string, data: any): Promise<IDACResponse>;
    getPublisedApps(appIds: string[]): Promise<any>;
    getDeployedApps(appIds: string[]): Promise<IDACResponse>;
    getSkappsInfo(appIds: string[]): Promise<IDACResponse>;
    getSkappStats(appId: string): Promise<IDACResponse>;
    getSkappComments(appId: string): Promise<IDACResponse>;
    recordInteraction(...data: IContentInteraction[]): Promise<IDACResponse>;
    private downloadFile;
    private log;
}
//# sourceMappingURL=index.d.ts.map