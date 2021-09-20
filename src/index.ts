import { DacLibrary, SkynetClient } from "skynet-js";
import { PermCategory, Permission, PermType } from "skynet-mysky-utils";

import {
  ISkappsRecordDAC,
  IDACResponse,
  skappActionType,
  IDeploymentRecord,
  IPublishedAppRecord
} from "./types";

const DAC_DOMAIN = "skapp-dac.hns";
const DEBUG_ENABLED = "true";
export class SkappDAC extends DacLibrary implements ISkappsRecordDAC {
  private client: SkynetClient;

  public constructor() {
    super(DAC_DOMAIN);
    this.client = new SkynetClient();
    //const hostname = new URL(document.referrer).hostname
  }
  public getPermissions(): Permission[] {
    return [
      new Permission(
        DAC_DOMAIN,
        DAC_DOMAIN,
        PermCategory.Discoverable,
        PermType.Read
      ),
      new Permission(
        DAC_DOMAIN,
        DAC_DOMAIN,
        PermCategory.Discoverable,
        PermType.Write
      ),
    ];
  }
  // #####################################################################################
  // ###################### Deployment Methods ###########################################
  // #####################################################################################
  public async setDeployment(
    data: IDeploymentRecord
  ): Promise<IDACResponse> {
    if (!this.connector) {
      throw new Error("Connector not initialized");
    }
    this.log('calling setDeployment AppId ' + data.appId);
    return await this.connector.connection
      .remoteHandle()
      .call("setDeployment", data);
  }
  public async getDeployments(
    appIds: string[]
  ): Promise<IDACResponse> {
    if (!this.connector) {
      throw new Error("Connector not initialized");
    }
    this.log('calling getDeployments appIds ' + appIds);
    return await this.connector.connection
      .remoteHandle()
      .call("getDeployments", appIds);
  }
  // #####################################################################################
  // ###################### PublishApp Methods ###########################################
  // #####################################################################################
  public async setPublishedApp(
    data: IPublishedAppRecord
  ): Promise<IDACResponse> {
    if (!this.connector) {
      throw new Error("Connector not initialized");
    }
    this.log('calling setPublishedApp AppId ' + data.appId);
    return await this.connector.connection
      .remoteHandle()
      .call("setPublishedApp", data);
  }
  public async getPublishedApps(
    appIds?: string[],
    userId?: string
  ): Promise<IDACResponse> {
    if (!this.connector) {
      throw new Error("Connector not initialized");
    }
    this.log('calling getPublishedApps appIds ' + appIds);
    return await this.connector.connection
      .remoteHandle()
      .call("getPublishedApps", appIds, userId);
  }
  public async getPublishedAppIds(
    userId?: string
  ): Promise<IDACResponse> {
    if (!this.connector) {
      throw new Error("Connector not initialized");
    }
    this.log('calling getPublishedApps userId ' + userId);
    return await this.connector.connection
      .remoteHandle()
      .call("getPublishedApps", userId);
  }
  // #####################################################################################
  // ###################### PublishApp Stats / Interactions Methods ######################
  // #####################################################################################
  public async likeApp(
    appId: string
  ): Promise<IDACResponse> {
    if (!this.connector) {
      throw new Error("Connector not initialized");
    }
    this.log('calling skappAction ' + skappActionType.LIKED);
    return await this.connector.connection
      .remoteHandle()
      .call("skappAction", skappActionType.LIKED, appId);
  }
  public async unlikeApp(
    appId: string
  ): Promise<IDACResponse> {
    if (!this.connector) {
      throw new Error("Connector not initialized");
    }
    this.log('calling skappAction ' + skappActionType.UNLIKED);
    return await this.connector.connection
      .remoteHandle()
      .call("skappAction", skappActionType.UNLIKED, appId);
  }
  public async favouriteApp(
    appId: string
  ): Promise<IDACResponse> {
    if (!this.connector) {
      throw new Error("Connector not initialized");
    }
    this.log('calling skappAction ' + skappActionType.FAVORITE);
    return await this.connector.connection
      .remoteHandle()
      .call("skappAction", skappActionType.FAVORITE, appId);
  }
  public async unfavouriteApp(
    appId: string
  ): Promise<IDACResponse> {
    if (!this.connector) {
      throw new Error("Connector not initialized");
    }
    this.log('calling skappAction ' + skappActionType.UNFAVORITE);
    return await this.connector.connection
      .remoteHandle()
      .call("skappAction", skappActionType.UNFAVORITE, appId);
  }
  public async viewedApp(
    appId: string
  ): Promise<IDACResponse> {
    if (!this.connector) {
      throw new Error("Connector not initialized");
    }
    this.log('calling skappAction ' + skappActionType.VIEWED);
    return await this.connector.connection
      .remoteHandle()
      .call("skappAction", skappActionType.VIEWED, appId);
  }
  public async accessedApp(
    appId: string
  ): Promise<IDACResponse> {
    if (!this.connector) {
      throw new Error("Connector not initialized");
    }
    this.log('calling skappAction ' + skappActionType.ACCESSED);
    return await this.connector.connection
      .remoteHandle()
      .call("skappAction", skappActionType.ACCESSED, appId);
  }
  public async getStats(
    appIds?: string[], userId?: string
  ): Promise<IDACResponse> {
    if (!this.connector) {
      throw new Error("Connector not initialized");
    }
    this.log('calling getSkappStats appIds ' + appIds);
    return await this.connector.connection
      .remoteHandle()
      .call("getSkappStats", appIds, userId);
  }
  // #####################################################################################
  // ############################ Review Below Methods ###################################
  // #####################################################################################

  // public async addComment(
  //   appId: string, data: any
  // ): Promise<IDACResponse> {
  //   if (!this.connector) {
  //     throw new Error("Connector not initialized");
  //   }
  //   this.log('calling skappAction ' + skappActionType.ADD_COMMENT);
  //   return await this.connector.connection
  //     .remoteHandle()
  //     .call("skappAction", skappActionType.ADD_COMMENT, appId, data);
  // }
  // public async getSkappComments(
  //   appId: string
  // ): Promise<IDACResponse> {
  //   if (!this.connector) {
  //     throw new Error("Connector not initialized");
  //   }
  //   this.log('calling getSkappComments appId ' + appId);
  //   return await this.connector.connection
  //     .remoteHandle()
  //     .call("getSkappComments", appId);
  // }
  // log prints to stdout only if DEBUG_ENABLED flag is set
  private log(message: string, ...optionalContext: any[]) {
    if (DEBUG_ENABLED) {
      console.log("### SKAPP-LIBRARAY (DEBUG) ### " + message, ...optionalContext)
    }
  }
}
