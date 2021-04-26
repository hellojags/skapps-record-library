export var skappActionType;
(function (skappActionType) {
    skappActionType[skappActionType["PUBLISH"] = 0] = "PUBLISH";
    skappActionType[skappActionType["REPUBLISH"] = 1] = "REPUBLISH";
    skappActionType[skappActionType["DEPLOY"] = 2] = "DEPLOY";
    skappActionType[skappActionType["REDEPLOY"] = 3] = "REDEPLOY";
    skappActionType[skappActionType["VIEWED"] = 4] = "VIEWED";
    skappActionType[skappActionType["ACCESSED"] = 5] = "ACCESSED";
    skappActionType[skappActionType["FAVORITE"] = 6] = "FAVORITE";
    skappActionType[skappActionType["UNFAVORITE"] = 7] = "UNFAVORITE";
    skappActionType[skappActionType["LIKED"] = 8] = "LIKED";
    skappActionType[skappActionType["UNLIKED"] = 9] = "UNLIKED";
    skappActionType[skappActionType["ADD_COMMENT"] = 10] = "ADD_COMMENT";
    skappActionType[skappActionType["EDIT_COMMENT"] = 11] = "EDIT_COMMENT";
    skappActionType[skappActionType["REMOVE_COMMENT"] = 12] = "REMOVE_COMMENT";
})(skappActionType || (skappActionType = {}));
