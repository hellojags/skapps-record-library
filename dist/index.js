import { DacLibrary, SkynetClient } from "skynet-js";
import { PermCategory, Permission, PermType } from "skynet-mysky-utils";
import { skappActionType, } from "./types";
const DAC_DOMAIN = "skapps.hns";
const DEBUG_ENABLED = "true";
export class SkappsRecordDAC extends DacLibrary {
    constructor() {
        super(DAC_DOMAIN);
        this.client = new SkynetClient("https://siasky.net");
        //const hostname = new URL(document.referrer).hostname
    }
    getPermissions() {
        return [
            new Permission(DAC_DOMAIN, DAC_DOMAIN, PermCategory.Discoverable, PermType.Read),
            new Permission(DAC_DOMAIN, DAC_DOMAIN, PermCategory.Discoverable, PermType.Write),
        ];
    }
    async publishApp(appId, data) {
        if (!this.connector) {
            throw new Error("Connector not initialized");
        }
        return await this.connector.connection
            .remoteHandle()
            .call("skappAction", skappActionType.PUBLISH, appId, data);
    }
    async deployApp(appId, data) {
        if (!this.connector) {
            throw new Error("Connector not initialized");
        }
        return await this.connector.connection
            .remoteHandle()
            .call("skappAction", skappActionType.DEPLOY, appId, data);
    }
    async likeApp(appId) {
        if (!this.connector) {
            throw new Error("Connector not initialized");
        }
        return await this.connector.connection
            .remoteHandle()
            .call("skappAction", skappActionType.LIKED, appId);
    }
    async unlikeApp(appId) {
        if (!this.connector) {
            throw new Error("Connector not initialized");
        }
        return await this.connector.connection
            .remoteHandle()
            .call("skappAction", skappActionType.UNLIKED, appId);
    }
    async favouriteApp(appId) {
        if (!this.connector) {
            throw new Error("Connector not initialized");
        }
        return await this.connector.connection
            .remoteHandle()
            .call("skappAction", skappActionType.FAVORITE, appId);
    }
    async unfavouriteApp(appId) {
        if (!this.connector) {
            throw new Error("Connector not initialized");
        }
        return await this.connector.connection
            .remoteHandle()
            .call("skappAction", skappActionType.UNFAVORITE, appId);
    }
    async viewedApp(appId) {
        if (!this.connector) {
            throw new Error("Connector not initialized");
        }
        return await this.connector.connection
            .remoteHandle()
            .call("skappAction", skappActionType.VIEWED, appId);
    }
    async accessedApp(appId) {
        if (!this.connector) {
            throw new Error("Connector not initialized");
        }
        return await this.connector.connection
            .remoteHandle()
            .call("skappAction", skappActionType.ACCESSED, appId);
    }
    async addComment(appId, data) {
        if (!this.connector) {
            throw new Error("Connector not initialized");
        }
        return await this.connector.connection
            .remoteHandle()
            .call("skappAction", skappActionType.ADD_COMMENT, appId, data);
    }
    async getPublisedApps(appIds) {
        if (!this.connector) {
            throw new Error("Connector not initialized");
        }
        return await this.connector.connection
            .remoteHandle()
            .call("getPublishedApps", appIds);
    }
    async getDeployedApps(appIds) {
        if (!this.connector) {
            throw new Error("Connector not initialized");
        }
        return await this.connector.connection
            .remoteHandle()
            .call("getDeployedApps", appIds);
    }
    async getSkappsInfo(appIds) {
        if (!this.connector) {
            throw new Error("Connector not initialized");
        }
        return await this.connector.connection
            .remoteHandle()
            .call("getSkappsInfo", appIds);
    }
    async getSkappStats(appId) {
        if (!this.connector) {
            throw new Error("Connector not initialized");
        }
        return await this.connector.connection
            .remoteHandle()
            .call("getSkappStats", appId);
    }
    async getSkappComments(appId) {
        if (!this.connector) {
            throw new Error("Connector not initialized");
        }
        return await this.connector.connection
            .remoteHandle()
            .call("getSkappComments", appId);
    }
    async recordInteraction(...data) {
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
    async downloadFile(userID, path) {
        if (typeof this.client === "undefined") {
            throw Error('userprofile-library: SkynetClient not initialized');
        }
        this.log('downloading file at path', path);
        const { data } = await this.client.file.getJSON(userID, path);
        if (!data) {
            this.log('no data found at path', path);
            return null;
        }
        this.log('data found at path', path, data);
        return data;
    }
    // log prints to stdout only if DEBUG_ENABLED flag is set
    log(message, ...optionalContext) {
        if (DEBUG_ENABLED) {
            console.log("UserProfileDAC Library :: " + message, ...optionalContext);
        }
    }
}
