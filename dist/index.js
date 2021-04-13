import { DacLibrary } from "skynet-js";
import { PermCategory, Permission, PermType } from "skynet-mysky-utils";
const DAC_DOMAIN = "skapps.hns";
export class ContentRecordDAC extends DacLibrary {
    constructor() {
        super(DAC_DOMAIN);
    }
    getPermissions() {
        return [
            new Permission(DAC_DOMAIN, DAC_DOMAIN, PermCategory.Discoverable, PermType.Read),
            new Permission(DAC_DOMAIN, DAC_DOMAIN, PermCategory.Discoverable, PermType.Write),
        ];
    }
    async recordNewContent(...data) {
        if (!this.connector) {
            throw new Error("Connector not initialized");
        }
        return await this.connector.connection
            .remoteHandle()
            .call("recordNewContent", ...data);
    }
    async recordInteraction(...data) {
        if (!this.connector) {
            throw new Error("Connector not initialized");
        }
        return await this.connector.connection
            .remoteHandle()
            .call("recordInteraction", ...data);
    }
}
