var State;
(function (State) {
    State[State["Ready"] = 0] = "Ready";
    State[State["Working"] = 1] = "Working";
    State[State["Waiting"] = 2] = "Waiting";
    State[State["Finished"] = 3] = "Finished";
})(State || (State = {}));
;
var DefineBlock = (function () {
    function DefineBlock() {
    }
    return DefineBlock;
})();
var Context = (function () {
    function Context() {
    }
    return Context;
})();
var LogType;
(function (LogType) {
    LogType[LogType["Misc"] = 0] = "Misc";
    LogType[LogType["FatalError"] = 1] = "FatalError";
    LogType[LogType["WarningError"] = 2] = "WarningError";
    LogType[LogType["Init"] = 3] = "Init";
    LogType[LogType["LibraryWarningError"] = 4] = "LibraryWarningError";
    LogType[LogType["Warning"] = 5] = "Warning";
    LogType[LogType["UserError"] = 6] = "UserError";
    LogType[LogType["InternalError"] = 7] = "InternalError";
})(LogType || (LogType = {}));
;
var Direction;
(function (Direction) {
    Direction[Direction["None"] = -1] = "None";
    Direction[Direction["Out"] = 0] = "Out";
    Direction[Direction["North"] = 1] = "North";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["East"] = 3] = "East";
    Direction[Direction["West"] = 4] = "West";
    Direction[Direction["NorthWest"] = 5] = "NorthWest";
    Direction[Direction["NorthEast"] = 6] = "NorthEast";
    Direction[Direction["SouthWest"] = 7] = "SouthWest";
    Direction[Direction["SouthEast"] = 8] = "SouthEast";
    Direction[Direction["Up"] = 9] = "Up";
    Direction[Direction["Down"] = 10] = "Down";
})(Direction || (Direction = {}));
;
var ItemType = (function () {
    function ItemType() {
    }
    return ItemType;
})();
var Collectable = (function () {
    function Collectable() {
    }
    return Collectable;
})();
var PropertyType = (function () {
    function PropertyType() {
    }
    return PropertyType;
})();
var ActionType = (function () {
    function ActionType() {
    }
    return ActionType;
})();
var UseDataType = (function () {
    function UseDataType() {
    }
    return UseDataType;
})();
var GiveDataType = (function () {
    function GiveDataType() {
    }
    return GiveDataType;
})();
var PropertiesActions = (function () {
    function PropertiesActions() {
    }
    return PropertiesActions;
})();
var VariableType = (function () {
    function VariableType() {
    }
    return VariableType;
})();
var SynonymType = (function () {
    function SynonymType() {
    }
    return SynonymType;
})();
var TimerType = (function () {
    function TimerType() {
    }
    return TimerType;
})();
var UserDefinedCommandType = (function () {
    function UserDefinedCommandType() {
    }
    return UserDefinedCommandType;
})();
var TextAction = (function () {
    function TextAction() {
    }
    return TextAction;
})();
var TextActionType;
(function (TextActionType) {
    TextActionType[TextActionType["Text"] = 0] = "Text";
    TextActionType[TextActionType["Script"] = 1] = "Script";
    TextActionType[TextActionType["Nothing"] = 2] = "Nothing";
    TextActionType[TextActionType["Default"] = 3] = "Default";
})(TextActionType || (TextActionType = {}));
;
var ScriptText = (function () {
    function ScriptText() {
    }
    return ScriptText;
})();
var PlaceType = (function () {
    function PlaceType() {
    }
    return PlaceType;
})();
var RoomType = (function () {
    function RoomType() {
        this.Description = new TextAction();
        this.Out = new ScriptText();
        this.East = new TextAction();
        this.West = new TextAction();
        this.North = new TextAction();
        this.South = new TextAction();
        this.NorthEast = new TextAction();
        this.NorthWest = new TextAction();
        this.SouthEast = new TextAction();
        this.SouthWest = new TextAction();
        this.Up = new TextAction();
        this.Down = new TextAction();
    }
    return RoomType;
})();
var ObjectType = (function () {
    function ObjectType() {
        this.Speak = new TextAction();
        this.Take = new TextAction();
        this.AddScript = new TextAction();
        this.RemoveScript = new TextAction();
        this.OpenScript = new TextAction();
        this.CloseScript = new TextAction();
    }
    return ObjectType;
})();
var ChangeType = (function () {
    function ChangeType() {
    }
    return ChangeType;
})();
var GameChangeDataType = (function () {
    function GameChangeDataType() {
    }
    return GameChangeDataType;
})();
var ResourceType = (function () {
    function ResourceType() {
    }
    return ResourceType;
})();
var ExpressionResult = (function () {
    function ExpressionResult() {
    }
    return ExpressionResult;
})();
var PlayerError;
(function (PlayerError) {
    PlayerError[PlayerError["BadCommand"] = 0] = "BadCommand";
    PlayerError[PlayerError["BadGo"] = 1] = "BadGo";
    PlayerError[PlayerError["BadGive"] = 2] = "BadGive";
    PlayerError[PlayerError["BadCharacter"] = 3] = "BadCharacter";
    PlayerError[PlayerError["NoItem"] = 4] = "NoItem";
    PlayerError[PlayerError["ItemUnwanted"] = 5] = "ItemUnwanted";
    PlayerError[PlayerError["BadLook"] = 6] = "BadLook";
    PlayerError[PlayerError["BadThing"] = 7] = "BadThing";
    PlayerError[PlayerError["DefaultLook"] = 8] = "DefaultLook";
    PlayerError[PlayerError["DefaultSpeak"] = 9] = "DefaultSpeak";
    PlayerError[PlayerError["BadItem"] = 10] = "BadItem";
    PlayerError[PlayerError["DefaultTake"] = 11] = "DefaultTake";
    PlayerError[PlayerError["BadUse"] = 12] = "BadUse";
    PlayerError[PlayerError["DefaultUse"] = 13] = "DefaultUse";
    PlayerError[PlayerError["DefaultOut"] = 14] = "DefaultOut";
    PlayerError[PlayerError["BadPlace"] = 15] = "BadPlace";
    PlayerError[PlayerError["BadExamine"] = 16] = "BadExamine";
    PlayerError[PlayerError["DefaultExamine"] = 17] = "DefaultExamine";
    PlayerError[PlayerError["BadTake"] = 18] = "BadTake";
    PlayerError[PlayerError["CantDrop"] = 19] = "CantDrop";
    PlayerError[PlayerError["DefaultDrop"] = 20] = "DefaultDrop";
    PlayerError[PlayerError["BadDrop"] = 21] = "BadDrop";
    PlayerError[PlayerError["BadPronoun"] = 22] = "BadPronoun";
    PlayerError[PlayerError["AlreadyOpen"] = 23] = "AlreadyOpen";
    PlayerError[PlayerError["AlreadyClosed"] = 24] = "AlreadyClosed";
    PlayerError[PlayerError["CantOpen"] = 25] = "CantOpen";
    PlayerError[PlayerError["CantClose"] = 26] = "CantClose";
    PlayerError[PlayerError["DefaultOpen"] = 27] = "DefaultOpen";
    PlayerError[PlayerError["DefaultClose"] = 28] = "DefaultClose";
    PlayerError[PlayerError["BadPut"] = 29] = "BadPut";
    PlayerError[PlayerError["CantPut"] = 30] = "CantPut";
    PlayerError[PlayerError["DefaultPut"] = 31] = "DefaultPut";
    PlayerError[PlayerError["CantRemove"] = 32] = "CantRemove";
    PlayerError[PlayerError["AlreadyPut"] = 33] = "AlreadyPut";
    PlayerError[PlayerError["DefaultRemove"] = 34] = "DefaultRemove";
    PlayerError[PlayerError["Locked"] = 35] = "Locked";
    PlayerError[PlayerError["DefaultWait"] = 36] = "DefaultWait";
    PlayerError[PlayerError["AlreadyTaken"] = 37] = "AlreadyTaken";
})(PlayerError || (PlayerError = {}));
;
var ItType;
(function (ItType) {
    ItType[ItType["Inanimate"] = 0] = "Inanimate";
    ItType[ItType["Male"] = 1] = "Male";
    ItType[ItType["Female"] = 2] = "Female";
})(ItType || (ItType = {}));
;
var SetResult;
(function (SetResult) {
    SetResult[SetResult["Error"] = 0] = "Error";
    SetResult[SetResult["Found"] = 1] = "Found";
    SetResult[SetResult["Unfound"] = 2] = "Unfound";
})(SetResult || (SetResult = {}));
;
var Thing;
(function (Thing) {
    Thing[Thing["Character"] = 0] = "Character";
    Thing[Thing["Object"] = 1] = "Object";
    Thing[Thing["Room"] = 2] = "Room";
})(Thing || (Thing = {}));
;
var ConvertType;
(function (ConvertType) {
    ConvertType[ConvertType["Strings"] = 0] = "Strings";
    ConvertType[ConvertType["Functions"] = 1] = "Functions";
    ConvertType[ConvertType["Numeric"] = 2] = "Numeric";
    ConvertType[ConvertType["Collectables"] = 3] = "Collectables";
})(ConvertType || (ConvertType = {}));
;
var UseType;
(function (UseType) {
    UseType[UseType["UseOnSomething"] = 0] = "UseOnSomething";
    UseType[UseType["UseSomethingOn"] = 1] = "UseSomethingOn";
})(UseType || (UseType = {}));
;
var GiveType;
(function (GiveType) {
    GiveType[GiveType["GiveToSomething"] = 0] = "GiveToSomething";
    GiveType[GiveType["GiveSomethingTo"] = 1] = "GiveSomethingTo";
})(GiveType || (GiveType = {}));
;
var VarType;
(function (VarType) {
    VarType[VarType["String"] = 0] = "String";
    VarType[VarType["Numeric"] = 1] = "Numeric";
})(VarType || (VarType = {}));
;
var StopType;
(function (StopType) {
    StopType[StopType["Win"] = 0] = "Win";
    StopType[StopType["Lose"] = 1] = "Lose";
    StopType[StopType["Null"] = 2] = "Null";
})(StopType || (StopType = {}));
;
var ExpressionSuccess;
(function (ExpressionSuccess) {
    ExpressionSuccess[ExpressionSuccess["OK"] = 0] = "OK";
    ExpressionSuccess[ExpressionSuccess["Fail"] = 1] = "Fail";
})(ExpressionSuccess || (ExpressionSuccess = {}));
;
var InitGameData = (function () {
    function InitGameData() {
    }
    return InitGameData;
})();
var ArrayResult = (function () {
    function ArrayResult() {
    }
    return ArrayResult;
})();
var PlayerCanAccessObjectResult = (function () {
    function PlayerCanAccessObjectResult() {
    }
    return PlayerCanAccessObjectResult;
})();
var LegacyGame = (function () {
    function LegacyGame() {
        this._casKeywords = [];
        this._nullContext = new Context();
        this._gameChangeData = new GameChangeDataType();
        this._compassExits = {};
        this._gotoExits = {};
        this._textFormatter = new TextFormatter();
        this._log = {};
        this._commandLock = new Object();
        this._stateLock = new Object();
        this._state = 0 /* Ready */;
        this._waitLock = new Object();
        this._readyForCommand = true;
        this._random = new Random();
        this._listVerbs = {};
    }
    LegacyGame.prototype.CopyContext = function (ctx) {
        var result = new Context();
        result.CallingObjectId = ctx.CallingObjectId;
        result.NumParameters = ctx.NumParameters;
        result.Parameters = ctx.Parameters;
        result.FunctionReturnValue = ctx.FunctionReturnValue;
        result.AllowRealNamesInCommand = ctx.AllowRealNamesInCommand;
        result.DontProcessCommand = ctx.DontProcessCommand;
        result.CancelExec = ctx.CancelExec;
        result.StackCounter = ctx.StackCounter;
        return result;
    };

    // UNKNOWN ConstructorBlock
    // UNKNOWN ConstructorBlock
    LegacyGame.prototype.RemoveFormatting = function (s) {
        var code;
        var pos;
        var len;

        // UNKNOWN DoLoopUntilBlock
        return s;
    };
    LegacyGame.prototype.CheckSections = function () {
        var defines;
        var braces;
        var checkLine = "";
        var bracePos;
        var pos;
        var section = "";
        var hasErrors;
        var skipBlock;
        this._openErrorReport = "";
        hasErrors = false;
        defines = 0;
        braces = 0;

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        return !hasErrors;
    };
    LegacyGame.prototype.ConvertFriendlyIfs = function () {
        var convPos;
        var symbPos;
        var symbol;
        var endParamPos;
        var paramData;
        var startParamPos;
        var firstData;
        var secondData;
        var obscureLine;
        var newParam;
        var varObscureLine;
        var bracketCount;

        // UNKNOWN ForBlock
        return false;
    };
    LegacyGame.prototype.ConvertMultiLineSections = function () {
        var startLine;
        var braceCount;
        var thisLine;
        var lineToAdd;
        var lastBrace;
        var i;
        var restOfLine;
        var procName;
        var endLineNum;
        var afterLastBrace;
        var z;
        var startOfOrig;
        var testLine;
        var testBraceCount;
        var obp;
        var cbp;
        var curProc;
        i = 1;
        // UNKNOWN DoLoopUntilBlock
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.ErrorCheck = function () {
        var curBegin;
        var curEnd;
        var hasErrors;
        var curPos;
        var numParamStart;
        var numParamEnd;
        var finLoop;
        var inText;
        hasErrors = false;
        inText = false;

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ForBlock
        return hasErrors;
    };
    LegacyGame.prototype.GetAfterParameter = function (s) {
        var eop;
        eop = InStr(s, ">");
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ObliterateParameters = function (s) {
        var inParameter;
        var exitCharacter = "";
        var curChar;
        var outputLine = "";
        var obscuringFunctionName;
        inParameter = false;
        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ObliterateVariableNames = function (s) {
        var inParameter;
        var exitCharacter = "";
        var outputLine = "";
        var curChar;
        inParameter = false;

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        return outputLine;
    };
    LegacyGame.prototype.RemoveComments = function () {
        var aposPos;
        var inTextBlock;
        var inSynonymsBlock;
        var oblitLine;
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.ReportErrorLine = function (s) {
        var replaceFrom;
        replaceFrom = InStr(s, "do <!intproc");
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.YesNo = function (yn) {
        // UNKNOWN SingleLineIfStatement
    };
    LegacyGame.prototype.IsYes = function (yn) {
        // UNKNOWN SingleLineIfStatement
    };
    LegacyGame.prototype.BeginsWith = function (s, text) {
        return Left(LTrim(LCase(s)), Len(text)) == LCase(text);
    };
    LegacyGame.prototype.ConvertCasKeyword = function (casChar) {
        var c = 'expr';
        var keyword = this._casKeywords[c];

        // UNKNOWN MultiLineIfBlock
        return keyword;
    };
    LegacyGame.prototype.ConvertMultiLines = function () {
        // UNKNOWN ForBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.GetDefineBlock = function (blockname) {
        var l;
        var blockType;
        var result = new DefineBlock();
        result.StartLine = 0;
        result.EndLine = 0;

        // UNKNOWN ForBlock
        return result;
    };
    LegacyGame.prototype.DefineBlockParam = function (blockname, param) {
        var cache;
        var result = new DefineBlock();
        param = "k" + param;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        return result;
    };
    LegacyGame.prototype.GetEverythingAfter = function (s, text) {
        // UNKNOWN MultiLineIfBlock
        return Right(s, Len(s) - Len(text));
    };
    LegacyGame.prototype.Keyword2CAS = function (KWord) {
        var k = "";

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ForBlock
        return Keyword2CAS("!unknown") + KWord + Keyword2CAS("!unknown");
    };
    LegacyGame.prototype.LoadCASKeywords = function () {
        var questDatLines = GetResourceLines(My.Resources.QuestDAT);
        // UNKNOWN ForEachBlock
    };
    LegacyGame.prototype.GetResourceLines = function (res) {
        var enc = {};
        var resFile = 'expr';
        return Split(resFile, Chr(13) + Chr(10));
    };
    LegacyGame.prototype.ParseFile = function (filename) {
        var hasErrors;
        var result;
        var libCode = [];
        var libLines;
        var ignoreMode;
        var skipCheck;
        var c;
        var d;
        var l;
        var libFileHandle;
        var libResourceLines;
        var libFile;
        var libLine;
        var inDefGameBlock;
        var gameLine;
        var inDefSynBlock;
        var synLine;
        var libFoundThisSweep;
        var libFileName;
        var libraryList = [];
        var numLibraries;
        var libraryAlreadyIncluded;
        var inDefTypeBlock;
        var typeBlockName;
        var typeLine;
        var defineCount;
        var curLine;
        this._defineBlockParams = new any();
        result = true;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        numLibraries = 0;

        // UNKNOWN DoLoopUntilBlock
        skipCheck = false;
        var lastSlashPos;
        var slashPos;
        var curPos = 1;

        // UNKNOWN DoLoopUntilBlock
        var filenameNoPath = LCase(Mid(filename, lastSlashPos + 1));

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN MultiLineIfBlock
        this._numberSections = 1;

        // UNKNOWN ForBlock
        this._numberSections = this._numberSections - 1;
        var gotGameBlock = false;

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
        hasErrors = ConvertFriendlyIfs();

        // UNKNOWN SingleLineIfStatement
        // UNKNOWN MultiLineIfBlock
        this._saveGameFile = "";
        return result;
    };
    LegacyGame.prototype.LogASLError = function (err, type) {
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.GetParameter = function (s, ctx, convertStringVariables) {
        var newParam;
        var startPos;
        var endPos;
        startPos = InStr(s, "<");
        endPos = InStr(s, ">");

        // UNKNOWN MultiLineIfBlock
        var retrParam = Mid(s, startPos + 1, 'expr' - 1);

        // UNKNOWN MultiLineIfBlock
        return EvaluateInlineExpressions(newParam);
    };
    LegacyGame.prototype.AddLine = function (line) {
        var numLines;
        numLines = UBound(this._lines) + 1;

        // UNKNOWN ReDimPreserveStatement
        this._lines[numLines] = line;
    };
    LegacyGame.prototype.LoadCASFile = function (filename) {
        var endLineReached;
        var exitTheLoop;
        var textMode;
        var casVersion;
        var startCat = "";
        var endCatPos;
        var fileData = "";
        var chkVer;
        var j;
        var curLin;
        var textData;
        var cpos;
        var nextLinePos;
        var c;
        var tl;
        var ckw;
        var d;

        // UNKNOWN ReDimStatement
        // UNKNOWN MultiLineIfBlock
        chkVer = Left(fileData, 7);
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.DecryptString = function (s) {
        var output = "";

        // UNKNOWN ForBlock
        return output;
    };
    LegacyGame.prototype.RemoveTabs = function (s) {
        // UNKNOWN MultiLineIfBlock
        return s;
    };
    LegacyGame.prototype.DoAddRemove = function (childId, parentId, add, ctx) {
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.DoLook = function (id, ctx, showExamineError, showDefaultDescription) {
        var objectContents;
        var foundLook = false;

        // UNKNOWN MultiLineIfBlock
        var lookLine;
        var o = this._objs[id];
        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN SingleLineIfStatement
    };
    LegacyGame.prototype.DoOpenClose = function (id, open, showLook, ctx) {
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.EvaluateInlineExpressions = function (s) {
        // UNKNOWN MultiLineIfBlock
        var bracePos;
        var curPos = 1;
        var resultLine = "";

        // UNKNOWN DoLoopUntilBlock
        curPos = 1;

        // UNKNOWN DoLoopUntilBlock
        return resultLine;
    };
    LegacyGame.prototype.ExecAddRemove = function (cmd, ctx) {
        var childId;
        var childName;
        var doAdd;
        var sepPos;
        var parentId;
        var sepLen;
        var parentName;
        var verb = "";
        var action;
        var foundAction;
        var actionScript = "";
        var propertyExists;
        var textToPrint;
        var isContainer;
        var gotObject;
        var childLength;
        var noParentSpecified = false;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        childLength = sepPos - 'expr';

        // UNKNOWN MultiLineIfBlock
        childName = Trim(Mid(cmd, Len(verb) + 2, childLength));
        gotObject = false;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        isContainer = IsYes(GetObjectProperty("container", parentId, true, false));

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        var canAccessObject = PlayerCanAccessObject(childId);

        // UNKNOWN MultiLineIfBlock
        var canAccessParent = PlayerCanAccessObject(parentId);

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        var o = this._objs[parentId];
        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ExecAddRemoveScript = function (parameter, add, ctx) {
        var childId;
        var parentId;
        var commandName;
        var childName;
        var parentName = "";
        var scp;

        // UNKNOWN MultiLineIfBlock
        scp = InStr(parameter, ";");

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        childId = GetObjectIdNoAlias(childName);
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ExecOpenClose = function (cmd, ctx) {
        var id;
        var name;
        var doOpen;
        var isOpen;
        var foundAction;
        var action = "";
        var actionScript = "";
        var propertyExists;
        var textToPrint;
        var isContainer;

        // UNKNOWN MultiLineIfBlock
        name = GetEverythingAfter(cmd, action + " ");
        id = Disambiguate(name, this._currentRoom + ";inventory", ctx);

        // UNKNOWN MultiLineIfBlock
        isContainer = IsYes(GetObjectProperty("container", id, true, false));

        // UNKNOWN MultiLineIfBlock
        isOpen = IsYes(GetObjectProperty("opened", id, true, false));

        // UNKNOWN MultiLineIfBlock
        var canAccessObject = PlayerCanAccessObject(id);

        // UNKNOWN MultiLineIfBlock
        var o = this._objs[id];
        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ExecuteSelectCase = function (script, ctx) {
        var afterLine = GetAfterParameter(script);

        // UNKNOWN MultiLineIfBlock
        var blockName = GetParameter(afterLine, ctx);
        var block = DefineBlockParam("procedure", blockName);
        var checkValue = GetParameter(script, ctx);
        var caseMatch = false;
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.ExecVerb = function (cmd, ctx, libCommands) {
        var gameBlock;
        var foundVerb = false;
        var verbProperty = "";
        var script = "";
        var verbsList;
        var thisVerb = "";
        var scp;
        var id;
        var verbObject = "";
        var verbTag;
        var thisScript = "";

        // UNKNOWN MultiLineIfBlock
        gameBlock = GetDefineBlock("game");

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        return foundVerb;
    };
    LegacyGame.prototype.ExpressionHandler = function (expr) {
        var openBracketPos;
        var endBracketPos;
        var res = new ExpressionResult();

        // UNKNOWN DoLoopUntilBlock
        var numElements = 1;
        var elements;

        // UNKNOWN ReDimStatement
        var numOperators = 0;
        var operators = [];
        var newElement;
        var obscuredExpr = ObscureNumericExps(expr);

        // UNKNOWN ForBlock
        // UNKNOWN ForBlock
        var opNum = 0;

        // UNKNOWN DoLoopUntilBlock
        res.Success = 0 /* OK */;
        res.Result = elements[1];
        return res;
    };
    LegacyGame.prototype.ListContents = function (id, ctx) {
        var contentsIDs = [];

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        var numContents = 0;

        // UNKNOWN ForBlock
        var contents = "";
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ObscureNumericExps = function (s) {
        var EPos;
        var CurPos;
        var OutputString;
        OutputString = s;
        CurPos = 1;

        // UNKNOWN DoLoopUntilBlock
        return OutputString;
    };
    LegacyGame.prototype.ProcessListInfo = function (line, id) {
        var listInfo = new TextAction();
        var propName = "";
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.GetHTMLColour = function (colour, defaultColour) {
        colour = LCase(colour);
        // UNKNOWN SingleLineIfStatement
        // UNKNOWN SelectBlock
    };
    LegacyGame.prototype.DoPrint = function (text) {
        // UNKNOWN RaiseEventStatement
    };
    LegacyGame.prototype.DestroyExit = function (exitData, ctx) {
        var fromRoom = "";
        var toRoom = "";
        var roomId;
        var exitId;
        var scp = InStr(exitData, ";");

        // UNKNOWN MultiLineIfBlock
        var roomExit;
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.DoClear = function () {
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.DoWait = function () {
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN SyncLockBlock
    };
    LegacyGame.prototype.ExecuteFlag = function (line, ctx) {
        var propertyString = "";
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.ExecuteIfFlag = function (flag) {
        return GetObjectProperty(flag, 1, true) == "yes";
    };
    LegacyGame.prototype.ExecuteIncDec = function (line, ctx) {
        var variable;
        var change;
        var param = GetParameter(line, ctx);
        var sc = InStr(param, ";");

        // UNKNOWN MultiLineIfBlock
        var value = GetNumericContents(variable, ctx, true);

        // UNKNOWN SingleLineIfStatement
        // UNKNOWN MultiLineIfBlock
        var arrayIndex = GetArrayIndex(variable, ctx);
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.ExtractFile = function (file) {
        var length;
        var startPos;
        var extracted;
        var resId;

        // UNKNOWN SingleLineIfStatement
        var found = false;

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        var fileName = 'expr';

        // UNKNOWN ExpressionStatement
        // UNKNOWN MultiLineIfBlock
        return fileName;
    };
    LegacyGame.prototype.AddObjectAction = function (id, name, script, noUpdate) {
        var actionNum;
        var foundExisting = false;
        var o = this._objs[id];

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        'expr'.ActionName = name;
        'expr'.Script = script;
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.AddToChangeLog = function (appliesTo, changeData) {
        this._gameChangeData.NumberChanges = this._gameChangeData.NumberChanges + 1;

        // UNKNOWN ReDimPreserveStatement
        'expr' = new ChangeType();
        'expr'.AppliesTo = appliesTo;
        'expr'.Change = changeData;
    };
    LegacyGame.prototype.AddToObjectChangeLog = function (appliesToType, appliesTo, element, changeData) {
        var changeLog;
        // UNKNOWN SelectBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.AddToGiveInfo = function (id, giveData) {
        var giveType;
        var actionName;
        var actionScript;
        var o = this._objs[id];
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.AddToObjectActions = function (actionInfo, id, ctx) {
        var actionNum;
        var foundExisting = false;
        var name = LCase(GetParameter(actionInfo, ctx));
        var ep = InStr(actionInfo, ">");

        // UNKNOWN MultiLineIfBlock
        var script = Trim(Mid(actionInfo, ep + 1));
        var o = this._objs[id];

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        'expr'.ActionName = name;
        'expr'.Script = script;
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.AddToObjectAltNames = function (altNames, id) {
        var o = this._objs[id];
        // UNKNOWN DoLoopUntilBlock
    };
    LegacyGame.prototype.AddToObjectProperties = function (propertyInfo, id, ctx) {
        // UNKNOWN SingleLineIfStatement
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN DoLoopUntilBlock
    };
    LegacyGame.prototype.AddToUseInfo = function (id, useData) {
        var useType;
        var o = this._objs[id];
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.CapFirst = function (s) {
        return UCase(Left(s, 1)) + Mid(s, 2);
    };
    LegacyGame.prototype.ConvertVarsIn = function (s, ctx) {
        return GetParameter("<" + s + ">", ctx);
    };
    LegacyGame.prototype.DisambObjHere = function (ctx, id, firstPlace, twoPlaces, secondPlace, isExit) {
        var isSeen;
        var onlySeen = false;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        return false;
    };
    LegacyGame.prototype.ExecClone = function (cloneString, ctx) {
        var id;
        var newName;
        var cloneTo;
        var SC = InStr(cloneString, ";");

        // UNKNOWN MultiLineIfBlock
        this._numberObjs = this._numberObjs + 1;

        // UNKNOWN ReDimPreserveStatement
        this._objs[this._numberObjs] = new ObjectType();
        this._objs[this._numberObjs] = this._objs[id];
        this._objs[this._numberObjs].ContainerRoom = cloneTo;
        this._objs[this._numberObjs].ObjectName = newName;
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.ExecOops = function (correction, ctx) {
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ExecType = function (typeData, ctx) {
        var id;
        var found;
        var scp = InStr(typeData, ";");

        // UNKNOWN MultiLineIfBlock
        var objName = Trim(Left(typeData, scp - 1));
        var typeName = Trim(Mid(typeData, scp + 1));

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        var o = this._objs[id];
        o.NumberTypesIncluded = o.NumberTypesIncluded + 1;

        // UNKNOWN ReDimPreserveStatement
        'expr' = typeName;
        var propertyData = GetPropertiesInType(typeName);
        // UNKNOWN ExpressionStatement
        // UNKNOWN ForBlock
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.ExecuteIfAction = function (actionData) {
        var id;
        var scp = InStr(actionData, ";");

        // UNKNOWN MultiLineIfBlock
        var objName = Trim(Left(actionData, scp - 1));
        var actionName = Trim(Mid(actionData, scp + 1));
        var found = false;

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        var o = this._objs[id];

        // UNKNOWN ForBlock
        return false;
    };
    LegacyGame.prototype.ExecuteIfType = function (typeData) {
        var id;
        var scp = InStr(typeData, ";");

        // UNKNOWN MultiLineIfBlock
        var objName = Trim(Left(typeData, scp - 1));
        var typeName = Trim(Mid(typeData, scp + 1));
        var found = false;

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        var o = this._objs[id];

        // UNKNOWN ForBlock
        return false;
    };
    LegacyGame.prototype.GetArrayIndex = function (varName, ctx) {
        var result = new ArrayResult();

        // UNKNOWN MultiLineIfBlock
        var beginPos = InStr(varName, "[");
        var endPos = InStr(varName, "]");
        var data = Mid(varName, beginPos + 1, 'expr' - 1);

        // UNKNOWN MultiLineIfBlock
        result.Name = Left(varName, beginPos - 1);
        return result;
    };
    LegacyGame.prototype.Disambiguate = function (name, containedIn, ctx, isExit) {
        var numberCorresIds = 0;
        var idNumbers = [];
        var firstPlace;
        var secondPlace = "";
        var twoPlaces;
        var descriptionText;
        var validNames;
        var numValidNames;
        name = Trim(name);

        // UNKNOWN ExpressionStatement
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        this._thisTurnIt = 0;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        this._thisTurnIt = this._lastIt;

        // UNKNOWN ExpressionStatement
        return -1;
    };
    LegacyGame.prototype.DisplayStatusVariableInfo = function (id, type, ctx) {
        var displayData = "";
        var ep;

        // UNKNOWN MultiLineIfBlock
        return displayData;
    };
    LegacyGame.prototype.DoAction = function (ObjID, ActionName, ctx, LogError) {
        var FoundAction;
        var ActionScript = "";
        var o = this._objs[ObjID];

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        var NewThread = CopyContext(ctx);
        NewThread.CallingObjectId = ObjID;

        // UNKNOWN ExpressionStatement
        return true;
    };
    LegacyGame.prototype.HasAction = function (ObjID, ActionName) {
        var o = this._objs[ObjID];

        // UNKNOWN ForBlock
        return false;
    };
    LegacyGame.prototype.ExecForEach = function (scriptLine, ctx) {
        var inLocation;
        var scriptToRun;
        var isExit;
        var isRoom;

        // UNKNOWN MultiLineIfBlock
        scriptLine = GetEverythingAfter(scriptLine, "in ");
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.ExecuteAction = function (data, ctx) {
        var actionName;
        var script;
        var actionNum;
        var id;
        var foundExisting = false;
        var foundObject = false;
        var param = GetParameter(data, ctx);
        var scp = InStr(param, ";");

        // UNKNOWN MultiLineIfBlock
        var objName = Trim(Left(param, scp - 1));
        actionName = Trim(Mid(param, scp + 1));
        var ep = InStr(data, ">");

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        var o = this._objs[id];

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        'expr'.ActionName = actionName;
        'expr'.Script = script;
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.ExecuteCondition = function (condition, ctx) {
        var result;
        var thisNot;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN SingleLineIfStatement
        return result;
    };
    LegacyGame.prototype.ExecuteConditions = function (list, ctx) {
        var conditions;
        var numConditions = 0;
        var operations;
        var obscuredConditionList = ObliterateParameters(list);
        var pos = 1;
        var isFinalCondition = false;

        // UNKNOWN DoLoopUntilBlock
        operations[0] = "AND";
        var result = true;

        // UNKNOWN ForBlock
        return result;
    };
    LegacyGame.prototype.ExecuteCreate = function (data, ctx) {
        var newName;
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ExecuteCreateExit = function (data, ctx) {
        var scrRoom;
        var destRoom = "";
        var destId;
        var exitData = GetEverythingAfter(data, "exit ");
        var newName = GetParameter(data, ctx);
        var scp = InStr(newName, ";");

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        var srcId = GetRoomID(scrRoom, ctx);

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        var exists = false;

        // UNKNOWN MultiLineIfBlock
        var paramPos = InStr(exitData, "<");
        var saveData;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
        var r = this._rooms[srcId];
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ExecDrop = function (obj, ctx) {
        var found;
        var parentId;
        var id;
        id = Disambiguate(obj, "inventory", ctx);

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        var isInContainer = false;

        // UNKNOWN MultiLineIfBlock
        var dropFound = false;
        var dropStatement = "";
        // UNKNOWN ForBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ExecExamine = function (command, ctx) {
        var item = LCase(Trim(GetEverythingAfter(command, "examine ")));

        // UNKNOWN MultiLineIfBlock
        var id = Disambiguate(item, this._currentRoom + ";inventory", ctx);

        // UNKNOWN MultiLineIfBlock
        var o = this._objs[id];
        // UNKNOWN ForBlock
        // UNKNOWN ForBlock
        // UNKNOWN ForBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.ExecMoveThing = function (data, type, ctx) {
        var scp = InStr(data, ";");
        var name = Trim(Left(data, scp - 1));
        var place = Trim(Mid(data, scp + 1));
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.ExecProperty = function (data, ctx) {
        var id;
        var found;
        var scp = InStr(data, ";");

        // UNKNOWN MultiLineIfBlock
        var name = Trim(Left(data, scp - 1));
        var properties = Trim(Mid(data, scp + 1));
        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.ExecuteDo = function (procedureName, ctx) {
        var newCtx = CopyContext(ctx);
        var numParameters = 0;
        var useNewCtx;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        var block = DefineBlockParam("procedure", procedureName);
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ExecuteDoAction = function (data, ctx) {
        var id;
        var scp = InStr(data, ";");

        // UNKNOWN MultiLineIfBlock
        var objName = LCase(Trim(Left(data, scp - 1)));
        var actionName = Trim(Mid(data, scp + 1));
        var found = false;
        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.ExecuteIfHere = function (obj, ctx) {
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ForBlock
        return false;
    };
    LegacyGame.prototype.ExecuteIfExists = function (obj, realOnly) {
        var result;
        var errorReport = false;
        var scp;

        // UNKNOWN MultiLineIfBlock
        var found = false;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN SingleLineIfStatement
        // UNKNOWN MultiLineIfBlock
        return result;
    };
    LegacyGame.prototype.ExecuteIfProperty = function (data) {
        var id;
        var scp = InStr(data, ";");

        // UNKNOWN MultiLineIfBlock
        var objName = Trim(Left(data, scp - 1));
        var propertyName = Trim(Mid(data, scp + 1));
        var found = false;

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        return GetObjectProperty(propertyName, id, true) == "yes";
    };
    LegacyGame.prototype.ExecuteRepeat = function (data, ctx) {
        var repeatWhileTrue;
        var repeatScript = "";
        var bracketPos;
        var afterBracket;
        var foundScript = false;

        // UNKNOWN MultiLineIfBlock
        var pos = 1;

        // UNKNOWN DoLoopUntilBlock
        var conditions = Trim(Left(data, bracketPos));
        var finished = false;
        // UNKNOWN DoLoopUntilBlock
    };
    LegacyGame.prototype.ExecuteSetCollectable = function (param, ctx) {
        var val;
        var id;
        var scp = InStr(param, ";");
        var name = Trim(Left(param, scp - 1));
        var newVal = Trim(Right(param, Len(param) - scp));
        var found = false;

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        var op = Left(newVal, 1);
        var newValue = Trim(Right(newVal, Len(newVal) - 1));
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.ExecuteWait = function (waitLine, ctx) {
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.InitFileData = function (fileData) {
        this._fileData = fileData;
        this._fileDataPos = 1;
    };
    LegacyGame.prototype.GetNextChunk = function () {
        var nullPos = InStr(this._fileDataPos, this._fileData, Chr(0));
        var result = Mid(this._fileData, this._fileDataPos, nullPos - this._fileDataPos);

        // UNKNOWN MultiLineIfBlock
        return result;
    };
    LegacyGame.prototype.GetFileDataChars = function (count) {
        var result = Mid(this._fileData, this._fileDataPos, count);
        this._fileDataPos = this._fileDataPos + count;
        return result;
    };
    LegacyGame.prototype.GetObjectActions = function (actionInfo) {
        var name = LCase(GetParameter(actionInfo, this._nullContext));
        var ep = InStr(actionInfo, ">");

        // UNKNOWN MultiLineIfBlock
        var script = Trim(Mid(actionInfo, ep + 1));
        var result = new ActionType();
        result.ActionName = name;
        result.Script = script;
        return result;
    };
    LegacyGame.prototype.GetObjectId = function (name, ctx, room) {
        var id;
        var found = false;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        return -1;
    };
    LegacyGame.prototype.GetObjectIdNoAlias = function (name) {
        // UNKNOWN ForBlock
        return 0;
    };
    LegacyGame.prototype.GetObjectProperty = function (name, id, existsOnly, logError) {
        var result = "";
        var found = false;
        var o = this._objs[id];

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        return "";
    };
    LegacyGame.prototype.GetPropertiesInType = function (type, err) {
        var blockId;
        var propertyList = new PropertiesActions();
        var found = false;

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ForBlock
        return propertyList;
    };
    LegacyGame.prototype.GetRoomID = function (name, ctx) {
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ForBlock
        return 0;
    };
    LegacyGame.prototype.GetTextOrScript = function (textScript) {
        var result = new TextAction();
        textScript = Trim(textScript);

        // UNKNOWN MultiLineIfBlock
        return result;
    };
    LegacyGame.prototype.GetThingNumber = function (name, room, type) {
        // UNKNOWN MultiLineIfBlock
        return -1;
    };
    LegacyGame.prototype.GetThingBlock = function (name, room, type) {
        var result = new DefineBlock();

        // UNKNOWN MultiLineIfBlock
        result.StartLine = 0;
        result.EndLine = 0;
        return result;
    };
    LegacyGame.prototype.MakeRestoreData = function () {
        var data = {};
        var objectData = [];
        var roomData = [];
        var numObjectData;
        var numRoomData;

        // UNKNOWN ExpressionStatement
        var start = data.Length + 1;

        // UNKNOWN ExpressionStatement
        // UNKNOWN ForBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN ForBlock
        // UNKNOWN ForEachBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN ForBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN ForBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN ForBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN ForBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN ForBlock
        var dataString;
        var newFileData = {};
        dataString = 'expr';

        // UNKNOWN ExpressionStatement
        // UNKNOWN ForBlock
        return 'expr';
    };
    LegacyGame.prototype.MoveThing = function (name, room, type, ctx) {
        var oldRoom = "";
        var id = GetThingNumber(name, "", type);
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.Pause = function (duration) {
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN SyncLockBlock
    };
    LegacyGame.prototype.ConvertParameter = function (parameter, convertChar, action, ctx) {
        var result = "";
        var pos = 1;
        var finished = false;

        // UNKNOWN DoLoopUntilBlock
        return result;
    };
    LegacyGame.prototype.DoFunction = function (data, ctx) {
        var name;
        var parameter;
        var intFuncResult = "";
        var intFuncExecuted = false;
        var paramPos = InStr(data, "(");

        // UNKNOWN MultiLineIfBlock
        var block;
        block = DefineBlockParam("function", name);
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.DoInternalFunction = function (name, parameter, ctx) {
        var parameters;
        var untrimmedParameters;
        var objId;
        var numParameters = 0;
        var pos = 1;

        // UNKNOWN MultiLineIfBlock
        var param2;
        var param3;

        // UNKNOWN MultiLineIfBlock
        return "__NOTDEFINED";
    };
    LegacyGame.prototype.ExecFor = function (line, ctx) {
        // UNKNOWN MultiLineIfBlock
        var endValue;
        var stepValue;
        var forData = GetParameter(line, ctx);
        var scp1 = InStr(forData, ";");
        var scp2 = InStr(scp1 + 1, forData, ";");
        var scp3 = InStr(scp2 + 1, forData, ";");
        var counterVariable = Trim(Left(forData, scp1 - 1));
        var startValue = 'expr';

        // UNKNOWN MultiLineIfBlock
        var loopScript = Trim(Mid(line, InStr(line, ">") + 1));
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.ExecSetVar = function (varInfo, ctx) {
        var scp = InStr(varInfo, ";");
        var varName = Trim(Left(varInfo, scp - 1));
        var varCont = Trim(Mid(varInfo, scp + 1));
        var idx = GetArrayIndex(varName, ctx);
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN TryBlock
    };
    LegacyGame.prototype.ExecuteIfAsk = function (question) {
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN SyncLockBlock
        return this._questionResponse;
    };
    LegacyGame.prototype.SetQuestionResponse = function (response) {
        var runnerThread = {};
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.SetQuestionResponseInNewThread = function (response) {
        this._questionResponse = 'expr';
        // UNKNOWN SyncLockBlock
    };
    LegacyGame.prototype.ExecuteIfGot = function (item) {
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ForBlock
        // UNKNOWN ExpressionStatement
        return false;
    };
    LegacyGame.prototype.ExecuteIfHas = function (condition) {
        var checkValue;
        var colNum;
        var scp = InStr(condition, ";");
        var name = Trim(Left(condition, scp - 1));
        var newVal = Trim(Right(condition, Len(condition) - scp));
        var found = false;

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        var op = Left(newVal, 1);
        var newValue = Trim(Right(newVal, Len(newVal) - 1));

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        return false;
    };
    LegacyGame.prototype.ExecuteIfIs = function (condition) {
        var value1;
        var value2;
        var op;
        var expectNumerics;
        var expResult;
        var scp = InStr(condition, ";");

        // UNKNOWN MultiLineIfBlock
        var scp2 = InStr(scp + 1, condition, ";");

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        var result = false;

        // UNKNOWN SelectBlock
        // UNKNOWN MultiLineIfBlock
        return result;
    };
    LegacyGame.prototype.GetNumericContents = function (name, ctx, noError) {
        var numNumber;
        var arrayIndex;
        var exists = false;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        return Val('expr');
    };
    LegacyGame.prototype.PlayerErrorMessage = function (e, ctx) {
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.PlayerErrorMessage_ExtendInfo = function (e, ctx, extraInfo) {
        var message = GetErrorMessage(e, ctx);
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.GetErrorMessage = function (e, ctx) {
        return ConvertParameter(ConvertParameter(ConvertParameter(this._playerErrorMessageString[e], "%", 2 /* Numeric */, ctx), "$", 1 /* Functions */, ctx), "#", 0 /* Strings */, ctx);
    };
    LegacyGame.prototype.PlayMedia = function (filename) {
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.PlayMedia = function (filename, sync, looped) {
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.PlayWav = function (parameter) {
        var sync = false;
        var looped = false;
        var params = {};
        params = new any();
        var filename = params[0];
        // UNKNOWN SingleLineIfStatement
        // UNKNOWN SingleLineIfStatement
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.RestoreGameData = function (fileData) {
        var appliesTo;
        var data = "";
        var objId;
        var timerNum;
        var varUbound;
        var found;
        var numStoredData;
        var storedData = [];
        var decryptedFile = {};

        // UNKNOWN ForBlock
        this._fileData = 'expr';
        this._currentRoom = GetNextChunk();
        var numData = 'expr';
        var createdObjects = {};

        // UNKNOWN ForBlock
        numData = 'expr';

        // UNKNOWN ForBlock
        numData = 'expr';

        // UNKNOWN ForBlock
        // UNKNOWN ForBlock
        numData = 'expr';

        // UNKNOWN ForBlock
        this._gameIsRestoring = true;
        numData = 'expr';

        // UNKNOWN ForBlock
        numData = 'expr';

        // UNKNOWN ForBlock
        this._gameIsRestoring = false;
    };
    LegacyGame.prototype.SetBackground = function (col) {
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.SetForeground = function (col) {
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.SetDefaultPlayerErrorMessages = function () {
        this._playerErrorMessageString[0 /* BadCommand */] = "I don't understand your command. Type HELP for a list of valid commands.";
        this._playerErrorMessageString[1 /* BadGo */] = "I don't understand your use of 'GO' - you must either GO in some direction, or GO TO a place.";
        this._playerErrorMessageString[2 /* BadGive */] = "You didn't say who you wanted to give that to.";
        this._playerErrorMessageString[3 /* BadCharacter */] = "I can't see anybody of that name here.";
        this._playerErrorMessageString[4 /* NoItem */] = "You don't have that.";
        this._playerErrorMessageString[5 /* ItemUnwanted */] = "#quest.error.gender# doesn't want #quest.error.article#.";
        this._playerErrorMessageString[6 /* BadLook */] = "You didn't say what you wanted to look at.";
        this._playerErrorMessageString[7 /* BadThing */] = "I can't see that here.";
        this._playerErrorMessageString[8 /* DefaultLook */] = "Nothing out of the ordinary.";
        this._playerErrorMessageString[9 /* DefaultSpeak */] = "#quest.error.gender# says nothing.";
        this._playerErrorMessageString[10 /* BadItem */] = "I can't see that anywhere.";
        this._playerErrorMessageString[11 /* DefaultTake */] = "You pick #quest.error.article# up.";
        this._playerErrorMessageString[12 /* BadUse */] = "You didn't say what you wanted to use that on.";
        this._playerErrorMessageString[13 /* DefaultUse */] = "You can't use that here.";
        this._playerErrorMessageString[14 /* DefaultOut */] = "There's nowhere you can go out to around here.";
        this._playerErrorMessageString[15 /* BadPlace */] = "You can't go there.";
        this._playerErrorMessageString[17 /* DefaultExamine */] = "Nothing out of the ordinary.";
        this._playerErrorMessageString[18 /* BadTake */] = "You can't take #quest.error.article#.";
        this._playerErrorMessageString[19 /* CantDrop */] = "You can't drop that here.";
        this._playerErrorMessageString[20 /* DefaultDrop */] = "You drop #quest.error.article#.";
        this._playerErrorMessageString[21 /* BadDrop */] = "You are not carrying such a thing.";
        this._playerErrorMessageString[22 /* BadPronoun */] = "I don't know what '#quest.error.pronoun#' you are referring to.";
        this._playerErrorMessageString[16 /* BadExamine */] = "You didn't say what you wanted to examine.";
        this._playerErrorMessageString[23 /* AlreadyOpen */] = "It is already open.";
        this._playerErrorMessageString[24 /* AlreadyClosed */] = "It is already closed.";
        this._playerErrorMessageString[25 /* CantOpen */] = "You can't open that.";
        this._playerErrorMessageString[26 /* CantClose */] = "You can't close that.";
        this._playerErrorMessageString[27 /* DefaultOpen */] = "You open it.";
        this._playerErrorMessageString[28 /* DefaultClose */] = "You close it.";
        this._playerErrorMessageString[29 /* BadPut */] = "You didn't specify what you wanted to put #quest.error.article# on or in.";
        this._playerErrorMessageString[30 /* CantPut */] = "You can't put that there.";
        this._playerErrorMessageString[31 /* DefaultPut */] = "Done.";
        this._playerErrorMessageString[32 /* CantRemove */] = "You can't remove that.";
        this._playerErrorMessageString[33 /* AlreadyPut */] = "It is already there.";
        this._playerErrorMessageString[34 /* DefaultRemove */] = "Done.";
        this._playerErrorMessageString[35 /* Locked */] = "The exit is locked.";
        this._playerErrorMessageString[36 /* DefaultWait */] = "Press a key to continue...";
        this._playerErrorMessageString[37 /* AlreadyTaken */] = "You already have that.";
    };
    LegacyGame.prototype.SetFont = function (name) {
        // UNKNOWN SingleLineIfStatement
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.SetFontSize = function (size) {
        // UNKNOWN SingleLineIfStatement
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.SetNumericVariableContents = function (name, content, ctx, arrayIndex) {
        var numNumber;
        var exists = false;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        this._numericVariable[numNumber].VariableName = name;

        // UNKNOWN ReDimPreserveStatement
        'expr' = 'expr';
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.SetOpenClose = function (name, open, ctx) {
        var cmd;

        // UNKNOWN MultiLineIfBlock
        var id = GetObjectIdNoAlias(name);
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.SetTimerState = function (name, state) {
        // UNKNOWN ForBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.SetUnknownVariableType = function (variableData, ctx) {
        var scp = InStr(variableData, ";");

        // UNKNOWN MultiLineIfBlock
        var name = Trim(Left(variableData, scp - 1));

        // UNKNOWN MultiLineIfBlock
        var contents = Trim(Mid(variableData, scp + 1));

        // UNKNOWN ForBlock
        // UNKNOWN ForBlock
        // UNKNOWN ForBlock
        return 2 /* Unfound */;
    };
    LegacyGame.prototype.SetUpChoiceForm = function (blockName, ctx) {
        var block = DefineBlockParam("selection", blockName);
        var prompt = FindStatement(block, "info");
        var menuOptions = {};
        var menuScript = {};

        // UNKNOWN ForBlock
        // UNKNOWN ExpressionStatement
        var mnu = new MenuData();
        var choice = ShowMenu(mnu);

        // UNKNOWN ExpressionStatement
        return menuScript[choice];
    };
    LegacyGame.prototype.SetUpDefaultFonts = function () {
        var gameblock = GetDefineBlock("game");
        this._defaultFontName = "Arial";
        this._defaultFontSize = 9;
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.SetUpDisplayVariables = function () {
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.SetUpGameObject = function () {
        this._numberObjs = 1;

        // UNKNOWN ReDimStatement
        this._objs[1] = new ObjectType();
        var o = this._objs[1];
        o.ObjectName = "game";
        o.ObjectAlias = "";
        o.Visible = false;
        o.Exists = true;
        var nestBlock = 0;
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.SetUpMenus = function () {
        var exists = false;
        var menuTitle = "";
        var menuOptions = {};
        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.SetUpOptions = function () {
        var opt;
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.SetUpRoomData = function () {
        var defaultProperties = new PropertiesActions();
        var defaultExists = false;
        // UNKNOWN ForBlock
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.SetUpSynonyms = function () {
        var block = GetDefineBlock("synonyms");
        this._numberSynonyms = 0;
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.SetUpTimers = function () {
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.SetUpTurnScript = function () {
        var block = GetDefineBlock("game");
        this._beforeTurnScript = "";
        this._afterTurnScript = "";
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.SetUpUserDefinedPlayerErrors = function () {
        var block = GetDefineBlock("game");
        var examineIsCustomised = false;
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.SetVisibility = function (thing, type, visible, ctx) {
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.ShowPictureInText = function (filename) {
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ShowRoomInfoV2 = function (Room) {
        var roomDisplayText = "";
        var descTagExist;
        var gameBlock;
        var charsViewable;
        var charsFound;
        var prefixAliasNoFormat;
        var prefix;
        var prefixAlias;
        var inDesc;
        var aliasName = "";
        var charList;
        var foundLastComma;
        var cp;
        var ncp;
        var noFormatObjsViewable;
        var objsViewable = "";
        var objsFound;
        var objListString;
        var noFormatObjListString;
        var possDir;
        var nsew;
        var doorways;
        var places;
        var place;
        var aliasOut = "";
        var placeNoFormat;
        var descLine = "";
        var lastComma;
        var oldLastComma;
        var defineBlock;
        var lookString = "";
        gameBlock = GetDefineBlock("game");
        this._currentRoom = Room;
        var roomBlock;
        roomBlock = DefineBlockParam("room", Room);
        var finishedFindingCommas;
        charsViewable = "";
        charsFound = 0;

        // UNKNOWN ForBlock
        // UNKNOWN SingleLineIfStatement
        prefix = FindStatement(roomBlock, "prefix");

        // UNKNOWN MultiLineIfBlock
        inDesc = "unfound";

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        roomDisplayText = roomDisplayText + charsViewable + vbCrLf;
        noFormatObjsViewable = "";

        // UNKNOWN ForBlock
        var finishedLoop;

        // UNKNOWN MultiLineIfBlock
        doorways = "";
        nsew = "";
        places = "";
        possDir = "";

        // UNKNOWN ForBlock
        var outside;

        // UNKNOWN MultiLineIfBlock
        var finished;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN MultiLineIfBlock
        descTagExist = false;

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
        defineBlock = 0;
        // UNKNOWN ForBlock
        // UNKNOWN SingleLineIfStatement
    };
    LegacyGame.prototype.Speak = function (text) {
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.AddToObjectList = function (objList, exitList, name, type) {
        name = CapFirst(name);
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ExecExec = function (scriptLine, ctx) {
        // UNKNOWN SingleLineIfStatement
        var execLine = GetParameter(scriptLine, ctx);
        var newCtx = CopyContext(ctx);
        newCtx.StackCounter = newCtx.StackCounter + 1;
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ExecSetString = function (info, ctx) {
        var scp = InStr(info, ";");
        var name = Trim(Left(info, scp - 1));
        var value = Mid(info, scp + 1);

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        var idx = GetArrayIndex(name, ctx);
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.ExecUserCommand = function (cmd, ctx, libCommands) {
        var curCmd;
        var commandList;
        var script = "";
        var commandTag;
        var commandLine = "";
        var foundCommand = false;
        var roomId = GetRoomID(this._currentRoom, ctx);

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        return foundCommand;
    };
    LegacyGame.prototype.ExecuteChoose = function (section, ctx) {
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.GetCommandParameters = function (test, required, ctx) {
        var chunksBegin;
        var chunksEnd;
        var varName;
        var var2Pos;
        test = "�" + Trim(test) + "�";
        required = "�" + required + "�";
        var currentReqLinePos = 1;
        var currentTestLinePos = 1;
        var finished = false;
        var numberChunks = 0;

        // UNKNOWN DoLoopUntilBlock
        var success = true;

        // UNKNOWN ForBlock
        return success;
    };
    LegacyGame.prototype.GetGender = function (character, capitalise, ctx) {
        var result;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN SingleLineIfStatement
        return result;
    };
    LegacyGame.prototype.GetStringContents = function (name, ctx) {
        var returnAlias = false;
        var arrayIndex = 0;
        var cp = InStr(name, ":");

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        var exists = false;
        var id;
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.IsAvailable = function (thingName, type, ctx) {
        var room;
        var name;
        var atPos = InStr(thingName, "@");
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.IsCompatible = function (test, required) {
        var var2Pos;
        test = "�" + Trim(test) + "�";
        required = "�" + required + "�";
        var currentReqLinePos = 1;
        var currentTestLinePos = 1;
        var finished = false;

        // UNKNOWN DoLoopUntilBlock
        return true;
    };
    LegacyGame.prototype.OpenGame = function (filename) {
        var cdatb;
        var result;
        var visible;
        var room;
        var fileData = "";
        var savedQsgVersion;
        var data = "";
        var name;
        var scp;
        var cdat;
        var scp2;
        var scp3;
        var lines = 'expr';
        this._gameLoadMethod = "loaded";
        var prevQsgVersion = false;

        // UNKNOWN MultiLineIfBlock
        savedQsgVersion = Left(fileData, 10);

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        result = InitialiseGame(this._gameFileName, true);

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        this._saveGameFile = filename;
        return true;
    };
    LegacyGame.prototype.SaveGame = function (filename, saveFile) {
        var ctx = new Context();
        var saveData;

        // UNKNOWN SingleLineIfStatement
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        this._saveGameFile = filename;
        return 'expr';
    };
    LegacyGame.prototype.MakeRestoreDataV2 = function () {
        var lines = {};
        var i;

        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ForBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN ForBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN ForBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN ForBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN ForBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN ForBlock
        // UNKNOWN ExpressionStatement
        return 'expr';
    };
    LegacyGame.prototype.SetAvailability = function (thingString, exists, ctx, type) {
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.SetStringContents = function (name, value, ctx, arrayIndex) {
        var id;
        var exists = false;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        this._stringVariable[id].VariableName = name;

        // UNKNOWN ReDimPreserveStatement
        'expr' = value;
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.SetUpCharObjectInfo = function () {
        var defaultProperties = new PropertiesActions();
        this._numberChars = 0;
        var defaultExists = false;
        // UNKNOWN ForBlock
        // UNKNOWN ForBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.ShowGameAbout = function (ctx) {
        var version = FindStatement(GetDefineBlock("game"), "game version");
        var author = FindStatement(GetDefineBlock("game"), "game author");
        var copyright = FindStatement(GetDefineBlock("game"), "game copyright");
        var info = FindStatement(GetDefineBlock("game"), "game info");
        // UNKNOWN ExpressionStatement
        // UNKNOWN SingleLineIfStatement
        // UNKNOWN SingleLineIfStatement
        // UNKNOWN SingleLineIfStatement
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ShowPicture = function (filename) {
        var caption = "";
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN SingleLineIfStatement
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.ShowRoomInfo = function (room, ctx, noPrint) {
        // UNKNOWN MultiLineIfBlock
        var roomDisplayText = "";
        var descTagExist;
        var doorwayString;
        var roomAlias;
        var finishedFindingCommas;
        var prefix;
        var roomDisplayName;
        var roomDisplayNameNoFormat;
        var inDescription;
        var visibleObjects = "";
        var visibleObjectsNoFormat;
        var placeList;
        var lastComma;
        var oldLastComma;
        var descType;
        var descLine = "";
        var showLookText;
        var lookDesc = "";
        var objLook;
        var objSuffix;
        var gameBlock = GetDefineBlock("game");
        this._currentRoom = room;
        var id = GetRoomID(this._currentRoom, ctx);

        // UNKNOWN SingleLineIfStatement
        roomAlias = this._rooms[id].RoomAlias;

        // UNKNOWN SingleLineIfStatement
        prefix = this._rooms[id].Prefix;

        // UNKNOWN MultiLineIfBlock
        inDescription = this._rooms[id].InDescription;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        visibleObjectsNoFormat = "";
        var visibleObjectsList = {};
        var count;

        // UNKNOWN ForBlock
        // UNKNOWN ForEachBlock
        // UNKNOWN MultiLineIfBlock
        doorwayString = UpdateDoorways(id, ctx);

        // UNKNOWN MultiLineIfBlock
        objLook = GetObjectProperty("look", this._rooms[id].ObjId, null, false);

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
        showLookText = true;
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.CheckCollectable = function (id) {
        var max;
        var value;
        var min;
        var m;
        var type = this._collectables[id].Type;
        value = this._collectables[id].Value;

        // UNKNOWN SingleLineIfStatement
        // UNKNOWN SingleLineIfStatement
        // UNKNOWN MultiLineIfBlock
        this._collectables[id].Value = value;
    };
    LegacyGame.prototype.DisplayCollectableInfo = function (id) {
        var display;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        return display;
    };
    LegacyGame.prototype.DisplayTextSection = function (section, ctx, OutputTo) {
        var block;
        block = DefineBlockParam("text", section);
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ForBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.ExecCommand = function (input, ctx, echo, runUserCommand, dontSetIt) {
        var parameter;
        var skipAfterTurn = false;
        input = RemoveFormatting(input);
        var oldBadCmdBefore = this._badCmdBefore;
        var roomID = GetRoomID(this._currentRoom, ctx);
        var enteredHelpCommand = false;

        // UNKNOWN SingleLineIfStatement
        var cmd = LCase(input);

        // UNKNOWN SyncLockBlock
        var userCommandReturn;

        // UNKNOWN MultiLineIfBlock
        input = LCase(input);

        // UNKNOWN ExpressionStatement
        var newCommand = " " + input + " ";

        // UNKNOWN ForBlock
        input = Mid(newCommand, 2, Len(newCommand) - 2);

        // UNKNOWN ExpressionStatement
        var newCtx = CopyContext(ctx);
        var globalOverride = false;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN SingleLineIfStatement
        // UNKNOWN MultiLineIfBlock
        var invList = "";

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN SingleLineIfStatement
        return true;
    };
    LegacyGame.prototype.CmdStartsWith = function (cmd, startsWith) {
        return BeginsWith(Trim(cmd), startsWith);
    };
    LegacyGame.prototype.ExecGive = function (giveString, ctx) {
        var article;
        var item;
        var character;
        var type;
        var id;
        var script = "";
        var toPos = InStr(giveString, " to ");
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ExecLook = function (lookLine, ctx) {
        var item;
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ExecSpeak = function (cmd, ctx) {
        // UNKNOWN MultiLineIfBlock
        var name = cmd;
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ExecTake = function (item, ctx) {
        var parentID;
        var parentDisplayName;
        var foundItem = true;
        var foundTake = false;
        var id = Disambiguate(item, this._currentRoom, ctx);

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        var isInContainer = false;
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ExecUse = function (useLine, ctx) {
        var endOnWith;
        var useDeclareLine = "";
        var useOn;
        var useItem;
        useLine = Trim(GetEverythingAfter(useLine, "use "));
        var roomId;
        roomId = GetRoomID(this._currentRoom, ctx);
        var onWithPos = InStr(useLine, " on ");

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        var id;
        var notGotItem;

        // UNKNOWN MultiLineIfBlock
        var useScript = "";
        var foundUseScript;
        var foundUseOnObject;
        var useOnObjectId;
        var found;
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ObjectActionUpdate = function (id, name, script, noUpdate) {
        var objectName;
        var sp;
        var ep;
        name = LCase(name);
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ExecuteIf = function (scriptLine, ctx) {
        var ifLine = Trim(GetEverythingAfter(Trim(scriptLine), "if "));
        var obscuredLine = ObliterateParameters(ifLine);
        var thenPos = InStr(obscuredLine, "then");

        // UNKNOWN MultiLineIfBlock
        var conditions = Trim(Left(ifLine, thenPos - 1));
        thenPos = thenPos + 4;
        var elsePos = InStr(obscuredLine, "else");
        var thenEndPos;

        // UNKNOWN MultiLineIfBlock
        var thenScript = Trim(Mid(ifLine, thenPos, thenEndPos - thenPos));
        var elseScript = "";
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.ExecuteScript = function (scriptLine, ctx, newCallingObjectId) {
        // UNKNOWN TryBlock
    };
    LegacyGame.prototype.ExecuteEnter = function (scriptLine, ctx) {
        this._commandOverrideModeOn = true;
        this._commandOverrideVariable = GetParameter(scriptLine, ctx);

        // UNKNOWN ExpressionStatement
        // UNKNOWN SyncLockBlock
        this._commandOverrideModeOn = false;
    };
    LegacyGame.prototype.ExecuteSet = function (setInstruction, ctx) {
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.FindStatement = function (block, statement) {
        // UNKNOWN ForBlock
        return "";
    };
    LegacyGame.prototype.FindLine = function (block, statement, statementParam) {
        // UNKNOWN ForBlock
        return "";
    };
    LegacyGame.prototype.GetCollectableAmount = function (name) {
        // UNKNOWN ForBlock
        return 0;
    };
    LegacyGame.prototype.GetSecondChunk = function (line) {
        var endOfFirstBit = InStr(line, ">") + 1;
        var lengthOfKeyword = 'expr' + 1;
        return Trim(Mid(line, endOfFirstBit, lengthOfKeyword));
    };
    LegacyGame.prototype.GoDirection = function (direction, ctx) {
        var dirData = new TextAction();
        var id = GetRoomID(this._currentRoom, ctx);

        // UNKNOWN SingleLineIfStatement
        // UNKNOWN MultiLineIfBlock
        var r = this._rooms[id];
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.GoToPlace = function (place, ctx) {
        var destination = "";
        var placeData;
        var disallowed = false;
        placeData = PlaceExist(place, ctx);
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.InitialiseGame = function (filename, fromQsg) {
        this._loadedFromQsg = fromQsg;
        this._changeLogRooms = new ChangeLog();
        this._changeLogObjects = new ChangeLog();
        this._changeLogRooms.AppliesToType = ChangeLog.AppliesTo.Room;
        this._changeLogObjects.AppliesToType = ChangeLog.AppliesTo.Object;
        this._outPutOn = true;
        this._useAbbreviations = true;
        this._gamePath = 'expr' + "\\";

        // UNKNOWN ExpressionStatement
        // UNKNOWN MultiLineIfBlock
        var gameBlock;
        gameBlock = GetDefineBlock("game");
        var aslVersion = "//";

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN MultiLineIfBlock
        this._gameName = GetParameter(this._lines[GetDefineBlock("game").StartLine], this._nullContext);

        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ForBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        this._gameFileName = filename;

        // UNKNOWN ExpressionStatement
        this._defaultRoomProperties = GetPropertiesInType("defaultroom", false);
        this._defaultProperties = GetPropertiesInType("default", false);
        return true;
    };
    LegacyGame.prototype.PlaceExist = function (placeName, ctx) {
        var roomId = GetRoomID(this._currentRoom, ctx);
        var foundPlace = false;
        var scriptPresent = false;
        var r = this._rooms[roomId];

        // UNKNOWN ForBlock
        return "";
    };
    LegacyGame.prototype.PlayerItem = function (item, got, ctx, objId) {
        var foundObjectName = false;
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.PlayGame = function (room, ctx) {
        var id = GetRoomID(room, ctx);

        // UNKNOWN MultiLineIfBlock
        this._currentRoom = room;
        // UNKNOWN ExpressionStatement
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.Print = function (txt, ctx, OutputTo) {
        var printString = "";
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.RetrLine = function (blockType, param, line, ctx) {
        var searchblock;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ForBlock
        return "<unfound>";
    };
    LegacyGame.prototype.RetrLineParam = function (blockType, param, line, lineParam, ctx) {
        var searchblock;

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ForBlock
        return "<unfound>";
    };
    LegacyGame.prototype.SetUpCollectables = function () {
        var lastItem = false;
        this._numCollectables = 0;
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.SetUpItemArrays = function () {
        var lastItem = false;
        this._numberItems = 0;
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.SetUpStartItems = function () {
        var lastItem = false;
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.ShowHelp = function (ctx) {
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.ReadCatalog = function (data) {
        var nullPos = InStr(data, Chr(0));
        this._numResources = 'expr';

        // UNKNOWN ReDimPreserveStatement
        this._resources[this._numResources] = new ResourceType();
        data = Mid(data, nullPos + 1);
        var resourceStart = 0;
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.UpdateDirButtons = function (dirs, ctx) {
        var compassExits = {};

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        this._compassExits = compassExits;
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.AddCompassExit = function (exitList, name) {
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.UpdateDoorways = function (roomId, ctx) {
        var roomDisplayText = "";
        var directions = "";
        var outPlacePrefix = "";
        var n = "north";
        var s = "south";
        var e = "east";
        var w = "west";
        var ne = "northeast";
        var nw = "northwest";
        var se = "southeast";
        var sw = "southwest";
        var u = "up";
        var d = "down";
        var o = "out";

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
        return roomDisplayText;
    };
    LegacyGame.prototype.UpdateItems = function (ctx) {
        var invList = {};

        // UNKNOWN SingleLineIfStatement
        var name;
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN RaiseEventStatement
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.FinishGame = function (stopType, ctx) {
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.UpdateObjectList = function (ctx) {
        var shownPlaceName;
        var objSuffix;
        var charsFound;
        var noFormatObjsViewable;
        var charList;
        var objsFound;
        var objListString;
        var noFormatObjListString;

        // UNKNOWN SingleLineIfStatement
        var objList = {};
        var exitList = {};
        var roomBlock;
        roomBlock = DefineBlockParam("room", this._currentRoom);

        // UNKNOWN MultiLineIfBlock
        noFormatObjsViewable = "";

        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        var roomId;
        roomId = GetRoomID(this._currentRoom, ctx);
        var r = this._rooms[roomId];

        // UNKNOWN MultiLineIfBlock
        // UNKNOWN RaiseEventStatement
        this._gotoExits = exitList;
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.UpdateExitsList = function () {
        var mergedList = {};
        // UNKNOWN ForEachBlock
        // UNKNOWN ForEachBlock
        // UNKNOWN RaiseEventStatement
    };
    LegacyGame.prototype.UpdateStatusVars = function (ctx) {
        var displayData;
        var status = "";
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.UpdateVisibilityInContainers = function (ctx, onlyParent) {
        var parentId;
        var parent;
        var parentIsTransparent;
        var parentIsOpen;
        var parentIsSeen;
        var parentIsSurface;
        // UNKNOWN SingleLineIfStatement
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ForBlock
    };
    LegacyGame.prototype.PlayerCanAccessObject = function (id, colObjects) {
        var parent;
        var parentId;
        var parentDisplayName;
        var result = new PlayerCanAccessObjectResult();
        var hierarchy = "";

        // UNKNOWN MultiLineIfBlock
        result.CanAccessObject = true;
        return result;
    };
    LegacyGame.prototype.GetGoToExits = function (roomId, ctx) {
        var placeList = "";
        var shownPlaceName;

        // UNKNOWN ForBlock
        return placeList;
    };
    LegacyGame.prototype.SetUpExits = function () {
        // UNKNOWN ForBlock
        // UNKNOWN ExitSubStatement
    };
    LegacyGame.prototype.FindExit = function (tag) {
        var params = Split(tag, ";");

        // UNKNOWN MultiLineIfBlock
        var room = Trim(params[0]);
        var exitName = Trim(params[1]);
        var roomId = GetRoomID(room, this._nullContext);

        // UNKNOWN MultiLineIfBlock
        var exits = this._rooms[roomId].Exits;
        var dir = 'expr';

        // UNKNOWN MultiLineIfBlock
        return null;
    };
    LegacyGame.prototype.ExecuteLock = function (tag, lock) {
        var roomExit;
        roomExit = FindExit(tag);

        // UNKNOWN MultiLineIfBlock
        roomExit.IsLocked = lock;
    };
    LegacyGame.prototype.Begin = function () {
        var runnerThread = {};
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN SyncLockBlock
    };
    LegacyGame.prototype.DoBegin = function () {
        var gameBlock = GetDefineBlock("game");
        var ctx = new Context();

        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ForBlock
        // UNKNOWN ForBlock
        this._autoIntro = true;

        // UNKNOWN MultiLineIfBlock
        this._gameFullyLoaded = true;

        // UNKNOWN SingleLineIfStatement
        var startRoom = "";
        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
    };

    // UNKNOWN PropertyBlock
    // UNKNOWN PropertyBlock
    LegacyGame.prototype.Finish = function () {
        // UNKNOWN ExpressionStatement
    };

    // UNKNOWN EventStatement
    // UNKNOWN EventStatement
    // UNKNOWN EventStatement
    LegacyGame.prototype.Save = function (filename, html) {
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.Save = function (html) {
        return SaveGame(Filename, false);
    };

    // UNKNOWN PropertyBlock
    LegacyGame.prototype.SendCommand = function (command) {
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.SendCommand = function (command, metadata) {
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.SendCommand = function (command, elapsedTime, metadata) {
        // UNKNOWN SingleLineIfStatement
        var runnerThread = {};
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.WaitForStateChange = function (changedFromState) {
        // UNKNOWN SyncLockBlock
    };
    LegacyGame.prototype.ProcessCommandInNewThread = function (command) {
        // UNKNOWN TryBlock
    };
    LegacyGame.prototype.SendEvent = function (eventName, param) {
    };

    // UNKNOWN EventStatement
    LegacyGame.prototype.Initialise = function (player) {
        this._player = player;
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.GameFinished = function () {
        this._gameFinished = true;
        // UNKNOWN RaiseEventStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN SyncLockBlock
        // UNKNOWN SyncLockBlock
        // UNKNOWN SyncLockBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.GetResourcePath = function (filename) {
        // UNKNOWN MultiLineIfBlock
        return 'expr';
    };
    LegacyGame.prototype.Cleanup = function () {
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.DeleteDirectory = function (dir) {
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.Finalize = function () {
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.GetLibraryLines = function (libName) {
        var libCode = null;
        libName = LCase(libName);

        // UNKNOWN SelectBlock
        // UNKNOWN SingleLineIfStatement
        return GetResourceLines(libCode);
    };

    // UNKNOWN PropertyBlock
    LegacyGame.prototype.Tick = function (elapsedTime) {
        var i;
        var timerScripts = {};
        // UNKNOWN ExpressionStatement
        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.RunTimersInNewThread = function (scripts) {
        var scriptList = 'expr';
        // UNKNOWN ForEachBlock
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.RaiseNextTimerTickRequest = function () {
        var anyTimerActive = false;
        var nextTrigger = 60;
        // UNKNOWN ForBlock
        // UNKNOWN SingleLineIfStatement
        // UNKNOWN SingleLineIfStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN RaiseEventStatement
    };
    LegacyGame.prototype.ChangeState = function (newState) {
        var acceptCommands = 'expr';
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.ChangeState = function (newState, acceptCommands) {
        this._readyForCommand = acceptCommands;
        // UNKNOWN SyncLockBlock
    };
    LegacyGame.prototype.FinishWait = function () {
        // UNKNOWN SingleLineIfStatement
        var runnerThread = {};
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.FinishWaitInNewThread = function () {
        // UNKNOWN SyncLockBlock
    };
    LegacyGame.prototype.FinishPause = function () {
        // UNKNOWN ExpressionStatement
    };

    LegacyGame.prototype.ShowMenu = function (menuData) {
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN SyncLockBlock
        return this.m_menuResponse;
    };
    LegacyGame.prototype.SetMenuResponse = function (response) {
        var runnerThread = {};
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
        // UNKNOWN ExpressionStatement
    };
    LegacyGame.prototype.SetMenuResponseInNewThread = function (response) {
        this.m_menuResponse = 'expr';
        // UNKNOWN SyncLockBlock
    };
    LegacyGame.prototype.LogException = function (ex) {
        // UNKNOWN RaiseEventStatement
    };
    LegacyGame.prototype.GetExternalScripts = function () {
        return null;
    };
    LegacyGame.prototype.GetExternalStylesheets = function () {
        return null;
    };

    // UNKNOWN EventStatement
    // UNKNOWN PropertyBlock
    LegacyGame.prototype.GetOriginalFilenameForQSG = function () {
        // UNKNOWN SingleLineIfStatement
        return this._gameFileName;
    };

    LegacyGame.prototype.SetUnzipFunction = function (unzipFunction) {
        this.m_unzipFunction = unzipFunction;
    };
    LegacyGame.prototype.GetUnzippedFile = function (filename) {
        var tempDir = null;
        var result = 'expr';
        this._tempFolder = tempDir;
        return result;
    };

    // UNKNOWN PropertyBlock
    // UNKNOWN PropertyBlock
    LegacyGame.prototype.GetResource = function (file) {
        // UNKNOWN MultiLineIfBlock
        var path = GetResourcePath(file);

        // UNKNOWN SingleLineIfStatement
        return new any();
    };

    // UNKNOWN PropertyBlock
    LegacyGame.prototype.GetResources = function () {
        // UNKNOWN ForBlock
        // UNKNOWN MultiLineIfBlock
    };
    LegacyGame.prototype.GetResourcelessCAS = function () {
        var fileData = 'expr';
        return 'expr';
    };
    return LegacyGame;
})();