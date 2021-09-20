export const VERSION = 1;
export const DEFAULT_DD_DEPLOYED_APPS_INDEX = {
    version: VERSION,
    appsIndex: null,
    timestamp: (new Date()).valueOf()
};
export const DEFAULT_SD_DEPLOYED_APPS_INDEX = {
    version: VERSION,
    appsIndex: null,
    timestamp: (new Date()).valueOf()
};
export const DEFAULT_DD_PUBLISHED_APPS_INDEX = {
    version: VERSION,
    appsIndex: null,
    timestamp: (new Date()).valueOf()
};
export const DEFAULT_SD_PUBLISHED_APPS_INDEX = {
    version: VERSION,
    appsIndex: null,
    timestamp: (new Date()).valueOf()
};
export const DEFAULT_DD_PUBLISHED_APPS_STATS_INDEX = {
    version: VERSION,
    appsIndex: null,
    timestamp: (new Date()).valueOf()
};
export const DEFAULT_SD_PUBLISHED_APPS_STATS_INDEX = {
    version: VERSION,
    appsIndex: null,
    timestamp: (new Date()).valueOf()
};
export const DEFAULT_PUBLISHED_APPS_STATS_RECORD = {
    version: VERSION,
    $type: "skapp",
    $subType: "interactions",
    appId: null,
    content: {
        favorite: 0,
        liked: 0,
        viewed: 0,
        accessed: 0,
    },
    ddCounter: 0,
    timestamp: (new Date()).valueOf()
};
export var skappActionType;
(function (skappActionType) {
    skappActionType[skappActionType["VIEWED"] = 0] = "VIEWED";
    skappActionType[skappActionType["ACCESSED"] = 1] = "ACCESSED";
    skappActionType[skappActionType["FAVORITE"] = 2] = "FAVORITE";
    skappActionType[skappActionType["UNFAVORITE"] = 3] = "UNFAVORITE";
    skappActionType[skappActionType["LIKED"] = 4] = "LIKED";
    skappActionType[skappActionType["UNLIKED"] = 5] = "UNLIKED";
    skappActionType[skappActionType["ADD_COMMENT"] = 6] = "ADD_COMMENT";
    skappActionType[skappActionType["EDIT_COMMENT"] = 7] = "EDIT_COMMENT";
    skappActionType[skappActionType["REMOVE_COMMENT"] = 8] = "REMOVE_COMMENT";
})(skappActionType || (skappActionType = {}));
