import { DacLibrary, SkynetClient } from "skynet-js";
import { PermCategory, Permission, PermType } from "skynet-mysky-utils";

import {
  IContentInteraction,
  ISkappsRecordDAC,
  IDACResponse,
  skappActionType,
  IPublishedApp,
  IDeployedApp,
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


  public async publishApp(
   appId:string,data:IPublishedApp
  ): Promise<IDACResponse> {
    if (!this.connector) {
      throw new Error("Connector not initialized");
    }
      return await this.connector.connection
      .remoteHandle()
      .call("skappAction",skappActionType.PUBLISH, appId,data );
  }

  public async publishedAppCount(
   ): Promise<IDACResponse> {
     if (!this.connector) {
       throw new Error("Connector not initialized");
     }
       return await this.connector.connection
       .remoteHandle()
       .call("getPublishedAppsCount",null );
   }

  public async deployApp(
    appId:string,data:IDeployedApp
   ): Promise<IDACResponse> {
     if (!this.connector) {
       throw new Error("Connector not initialized");
     }
        return await this.connector.connection
        .remoteHandle()
        .call("skappAction",skappActionType.DEPLOY, appId,data );
   }

   public async likeApp(
    appId:string
   ): Promise<IDACResponse> {
     if (!this.connector) {
       throw new Error("Connector not initialized");
     }
        return await this.connector.connection
        .remoteHandle()
        .call("skappAction",skappActionType.LIKED, appId );
   }

   public async unlikeApp(
    appId:string
   ): Promise<IDACResponse> {
     if (!this.connector) {
       throw new Error("Connector not initialized");
     }
        return await this.connector.connection
        .remoteHandle()
        .call("skappAction",skappActionType.UNLIKED, appId );
   }

   public async favouriteApp(
    appId:string
   ): Promise<IDACResponse> {
     if (!this.connector) {
       throw new Error("Connector not initialized");
     }
        return await this.connector.connection
        .remoteHandle()
        .call("skappAction",skappActionType.FAVORITE, appId );
   }

   public async unfavouriteApp(
    appId:string
   ): Promise<IDACResponse> {
     if (!this.connector) {
       throw new Error("Connector not initialized");
     }
        return await this.connector.connection
        .remoteHandle()
        .call("skappAction",skappActionType.UNFAVORITE, appId );
   }

   public async viewedApp(
    appId:string
   ): Promise<IDACResponse> {
     if (!this.connector) {
       throw new Error("Connector not initialized");
     }
        return await this.connector.connection
        .remoteHandle()
        .call("skappAction",skappActionType.VIEWED, appId );
   }

   public async accessedApp(
    appId:string
   ): Promise<IDACResponse> {
     if (!this.connector) {
       throw new Error("Connector not initialized");
     }
        return await this.connector.connection
        .remoteHandle()
        .call("skappAction",skappActionType.ACCESSED, appId );
   }

   public async addComment(
    appId:string,data:any
   ): Promise<IDACResponse> {
     if (!this.connector) {
       throw new Error("Connector not initialized");
     }
        return await this.connector.connection
        .remoteHandle()
        .call("skappAction",skappActionType.ADD_COMMENT, appId,data );
   }

   public async getPublishedApps(
    appIds:string[]
   ): Promise<any> {
     if (!this.connector) {
       throw new Error("Connector not initialized");
     }
        return await this.connector.connection
        .remoteHandle()
        .call("getPublishedApps", appIds );
   }

   public async getPublishedAppsByUserIds(
    userIds:string[]
   ): Promise<any> {
     if (!this.connector) {
       throw new Error("Connector not initialized");
     }
        return await this.connector.connection
        .remoteHandle()
        .call("getPublishedAppsByUserId", userIds );
   }

   public async getPublishedAppDetailsByUserId(
    userId:string,appId:string
   ): Promise<any> {
     if (!this.connector) {
       throw new Error("Connector not initialized");
     }
        return await this.connector.connection
        .remoteHandle()
        .call("getPublishedAppDetailByUserId", userId, appId );
   }
   public async getPublishedAppsCount(
    appIds:string[]
   ): Promise<any> {
     if (!this.connector) {
       throw new Error("Connector not initialized");
     }
        return await this.connector.connection
        .remoteHandle()
        .call("getPublishedAppsCount", appIds );
   }

   public async getDeployedApps(
    appIds:string[]
   ): Promise<IDACResponse> {
     if (!this.connector) {
       throw new Error("Connector not initialized");
     }
        return await this.connector.connection
        .remoteHandle()
        .call("getDeployedApps", appIds );
   }

   public async getSkappsInfo(
    appIds:string[]
   ): Promise<IDACResponse> {
     if (!this.connector) {
       throw new Error("Connector not initialized");
     }
        return await this.connector.connection
        .remoteHandle()
        .call("getSkappsInfo", appIds );
   }

   public async getSkappStats(
    appId:string
   ): Promise<IDACResponse> {
     if (!this.connector) {
       throw new Error("Connector not initialized");
     }
        return await this.connector.connection
        .remoteHandle()
        .call("getSkappStats", appId);
   }
   public async getSkappComments(
    appId:string
   ): Promise<IDACResponse> {
     if (!this.connector) {
       throw new Error("Connector not initialized");
     }
        return await this.connector.connection
        .remoteHandle()
        .call("getSkappComments", appId);
   }

  public async recordInteraction(
    ...data: IContentInteraction[]
  ): Promise<IDACResponse> {
    if (!this.connector) {
      throw new Error("Connector not initialized");
    }

    return await this.connector.connection
      .remoteHandle()
      .call("recordInteraction", ...data);
  }
  // private async checkPublishedApp(userId:string,appId:string){
  //   const path = DAC_DOMAIN+'/'+this.skapp+'/'+'/published/index.json';
  //   let data:any 
  //  try {
  //   data=await this.downloadFile(userId,path);
  //  } catch (error) {
  //    data =null;
  //  }
  //   if(data!=null && data.published!=null && data.published.contains(appId)){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
  // private async checkDeployedApp(userId:string,appId:string){
  //   const path = DAC_DOMAIN+'/'+this.skapp+'/'+'/deployed/index.json';
  //   let data:any 
  //  try {
  //   data=await this.downloadFile(userId,path);
  //  } catch (error) {
  //    data =null;
  //  }
  //   if(data!=null && data.deployed!=null && data.deployed.contains(appId)){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

  private async downloadFile<T>(userID: string, path: string): Promise<T | null> {
    if (typeof this.client === "undefined") {
      throw Error('### Skapp-library ###: SkynetClient not initialized')
    }
    this.log('downloading file at path', path)
    const { data } = await this.client.file.getJSON(userID, path)
    if (!data) {
      this.log('no data found at path', path)
      return null;
    }
    this.log('data found at path', path, data)
    return data as unknown as T
  }
    // log prints to stdout only if DEBUG_ENABLED flag is set
    private log(message: string, ...optionalContext: any[]) {
      if (DEBUG_ENABLED) {
        console.log("UserProfileDAC Library :: " + message, ...optionalContext)
      }
    }
}
