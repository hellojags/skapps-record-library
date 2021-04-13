export interface IContentCreation {
    skylink: string;
    metadata: object;
}
export interface IContentInteraction {
    skylink: string;
    metadata: object;
}
export interface IDACResponse {
    submitted: boolean;
    error?: string;
}
export interface IContentRecordDAC {
    recordNewContent(...data: IContentCreation[]): Promise<IDACResponse>;
    recordInteraction(...data: IContentInteraction[]): Promise<IDACResponse>;
}
//# sourceMappingURL=types.d.ts.map