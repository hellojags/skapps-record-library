import { DacLibrary } from "skynet-js";
import { Permission } from "skynet-mysky-utils";
import { IContentCreation, IContentInteraction, IContentRecordDAC, IDACResponse } from "./types";
export declare class ContentRecordDAC extends DacLibrary implements IContentRecordDAC {
    constructor();
    getPermissions(): Permission[];
    recordNewContent(...data: IContentCreation[]): Promise<IDACResponse>;
    recordInteraction(...data: IContentInteraction[]): Promise<IDACResponse>;
}
//# sourceMappingURL=index.d.ts.map