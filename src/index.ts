import { DacLibrary, SkynetClient } from "skynet-js";
import { PermCategory, Permission, PermType } from "skynet-mysky-utils";

import {
  IContentCreation,
  IContentInteraction,
  IContentRecordDAC,
  IDACResponse,
  skappActionType,
} from "./types";

const DAC_DOMAIN = "skapps.hns";
const DEBUG_ENABLED = "true";
export class ContentRecordDAC extends DacLibrary implements IContentRecordDAC {
  private client: SkynetClient;
  private skapp: string;
  public constructor() {
    super(DAC_DOMAIN);
    this.client = new SkynetClient("https://siasky.net");
    const hostname = new URL(document.referrer).hostname
    this.client.extractDomain(hostname).then(value=>{
      this.skapp = value;
    })
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
    userid:string,
   appId:string,data:any
  ): Promise<IDACResponse> {
    if (!this.connector) {
      throw new Error("Connector not initialized");
    }
    if(await this.checkPublishedApp(userid,appId)){
    return await this.connector.connection
      .remoteHandle()
      .call("skappAction",skappActionType.REPUBLISH, appId,data );
    }else{
      return await this.connector.connection
      .remoteHandle()
      .call("skappAction",skappActionType.PUBLISH, appId,data );
    }
  }

  public async deployApp(
    userId:string,
    appId:string,data:any
   ): Promise<IDACResponse> {
     if (!this.connector) {
       throw new Error("Connector not initialized");
     }
     if(await this.checkDeployedApp(userId,appId)){
      return await this.connector.connection
        .remoteHandle()
        .call("skappAction",skappActionType.REDEPLOY, appId,data );
      }else{
        return await this.connector.connection
        .remoteHandle()
        .call("skappAction",skappActionType.DEPLOY, appId,data );
      }
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
  private async checkPublishedApp(userId:string,appId:string){
    const path = DAC_DOMAIN+'/'+this.skapp+'/'+'/published/index.json';
    let data:any 
   try {
    data=await this.downloadFile(userId,path);
   } catch (error) {
     data =null;
   }
    if(data!=null && data.published!=null && data.published.contains(appId)){
      return true;
    }else{
      return false;
    }
  }
  private async checkDeployedApp(userId:string,appId:string){
    const path = DAC_DOMAIN+'/'+this.skapp+'/'+'/deployed/index.json';
    let data:any 
   try {
    data=await this.downloadFile(userId,path);
   } catch (error) {
     data =null;
   }
    if(data!=null && data.deployed!=null && data.deployed.contains(appId)){
      return true;
    }else{
      return false;
    }
  }

  private async downloadFile<T>(userID: string, path: string): Promise<T | null> {
    if (typeof this.client === "undefined") {
      throw Error('userprofile-library: SkynetClient not initialized')
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
