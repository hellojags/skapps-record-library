import { DacLibrary } from "skynet-js";
import { Permission } from "skynet-mysky-utils";
import { ISkappsRecordDAC, IDACResponse, IDeploymentRecord, IPublishedAppRecord } from "./types";
export declare class SkappDAC extends DacLibrary implements ISkappsRecordDAC {
    private client;
    constructor();
    getPermissions(): Permission[];
    setDeployment(data: IDeploymentRecord): Promise<IDACResponse>;
    getDeployments(appIds: string[]): Promise<IDACResponse>;
    setPublishedApp(data: IPublishedAppRecord): Promise<IDACResponse>;
    getPublishedApps(appIds?: string[], userId?: string): Promise<IDACResponse>;
    getPublishedAppIds(userId?: string): Promise<IDACResponse>;
    likeApp(appId: string): Promise<IDACResponse>;
    unlikeApp(appId: string): Promise<IDACResponse>;
    favouriteApp(appId: string): Promise<IDACResponse>;
    unfavouriteApp(appId: string): Promise<IDACResponse>;
    viewedApp(appId: string): Promise<IDACResponse>;
    accessedApp(appId: string): Promise<IDACResponse>;
    getStats(appIds?: string[], userId?: string): Promise<IDACResponse>;
    private log;
}
//# sourceMappingURL=index.d.ts.map