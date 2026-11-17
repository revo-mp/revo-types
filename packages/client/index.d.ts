/// <reference types="@revomp/types-shared" />

declare module "revo-client" {

    import * as shared from "revo-shared";

    /** Windows virtual-key codes. keyDown/keyUp do not distinguish left and right Shift, Control or Alt.
     * Mouse buttons use MouseButton events. Punctuation keys use the US layout.
     */
    export enum KeyCodes {
        Cancel = 0x03,
        Backspace = 0x08,
        Tab = 0x09,
        Clear = 0x0C,
        Enter = 0x0D,
        Shift = 0x10,
        Control = 0x11,
        Alt = 0x12,
        Pause = 0x13,
        CapsLock = 0x14,
        Kana = 0x15,
        Hangul = 0x15,
        ImeOn = 0x16,
        Junja = 0x17,
        Final = 0x18,
        Hanja = 0x19,
        Kanji = 0x19,
        ImeOff = 0x1A,
        Escape = 0x1B,
        Convert = 0x1C,
        NonConvert = 0x1D,
        Accept = 0x1E,
        ModeChange = 0x1F,
        Space = 0x20,
        PageUp = 0x21,
        PageDown = 0x22,
        End = 0x23,
        Home = 0x24,
        Left = 0x25,
        Up = 0x26,
        Right = 0x27,
        Down = 0x28,
        Select = 0x29,
        Print = 0x2A,
        Execute = 0x2B,
        PrintScreen = 0x2C,
        Insert = 0x2D,
        Delete = 0x2E,
        Help = 0x2F,
        Digit0 = 0x30,
        Digit1 = 0x31,
        Digit2 = 0x32,
        Digit3 = 0x33,
        Digit4 = 0x34,
        Digit5 = 0x35,
        Digit6 = 0x36,
        Digit7 = 0x37,
        Digit8 = 0x38,
        Digit9 = 0x39,
        A = 0x41,
        B = 0x42,
        C = 0x43,
        D = 0x44,
        E = 0x45,
        F = 0x46,
        G = 0x47,
        H = 0x48,
        I = 0x49,
        J = 0x4A,
        K = 0x4B,
        L = 0x4C,
        M = 0x4D,
        N = 0x4E,
        O = 0x4F,
        P = 0x50,
        Q = 0x51,
        R = 0x52,
        S = 0x53,
        T = 0x54,
        U = 0x55,
        V = 0x56,
        W = 0x57,
        X = 0x58,
        Y = 0x59,
        Z = 0x5A,
        LeftWindows = 0x5B,
        RightWindows = 0x5C,
        Applications = 0x5D,
        Sleep = 0x5F,
        Numpad0 = 0x60,
        Numpad1 = 0x61,
        Numpad2 = 0x62,
        Numpad3 = 0x63,
        Numpad4 = 0x64,
        Numpad5 = 0x65,
        Numpad6 = 0x66,
        Numpad7 = 0x67,
        Numpad8 = 0x68,
        Numpad9 = 0x69,
        NumpadMultiply = 0x6A,
        NumpadAdd = 0x6B,
        NumpadSeparator = 0x6C,
        NumpadSubtract = 0x6D,
        NumpadDecimal = 0x6E,
        NumpadDivide = 0x6F,
        F1 = 0x70,
        F2 = 0x71,
        F3 = 0x72,
        F4 = 0x73,
        F5 = 0x74,
        F6 = 0x75,
        F7 = 0x76,
        F8 = 0x77,
        F9 = 0x78,
        F10 = 0x79,
        F11 = 0x7A,
        F12 = 0x7B,
        F13 = 0x7C,
        F14 = 0x7D,
        F15 = 0x7E,
        F16 = 0x7F,
        F17 = 0x80,
        F18 = 0x81,
        F19 = 0x82,
        F20 = 0x83,
        F21 = 0x84,
        F22 = 0x85,
        F23 = 0x86,
        F24 = 0x87,
        NumLock = 0x90,
        ScrollLock = 0x91,
        LeftShift = 0xA0,
        RightShift = 0xA1,
        LeftControl = 0xA2,
        RightControl = 0xA3,
        LeftAlt = 0xA4,
        RightAlt = 0xA5,
        BrowserBack = 0xA6,
        BrowserForward = 0xA7,
        BrowserRefresh = 0xA8,
        BrowserStop = 0xA9,
        BrowserSearch = 0xAA,
        BrowserFavorites = 0xAB,
        BrowserHome = 0xAC,
        VolumeMute = 0xAD,
        VolumeDown = 0xAE,
        VolumeUp = 0xAF,
        MediaNextTrack = 0xB0,
        MediaPreviousTrack = 0xB1,
        MediaStop = 0xB2,
        MediaPlayPause = 0xB3,
        LaunchMail = 0xB4,
        LaunchMediaSelect = 0xB5,
        LaunchApp1 = 0xB6,
        LaunchApp2 = 0xB7,
        Semicolon = 0xBA,
        Plus = 0xBB,
        Comma = 0xBC,
        Minus = 0xBD,
        Period = 0xBE,
        Slash = 0xBF,
        Backquote = 0xC0,
        LeftBracket = 0xDB,
        Backslash = 0xDC,
        RightBracket = 0xDD,
        Quote = 0xDE,
        Oem8 = 0xDF,
        Oem102 = 0xE2,
        ProcessKey = 0xE5,
        Packet = 0xE7,
        Attn = 0xF6,
        CrSel = 0xF7,
        ExSel = 0xF8,
        EraseEof = 0xF9,
        Play = 0xFA,
        Zoom = 0xFB,
        Pa1 = 0xFD,
        OemClear = 0xFE,
    }

    /** Input action IDs for control natives. Keyboard events use KeyCodes. */
    export enum Control {
        NextCamera = 0,
        LookLr = 1,
        LookUd = 2,
        LookUpOnly = 3,
        LookDownOnly = 4,
        LookLeftOnly = 5,
        LookRightOnly = 6,
        CinematicSlowMo = 7,
        ScriptedFlyUd = 8,
        ScriptedFlyLr = 9,
        ScriptedFlyZup = 10,
        ScriptedFlyZdown = 11,
        WeaponWheelUd = 12,
        WeaponWheelLr = 13,
        WeaponWheelNext = 14,
        WeaponWheelPrev = 15,
        SelectNextWeapon = 16,
        SelectPrevWeapon = 17,
        SkipCutscene = 18,
        CharacterWheel = 19,
        MultiplayerInfo = 20,
        Sprint = 21,
        Jump = 22,
        Enter = 23,
        Attack = 24,
        Aim = 25,
        LookBehind = 26,
        Phone = 27,
        SpecialAbility = 28,
        SpecialAbilitySecondary = 29,
        MoveLr = 30,
        MoveUd = 31,
        MoveUpOnly = 32,
        MoveDownOnly = 33,
        MoveLeftOnly = 34,
        MoveRightOnly = 35,
        Duck = 36,
        SelectWeapon = 37,
        Pickup = 38,
        SniperZoom = 39,
        SniperZoomInOnly = 40,
        SniperZoomOutOnly = 41,
        SniperZoomInSecondary = 42,
        SniperZoomOutSecondary = 43,
        Cover = 44,
        Reload = 45,
        Talk = 46,
        Detonate = 47,
        HudSpecial = 48,
        Arrest = 49,
        AccurateAim = 50,
        Context = 51,
        ContextSecondary = 52,
        WeaponSpecial = 53,
        WeaponSpecialTwo = 54,
        Dive = 55,
        DropWeapon = 56,
        DropAmmo = 57,
        ThrowGrenade = 58,
        VehMoveLr = 59,
        VehMoveUd = 60,
        VehMoveUpOnly = 61,
        VehMoveDownOnly = 62,
        VehMoveLeftOnly = 63,
        VehMoveRightOnly = 64,
        VehSpecial = 65,
        VehGunLr = 66,
        VehGunUd = 67,
        VehAim = 68,
        VehAttack = 69,
        VehAttack2 = 70,
        VehAccelerate = 71,
        VehBrake = 72,
        VehDuck = 73,
        VehHeadlight = 74,
        VehExit = 75,
        VehHandbrake = 76,
        VehHotwireLeft = 77,
        VehHotwireRight = 78,
        VehLookBehind = 79,
        VehCinCam = 80,
        VehNextRadio = 81,
        VehPrevRadio = 82,
        VehNextRadioTrack = 83,
        VehPrevRadioTrack = 84,
        VehRadioWheel = 85,
        VehHorn = 86,
        VehFlyThrottleUp = 87,
        VehFlyThrottleDown = 88,
        VehFlyYawLeft = 89,
        VehFlyYawRight = 90,
        VehPassengerAim = 91,
        VehPassengerAttack = 92,
        VehSpecialAbilityFranklin = 93,
        VehStuntUd = 94,
        VehCinematicUd = 95,
        VehCinematicUpOnly = 96,
        VehCinematicDownOnly = 97,
        VehCinematicLr = 98,
        VehSelectNextWeapon = 99,
        VehSelectPrevWeapon = 100,
        VehRoof = 101,
        VehJump = 102,
        VehGrapplingHook = 103,
        VehShuffle = 104,
        VehDropProjectile = 105,
        VehMouseControlOverride = 106,
        VehFlyRollLr = 107,
        VehFlyRollLeftOnly = 108,
        VehFlyRollRightOnly = 109,
        VehFlyPitchUd = 110,
        VehFlyPitchUpOnly = 111,
        VehFlyPitchDownOnly = 112,
        VehFlyUndercarriage = 113,
        VehFlyAttack = 114,
        VehFlySelectNextWeapon = 115,
        VehFlySelectPrevWeapon = 116,
        VehFlySelectTargetLeft = 117,
        VehFlySelectTargetRight = 118,
        VehFlyVerticalFlightMode = 119,
        VehFlyDuck = 120,
        VehFlyAttackCamera = 121,
        VehFlyMouseControlOverride = 122,
        VehSubTurnLr = 123,
        VehSubTurnLeftOnly = 124,
        VehSubTurnRightOnly = 125,
        VehSubPitchUd = 126,
        VehSubPitchUpOnly = 127,
        VehSubPitchDownOnly = 128,
        VehSubThrottleUp = 129,
        VehSubThrottleDown = 130,
        VehSubAscend = 131,
        VehSubDescend = 132,
        VehSubTurnHardLeft = 133,
        VehSubTurnHardRight = 134,
        VehSubMouseControlOverride = 135,
        VehPushBikePedal = 136,
        VehPushBikeSprint = 137,
        VehPushBikeFrontBrake = 138,
        VehPushBikeRearBrake = 139,
        MeleeAttackLight = 140,
        MeleeAttackHeavy = 141,
        MeleeAttackAlternate = 142,
        MeleeBlock = 143,
        ParachuteDeploy = 144,
        ParachuteDetach = 145,
        ParachuteTurnLr = 146,
        ParachuteTurnLeftOnly = 147,
        ParachuteTurnRightOnly = 148,
        ParachutePitchUd = 149,
        ParachutePitchUpOnly = 150,
        ParachutePitchDownOnly = 151,
        ParachuteBrakeLeft = 152,
        ParachuteBrakeRight = 153,
        ParachuteSmoke = 154,
        ParachutePrecisionLanding = 155,
        Map = 156,
        SelectWeaponUnarmed = 157,
        SelectWeaponMelee = 158,
        SelectWeaponHandgun = 159,
        SelectWeaponShotgun = 160,
        SelectWeaponSmg = 161,
        SelectWeaponAutoRifle = 162,
        SelectWeaponSniper = 163,
        SelectWeaponHeavy = 164,
        SelectWeaponSpecial = 165,
        SelectCharacterMichael = 166,
        SelectCharacterFranklin = 167,
        SelectCharacterTrevor = 168,
        SelectCharacterMultiplayer = 169,
        SaveReplayClip = 170,
        SpecialAbilityPc = 171,
        CellphoneUp = 172,
        CellphoneDown = 173,
        CellphoneLeft = 174,
        CellphoneRight = 175,
        CellphoneSelect = 176,
        CellphoneCancel = 177,
        CellphoneOption = 178,
        CellphoneExtraOption = 179,
        CellphoneScrollForward = 180,
        CellphoneScrollBackward = 181,
        CellphoneCameraFocusLock = 182,
        CellphoneCameraGrid = 183,
        CellphoneCameraSelfie = 184,
        CellphoneCameraDof = 185,
        CellphoneCameraExpression = 186,
        FrontendDown = 187,
        FrontendUp = 188,
        FrontendLeft = 189,
        FrontendRight = 190,
        FrontendRDown = 191,
        FrontendRUp = 192,
        FrontendRLeft = 193,
        FrontendRRight = 194,
        FrontendAxisX = 195,
        FrontendAxisY = 196,
        FrontendRightAxisX = 197,
        FrontendRightAxisY = 198,
        FrontendPause = 199,
        FrontendPauseAlternate = 200,
        FrontendAccept = 201,
        FrontendCancel = 202,
        FrontendX = 203,
        FrontendY = 204,
        FrontendLb = 205,
        FrontendRb = 206,
        FrontendLt = 207,
        FrontendRt = 208,
        FrontendLs = 209,
        FrontendRs = 210,
        FrontendLeaderboard = 211,
        FrontendSocialClub = 212,
        FrontendSocialClubSecondary = 213,
        FrontendDelete = 214,
        FrontendEndscreenAccept = 215,
        FrontendEndscreenExpand = 216,
        FrontendSelect = 217,
        ScriptLeftAxisX = 218,
        ScriptLeftAxisY = 219,
        ScriptRightAxisX = 220,
        ScriptRightAxisY = 221,
        ScriptRUp = 222,
        ScriptRDown = 223,
        ScriptRLeft = 224,
        ScriptRRight = 225,
        ScriptLb = 226,
        ScriptRb = 227,
        ScriptLt = 228,
        ScriptRt = 229,
        ScriptLs = 230,
        ScriptRs = 231,
        ScriptPadUp = 232,
        ScriptPadDown = 233,
        ScriptPadLeft = 234,
        ScriptPadRight = 235,
        ScriptSelect = 236,
        CursorAccept = 237,
        CursorCancel = 238,
        CursorX = 239,
        CursorY = 240,
        CursorScrollUp = 241,
        CursorScrollDown = 242,
        EnterCheatCode = 243,
        InteractionMenu = 244,
        MpTextChatAll = 245,
        MpTextChatTeam = 246,
        MpTextChatFriends = 247,
        MpTextChatCrew = 248,
        PushToTalk = 249,
        CreatorLs = 250,
        CreatorRs = 251,
        CreatorLt = 252,
        CreatorRt = 253,
        CreatorMenuToggle = 254,
        CreatorAccept = 255,
        CreatorDelete = 256,
        Attack2 = 257,
        RappelJump = 258,
        RappelLongJump = 259,
        RappelSmashWindow = 260,
        PrevWeapon = 261,
        NextWeapon = 262,
        MeleeAttack1 = 263,
        MeleeAttack2 = 264,
        Whistle = 265,
        MoveLeft = 266,
        MoveRight = 267,
        MoveUp = 268,
        MoveDown = 269,
        LookLeft = 270,
        LookRight = 271,
        LookUp = 272,
        LookDown = 273,
        SniperZoomIn = 274,
        SniperZoomOut = 275,
        SniperZoomInAlternate = 276,
        SniperZoomOutAlternate = 277,
        VehMoveLeft = 278,
        VehMoveRight = 279,
        VehMoveUp = 280,
        VehMoveDown = 281,
        VehGunLeft = 282,
        VehGunRight = 283,
        VehGunUp = 284,
        VehGunDown = 285,
        VehLookLeft = 286,
        VehLookRight = 287,
        ReplayStartStopRecording = 288,
        ReplayStartStopRecordingSecondary = 289,
        ScaledLookLr = 290,
        ScaledLookUd = 291,
        ScaledLookUpOnly = 292,
        ScaledLookDownOnly = 293,
        ScaledLookLeftOnly = 294,
        ScaledLookRightOnly = 295,
        ReplayMarkerDelete = 296,
        ReplayClipDelete = 297,
        ReplayPause = 298,
        ReplayRewind = 299,
        ReplayFfwd = 300,
        ReplayNewMarker = 301,
        ReplayRecord = 302,
        ReplayScreenshot = 303,
        ReplayHideHud = 304,
        ReplayStartPoint = 305,
        ReplayEndPoint = 306,
        ReplayAdvance = 307,
        ReplayBack = 308,
        ReplayTools = 309,
        ReplayRestart = 310,
        ReplayShowHotkey = 311,
        ReplayCycleMarkerLeft = 312,
        ReplayCycleMarkerRight = 313,
        ReplayFovIncrease = 314,
        ReplayFovDecrease = 315,
        ReplayCameraUp = 316,
        ReplayCameraDown = 317,
        ReplaySave = 318,
        ReplayToggleTime = 319,
        ReplayToggleTips = 320,
        ReplayPreview = 321,
        ReplayToggleTimeline = 322,
        ReplayTimelinePickupClip = 323,
        ReplayTimelineDuplicateClip = 324,
        ReplayTimelinePlaceClip = 325,
        ReplayCtrl = 326,
        ReplayTimelineSave = 327,
        ReplayPreviewAudio = 328,
        VehDriveLook = 329,
        VehDriveLook2 = 330,
        VehFlyAttack2 = 331,
        RadioWheelUd = 332,
        RadioWheelLr = 333,
        VehSlowMoUd = 334,
        VehSlowMoUpOnly = 335,
        VehSlowMoDownOnly = 336,
        VehHydraulicsControlToggle = 337,
        VehHydraulicsControlLeft = 338,
        VehHydraulicsControlRight = 339,
        VehHydraulicsControlUp = 340,
        VehHydraulicsControlDown = 341,
        VehHydraulicsControlUd = 342,
        VehHydraulicsControlLr = 343,
        SwitchVisor = 344,
        VehMeleeHold = 345,
        VehMeleeLeft = 346,
        VehMeleeRight = 347,
        MapPoi = 348,
        ReplaySnapmaticPhoto = 349,
        VehCarJump = 350,
        VehRocketBoost = 351,
        VehFlyBoost = 352,
        VehParachute = 353,
        VehBikeWings = 354,
        VehFlyBombBay = 355,
        VehFlyCounter = 356,
        VehTransform = 357,
        QuadLocoReverse = 358,
        RespawnFaster = 359,
        HudMarkerSelect = 360,
    }

    export enum MarkerType {
        UpsideDownCone = 0,
        VerticalCylinder = 1,
        ThickChevronUp = 2,
        ThinChevronUp = 3,
        CheckeredFlagRect = 4,
        CheckeredFlagCircle = 5,
        VerticalCircle = 6,
        PlaneModel = 7,
        LostMCTransparent = 8,
        LostMC = 9,
        Number0 = 10,
        Number1 = 11,
        Number2 = 12,
        Number3 = 13,
        Number4 = 14,
        Number5 = 15,
        Number6 = 16,
        Number7 = 17,
        Number8 = 18,
        Number9 = 19,
        ChevronUp1 = 20,
        ChevronUp2 = 21,
        ChevronUp3 = 22,
        HorizontalCircleFat = 23,
        ReplayIcon = 24,
        HorizontalCircleSkinny = 25,
        HorizontalCircleSkinnyArrow = 26,
        HorizontalSplitArrowCircle = 27,
        DebugSphere = 28,
        DollarSign = 29,
        HorizontalBars = 30,
        WolfHead = 31,
        QuestionMark = 32,
        PlaneSymbol = 33,
        HelicopterSymbol = 34,
        BoatSymbol = 35,
        CarSymbol = 36,
        MotorcycleSymbol = 37,
        BikeSymbol = 38,
        TruckSymbol = 39,
        ParachuteSymbol = 40,
        ThrusterSymbol = 41,
        SawbladeSymbol = 42,
        Boxes = 43,
    }

    /** Blip palette indices. */
    export enum BlipColor {
        White = 0,
        Red = 1,
        Green = 2,
        Blue = 3,
        White4 = 4,
        Yellow = 5,
        LightRed = 6,
        Violet = 7,
        Pink = 8,
        LightOrange = 9,
        LightBrown = 10,
        LightGreen = 11,
        LightBlue = 12,
        LightPurple = 13,
        DarkPurple = 14,
        Cyan = 15,
        LightYellow = 16,
        Orange = 17,
        LightBlue18 = 18,
        DarkPink = 19,
        DarkYellow = 20,
        DarkOrange = 21,
        LightGray = 22,
        LightPink = 23,
        LemonGreen = 24,
        ForestGreen = 25,
        ElectricBlue = 26,
        BrightPurple = 27,
        DarkYellow28 = 28,
        DarkBlue = 29,
        DarkCyan = 30,
        LightBrown31 = 31,
        LightBlue32 = 32,
        LightYellow33 = 33,
        LightPink34 = 34,
        LightRed35 = 35,
        Beige = 36,
        White37 = 37,
        Blue38 = 38,
        LightGray39 = 39,
        DarkGray = 40,
        PinkRed = 41,
        Blue42 = 42,
        LightGreen43 = 43,
        LightOrange44 = 44,
        White45 = 45,
        Gold = 46,
        Orange47 = 47,
        BrilliantRose = 48,
        Red49 = 49,
        MediumPurple = 50,
        Salmon = 51,
        DarkGreen = 52,
        BlizzardBlue = 53,
        OracleBlue = 54,
        Silver = 55,
        Brown = 56,
        Blue57 = 57,
        EastBay = 58,
        Red59 = 59,
        YellowOrange = 60,
        MulberryPink = 61,
        AltoGray = 62,
        JellyBeanBlue = 63,
        DarkOrange64 = 64,
        Mamba = 65,
        YellowOrange66 = 66,
        Blue67 = 67,
        Blue68 = 68,
        Green69 = 69,
        YellowOrange70 = 70,
        YellowOrange71 = 71,
        TransparentBlack = 72,
        YellowOrange73 = 73,
        Blue74 = 74,
        Red75 = 75,
        DeepRed = 76,
        Blue77 = 77,
        OracleBlue78 = 78,
        TransparentRed = 79,
        TransparentBlue = 80,
        Orange81 = 81,
        LightGreen82 = 82,
        Purple = 83,
        Blue84 = 84,
        TransparentBlack85 = 85,
    }

    /** Radar sprite IDs. */
    export enum BlipSprite {
        Higher = 0,
        Level = 1,
        Lower = 2,
        PolicePed = 3,
        WantedRadius = 4,
        AreaBlip = 5,
        Centre = 6,
        North = 7,
        Waypoint = 8,
        RadiusBlip = 9,
        RadiusOutlineBlip = 10,
        WeaponHigher = 11,
        WeaponLower = 12,
        HigherAi = 13,
        LowerAi = 14,
        PoliceHeliSpin = 15,
        PolicePlaneMove = 16,
        Numbered1 = 17,
        Numbered2 = 18,
        Numbered3 = 19,
        Numbered4 = 20,
        Numbered5 = 21,
        Numbered6 = 22,
        Numbered7 = 23,
        Numbered8 = 24,
        Numbered9 = 25,
        Numbered10 = 26,
        MpCrew = 27,
        MpFriendlies = 28,
        Empty = 29,
        Empty30 = 30,
        Empty31 = 31,
        ScriptObjective = 32,
        Empty33 = 33,
        Empty34 = 34,
        Station = 35,
        CableCar = 36,
        Activities = 37,
        Raceflag = 38,
        Fire = 39,
        Safehouse = 40,
        Police = 41,
        PoliceChase = 42,
        PoliceHeli = 43,
        BombA = 44,
        BombB = 45,
        BombC = 46,
        Snitch = 47,
        PlanningLocations = 48,
        CrimArrest = 49,
        CrimCarsteal = 50,
        CrimDrugs = 51,
        CrimHoldups = 52,
        CrimPimping = 53,
        CrimPlayer = 54,
        Fence = 55,
        CopPatrol = 56,
        CopPlayer = 57,
        CrimWanted = 58,
        Heist = 59,
        PoliceStation = 60,
        Hospital = 61,
        AssassinsMark = 62,
        Elevator = 63,
        Helicopter = 64,
        Joyriders = 65,
        RandomCharacter = 66,
        SecurityVan = 67,
        TowTruck = 68,
        DriveThru = 69,
        IllegalParking = 70,
        Barber = 71,
        CarModShop = 72,
        ClothesStore = 73,
        Gym = 74,
        Tattoo = 75,
        ArmenianFamily = 76,
        LesterFamily = 77,
        MichaelFamily = 78,
        TrevorFamily = 79,
        JewelryHeist = 80,
        DragRace = 81,
        DragRaceFinish = 82,
        CarCarrier = 83,
        Rampage = 84,
        VinewoodTours = 85,
        LamarFamily = 86,
        TacoVan = 87,
        FranklinFamily = 88,
        ChineseStrand = 89,
        FlightSchool = 90,
        EyeSky = 91,
        AirHockey = 92,
        Bar = 93,
        BaseJump = 94,
        Basketball = 95,
        BiolabHeist = 96,
        Bowling = 97,
        BurgerShot = 98,
        CabaretClub = 99,
        CarWash = 100,
        CluckinBell = 101,
        ComedyClub = 102,
        Darts = 103,
        DocksHeist = 104,
        FbiHeist = 105,
        FbiOfficersStrand = 106,
        FinaleBankHeist = 107,
        FinancierStrand = 108,
        Golf = 109,
        GunShop = 110,
        InternetCafe = 111,
        MichaelFamilyExile = 112,
        NiceHouseHeist = 113,
        RandomFemale = 114,
        RandomMale = 115,
        Repo = 116,
        Restaurant = 117,
        RuralBankHeist = 118,
        ShootingRange = 119,
        SolomonStrand = 120,
        StripClub = 121,
        Tennis = 122,
        TrevorFamilyExile = 123,
        MichaelTrevorFamily = 124,
        VehicleSpawn = 125,
        Triathlon = 126,
        OffRoadRacing = 127,
        GangCops = 128,
        GangMexicans = 129,
        GangBikers = 130,
        GangFamilies = 131,
        GangProfessionals = 132,
        SnitchRed = 133,
        CrimCuffKeys = 134,
        Cinema = 135,
        MusicVenue = 136,
        PoliceStationBlue = 137,
        Airport = 138,
        CrimSavedVehicle = 139,
        WeedStash = 140,
        Hunting = 141,
        Pool = 142,
        ObjectiveBlue = 143,
        ObjectiveGreen = 144,
        ObjectiveRed = 145,
        ObjectiveYellow = 146,
        ArmsDealing = 147,
        MpFriend = 148,
        CelebrityTheft = 149,
        WeaponAssaultRifle = 150,
        WeaponBat = 151,
        WeaponGrenade = 152,
        WeaponHealth = 153,
        WeaponKnife = 154,
        WeaponMolotov = 155,
        WeaponPistol = 156,
        WeaponRocket = 157,
        WeaponShotgun = 158,
        WeaponSmg = 159,
        WeaponSniper = 160,
        MpNoise = 161,
        Poi = 162,
        Passive = 163,
        Usingmenu = 164,
        FriendFranklinP = 165,
        FriendFranklinX = 166,
        FriendMichaelP = 167,
        FriendMichaelX = 168,
        FriendTrevorP = 169,
        FriendTrevorX = 170,
        GangCopsPartner = 171,
        FriendLamar = 172,
        WeaponMinigun = 173,
        WeaponGrenadelauncher = 174,
        WeaponArmour = 175,
        PropertyTakeover = 176,
        GangMexicansHighlight = 177,
        GangBikersHighlight = 178,
        TriathlonCycling = 179,
        TriathlonSwimming = 180,
        PropertyTakeoverBikers = 181,
        PropertyTakeoverCops = 182,
        PropertyTakeoverVagos = 183,
        Camera = 184,
        CentreRed = 185,
        HandcuffKeysBikers = 186,
        HandcuffKeysVagos = 187,
        HandcuffsClosedBikers = 188,
        HandcuffsClosedVagos = 189,
        HandcuffsOpenBikers = 190,
        HandcuffsOpenVagos = 191,
        CameraBadger = 192,
        CameraFacade = 193,
        CameraIfruit = 194,
        CrimArrestBikers = 195,
        CrimArrestVagos = 196,
        Yoga = 197,
        Taxi = 198,
        Numbered11 = 199,
        Numbered12 = 200,
        Numbered13 = 201,
        Numbered14 = 202,
        Numbered15 = 203,
        Numbered16 = 204,
        Shrink = 205,
        Epsilon = 206,
        FinancierStrandGrey = 207,
        TrevorFamilyGrey = 208,
        TrevorFamilyRed = 209,
        FranklinFamilyGrey = 210,
        FranklinFamilyBlue = 211,
        FranklinA = 212,
        FranklinB = 213,
        FranklinC = 214,
        NumberedRed1 = 215,
        NumberedRed2 = 216,
        NumberedRed3 = 217,
        NumberedRed4 = 218,
        NumberedRed5 = 219,
        NumberedRed6 = 220,
        NumberedRed7 = 221,
        NumberedRed8 = 222,
        NumberedRed9 = 223,
        NumberedRed10 = 224,
        GangVehicle = 225,
        GangVehicleBikers = 226,
        GangVehicleCops = 227,
        GangVehicleVagos = 228,
        Guncar = 229,
        DrivingBikers = 230,
        DrivingCops = 231,
        DrivingVagos = 232,
        GangCopsHighlight = 233,
        ShieldBikers = 234,
        ShieldCops = 235,
        ShieldVagos = 236,
        CustodyBikers = 237,
        CustodyVagos = 238,
        GangWantedBikers = 239,
        GangWantedBikers1 = 240,
        GangWantedBikers2 = 241,
        GangWantedBikers3 = 242,
        GangWantedBikers4 = 243,
        GangWantedBikers5 = 244,
        GangWantedVagos = 245,
        GangWantedVagos1 = 246,
        GangWantedVagos2 = 247,
        GangWantedVagos3 = 248,
        GangWantedVagos4 = 249,
        GangWantedVagos5 = 250,
        ArmsDealingAir = 251,
        PlayerstateArrested = 252,
        PlayerstateCustody = 253,
        PlayerstateDriving = 254,
        PlayerstateKeyholder = 255,
        PlayerstatePartner = 256,
        GangWanted1 = 257,
        GangWanted2 = 258,
        GangWanted3 = 259,
        GangWanted4 = 260,
        GangWanted5 = 261,
        Ztype = 262,
        Stinger = 263,
        Packer = 264,
        Monroe = 265,
        Fairground = 266,
        Property = 267,
        GangHighlight = 268,
        Altruist = 269,
        Ai = 270,
        OnMission = 271,
        CashPickup = 272,
        Chop = 273,
        Dead = 274,
        TerritoryLocked = 275,
        CashLost = 276,
        CashVagos = 277,
        CashCops = 278,
        Hooker = 279,
        Friend = 280,
        Mission2to4 = 281,
        Mission2to8 = 282,
        Mission2to12 = 283,
        Mission2to16 = 284,
        CustodyDropoff = 285,
        OnmissionCops = 286,
        OnmissionLost = 287,
        OnmissionVagos = 288,
        CrimCarstealCops = 289,
        CrimCarstealBikers = 290,
        CrimCarstealVagos = 291,
        BandStrand = 292,
        SimeonFamily = 293,
        Mission1 = 294,
        Mission2 = 295,
        FriendDarts = 296,
        FriendComedyclub = 297,
        FriendCinema = 298,
        FriendTennis = 299,
        FriendStripclub = 300,
        FriendLivemusic = 301,
        FriendGolf = 302,
        BountyHit = 303,
        UgcMission = 304,
        Horde = 305,
        Cratedrop = 306,
        PlaneDrop = 307,
        Sub = 308,
        Race = 309,
        Deathmatch = 310,
        ArmWrestling = 311,
        Mission1to2 = 312,
        ShootingrangeGunshop = 313,
        RaceAir = 314,
        RaceLand = 315,
        RaceSea = 316,
        Tow = 317,
        Garbage = 318,
        Drill = 319,
        Spikes = 320,
        Firetruck = 321,
        Minigun2 = 322,
        Bugstar = 323,
        Submarine = 324,
        Chinook = 325,
        GetawayCar = 326,
        MissionBikers1 = 327,
        MissionBikers1to2 = 328,
        MissionBikers2 = 329,
        MissionBikers2to4 = 330,
        MissionBikers2to8 = 331,
        MissionBikers2to12 = 332,
        MissionBikers2to16 = 333,
        MissionCops1 = 334,
        MissionCops1to2 = 335,
        MissionCops2 = 336,
        MissionCops2to4 = 337,
        MissionCops2to8 = 338,
        MissionCops2to12 = 339,
        MissionCops2to16 = 340,
        MissionVagos1 = 341,
        MissionVagos1to2 = 342,
        MissionVagos2 = 343,
        MissionVagos2to4 = 344,
        MissionVagos2to8 = 345,
        MissionVagos2to12 = 346,
        MissionVagos2to16 = 347,
        GangBike = 348,
        GasGrenade = 349,
        PropertyForSale = 350,
        GangAttackPackage = 351,
        MartinMadrazzo = 352,
        EnemyHeliSpin = 353,
        Boost = 354,
        Devin = 355,
        Dock = 356,
        Garage = 357,
        GolfFlag = 358,
        Hangar = 359,
        Helipad = 360,
        JerryCan = 361,
        Mask = 362,
        HeistPrep = 363,
        Incapacitated = 364,
        SpawnPointPickup = 365,
        Boilersuit = 366,
        Completed = 367,
        Rockets = 368,
        GarageForSale = 369,
        HelipadForSale = 370,
        DockForSale = 371,
        HangarForSale = 372,
        Placeholder6 = 373,
        Business = 374,
        BusinessForSale = 375,
        RaceBike = 376,
        Parachute = 377,
        TeamDeathmatch = 378,
        RaceFoot = 379,
        VehicleDeathmatch = 380,
        Barry = 381,
        Dom = 382,
        Maryann = 383,
        Cletus = 384,
        Josh = 385,
        Minute = 386,
        Omega = 387,
        Tonya = 388,
        Paparazzo = 389,
        Aim = 390,
        CratedropBackground = 391,
        GreenAndNetPlayer1 = 392,
        GreenAndNetPlayer2 = 393,
        GreenAndNetPlayer3 = 394,
        GreenAndFriendly = 395,
        NetPlayer1AndNetPlayer2 = 396,
        NetPlayer1AndNetPlayer3 = 397,
        Creator = 398,
        CreatorDirection = 399,
        Abigail = 400,
        Blimp = 401,
        Repair = 402,
        Testosterone = 403,
        Dinghy = 404,
        Fanatic = 405,
        Invisible = 406,
        InfoIcon = 407,
        CaptureTheFlag = 408,
        LastTeamStanding = 409,
        Boat = 410,
        CaptureTheFlagBase = 411,
        MpCrew412 = 412,
        CaptureTheFlagOutline = 413,
        CaptureTheFlagBaseNobag = 414,
        WeaponJerrycan = 415,
        Rp = 416,
        LevelInside = 417,
        BountyHitInside = 418,
        CaptureTheUsaflag = 419,
        CaptureTheUsaflagOutline = 420,
        Tank = 421,
        PlayerHeli = 422,
        PlayerPlane = 423,
        PlayerJet = 424,
        CentreStroke = 425,
        PlayerGuncar = 426,
        PlayerBoat = 427,
        MpHeist = 428,
        Temp1 = 429,
        Temp2 = 430,
        Temp3 = 431,
        Temp4 = 432,
        Temp5 = 433,
        Temp6 = 434,
        RaceStunt = 435,
        HotProperty = 436,
        UrbanwarfareVersus = 437,
        KingOfTheCastle = 438,
        PlayerKing = 439,
        DeadDrop = 440,
        PennedIn = 441,
        Beast = 442,
        EdgePointer = 443,
        EdgeCrosstheline = 444,
        MpLamar = 445,
        Bennys = 446,
        CornerNumber1 = 447,
        CornerNumber2 = 448,
        CornerNumber3 = 449,
        CornerNumber4 = 450,
        CornerNumber5 = 451,
        CornerNumber6 = 452,
        CornerNumber7 = 453,
        CornerNumber8 = 454,
        Yacht = 455,
        FindersKeepers = 456,
        AssaultPackage = 457,
        HuntTheBoss = 458,
        Sightseer = 459,
        TurretedLimo = 460,
        BellyOfTheBeast = 461,
        YachtLocation = 462,
        PickupBeast = 463,
        PickupZoned = 464,
        PickupRandom = 465,
        PickupSlowTime = 466,
        PickupSwap = 467,
        PickupThermal = 468,
        PickupWeed = 469,
        WeaponRailgun = 470,
        Seashark = 471,
        PickupHidden = 472,
        Warehouse = 473,
        WarehouseForSale = 474,
        Office = 475,
        OfficeForSale = 476,
        Truck = 477,
        Contraband = 478,
        Trailer = 479,
        Vip = 480,
        Cargobob = 481,
        AreaOutlineBlip = 482,
        PickupAccelerator = 483,
        PickupGhost = 484,
        PickupDetonator = 485,
        PickupBomb = 486,
        PickupArmoured = 487,
        Stunt = 488,
        WeaponLives = 489,
        StuntPremium = 490,
        Adversary = 491,
        BikerClubhouse = 492,
        BikerCagedIn = 493,
        BikerTurfWar = 494,
        BikerJoust = 495,
        ProductionWeed = 496,
        ProductionCrack = 497,
        ProductionFakeId = 498,
        ProductionMeth = 499,
        ProductionMoney = 500,
        Package = 501,
        Capture1 = 502,
        Capture2 = 503,
        Capture3 = 504,
        Capture4 = 505,
        Capture5 = 506,
        Capture6 = 507,
        Capture7 = 508,
        Capture8 = 509,
        Capture9 = 510,
        Capture10 = 511,
        Quad = 512,
        Bus = 513,
        DrugsPackage = 514,
        PickupJump = 515,
        Adversary4 = 516,
        Adversary8 = 517,
        Adversary10 = 518,
        Adversary12 = 519,
        Adversary16 = 520,
        Laptop = 521,
        PickupDeadline = 522,
        SportsCar = 523,
        WarehouseVehicle = 524,
        RegPapers = 525,
        PoliceStationDropoff = 526,
        Junkyard = 527,
        ExVech1 = 528,
        ExVech2 = 529,
        ExVech3 = 530,
        ExVech4 = 531,
        ExVech5 = 532,
        ExVech6 = 533,
        ExVech7 = 534,
        TargetA = 535,
        TargetB = 536,
        TargetC = 537,
        TargetD = 538,
        TargetE = 539,
        TargetF = 540,
        TargetG = 541,
        TargetH = 542,
        Jugg = 543,
        PickupRepair = 544,
        Steeringwheel = 545,
        Trophy = 546,
        PickupRocketBoost = 547,
        PickupHomingRocket = 548,
        PickupMachinegun = 549,
        PickupParachute = 550,
        PickupTime5 = 551,
        PickupTime10 = 552,
        PickupTime15 = 553,
        PickupTime20 = 554,
        PickupTime30 = 555,
        Supplies = 556,
        PropertyBunker = 557,
        GrWvm1 = 558,
        GrWvm2 = 559,
        GrWvm3 = 560,
        GrWvm4 = 561,
        GrWvm5 = 562,
        GrWvm6 = 563,
        GrCovertOps = 564,
        AdversaryBunker = 565,
        GrMocUpgrade = 566,
        GrWUpgrade = 567,
        SmCargo = 568,
        SmHangar = 569,
        TfCheckpoint = 570,
        RaceTf = 571,
        SmWp1 = 572,
        SmWp2 = 573,
        SmWp3 = 574,
        SmWp4 = 575,
        SmWp5 = 576,
        SmWp6 = 577,
        SmWp7 = 578,
        SmWp8 = 579,
        SmWp9 = 580,
        SmWp10 = 581,
        SmWp11 = 582,
        SmWp12 = 583,
        SmWp13 = 584,
        SmWp14 = 585,
        NhpBag = 586,
        NhpChest = 587,
        NhpOrbit = 588,
        NhpVeh1 = 589,
        NhpBase = 590,
        NhpOverlay = 591,
        NhpTurret = 592,
        NhpMgFirewall = 593,
        NhpMgNode = 594,
        NhpWp1 = 595,
        NhpWp2 = 596,
        NhpWp3 = 597,
        NhpWp4 = 598,
        NhpWp5 = 599,
        NhpWp6 = 600,
        NhpWp7 = 601,
        NhpWp8 = 602,
        NhpWp9 = 603,
        NhpCctv = 604,
        NhpStarterpack = 605,
        NhpTurretConsole = 606,
        NhpMgMirRotate = 607,
        NhpMgMirStatic = 608,
        NhpMgProxy = 609,
        AcsrRaceTarget = 610,
        AcsrRaceHotring = 611,
        AcsrWp1 = 612,
        AcsrWp2 = 613,
        BatClubProperty = 614,
        BatCargo = 615,
        BatTruck = 616,
        BatHackJewel = 617,
        BatHackGold = 618,
        BatKeypad = 619,
        BatHackTarget = 620,
        PickupDtbHealth = 621,
        PickupDtbBlastIncrease = 622,
        PickupDtbBlastDecrease = 623,
        PickupDtbBombIncrease = 624,
        PickupDtbBombDecrease = 625,
        BatRivalClub = 626,
        BatDrone = 627,
        BatCashReg = 628,
        Cctv = 629,
        BatAssassinate = 630,
        BatPbus = 631,
        BatWp1 = 632,
        BatWp2 = 633,
        BatWp3 = 634,
        BatWp4 = 635,
        BatWp5 = 636,
        BatWp6 = 637,
        Blimp2 = 638,
        Oppressor2 = 639,
        BatWp7 = 640,
        ArenaSeries = 641,
        ArenaPremium = 642,
        ArenaWorkshop = 643,
        RaceWars = 644,
        ArenaTurret = 645,
        ArenaRcCar = 646,
        ArenaRcWorkshop = 647,
        ArenaTrapFire = 648,
        ArenaTrapFlip = 649,
        ArenaTrapSea = 650,
        ArenaTrapTurn = 651,
        ArenaTrapPit = 652,
        ArenaTrapMine = 653,
        ArenaTrapBomb = 654,
        ArenaTrapWall = 655,
        ArenaTrapBrd = 656,
        ArenaTrapSbrd = 657,
        ArenaBruiser = 658,
        ArenaBrutus = 659,
        ArenaCerberus = 660,
        ArenaDeathbike = 661,
        ArenaDominator = 662,
        ArenaImpaler = 663,
        ArenaImperator = 664,
        ArenaIssi = 665,
        ArenaSasquatch = 666,
        ArenaScarab = 667,
        ArenaSlamvan = 668,
        ArenaZr380 = 669,
        Ap = 670,
        ComicStore = 671,
        CopCar = 672,
        RcTimeTrials = 673,
        KingOfTheHill = 674,
        KingOfTheHillTeams = 675,
        Rucksack = 676,
        ShippingContainer = 677,
        Agatha = 678,
        Casino = 679,
        CasinoTableGames = 680,
        CasinoWheel = 681,
        CasinoConcierge = 682,
        CasinoChips = 683,
        CasinoHorseRacing = 684,
        AdversaryFeatured = 685,
        Roulette1 = 686,
        Roulette2 = 687,
        Roulette3 = 688,
        Roulette4 = 689,
        Roulette5 = 690,
        Roulette6 = 691,
        Roulette7 = 692,
        Roulette8 = 693,
        Roulette9 = 694,
        Roulette10 = 695,
        Roulette11 = 696,
        Roulette12 = 697,
        Roulette13 = 698,
        Roulette14 = 699,
        Roulette15 = 700,
        Roulette16 = 701,
        Roulette17 = 702,
        Roulette18 = 703,
        Roulette19 = 704,
        Roulette20 = 705,
        Roulette21 = 706,
        Roulette22 = 707,
        Roulette23 = 708,
        Roulette24 = 709,
        Roulette25 = 710,
        Roulette26 = 711,
        Roulette27 = 712,
        Roulette28 = 713,
        Roulette29 = 714,
        Roulette30 = 715,
        Roulette31 = 716,
        Roulette32 = 717,
        Roulette33 = 718,
        Roulette34 = 719,
        Roulette35 = 720,
        Roulette36 = 721,
        Roulette0 = 722,
        Roulette00 = 723,
        Limo = 724,
        WeaponAlien = 725,
        RaceOpenWheel = 726,
        Rappel = 727,
        SwapCar = 728,
        ScubaGear = 729,
        Cpanel1 = 730,
        Cpanel2 = 731,
        Cpanel3 = 732,
        Cpanel4 = 733,
        SnowTruck = 734,
        Buggy1 = 735,
        Buggy2 = 736,
        Zhaba = 737,
        Gerald = 738,
        Ron = 739,
        Arcade = 740,
        DroneControls = 741,
        RcTank = 742,
        Stairs = 743,
        Camera2 = 744,
        Winky = 745,
        MiniSub = 746,
        KartRetro = 747,
        KartModern = 748,
        MilitaryQuad = 749,
        MilitaryTruck = 750,
        ShipWheel = 751,
        Ufo = 752,
        Seasparrow2 = 753,
        Dinghy2 = 754,
        PatrolBoat = 755,
        RetroSportsCar = 756,
        Squadee = 757,
        FoldingWingJet = 758,
        Valkyrie2 = 759,
        Sub2 = 760,
        BoltCutters = 761,
        RappelGear = 762,
        Keycard = 763,
        Password = 764,
        IslandHeistPrep = 765,
        IslandParty = 766,
        ControlTower = 767,
        UnderwaterGate = 768,
        PowerSwitch = 769,
        CompoundGate = 770,
        RappelPoint = 771,
        Keypad = 772,
        SubControls = 773,
        SubPeriscope = 774,
        SubMissile = 775,
        Painting = 776,
        CarMeet = 777,
        CarTestArea = 778,
        AutoShopProperty = 779,
        DocksExport = 780,
        PrizeCar = 781,
        TestCar = 782,
        CarRobberyBoard = 783,
        CarRobberyPrep = 784,
        StreetRaceSeries = 785,
        PursuitSeries = 786,
        CarMeetOrganiser = 787,
        Securoserv = 788,
        BountyCollectibles = 789,
        MovieCollectibles = 790,
        TrailerRamp = 791,
        RaceOrganiser = 792,
        ChalkboardList = 793,
        ExportVehicle = 794,
        Train = 795,
        HeistDiamond = 796,
        HeistDoomsday = 797,
        HeistIsland = 798,
        Slamvan2 = 799,
        Crusader = 800,
        ConstructionOutfit = 801,
        OverlayJammed = 802,
        HeistIslandUnavailable = 803,
        HeistDiamondUnavailable = 804,
        HeistDoomsdayUnavailable = 805,
        Placeholder7 = 806,
        Placeholder8 = 807,
        Placeholder9 = 808,
        FeaturedSeries = 809,
        VehicleForSale = 810,
        VanKeys = 811,
        SuvService = 812,
        SecurityContract = 813,
        Safe = 814,
        PedR = 815,
        PedE = 816,
        Payphone = 817,
        Patriot3 = 818,
        MusicStudio = 819,
        Jubilee = 820,
        Granger2 = 821,
        ExplosiveCharge = 822,
        Deity = 823,
        DChampion = 824,
        Buffalo4 = 825,
        Agency = 826,
        BikerBar = 827,
        SimeonOverlay = 828,
        JunkSkydive = 829,
        LuxuryCarShowroom = 830,
        CarShowroom = 831,
        CarShowroomSimeon = 832,
        FlamingSkull = 833,
        WeaponAmmo = 834,
        CommunitySeries = 835,
        CayoSeries = 836,
        ClubhouseContract = 837,
        AgentUlp = 838,
        Acid = 839,
        AcidLab = 840,
        DaxOverlay = 841,
        DeadDropPackage = 842,
        DowntownCab = 843,
        GunVan = 844,
        StashHouse = 845,
        Tractor = 846,
        WarehouseJuggalo = 847,
        WarehouseJuggaloDax = 848,
        WeaponCrowbar = 849,
        DuffelBag = 850,
        OilTanker = 851,
        AcidLabTent = 852,
        VanBurrito = 853,
        AcidBoost = 854,
        PedGangLeader = 855,
        MultistoreyGarage = 856,
        SeizedAssetSales = 857,
        CayoAttrition = 858,
        Bicycle = 859,
        BicycleTrial = 860,
        Raiju = 861,
        Conada2 = 862,
        OverlayReadyForSell = 863,
        OverlayMissingSupplies = 864,
        Streamer216 = 865,
        SignalJammer = 866,
        SalvageYard = 867,
        RobberyPrepEquipment = 868,
        RobberyPrepOverlay = 869,
        Yusuf = 870,
        Vincent = 871,
        VinewoodGarage = 872,
        Lstb = 873,
        CctvWorkstation = 874,
        HackingDevice = 875,
        RaceDrag = 876,
        RaceDrift = 877,
        CasinoPrep = 878,
        PlanningWall = 879,
        WeaponCrate = 880,
        WeaponSnowball = 881,
        TrainSignalsGreen = 882,
        TrainSignalsRed = 883,
        OfficeTransporter = 884,
        YanktonSurvival = 885,
        DailyBounty = 886,
        BountyTarget = 887,
        FilmingSchedule = 888,
        PizzaThis = 889,
        AircraftCarrier = 890,
        WeaponEmp = 891,
        MaudeEccles = 892,
        BailBondsOffice = 893,
        WeaponEmpMine = 894,
        ZombieDisease = 895,
        ZombieProximity = 896,
        ZombieFire = 897,
        AnimalPossessed = 898,
        MobilePhone = 899,
        GarmentFactory = 900,
        GarmentFactoryForSale = 901,
        GarmentFactoryEquipment = 902,
        FieldHangar = 903,
        FieldHangarForSale = 904,
        CargobobCh53 = 905,
        ChopperLiftAmmo = 906,
        ChopperLiftArmor = 907,
        ChopperLiftExplosives = 908,
        ChopperLiftUpgrade = 909,
        ChopperLiftWeapon = 910,
        CargoShip = 911,
        SubmarineMissile = 912,
        PropellerEngine = 913,
        Shark = 914,
        FastTravel = 915,
        PlaneDuster2 = 916,
        PlaneTitan2 = 917,
        Collectible = 918,
        FieldHangarDiscount = 919,
        GarmentFactoryDiscount = 920,
        WeaponGusenbergSweeper = 921,
        WeaponTearGas = 922,
        Dog = 923,
        BobcatSecurity = 924,
        SmokeShop = 925,
        SmokeShopForSale = 926,
        SmokeShopAttention = 927,
        Helitours = 928,
        HelitoursForSale = 929,
        HelitoursAttention = 930,
        CarWashBusiness = 931,
        CarWashBusinessForSale = 932,
        CarWashBusinessAttention = 933,
        Attention = 934,
        Alarm = 935,
        HelitoursDiscount = 936,
        SmokeShopDiscount = 937,
        CarWashBusinessDiscount = 938,
        RealEstate = 939,
        MedicalCourier = 940,
        GruppeSechs = 941,
        FireStation = 942,
        FireTruck = 943,
        AlphaMail = 944,
        LsMeteor = 945,
        Four20Survival = 946,
        CommunityMissionSeries = 947,
        PropertyMansion = 948,
        AiKeypad = 949,
        TaxiSelfDrive = 950,
        TrainSubway = 951,
        Trashbag = 952,
        MissionCreator = 953,
        Cat = 954,
        MansionAiM = 955,
        MansionAiF = 956,
        MansionAiGang = 957,
        HeistArtUnavailable = 958,
        HeistArt = 959,
        PropertyMansionArtHeist = 960,
        ArtHeistPrep = 961,
        ManholeKey = 962,
        BuyersRequest = 963,
        ArmoredCaracara = 964,
        Witness = 965,
    }

    /** Flags for setPedConfigFlag and getPedConfigFlag. */
    export enum PedConfigFlag {
        NoCriticalHits = 2,
        DrownsInWater = 3,
        DisableReticuleFixedLockon = 4,
        UpperBodyDamageAnimsOnly = 7,
        NeverLeavesGroup = 13,
        BlockNonTemporaryEvents = 17,
        CanPunch = 18,
        IgnoreSeenMelee = 24,
        GetOutUndriveableVehicle = 29,
        CanFlyThruWindscreen = 32,
        DiesWhenRagdoll = 33,
        HasHelmet = 34,
        PutOnMotorcycleHelmet = 35,
        DontTakeOffHelmet = 36,
        DisableEvasiveDives = 39,
        DontInfluenceWantedLevel = 42,
        DisablePlayerLockon = 43,
        DisableLockonToRandomPeds = 44,
        AllowLockonToFriendlyPlayers = 45,
        BeingDeleted = 47,
        BlockWeaponSwitching = 48,
        NoCollision = 52,
        IsShooting = 58,
        WasShooting = 59,
        IsOnGround = 60,
        WasOnGround = 61,
        InVehicle = 62,
        OnMount = 63,
        AttachedToVehicle = 64,
        IsSwimming = 65,
        WasSwimming = 66,
        IsSkiing = 67,
        IsSitting = 68,
        KilledByStealth = 69,
        KilledByTakedown = 70,
        Knockedout = 71,
        IsSniperScopeActive = 72,
        SuperDead = 73,
        UsingCoverPoint = 75,
        IsInTheAir = 76,
        IsAimingGun = 78,
        ForcePedLoadCover = 93,
        VaultFromCover = 97,
        IsDrunk = 100,
        ForcedAim = 101,
        IsNotRagdollAndNotPlayingAnim = 104,
        ForceReload = 105,
        DontActivateRagdollFromVehicleImpact = 106,
        DontActivateRagdollFromBulletImpact = 107,
        DontActivateRagdollFromExplosions = 108,
        DontActivateRagdollFromFire = 109,
        DontActivateRagdollFromElectrocution = 110,
        KeepWeaponHolsteredUnlessFired = 113,
        GetOutBurningVehicle = 116,
        BumpedByPlayer = 117,
        RunFromFiresAndExplosions = 118,
        TreatAsPlayerDuringTargeting = 119,
        IsHandCuffed = 120,
        IsAnkleCuffed = 121,
        DisableMelee = 122,
        DisableUnarmedDrivebys = 123,
        JustGetsPulledOutWhenElectrocuted = 124,
        NmMessage466 = 125,
        WillNotHotwireLawEnforcementVehicle = 126,
        WillCommandeerRatherThanJack = 127,
        CanBeAgitated = 128,
        ForcePedToFaceLeftInCover = 129,
        ForcePedToFaceRightInCover = 130,
        BlockPedFromTurningInCover = 131,
        KeepRelationshipGroupAfterCleanUp = 132,
        ForcePedToBeDragged = 133,
        PreventPedFromReactingToBeingJacked = 134,
        IsScuba = 135,
        WillArrestRatherThanJack = 136,
        RemoveDeadExtraFarAway = 137,
        RidingTrain = 138,
        ArrestResult = 139,
        CanAttackFriendly = 140,
        WillJackAnyPlayer = 141,
        WillJackWantedPlayersRatherThanStealCar = 144,
        ShootingAnimFlag = 145,
        DisableLadderClimbing = 146,
        StairsDetected = 147,
        SlopeDetected = 148,
        CowerInsteadOfFlee = 150,
        CanActivateRagdollWhenVehicleUpsideDown = 151,
        AlwaysRespondToCriesForHelp = 152,
        DisableBloodPoolCreation = 153,
        ShouldFixIfNoCollision = 154,
        CanPerformArrest = 155,
        CanPerformUncuff = 156,
        CanBeArrested = 157,
        PlayerPreferFrontSeatMP = 159,
        IsInjured = 166,
        DontEnterVehiclesInPlayersGroup = 167,
        PreventAllMeleeTaunts = 169,
        IsInjured2 = 170,
        AlwaysSeeApproachingVehicles = 171,
        CanDiveAwayFromApproachingVehicles = 172,
        AllowPlayerToInterruptVehicleEntryExit = 173,
        OnlyAttackLawIfPlayerIsWanted = 174,
        PedsJackingMeDontGetIn = 177,
        PedIgnoresAnimInterruptEvents = 179,
        IsInCustody = 180,
        ForceStandardBumpReactionThresholds = 181,
        LawWillOnlyAttackIfPlayerIsWanted = 182,
        IsAgitated = 183,
        PreventAutoShuffleToDriversSeat = 184,
        UseKinematicModeWhenStationary = 185,
        EnableWeaponBlocking = 186,
        HasHurtStarted = 187,
        DisableHurt = 188,
        PlayerIsWeird = 189,
        DoNothingWhenOnFootByDefault = 193,
        UsingScenario = 194,
        VisibleOnScreen = 195,
        DontActivateRagdollOnVehicleCollisionWhenDead = 199,
        HasBeenInArmedCombat = 200,
        AvoidanceIgnoreAll = 202,
        AvoidanceIgnoredByAll = 203,
        AvoidanceIgnoreGroup1 = 204,
        AvoidanceMemberOfGroup1 = 205,
        ForcedToUseSpecificGroupSeatIndex = 206,
        DisableExplosionReactions = 208,
        DodgedPlayer = 209,
        WaitingForPlayerControlInterrupt = 210,
        ForcedToStayInCover = 211,
        GeneratesSoundEvents = 212,
        ListensToSoundEvents = 213,
        AllowToBeTargetedInAVehicle = 214,
        WaitForDirectEntryPointToBeFreeWhenExiting = 215,
        OnlyRequireOnePressToExitVehicle = 216,
        ForceExitToSkyDive = 217,
        DontEnterLeadersVehicle = 220,
        DisableExitToSkyDive = 221,
        Shrink = 223,
        MeleeCombat = 224,
        DisablePotentialToBeWalkedIntoResponse = 225,
        DisablePedAvoidance = 226,
        ForceRagdollUponDeath = 227,
        DisablePanicInVehicle = 229,
        AllowedToDetachTrailer = 230,
        IsHoldingProp = 236,
        BlocksPathingWhenDead = 237,
        ForceSkinCharacterCloth = 240,
        DisableStoppingVehicleEngine = 241,
        PhoneDisableTextingAnimations = 242,
        PhoneDisableTalkingAnimations = 243,
        PhoneDisableCameraAnimations = 244,
        DisableBlindFiringInShotReactions = 245,
        AllowNearbyCoverUsage = 246,
        CanPlayInCarIdles = 248,
        CanAttackNonWantedPlayerAsLaw = 249,
        WillTakeDamageWhenVehicleCrashes = 250,
        AICanDrivePlayerAsRearPassenger = 251,
        PlayerCanJackFriendlyPlayers = 252,
        IsOnStairs = 253,
        AIDriverAllowFriendlyPassengerSeatEntry = 255,
        AllowMissionPedToUseInjuredMovement = 257,
        PreventUsingLowerPrioritySeats = 261,
        DisableClosingVehicleDoor = 264,
        TeleportToLeaderVehicle = 268,
        AvoidanceIgnoreWeirdPedBuffer = 269,
        OnStairSlope = 270,
        DontBlipCop = 272,
        ClimbedShiftedFence = 273,
        KillWhenTrapped = 275,
        EdgeDetected = 276,
        AvoidTearGas = 279,
        NoWrithe = 281,
        OnlyUseForcedSeatWhenEnteringHeliInGroup = 282,
        DisableWeirdPedEvents = 285,
        ShouldChargeNow = 286,
        RagdollingOnBoat = 287,
        HasBrandishedWeapon = 288,
        FreezePosition = 292,
        DisableShockingEvents = 294,
        NeverReactToPedOnRoof = 296,
        DisableShockingDrivingOnPavementEvents = 299,
        DisablePedConstraints = 301,
        ForceInitialPeekInCover = 302,
        DisableJumpingFromVehiclesAfterLeader = 305,
        IsInCluster = 310,
        ShoutToGroupOnPlayerMelee = 311,
        IgnoredByAutoOpenDoors = 312,
        NoPedMelee = 314,
        CheckLoSForSoundEvents = 315,
        CanSayFollowedByPlayerAudio = 317,
        ActivateRagdollFromMinorPlayerContact = 318,
        ForcePoseCharacterCloth = 320,
        HasClothCollisionBounds = 321,
        HasHighHeels = 322,
        DontBehaveLikeLaw = 324,
        DisablePoliceInvestigatingBody = 326,
        DisableWritheShootFromGround = 327,
        LowerPriorityOfWarpSeats = 328,
        DisableTalkTo = 329,
        DontBlip = 330,
        IsSwitchingWeapon = 331,
        IgnoreLegIkRestrictions = 332,
        AllowTaskDoNothingTimeslicing = 339,
        NotAllowedToJackAnyPlayers = 342,
        AlwaysLeaveTrainUponArrival = 345,
        OnlyWritheFromWeaponDamage = 347,
        UseSloMoBloodVfx = 348,
        EquipJetpack = 349,
        PreventDraggedOutOfCarThreatResponse = 350,
        ForceDeepSurfaceCheck = 356,
        DisableDeepSurfaceAnims = 357,
        DontBlipNotSynced = 358,
        IsDuckingInVehicle = 359,
        PreventAutoShuffleToTurretSeat = 360,
        DisableEventInteriorStatusCheck = 361,
        HasReserveParachute = 362,
        UseReserveParachute = 363,
        TreatDislikeAsHateWhenInCombat = 364,
        OnlyUpdateTargetWantedIfSeen = 365,
        AllowAutoShuffleToDriversSeat = 366,
        PreventReactingToSilencedCloneBullets = 372,
        DisableInjuredCryForHelpEvents = 373,
        NeverLeaveTrain = 374,
        DontDropJetpackOnDeath = 375,
        DisableAutoEquipHelmetsInBikes = 380,
        IsClimbingLadder = 388,
        HasBareFeet = 389,
        GoOnWithoutVehicleIfItIsUnableToGetBackToRoad = 391,
        BlockDroppingHealthSnacksOnDeath = 392,
        ForceThreatResponseToNonFriendToFriendMeleeActions = 394,
        DontRespondToRandomPedsDamage = 395,
        AllowContinuousThreatResponseWantedLevelUpdates = 396,
        KeepTargetLossResponseOnCleanup = 397,
        PlayersDontDragMeOutOfCar = 398,
        BroadcastRepondedToThreatWhenGoingToPointShooting = 399,
        IgnorePedTypeForIsFriendlyWith = 400,
        TreatNonFriendlyAsHateWhenInCombat = 401,
        DontLeaveVehicleIfLeaderNotInVehicle = 402,
        AllowMeleeReactionIfMeleeProofIsOn = 404,
        UseNormalExplosionDamageWhenBlownUpInVehicle = 407,
        DisableHomingMissileLockForVehiclePedInside = 408,
        DisableTakeOffScubaGear = 409,
        Alpha = 410,
        LawPedsCanFleeFromNonWantedPlayer = 411,
        ForceBlipSecurityPedsIfPlayerIsWanted = 412,
        IsHolsteringWeapon = 413,
        UseGoToPointForScenarioNavigation = 414,
        DontClearLocalPassengersWantedLevel = 415,
        BlockAutoSwapOnWeaponPickups = 416,
        ThisPedIsATargetPriorityForAI = 417,
        IsSwitchingHelmetVisor = 418,
        ForceHelmetVisorSwitch = 419,
        FlamingFootprints = 421,
        DisableVehicleCombat = 422,
        DisablePropKnockOff = 423,
        FallsLikeAircraft = 424,
        UseLockpickVehicleEntryAnimations = 426,
        IgnoreInteriorCheckForSprinting = 427,
        SwatHeliSpawnWithinLastSpottedLocation = 428,
        DisableStartingVehicleEngine = 429,
        IgnoreBeingOnFire = 430,
        DisableTurretOrRearSeatPreference = 431,
        DisableWantedHelicopterSpawning = 432,
        UseTargetPerceptionForCreatingAimedAtEvents = 433,
        DisableHomingMissileLockon = 434,
        ForceIgnoreMaxMeleeActiveSupportCombatants = 435,
        StayInDefensiveAreaWhenInVehicle = 436,
        DontShoutTargetPosition = 437,
        DisableHelmetArmor = 438,
        PreventVehExitDueToInvalidWeapon = 441,
        IgnoreNetSessionFriendlyFireCheckForAllowDamage = 442,
        DontLeaveCombatIfTargetPlayerIsAttackedByPolice = 443,
        CheckLockedBeforeWarp = 444,
        DontShuffleInVehicleToMakeRoom = 445,
        GiveWeaponOnGetup = 446,
        DontHitVehicleWithProjectiles = 447,
        DisableForcedEntryForOpenVehiclesFromTryLockedDoor = 448,
        FiresDummyRockets = 449,
        IsArresting = 450,
        IsDecoyPed = 451,
        HasEstablishedDecoy = 452,
        BlockDispatchedHelicoptersFromLanding = 453,
        DontCryForHelpOnStun = 454,
        CanBeIncapacitated = 456,
        MutableForcedAim = 457,
        DontChangeTargetFromMelee = 458,
    }

    /** Bone IDs. Use getPedBoneIndex to get an index for a specific model. */
    export enum PedBone {
        SkelRoot = 0x0000,
        SkelPelvis = 0x2E28,
        SkelLThigh = 0xE39F,
        SkelLCalf = 0xF9BB,
        SkelLFoot = 0x3779,
        SkelLToe0 = 0x083C,
        EoLFoot = 0x84C5,
        EoLToe = 0x68BD,
        IkLFoot = 0xFEDD,
        PhLFoot = 0xE175,
        MhLKnee = 0xB3FE,
        SkelRThigh = 0xCA72,
        SkelRCalf = 0x9000,
        SkelRFoot = 0xCC4D,
        SkelRToe0 = 0x512D,
        EoRFoot = 0x1096,
        EoRToe = 0x7163,
        IkRFoot = 0x8AAE,
        PhRFoot = 0x60E6,
        MhRKnee = 0x3FCF,
        RbLThighRoll = 0x5C57,
        RbRThighRoll = 0x192A,
        SkelSpineRoot = 0xE0FD,
        SkelSpine0 = 0x5C01,
        SkelSpine1 = 0x60F0,
        SkelSpine2 = 0x60F1,
        SkelSpine3 = 0x60F2,
        SkelLClavicle = 0xFCD9,
        SkelLUpperArm = 0xB1C5,
        SkelLForearm = 0xEEEB,
        SkelLHand = 0x49D9,
        SkelLFinger00 = 0x67F2,
        SkelLFinger01 = 0x0FF9,
        SkelLFinger02 = 0x0FFA,
        SkelLFinger10 = 0x67F3,
        SkelLFinger11 = 0x1049,
        SkelLFinger12 = 0x104A,
        SkelLFinger20 = 0x67F4,
        SkelLFinger21 = 0x1059,
        SkelLFinger22 = 0x105A,
        SkelLFinger30 = 0x67F5,
        SkelLFinger31 = 0x1029,
        SkelLFinger32 = 0x102A,
        SkelLFinger40 = 0x67F6,
        SkelLFinger41 = 0x1039,
        SkelLFinger42 = 0x103A,
        PhLHand = 0xEB95,
        IkLHand = 0x8CBD,
        RbLForeArmRoll = 0xEE4F,
        RbLArmRoll = 0x1470,
        MhLElbow = 0x58B7,
        SkelRClavicle = 0x29D2,
        SkelRUpperArm = 0x9D4D,
        SkelRForearm = 0x6E5C,
        SkelRHand = 0xDEAD,
        SkelRFinger00 = 0xE5F2,
        SkelRFinger01 = 0xFA10,
        SkelRFinger02 = 0xFA11,
        SkelRFinger10 = 0xE5F3,
        SkelRFinger11 = 0xFA60,
        SkelRFinger12 = 0xFA61,
        SkelRFinger20 = 0xE5F4,
        SkelRFinger21 = 0xFA70,
        SkelRFinger22 = 0xFA71,
        SkelRFinger30 = 0xE5F5,
        SkelRFinger31 = 0xFA40,
        SkelRFinger32 = 0xFA41,
        SkelRFinger40 = 0xE5F6,
        SkelRFinger41 = 0xFA50,
        SkelRFinger42 = 0xFA51,
        PhRHand = 0x6F06,
        IkRHand = 0x188E,
        RbRForeArmRoll = 0xAB22,
        RbRArmRoll = 0x90FF,
        MhRElbow = 0x0BB0,
        SkelNeck1 = 0x9995,
        SkelHead = 0x796E,
        IkHead = 0x322C,
        FacialFacialRoot = 0xFE2C,
        FbLBrowOut000 = 0xE3DB,
        FbLLidUpper000 = 0xB2B6,
        FbLEye000 = 0x62AC,
        FbLCheekBone000 = 0x542E,
        FbLLipCorner000 = 0x74AC,
        FbRLidUpper000 = 0xAA10,
        FbREye000 = 0x6B52,
        FbRCheekBone000 = 0x4B88,
        FbRBrowOut000 = 0x054C,
        FbRLipCorner000 = 0x2BA6,
        FbBrowCentre000 = 0x9149,
        FbUpperLipRoot000 = 0x4ED2,
        FbUpperLip000 = 0xF18F,
        FbLLipTop000 = 0x4F37,
        FbRLipTop000 = 0x4537,
        FbJaw000 = 0xB4A0,
        FbLowerLipRoot000 = 0x4324,
        FbLowerLip000 = 0x508F,
        FbLLipBot000 = 0xB93B,
        FbRLipBot000 = 0xC33B,
        FbTongue000 = 0xB987,
        RbNeck1 = 0x8B93,
        SprLBreast = 0xFC8E,
        SprRBreast = 0x885F,
        IkRoot = 0xDD1C,
        SkelNeck2 = 0x5FD4,
        SkelPelvis1 = 0xD003,
        SkelPelvisRoot = 0x45FC,
        SkelSaddle = 0x9524,
        MhLCalfBack = 0x1013,
        MhLThighBack = 0x600D,
        SmLSkirt = 0xC419,
        MhRCalfBack = 0xB013,
        MhRThighBack = 0x51A3,
        SmRSkirt = 0x7712,
        SmMBackSkirtRoll = 0x0DBB,
        SmLBackSkirtRoll = 0x40B2,
        SmRBackSkirtRoll = 0xC141,
        SmMFrontSkirtRoll = 0xCDBB,
        SmLFrontSkirtRoll = 0x9B69,
        SmRFrontSkirtRoll = 0x86F1,
        SmCockNBallsRoot = 0xC67D,
        SmCockNBalls = 0x9D34,
        MhLFinger00 = 0x8C63,
        MhLFingerBulge00 = 0x5FB8,
        MhLFinger10 = 0x8C53,
        MhLFingerTop00 = 0xA244,
        MhLHandSide = 0xC78A,
        MhWatch = 0x2738,
        MhLSleeve = 0x933C,
        MhRFinger00 = 0x2C63,
        MhRFingerBulge00 = 0x69B8,
        MhRFinger10 = 0x2C53,
        MhRFingerTop00 = 0xEF4B,
        MhRHandSide = 0x68FB,
        MhRSleeve = 0x92DC,
        FacialJaw = 0x0B21,
        FacialUnderChin = 0x8A95,
        FacialLUnderChin = 0x234E,
        FacialChin = 0xB578,
        FacialChinSkinBottom = 0x98BC,
        FacialLChinSkinBottom = 0x3E8F,
        FacialRChinSkinBottom = 0x9E8F,
        FacialTongueA = 0x4A7C,
        FacialTongueB = 0x4A7D,
        FacialTongueC = 0x4A7E,
        FacialTongueD = 0x4A7F,
        FacialTongueE = 0x4A80,
        FacialLTongueE = 0x35F2,
        FacialRTongueE = 0x2FF2,
        FacialLTongueD = 0x35F1,
        FacialRTongueD = 0x2FF1,
        FacialLTongueC = 0x35F0,
        FacialRTongueC = 0x2FF0,
        FacialLTongueB = 0x35EF,
        FacialRTongueB = 0x2FEF,
        FacialLTongueA = 0x35EE,
        FacialRTongueA = 0x2FEE,
        FacialChinSkinTop = 0x7226,
        FacialLChinSkinTop = 0x3EB3,
        FacialChinSkinMid = 0x899A,
        FacialLChinSkinMid = 0x4427,
        FacialLChinSide = 0x4A5E,
        FacialRChinSkinMid = 0xF5AF,
        FacialRChinSkinTop = 0xF03B,
        FacialRChinSide = 0xAA5E,
        FacialRUnderChin = 0x2BF4,
        FacialLLipLowerSDK = 0xB9E1,
        FacialLLipLowerAnalog = 0x244A,
        FacialLLipLowerThicknessV = 0xC749,
        FacialLLipLowerThicknessH = 0xC67B,
        FacialLipLowerSDK = 0x7285,
        FacialLipLowerAnalog = 0xD97B,
        FacialLipLowerThicknessV = 0xC5BB,
        FacialLipLowerThicknessH = 0xC5ED,
        FacialRLipLowerSDK = 0xA034,
        FacialRLipLowerAnalog = 0xC2D9,
        FacialRLipLowerThicknessV = 0xC6E9,
        FacialRLipLowerThicknessH = 0xC6DB,
        FacialNose = 0x20F1,
        FacialLNostril = 0x7322,
        FacialLNostrilThickness = 0xC15F,
        FacialNoseLower = 0xE05A,
        FacialLNoseLowerThickness = 0x79D5,
        FacialRNoseLowerThickness = 0x7975,
        FacialNoseTip = 0x6A60,
        FacialRNostril = 0x7922,
        FacialRNostrilThickness = 0x36FF,
        FacialNoseUpper = 0xA04F,
        FacialLNoseUpper = 0x1FB8,
        FacialNoseBridge = 0x9BA3,
        FacialLNasolabialFurrow = 0x5ACA,
        FacialLNasolabialBulge = 0xCD78,
        FacialLCheekLower = 0x6907,
        FacialLCheekLowerBulge1 = 0xE3FB,
        FacialLCheekLowerBulge2 = 0xE3FC,
        FacialLCheekInner = 0xE7AB,
        FacialLCheekOuter = 0x8161,
        FacialLEyesackLower = 0x771B,
        FacialLEyeball = 0x1744,
        FacialLEyelidLower = 0x998C,
        FacialLEyelidLowerOuterSDK = 0xFE4C,
        FacialLEyelidLowerOuterAnalog = 0xB9AA,
        FacialLEyelashLowerOuter = 0xD7F6,
        FacialLEyelidLowerInnerSDK = 0xF151,
        FacialLEyelidLowerInnerAnalog = 0x8242,
        FacialLEyelashLowerInner = 0x4CCF,
        FacialLEyelidUpper = 0x97C1,
        FacialLEyelidUpperOuterSDK = 0xAF15,
        FacialLEyelidUpperOuterAnalog = 0x67FA,
        FacialLEyelashUpperOuter = 0x27B7,
        FacialLEyelidUpperInnerSDK = 0xD341,
        FacialLEyelidUpperInnerAnalog = 0xF092,
        FacialLEyelashUpperInner = 0x9B1F,
        FacialLEyesackUpperOuterBulge = 0xA559,
        FacialLEyesackUpperInnerBulge = 0x2F2A,
        FacialLEyesackUpperOuterFurrow = 0xC597,
        FacialLEyesackUpperInnerFurrow = 0x52A7,
        FacialForehead = 0x9218,
        FacialLForeheadInner = 0x0843,
        FacialLForeheadInnerBulge = 0x767C,
        FacialLForeheadOuter = 0x8DCB,
        FacialSkull = 0x4221,
        FacialForeheadUpper = 0xF7D6,
        FacialLForeheadUpperInner = 0xCF13,
        FacialLForeheadUpperOuter = 0x509B,
        FacialRForeheadUpperInner = 0xCEF3,
        FacialRForeheadUpperOuter = 0x507B,
        FacialLTemple = 0xAF79,
        FacialLEar = 0x19DD,
        FacialLEarLower = 0x6031,
        FacialLMasseter = 0x2810,
        FacialLJawRecess = 0x9C7A,
        FacialLCheekOuterSkin = 0x14A5,
        FacialRCheekLower = 0xF367,
        FacialRCheekLowerBulge1 = 0x599B,
        FacialRCheekLowerBulge2 = 0x599C,
        FacialRMasseter = 0x0810,
        FacialRJawRecess = 0x93D4,
        FacialREar = 0x1137,
        FacialREarLower = 0x8031,
        FacialREyesackLower = 0x777B,
        FacialRNasolabialBulge = 0xD61E,
        FacialRCheekOuter = 0x0D32,
        FacialRCheekInner = 0x737C,
        FacialRNoseUpper = 0x1CD6,
        FacialRForeheadInner = 0x0E43,
        FacialRForeheadInnerBulge = 0x769C,
        FacialRForeheadOuter = 0x8FCB,
        FacialRCheekOuterSkin = 0xB334,
        FacialREyesackUpperInnerFurrow = 0x9FAE,
        FacialREyesackUpperOuterFurrow = 0x140F,
        FacialREyesackUpperInnerBulge = 0xA359,
        FacialREyesackUpperOuterBulge = 0x1AF9,
        FacialRNasolabialFurrow = 0x2CAA,
        FacialRTemple = 0xAF19,
        FacialREyeball = 0x1944,
        FacialREyelidUpper = 0x7E14,
        FacialREyelidUpperOuterSDK = 0xB115,
        FacialREyelidUpperOuterAnalog = 0xF25A,
        FacialREyelashUpperOuter = 0x0E0A,
        FacialREyelidUpperInnerSDK = 0xD541,
        FacialREyelidUpperInnerAnalog = 0x7C63,
        FacialREyelashUpperInner = 0x8172,
        FacialREyelidLower = 0x7FDF,
        FacialREyelidLowerOuterSDK = 0x01BD,
        FacialREyelidLowerOuterAnalog = 0x457B,
        FacialREyelashLowerOuter = 0xBE49,
        FacialREyelidLowerInnerSDK = 0xF351,
        FacialREyelidLowerInnerAnalog = 0x0E13,
        FacialREyelashLowerInner = 0x3322,
        FacialLLipUpperSDK = 0x8F30,
        FacialLLipUpperAnalog = 0xB1CF,
        FacialLLipUpperThicknessH = 0x37CE,
        FacialLLipUpperThicknessV = 0x38BC,
        FacialLipUpperSDK = 0x1774,
        FacialLipUpperAnalog = 0xE064,
        FacialLipUpperThicknessH = 0x7993,
        FacialLipUpperThicknessV = 0x7981,
        FacialLLipCornerSDK = 0x0B1C,
        FacialLLipCornerAnalog = 0xE568,
        FacialLLipCornerThicknessUpper = 0x07BC,
        FacialLLipCornerThicknessLower = 0xDD42,
        FacialRLipUpperSDK = 0x7583,
        FacialRLipUpperAnalog = 0x51CF,
        FacialRLipUpperThicknessH = 0x382E,
        FacialRLipUpperThicknessV = 0x385C,
        FacialRLipCornerSDK = 0x0B3C,
        FacialRLipCornerAnalog = 0xEE0E,
        FacialRLipCornerThicknessUpper = 0x54C3,
        FacialRLipCornerThicknessLower = 0x2BBA,
        MhMulletRoot = 0x3E73,
        MhMulletScaler = 0xA1C2,
        MhHairScale = 0xC664,
        MhHairCrown = 0x1675,
        SmTorch = 0x08D6,
        FxLight = 0x8959,
        FxLightScale = 0x5038,
        FxLightSwitch = 0xE18E,
        BagRoot = 0xAD09,
        BagPivotROOT = 0xB836,
        BagPivot = 0x4D11,
        BagBody = 0xAB6D,
        BagBoneR = 0x0937,
        BagBoneL = 0x0991,
        SmLifeSaverFront = 0x9420,
        SmRPouchesRoot = 0x2962,
        SmRPouches = 0x4141,
        SmLPouchesRoot = 0x2A02,
        SmLPouches = 0x4B41,
        SmSuitBackFlapper = 0xDA2D,
        SprCopRadio = 0x8245,
        SmLifeSaverBack = 0x2127,
        MhBlushSlider = 0xA0CE,
        SkelTail01 = 0x0347,
        SkelTail02 = 0x0348,
        MhLConcertinaB = 0xC988,
        MhLConcertinaA = 0xC987,
        MhRConcertinaB = 0xC8E8,
        MhRConcertinaA = 0xC8E7,
        MhLShoulderBladeRoot = 0x8711,
        MhLShoulderBlade = 0x4EAF,
        MhRShoulderBladeRoot = 0x3A0A,
        MhRShoulderBlade = 0x54AF,
        FbREar000 = 0x6CDF,
        SprREar = 0x63B6,
        FbLEar000 = 0x6439,
        SprLEar = 0x5B10,
        FbTongueA000 = 0x4206,
        FbTongueB000 = 0x4207,
        FbTongueC000 = 0x4208,
        SkelLToe1 = 0x1D6B,
        SkelRToe1 = 0xB23F,
        SkelTail03 = 0x0349,
        SkelTail04 = 0x034A,
        SkelTail05 = 0x034B,
        SprGonadsRoot = 0xBFDE,
        SprGonads = 0x1C00,
        FbLBrowOut001 = 0xE3DB,
        FbLLidUpper001 = 0xB2B6,
        FbLEye001 = 0x62AC,
        FbLCheekBone001 = 0x542E,
        FbLLipCorner001 = 0x74AC,
        FbRLidUpper001 = 0xAA10,
        FbREye001 = 0x6B52,
        FbRCheekBone001 = 0x4B88,
        FbRBrowOut001 = 0x054C,
        FbRLipCorner001 = 0x2BA6,
        FbBrowCentre001 = 0x9149,
        FbUpperLipRoot001 = 0x4ED2,
        FbUpperLip001 = 0xF18F,
        FbLLipTop001 = 0x4F37,
        FbRLipTop001 = 0x4537,
        FbJaw001 = 0xB4A0,
        FbLowerLipRoot001 = 0x4324,
        FbLowerLip001 = 0x508F,
        FbLLipBot001 = 0xB93B,
        FbRLipBot001 = 0xC33B,
        FbTongue001 = 0xB987,
    }

    /** IDs for hideHudComponentThisFrame and showHudComponentThisFrame. */
    export enum HudComponent {
        Hud = 0,
        WantedStars = 1,
        WeaponIcon = 2,
        Cash = 3,
        MpCash = 4,
        MpMessage = 5,
        VehicleName = 6,
        AreaName = 7,
        VehicleClass = 8,
        StreetName = 9,
        HelpText = 10,
        FloatingHelpText1 = 11,
        FloatingHelpText2 = 12,
        CashChange = 13,
        Reticle = 14,
        SubtitleText = 15,
        RadioStations = 16,
        SavingGame = 17,
        GameStream = 18,
        WeaponWheel = 19,
        WeaponWheelStats = 20,
        HudComponents = 21,
        HudWeapons = 22,
    }

    /** Explosion IDs. DontCare matches any type in queries and cannot create an explosion. */
    export enum ExplosionType {
        DontCare = -1,
        Grenade = 0,
        GrenadeLauncher = 1,
        StickyBomb = 2,
        Molotov = 3,
        Rocket = 4,
        TankShell = 5,
        HiOctane = 6,
        Car = 7,
        Plane = 8,
        PetrolPump = 9,
        Bike = 10,
        DirSteam = 11,
        DirFlame = 12,
        DirWaterHydrant = 13,
        DirGasCanister = 14,
        Boat = 15,
        ShipDestroy = 16,
        Truck = 17,
        Bullet = 18,
        SmokeGrenadeLauncher = 19,
        SmokeGrenade = 20,
        BZGas = 21,
        Flare = 22,
        GasCanister = 23,
        Extinguisher = 24,
        ProgrammableAr = 25,
        Train = 26,
        Barrel = 27,
        Propane = 28,
        Blimp = 29,
        DirFlameExplode = 30,
        Tanker = 31,
        PlaneRocket = 32,
        VehicleBullet = 33,
        GasTank = 34,
        BirdCrap = 35,
        Railgun = 36,
        Blimp2 = 37,
        Firework = 38,
        Snowball = 39,
        ProximityMine = 40,
        ValkyrieCannon = 41,
        AirDefence = 42,
        PipeBomb = 43,
        VehicleMine = 44,
        ExplosiveAmmo = 45,
        APCShell = 46,
        BombCluster = 47,
        BombGas = 48,
        BombIncendiary = 49,
        BombStandard = 50,
        Torpedo = 51,
        TorpedoUnderwater = 52,
        BombushkaCannon = 53,
        BombClusterSecondary = 54,
        HunterBarrage = 55,
        HunterCannon = 56,
        RogueCannon = 57,
        MineUnderwater = 58,
        OrbitalCannon = 59,
        BombStandardWide = 60,
        ExplosiveAmmoShotgun = 61,
        Oppressor2Cannon = 62,
        MortarKinetic = 63,
        VehicleMineKinetic = 64,
        VehicleMineEMP = 65,
        VehicleMineSpike = 66,
        VehicleMineSlick = 67,
        VehicleMineTar = 68,
        ScriptDrone = 69,
        RayGun = 70,
        BuriedMine = 71,
        ScriptMissile = 72,
        RCTankRocket = 73,
        BombWater = 74,
        BombWaterSecondary = 75,
        MineCncSpike = 76,
        BZGasMk2 = 77,
        FlashGrenade = 78,
        StunGrenade = 79,
        CncKineticRam = 80,
        ScriptMissileLarge = 81,
        SubmarineBig = 82,
        EMPLauncherEMP = 83,
    }

    /** Font IDs for setTextFont. */
    export enum GameFont {
        ChaletLondon = 0,
        HouseScript = 1,
        Monospace = 2,
        ChaletComprimeCologne = 4,
        Pricedown = 7,
    }

    export enum AircraftType {
        None = 0,
        Plane = 1,
        Helicopter = 2,
    }

    export enum LandingGearState {
        Deployed = 0,
        Retracting = 1,
        RetractingInstant = 2,
        Deploying = 3,
        Retracted = 4,
        Broken = 5,
    }

    export enum MouseButton {
        Left = 0,
        Middle = 1,
        Right = 2,
    }

    export enum InputModifier {
        None = 0,
        CapsLock = 1,
        Shift = 2,
        Control = 4,
        Alt = 8,
        LeftMouseButton = 16,
        MiddleMouseButton = 32,
        RightMouseButton = 64,
        NumLock = 256,
    }

    export enum ColshapeType {
        Sphere,
        Circle,
        Cylinder,
        Cuboid,
        Rectangle,
        Polygon,
    }

    export enum BlipType {
        Point,
        Radius,
        Area,
    }

    export interface IVehicleOccupancy extends shared.IVehicleOccupancy<Vehicle> {}

    export interface INetworkStats {
        /** Ping in milliseconds. -1 until the first measurement. */
        readonly ping: number;
        /** Recent incoming traffic, in bytes per second. */
        readonly incomingBytesPerSecond: number;
        /** Recent outgoing traffic, in bytes per second. */
        readonly outgoingBytesPerSecond: number;
    }

    /** An enabled server channel available to the local player. */
    export interface IVoiceChannelInfo {
        /** A frozen copy of the server's effects, applied before category effects. */
        readonly effects: readonly Readonly<shared.AudioEffect>[];
        readonly networkId: number;
        readonly transmit: boolean;
        readonly listen: boolean;
        readonly spatial: boolean;
        readonly range: number;
        /** Channel gain in dB. */
        readonly volume: number;
        /** Client AudioCategory name. An empty name skips category processing. */
        readonly category: string;
    }

    export interface IVoice {
        readonly connected: boolean;
        /** Frozen channel snapshots, updated asynchronously. Empty while disconnected. */
        readonly channels: readonly IVoiceChannelInfo[];
        /** Selected channels with transmit permission. The microphone may be inactive. */
        readonly transmitChannels: readonly number[];

        /** Selects up to 16 channels by network ID. [] disables transmission. null restores automatic selection.
         * Returns false for unknown channels. Invalid or duplicate IDs throw.
         * Transmission still requires server permission and an enabled microphone.
         * Each successful call replaces the selection. Stopping that resource restores automatic selection.
         */
        setTransmitChannels(networkIds: readonly number[] | null): boolean;

        /** Frozen list of streamed-in players transmitting to this client, including the local player while transmitting.
         * Local mute and volume settings leave this list unchanged.
         */
        readonly talkingPlayers: readonly Player[];

        /** Mutes the player locally across all channels. Returns false for unknown IDs.
         * Lasts until the player disconnects or the resource that last changed the setting stops.
         */
        setPlayerMuted(player: Player | number, muted: boolean): boolean;
        isPlayerMuted(player: Player | number): boolean;

        /** Playback gain in dB: -100..12, default 0. Independent of mute.
         * Positive gain uses peak limiting. Does not change getPlayerLevel().
         */
        setPlayerVolume(player: Player | number, volume: number): boolean;
        getPlayerVolume(player: Player | number): number;

        /** True while sending or receiving voice frames. Becomes false after a short gap.
         * For the local player, this is true only while transmitting to others.
         */
        isPlayerTalking(player: Player | number): boolean;

        /** Smoothed RMS level, 0..1. Returns 0 for inactive or unknown players.
         * Remote levels are measured before effects, distance, listener gain and mute.
         * Local levels use processed microphone frames being transmitted, before encoding.
         */
        getPlayerLevel(player: Player | number): number;
    }


    export type WebViewRequestHandler = (...args: unknown[]) => unknown | Promise<unknown>;

    export interface IClientEvent {
        /** Fires once when the first native audio stream is prepared. The source may still be buffering. */
        audioLoaded: (audio: Audio, sampleRate: number, channels: number) => void;
        /** Fires for state transitions after creation, for both LocalAudio and server audio.
         * Arguments describe the queued transition. audio.state may have advanced by delivery.
         * Audio events are skipped if the audio is destroyed before delivery.
         */
        audioStateChanged: (audio: Audio, oldState: AudioState, newState: AudioState) => void;
        /** Fires after natural playback completion, including effect tails.
         * Stopping, destruction, streaming out and loop boundaries do not fire this event.
         */
        audioEnded: (audio: Audio) => void;
        /** Fires for asynchronous loading or playback errors. error contains the failure message. */
        audioFailed: (audio: Audio, error: string) => void;

        /** Fires once when a streamed-in entity enters. Boundary points count as inside. */
        entityEnterColshape: (colshape: Colshape, entity: Entity) => void;

        /** Fires after removing the entity from the shape's member list.
         * During Colshape.destroy(), the shape is still valid. Repeated destroy() calls have no effect.
         * Skipped during resource shutdown. Check both objects' valid flags after await.
         */
        entityLeaveColshape: (colshape: Colshape, entity: Entity) => void;

        /** Fired after each server spawn of the local player. */
        playerSpawned: () => void;
        playerDespawned: () => void;
        /** Fires after Player.local.dimension changes, including spawn and reset to 0 on disconnect.
         */
        playerDimensionChanged: (oldDimension: number, newDimension: number) => void;
        /** Once per streamed-in speaker across all voice channels, including self.
         * Also fires when an already-talking player streams in.
         */
        playerTalkingStarted: (player: Player) => void;
        /** Fires when speech stops or the player streams out.
         * The player is still valid during the callback. Phone and radio playback can continue outside streaming range.
         * Use voice.isPlayerTalking(networkId) and getPlayerLevel(networkId) for distant speakers.
         */
        playerTalkingStopped: (player: Player) => void;
        /** attacker is null if it is unknown or no longer registered. */
        playerDodge: (attacker: Entity | null) => void;
        /** Fires after GTA applies damage and cannot cancel it. Unknown attackers are null.
         * Skipped if the victim is destroyed before delivery. Check valid because earlier listeners may destroy either entity.
         */
        entityHit: (victim: Entity, attacker: Entity | null, weaponHash: number, damage: number) => void;
        /** Fires when the GTA instance is ready, after its initial synchronized state is applied.
         * Local entities fire after native creation. After await, check ready again.
         */
        entityStreamIn: (entity: Entity) => void;
        /** Fires when a previously announced GTA instance is removed or replaced.
         * An entity removed before becoming ready does not fire this event.
         */
        entityStreamOut: (entity: Entity) => void;
        /** On replica removal, ready is false and entity.valid may already be false. */
        networkEntityReadyChanged: (entity: Entity, ready: boolean) => void;
        /** Fires after local metadata changes. Missing or deleted values are undefined. */
        metaChange: (object: Base, key: string, newValue: shared.TransportValue | undefined, oldValue: shared.TransportValue | undefined) => void;
        /** Fires after a networked ped, vehicle or object's ownership is applied and its GTA instance is ready. */
        netOwnerChanged: (entity: Entity, oldOwner: Player | null, newOwner: Player | null) => void;
        /** Fires for initial metadata and updates. Missing old or new values are undefined. */
        syncedMetaChange: (object: Base, key: string, newValue: shared.TransportValue | undefined, oldValue: shared.TransportValue | undefined) => void;
        disconnected: (reason: number, message: string) => void;
        keyDown: (key: KeyCodes, modifiers: InputModifier) => void;
        keyUp: (key: KeyCodes, modifiers: InputModifier) => void;
        mouseMove: (x: number, y: number, modifiers: InputModifier, leave: boolean) => void;
        mouseButton: (button: MouseButton, released: boolean, x: number, y: number, modifiers: InputModifier) => void;
        mouseWheel: (delta: number, x: number, y: number, modifiers: InputModifier) => void;
        windowFocus: (focused: boolean) => void;
        /** Game render dimensions changed, in pixels. Read the initial size with getViewportSize(). */
        viewportResize: (width: number, height: number) => void;
        /** Fires when the detected OBS running state changes. Read isObsRunning() for the initial state. */
        obsRunningChanged: (running: boolean) => void;
        weaponChange: (oldWeapon: number, newWeapon: number) => void;
        weaponFired: (weaponHash: number) => void;
        weaponReloadStarted: (weaponHash: number) => void;
        weaponAimStarted: () => void;
        weaponAimStopped: () => void;
    }

    export interface IWebViewEvent {
        loadSuccessed: (url: string, statusCode: number) => void;
        loadFailed: (url: string, errorCode: number, errorText: string) => void;
        closed: () => void;
    }

    export const voice: IVoice;
    export const world: World;

    export function log(...args: unknown[]): void;
    export function emit(eventName: string, ...args: unknown[]): void;
    export function on<K extends keyof IClientEvent>(eventName: K, handler: IClientEvent[K]): void;
    export function on(eventName: string, handler: shared.EventHandler): void;
    export function off<K extends keyof IClientEvent>(eventName: K, handler: IClientEvent[K]): void;
    export function off(eventName: string, handler: shared.EventHandler): void;

    /** Sends a reliable event to the server. Encoded arguments, including Uint8Array data, must fit in 256 KiB. */
    export function emitServer(eventName: string, ...args: shared.TransportValue[]): void;
    /** Rejects on a remote error, disconnect or a 15-second timeout. A handler may return undefined. */
    export function fetchServer<T = shared.TransportValue | undefined>(name: string, ...args: shared.TransportValue[]): Promise<T>;
    /** Receives events sent by the server. Local events use on(). */
    export function onServer<Args extends shared.TransportValue[]>(eventName: string, handler: (...args: Args) => void): void;
    export function offServer<Args extends shared.TransportValue[]>(eventName: string, handler: (...args: Args) => void): void;
    /** Registers one handler per name for fetchClient(). Duplicate registration throws. */
    export function onRequest<Args extends shared.TransportValue[]>(name: string,
        handler: (...args: Args) => shared.TransportValue | void | Promise<shared.TransportValue | void>): void;
    /** Removes the handler only if it is still registered under this name. */
    export function offRequest<Args extends shared.TransportValue[]>(name: string,
        handler: (...args: Args) => shared.TransportValue | void | Promise<shared.TransportValue | void>): void;
    export function showCursor(visible: boolean): void;
    export function isCursorVisible(): boolean;

    /** Last detected OBS Studio running state. Only means if it's open or closed. */
    export function isObsRunning(): boolean;

    /**
     * Keeps the connection loading screen open until this resource calls finishLoadingScreen().
     * Call during module evaluation, before starting asynchronous initialization.
     * Game input and audio stay blocked while scripts and WebViews run.
     * Otherwise, loading ends after all client modules finish evaluating.
     * Returns false after module evaluation, finishLoadingScreen(), failure or disconnect.
     */
    export function deferLoadingScreen(): boolean;

    /**
     * Marks this resource ready. Loading ends when all modules finish evaluating and all deferred resources are ready.
     * Repeated calls have no additional effect. Returns false after startup completes, fails or disconnects.
     */
    export function finishLoadingScreen(): boolean;

    /**
     * Displays an error of 1–512 characters and keeps the loading screen open.
     * Returns false if startup has already ended.
     * Startup times out after 120 seconds. Reconnecting resets startup state.
     */
    export function failLoadingScreen(message: string): boolean;

    /** Returns a snapshot of connection statistics, or null if unavailable. */
    export function getNetworkStats(): INetworkStats | null;
    /** Estimated server monotonic time in milliseconds, not a Unix timestamp.
     * Returns null before clock synchronization or after disconnect.
     */
    export function getNetTime(): number | null;

    export function everyTick(handler: shared.TickHandler): number;
    export function clearEveryTick(handle: number): void;
    export function setTimeout(handler: shared.TickHandler, delay?: number): number;
    export function setInterval(handler: shared.TickHandler, interval?: number): number;
    export function clearTimeout(timer: number): void;
    export function clearInterval(timer: number): void;
    /** Resolves on a later frame once the delay has elapsed.
     * Delay handling matches setTimeout. Pending waits are abandoned when the script stops.
     * @param delay Delay in milliseconds. Default: `0` (next frame).
     */
    export function wait(delay?: number): Promise<void>;
    /** Checks the callback each frame, starting on a later frame, until it returns true.
     * Rejects on timeout, a thrown exception or a non-boolean result.
     * Timeout handling matches setTimeout. Pending waits are abandoned when the script stops.
     * @param timeout Timeout in milliseconds. Default: `5000`.
     */
    export function waitFor(callback: () => boolean, timeout?: number): Promise<void>;

    /** Settings changed by this script are restored when it stops. */
    export class World {
        private constructor();

        weatherSyncEnabled: boolean;
        timeSyncEnabled: boolean;
        waveSyncEnabled: boolean;
    }

    /** IDs are unique across all live client objects.
     * After destruction, id and type remain readable and valid stays false, even if the ID is reused.
     */
    export class Base {
        protected constructor();

        static readonly all: readonly Base[];
        static readonly count: number;

        static getById(id: number): Base | null;

        readonly id: number;
        readonly type: shared.BaseType;
        readonly valid: boolean;

        /** Returns a copy of the value, or undefined if the key isn't set. */
        getMeta<K extends keyof shared.ICustomBaseMeta>(key: K): shared.ICustomBaseMeta[K] | undefined;
        getMeta<T = shared.TransportValue>(key: string): T | undefined;
        hasMeta(key: string): boolean;
        getMetaKeys(): string[];
        /** Stores a copy for client scripts. Cleared when a new server session starts. */
        setMeta<K extends string>(key: K, value: K extends keyof shared.ICustomBaseMeta ? shared.ICustomBaseMeta[K] : shared.TransportValue): void;
        /** Sets several keys at once. If any value is invalid, nothing is changed. */
        setMeta(values: Partial<shared.ICustomBaseMeta> & Record<string, shared.TransportValue>): void;
        deleteMeta(key: string): void;

        /** Returns a copy. Client-only objects have no synced metadata. */
        getSyncedMeta<K extends keyof shared.ICustomBaseSyncedMeta>(key: K): shared.ICustomBaseSyncedMeta[K] | undefined;
        getSyncedMeta<T = shared.TransportValue>(key: string): T | undefined;
        hasSyncedMeta(key: string): boolean;
        getSyncedMetaKeys(): string[];
    }

    /** Position and rotation remain readable while a valid object is streamed out.
     * Only spatial audio can be moved or rotated.
     */
    export class WorldBase extends Base {
        protected constructor();

        static readonly all: readonly WorldBase[];
        static readonly count: number;

        static getById(id: number): WorldBase | null;

        /** World ID, default 0. Writable on local objects created by this resource. The server controls other objects.
         * globalDimension makes the object visible in every numbered world.
         */
        readonly dimension: number;

        get pos(): shared.Vector3;
        set pos(value: shared.IVector3);

        /** Euler angles in radians, applied X, then Y, then Z. */
        get rot(): shared.Vector3;
        set rot(value: shared.IVector3);

        get quaternion(): shared.Quaternion;
        set quaternion(value: shared.IQuaternion);
    }

    /** Remains accessible to scripts while streamed out. */
    export class Streamable extends WorldBase {
        protected constructor();

        static readonly all: readonly Streamable[];
        static readonly count: number;

        static getById(id: number): Streamable | null;

        readonly isStreamedIn: boolean;

        /** Enables automatic streaming. Disabling it preserves the current streaming state.
         * A dimension mismatch still suspends it until its dimension is visible again.
         */
        streamingEnabled: boolean;

        /** Per-object distance in metres. null uses the streamer's default. */
        streamDistance: number | null;
    }

    /** Only this resource's local entities can be modified, except pos, heading and setPlayerControl on Player.local.
     * Transforms, streaming settings and LocalPed appearance can be set before stream-in. Other writes require isStreamedIn.
     * After destruction, networkId is null and isNetworked/ready/isStreamedIn are false.
     */
    export class Entity extends Streamable implements shared.IEntity {
        protected constructor();

        static readonly all: readonly Entity[];
        static readonly count: number;

        static getById(id: number): Entity | null;
        static getByNetworkId(networkId: number): Entity | null;
        static getByScriptId(scriptId: number): Entity | null;

        readonly isNetworked: boolean;

        /** Server-assigned network ID, or null without replication. Separate from id. */
        readonly networkId: number | null;

        /** The initial server state has been applied, or a client-only entity has streamed in. */
        readonly ready: boolean;

        /** Simulation authority does not grant permission to change server-owned state. */
        readonly isLocallySimulated: boolean;
        readonly netOwner: Player | null;

        /** GTA handle, or 0 while not streamed in. Do not retain it across frames. */
        readonly scriptId: number;
        get modelHash(): number;

        /** Heading in radians. */
        heading: number;

        /** Deletes an entity created by this resource.
         * Throws if the entity is networked, belongs to another resource, has been destroyed, or cannot be removed from GTA.
         */
        destroy(): void;
    }

    /** Getters return zero values while the entity is streamed out. */
    export class Physical extends Entity implements shared.IPhysical {
        protected constructor();

        static readonly all: readonly Physical[];
        static readonly count: number;

        static getById(id: number): Physical | null;
        static getByNetworkId(networkId: number): Physical | null;
        static getByScriptId(scriptId: number): Physical | null;

        health: number;
        maxHealth: number;

        get velocity(): shared.Vector3;
        set velocity(value: shared.IVector3);

        /** Angular velocity in radians per second. */
        get angVelocity(): shared.Vector3;
        set angVelocity(value: shared.IVector3);

        activatePhysics(): void;
    }

    /** Ped collections contain NPCs, including LocalPed instances. */
    export class Ped extends Physical {
        protected constructor();

        static readonly all: readonly Ped[];
        static readonly count: number;

        static getById(id: number): Ped | null;
        static getByNetworkId(networkId: number): Ped | null;
        static getByScriptId(scriptId: number): Ped | null;

        /** Synchronized seat state. null for a client-only ped. */
        readonly vehicleOccupancy: IVehicleOccupancy | null;
        armor: number;
        readonly dead: boolean;
        desiredHeading: number;
        readonly moveBlendRatio: number;

        /** Only available on Player.local. Throws for any other ped. */
        setPlayerControl(enabled: boolean): void;
        aimGunAtCoord(position: shared.IVector3): void;
        clearTasks(): void;
        clearTasksImmediately(): void;
        /** @param heading Heading in radians. */
        goStraightToCoord(position: shared.IVector3, moveBlendRatio: number, heading: number, targetRadius: number): void;
        jump(): void;
        reloadWeapon(): void;
        setBlockingOfNonTemporaryEvents(blocked: boolean): void;
        setRagdoll(enabled: boolean): void;
        shootAtCoord(position: shared.IVector3): void;
        standStill(durationMs: number): void;
    }

    /** Created asynchronously when streamed in. Collections and lookups include only this resource's peds. */
    export class LocalPed extends Ped {
        /** @param heading Heading in radians. */
        constructor(model: string | number, position: shared.IVector3, heading: number);

        static readonly all: readonly LocalPed[];
        static readonly count: number;

        static getById(id: number): LocalPed | null;
        static getByScriptId(scriptId: number): LocalPed | null;
        static getByNetworkId(networkId: number): null;

        /** Accepts a model name or nonzero hash of the same entity type.
         * Returns the old hash until the new model is applied.
         */
        get modelHash(): number;
        set modelHash(model: string | number);

        /**
         * Uses global drawable indices. Can be set before stream-in and persists across streaming and model changes.
         * Unset components use the model's default outfit. Unsupported combinations are skipped.
         * Returns false outside these ranges: component 0..11, drawable 0..65535, texture 0..255, palette 0..3.
         * Texture and palette default to 0. Throws if the ped is destroyed, networked or owned by another resource.
         */
        setComponentVariation(component: shared.PedComponent, drawable: number, texture?: number, palette?: number): boolean;

        /** Requested clothing, or null if unset. */
        getComponentVariation(component: shared.PedComponent): shared.IPedComponentVariation | null;

        /** Resets clothing to model defaults. Keeps prop selections. */
        setDefaultComponentVariation(): boolean;

        /**
         * Prop: 0..12, drawable: -1..65535, texture: 0..255 (default 0).
         * Drawable -1 requires texture 0 and clears the prop. Unsupported combinations leave it cleared.
         * Uses the same ownership, persistence and validation rules as setComponentVariation.
         */
        setProp(prop: shared.PedProp, drawable: number, texture?: number): boolean;

        /** Requested prop, or null if unset. A cleared prop has drawable -1. */
        getProp(prop: shared.PedProp): shared.IPedPropVariation | null;

        clearProp(prop: shared.PedProp): boolean;
        clearProps(): boolean;

        /** Applies to mp_m_freemode_01 and mp_f_freemode_01. Other models store the values without applying them.
         * Uses the same ownership and persistence rules as clothing. Keeps face features, overlays and hair colours.
         * Returns false for out-of-range values. Wrong types and non-finite numbers throw TypeError.
         */
        setHeadBlendData(data: shared.IPedHeadBlendData): boolean;
        /** Copy of the requested blend with all fields filled, or null if unset. */
        getHeadBlendData(): Required<shared.IPedHeadBlendData> | null;

        /** Scale: [-1, 1]. If no blend is set, face, overlay and hair setters use parent indices 0. */
        setFaceFeature(feature: shared.PedFaceFeature, scale: number): boolean;
        getFaceFeature(feature: shared.PedFaceFeature): number | null;

        /** Index: 0..254, or -1 to disable. Unavailable indices also disable the overlay.
         * Opacity: [0, 1], default 1. Keeps the overlay's colours.
         */
        setHeadOverlay(overlay: shared.PedHeadOverlay, index: number, opacity?: number): boolean;
        getHeadOverlay(overlay: shared.PedHeadOverlay): shared.IPedHeadOverlay | null;
        /** Colours: 0..63. Use setHeadOverlay to enable the overlay.
         * Hair palette: facial hair, eyebrows, chest hair. Makeup palette: blush and lipstick.
         */
        setHeadOverlayColor(overlay: shared.PedHeadOverlay, colorType: shared.PedOverlayColorType,
                            color: number, secondColor?: number): boolean;

        /** Colours: 0..63. Highlight defaults to 0. Set the hairstyle through PedComponent.Hair. */
        setHairColor(color: number, highlight?: number): boolean;
        getHairColor(): shared.IPedHairColor | null;


        dimension: number;
        readonly isNetworked: false;
        readonly networkId: null;
    }

    /** The same Player object survives model changes and server respawns. */
    export class Player extends Ped {
        private constructor();

        /** Available before the first server spawn. Network state clears on disconnect. */
        static readonly local: Player;
        static readonly all: readonly Player[];
        static readonly count: number;

        static getById(id: number): Player | null;
        static getByNetworkId(networkId: number): Player | null;
        static getByScriptId(scriptId: number): Player | null;

        readonly isSpawned: boolean;
    }

    /** Collections include LocalVehicle instances. */
    export class Vehicle extends Physical {
        protected constructor();

        static readonly all: readonly Vehicle[];
        static readonly count: number;

        static getById(id: number): Vehicle | null;
        static getByNetworkId(networkId: number): Vehicle | null;
        static getByScriptId(scriptId: number): Vehicle | null;

        engineRunning: boolean;

        /** Steering angle in radians. */
        steeringAngle: number;

        /** Station hash. 0 means off, null means unavailable. */
        get radioStation(): number | null;
        set radioStation(value: number);

        /** Index in [0, 255]. Variations unavailable for this model are ignored. */
        livery: number;
        readonly throttle: number;
        readonly brake: number;
        readonly handbrake: boolean;
        readonly lightsOn: boolean;
        readonly highBeamsOn: boolean;
        readonly hornActive: boolean;
        readonly physicsAsleep: boolean;
        readonly boatInWater: boolean;
        readonly aircraftType: AircraftType;
        readonly hasLandingGear: boolean;
        readonly landingGearState: LandingGearState;
        readonly mainRotorStopped: boolean;
        readonly driveable: boolean;
        readonly scorched: boolean;
        readonly bodyHealth: number;
        readonly engineHealth: number;
        readonly petrolTankHealth: number;
        readonly dirtLevel: number;

        /** Door bitmasks, using the game door indices. */
        readonly brokenDoors: number;
        readonly looselyLatchedDoors: number;

        /** Returns a copy. Editing it does not change the vehicle. */
        readonly frontBumper: shared.IVehicleBumperState;
        readonly rearBumper: shared.IVehicleBumperState;

        repair(): void;

        setLights(lights: boolean, highBeams: boolean): void;

        /** @param throttle Range [-1, 1].
         * @param brake Range [0, 1].
         */
        setDrivingControls(throttle: number, brake: number, handbrake: boolean): void;

        sleepPhysics(): void;
    }

    /** Created asynchronously when streamed in. Collections and lookups include only this resource's vehicles. */
    export class LocalVehicle extends Vehicle {
        /** @param rotation Heading or XYZ Euler angles in radians, or a non-zero quaternion (normalized on creation). */
        constructor(model: string | number, position: shared.IVector3, rotation: number | shared.IVector3 | shared.IQuaternion);

        static readonly all: readonly LocalVehicle[];
        static readonly count: number;

        static getById(id: number): LocalVehicle | null;
        static getByScriptId(scriptId: number): LocalVehicle | null;
        static getByNetworkId(networkId: number): null;

        /** Accepts a model name or nonzero hash of the same entity type.
         * Returns the old hash until the new model is applied.
         */
        get modelHash(): number;
        set modelHash(model: string | number);

        dimension: number;
        readonly isNetworked: false;
        readonly networkId: null;
    }

    /** Collections include LocalObject instances. */
    export class Object extends Physical {
        protected constructor();

        static readonly all: readonly Object[];
        static readonly count: number;

        static getById(id: number): Object | null;
        static getByNetworkId(networkId: number): Object | null;
        static getByScriptId(scriptId: number): Object | null;

        readonly dynamic: boolean;
        readonly physicsAsleep: boolean;

        /** @param alpha Integer in [0, 255].
         * @param textureVariation Integer in [0, 255].
         * @param lodDistance Integer in [-1, 65535]. -1 restores the model default.
         */
        setAppearance(alpha: number, textureVariation: number, lodDistance: number): void;
    }

    /** Created asynchronously when streamed in. Collections and lookups include only this resource's objects. */
    export class LocalObject extends Object {
        /**
         * @param rotation Heading or XYZ Euler angles in radians, or a non-zero quaternion (normalized on creation).
         * @param dynamic Whether the object uses dynamic physics. Defaults to true.
         */
        constructor(model: string | number, position: shared.IVector3, rotation: number | shared.IVector3 | shared.IQuaternion, dynamic?: boolean);

        static readonly all: readonly LocalObject[];
        static readonly count: number;

        static getById(id: number): LocalObject | null;
        static getByScriptId(scriptId: number): LocalObject | null;
        static getByNetworkId(networkId: number): null;

        /** Accepts a model name or nonzero hash of the same entity type.
         * Returns the old hash until the new model is applied.
         */
        get modelHash(): number;
        set modelHash(model: string | number);

        dimension: number;
        readonly isNetworked: false;
        readonly networkId: null;
    }

    /** Axis-aligned trigger area with fixed geometry. Supports movement but rejects nonzero rotation.
     * Checks entity positions throughout its dimension, regardless of distance.
     */
    export class Colshape extends Streamable {
        protected constructor();

        static readonly all: readonly Colshape[];
        static readonly count: number;

        static getById(id: number): Colshape | null;

        dimension: number;
        readonly colshapeType: ColshapeType;

        /** Defaults to false. Includes the local player and other streamed-in players when true. */
        playersOnly: boolean;

        /** Checks geometry even while the shape is inactive. */
        isPointIn(point: shared.IVector3): boolean;

        /** Requires both the shape and entity to be streamed in. Invalid entities throw. */
        isEntityIn(entity: Entity): boolean;

        /** Emits leave for each tracked member before invalidating the shape. */
        destroy(): void;
    }

    export class ColshapeSphere extends Colshape {
        constructor(x: number, y: number, z: number, radius: number);

        static readonly all: readonly ColshapeSphere[];

        static getById(id: number): ColshapeSphere | null;

        readonly radius: number;
    }

    /** Circle in the XY plane. Ignores Z. */
    export class ColshapeCircle extends Colshape {
        constructor(x: number, y: number, radius: number);

        static readonly all: readonly ColshapeCircle[];

        static getById(id: number): ColshapeCircle | null;

        readonly radius: number;
    }

    /** Height extends upwards from z. */
    export class ColshapeCylinder extends Colshape {
        constructor(x: number, y: number, z: number, radius: number, height: number);

        static readonly all: readonly ColshapeCylinder[];

        static getById(id: number): ColshapeCylinder | null;

        readonly radius: number;
        readonly height: number;
    }

    export class ColshapeCuboid extends Colshape {
        constructor(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number);

        static readonly all: readonly ColshapeCuboid[];

        static getById(id: number): ColshapeCuboid | null;

        readonly min: shared.Vector3;
        readonly max: shared.Vector3;
    }

    /** Rectangle in the XY plane. Ignores Z. */
    export class ColshapeRectangle extends Colshape {
        constructor(minX: number, minY: number, maxX: number, maxY: number);

        static readonly all: readonly ColshapeRectangle[];

        static getById(id: number): ColshapeRectangle | null;

        readonly min: shared.Vector3;
        readonly max: shared.Vector3;
    }

    /** 3..1024 vertices, concave polygons allowed. Self-intersections and zero area are rejected. */
    export class ColshapePolygon extends Colshape {
        constructor(minZ: number, maxZ: number, points: readonly shared.IVector2[]);

        static readonly all: readonly ColshapePolygon[];

        static getById(id: number): ColshapePolygon | null;

        readonly minZ: number;
        readonly maxZ: number;

        /** A copy of the current world-space XY vertices. */
        readonly points: readonly shared.Vector2[];
    }

    export class Marker extends Streamable {
        /** Streaming defaults to true. Distance defaults to the world's stream distance.
         * useStreaming false leaves the marker inactive until enabled. At most 2000 markers can be active.
         */
        constructor(type: MarkerType, position: shared.IVector3, color: shared.IRGBA, useStreaming?: boolean, streamDistance?: number);

        static readonly all: readonly Marker[];
        static readonly count: number;

        static getById(id: number): Marker | null;

        dimension: number;
        markerType: MarkerType;

        get color(): shared.IRGBA;
        set color(value: shared.IRGBA);

        get scale(): shared.Vector3;
        set scale(value: shared.IVector3);

        get dir(): shared.Vector3;
        set dir(value: shared.IVector3);

        visible: boolean;
        faceCamera: boolean;
        rotate: boolean;
        bobUpAndDown: boolean;

        destroy(): void;
    }

    /** Map blip with no distance culling. */
    export class Blip extends Streamable {
        protected constructor();

        static readonly all: readonly Blip[];
        static readonly count: number;

        static getById(id: number): Blip | null;
        static getByScriptId(scriptId: number): Blip | null;

        dimension: number;
        readonly blipType: BlipType;

        /** 0 until created on an active game frame, and after destruction. */
        readonly scriptId: number;

        /** GTA palette index, 0..255. */
        color: BlipColor | number;
        alpha: number;
        scale: number;
        name: string;
        visible: boolean;
        shortRange: boolean;

        /** GTA display mode, 0..10. */
        display: number;
        priority: number;

        /** Heading in radians.
         * Point sprites stay upright until a rotation is explicitly assigned.
         */
        heading: number;

        route: boolean;

        /** GTA route palette index, 0..255. */
        routeColor: BlipColor | number;

        flashes: boolean;
        flashesAlternate: boolean;

        /** Duration in milliseconds. -1 means indefinite. */
        flashTimer: number;
        flashInterval: number;

        fade(alpha: number, durationMs: number): void;
        destroy(): void;
    }

    export class PointBlip extends Blip {
        constructor(x: number, y: number, z: number);

        static readonly all: readonly PointBlip[];

        static getById(id: number): PointBlip | null;
        static getByScriptId(scriptId: number): PointBlip | null;

        sprite: BlipSprite | number;
        readonly attachedTo: Entity | null;
        readonly isAttached: boolean;

        /** Inherits the target's dimension. Keeps the last position while the target is streamed out and detaches if destroyed. */
        attachTo(entity: Entity): void;
        detach(): void;
    }

    export class RadiusBlip extends Blip {
        constructor(x: number, y: number, z: number, radius: number);

        static readonly all: readonly RadiusBlip[];

        static getById(id: number): RadiusBlip | null;
        static getByScriptId(scriptId: number): RadiusBlip | null;

        readonly radius: number;
    }

    export class AreaBlip extends Blip {
        constructor(x: number, y: number, z: number, width: number, height: number);

        static readonly all: readonly AreaBlip[];

        static getById(id: number): AreaBlip | null;
        static getByScriptId(scriptId: number): AreaBlip | null;

        readonly size: shared.Vector2;
    }

    /** Playback settings for Audio and voice. Only the creating resource can change or destroy a category.
     * Create named categories on each client before selecting them for server-created playback.
     */
    export class AudioCategory {
        constructor(name: string, parentName?: string);

        /** Whether GTA audio is ready. LocalAudio waits for readiness automatically.
         * Custom categories can be created before this is true.
         */
        static readonly available: boolean;
        static getByName(name: string): AudioCategory | null;

        readonly name: string;
        readonly valid: boolean;
        readonly parent: string | null;

        /** Shared gain in dB, -100..100. -100 mutes. Parent shared settings also apply. */
        volume: number;
        muted: boolean;
        /** Effects run in order for each playback. Assign a new array to update them, or [] to clear.
         * Changes apply to newly processed audio.
         */
        effects: readonly shared.AudioEffect[];

        /** GTA mixer controls for Audio and voice, including native parents such as MUSIC_SLIDER.
         * A category slot is allocated on first playback or when a setting changes.
         */
        readonly native: INativeAudioCategory;

        /** Returns false while children or any Audio/voice playback retains this category. */
        destroy(): boolean;
    }

    export interface INativeAudioCategory {
        readonly valid: boolean;
        /** Native mixer volume for Audio and voice, from -100 to 0 dB, in addition to shared volume. */
        volume: number;
        /** -32768..32767 cents. Also changes playback speed. */
        pitch: number;
        /** 100..20000 Hz. */
        lowPassCutoff: number;
        /** 0..23900 Hz. Values up to 1 disable filtering. */
        highPassCutoff: number;

        /** Non-negative multiplier. 1 preserves the original value. */
        distanceRollOffScale: number;
        plateauRollOffScale: number;
        occlusionDamping: number;
        environmentalFilterDamping: number;
        sourceReverbDamping: number;
        distanceReverbDamping: number;
        interiorReverbDamping: number;
        environmentalLoudness: number;
        underwaterWetLevel: number;
        stonedWetLevel: number;

    }

    export interface IAudioMixSettings {
        /** 0 preserves stereo frontend playback. 1 uses positional mono. Values in between blend both. */
        spatialBlend: number;
        /** Additional gain on this client, -100..100 dB. -100 mutes. */
        volumeDb: number;
        /** 100..20000 Hz. 20000 bypasses filtering. */
        lowPassCutoffHz: number;
    }

    export enum AudioState {
        Loading = 0,
        Buffering = 1,
        Playing = 2,
        Paused = 3,
        StreamedOut = 4,
        Finished = 5,
        Stopped = 6,
        Failed = 7,
    }

    export interface ILocalAudioOptions {
        /** Treat an HTTP(S) source as a live broadcast. Defaults to false. Resource audio cannot be live. */
        readonly live?: boolean;

        /** A position creates spatial audio. Omit it for frontend playback. */
        readonly pos?: shared.IVector3;

        /** Gain in dB, -100..100. -100 mutes. Defaults to 0. */
        readonly volume?: number;
        readonly loop?: boolean;

        /** GTA or custom category name. GTA category lookup waits for the audio engine when needed. */
        readonly category?: string;
        readonly effects?: readonly shared.AudioEffect[];

        /** Time for effects to fade after the source ends, 0..10 seconds. Defaults to 2. */
        readonly effectTailSeconds?: number;

        /** Defaults to 0. Frontend audio plays across dimensions. */
        readonly dimension?: number;
        readonly streamDistance?: number;
    }

    /** Use LocalAudio to create playback. Objects remain valid after playback finishes or stops.
     * Spatial audio follows its dimension. Attached audio inherits the entity dimension.
     * Frontend audio plays across dimensions.
     */
    export class Audio extends Streamable {
        protected constructor();

        static readonly all: readonly Audio[];
        static readonly count: number;

        static getById(id: number): Audio | null;

        readonly isSpatial: boolean;
        readonly attachedEntity: Entity | null;
        readonly live: boolean;
        readonly category: string | null;
        readonly mix: Readonly<IAudioMixSettings>;
        readonly state: AudioState;
        /** Empty when no playback error has occurred. */
        readonly error: string;
        readonly volume: number;
        readonly loop: boolean;
        readonly effects: readonly shared.AudioEffect[];

        /** Changes the local mix without seeking. Fade: 0..60 seconds. Non-spatial audio requires blend 0.
         * Applies to newly decoded audio. Queued audio keeps its mix.
         * Persists across streaming. Stopping this resource restores prior settings unless another resource changed them.
         */
        setMix(settings: Partial<IAudioMixSettings>, fadeSeconds?: number): void;

        /** Attaches spatial playback without restarting it. Returns false if it cannot attach. */
        attachTo(entity: Entity): boolean;

        /** Continues at the last attachment position. */
        detach(): boolean;

        /** Stops playback without destroying the object. */
        stop(): void;
    }

    /** Loads and plays a resource file or HTTP(S) URL asynchronously. Waits in Loading while GTA audio initializes.
     * Destroyed when this resource stops. Live URLs cannot loop.
     * Spatial files pause outside streaming range. URLs reconnect on return.
     */
    export class LocalAudio extends Audio {
        /** resources://audio/file.mp3 addresses the client content root. HTTP(S) URLs load remotely.
         * Resource paths support percent encoding. Absolute paths and parent-directory traversal are rejected.
         */
        constructor(source: string, options?: ILocalAudioOptions);

        /** Audio created by this resource. */
        static readonly all: readonly LocalAudio[];
        static readonly count: number;

        static getById(id: number): LocalAudio | null;

        dimension: number;

        /** Gain in dB, -100..100. -100 mutes. Changes apply while playback is active. */
        volume: number;
        loop: boolean;
        effects: readonly shared.AudioEffect[];

        /** Stops playback and releases the object. */
        destroy(): void;
    }

    /** Current game render dimensions in pixels. Returns (0, 0) before the first valid viewport is available. */
    export function getViewportSize(): shared.Vector2;

    export interface IWebViewSize {
        width: number;
        height: number;
        /** Defaults to pixels. Viewport dimensions are fractions from 0 to 1 and follow resolution changes. */
        units?: 'pixels' | 'viewport';
    }

    export class WebView {
        /** Fills the game viewport and follows resolution changes. */
        constructor(url: string);
        /** Use resources://ui/index.html for ui/index.html in the client resource bundle. */
        constructor(url: string, width: number, height: number);
        /** Pixel dimensions must be positive integers. A zero viewport dimension hides the surface and disables its input. */
        constructor(url: string, size: IWebViewSize);

        static readonly all: readonly WebView[];
        static readonly count: number;

        static getByID(id: number): WebView | null;

        readonly id: number;
        readonly valid: boolean;

        /** Whether the main document's JS bridge is connected. */
        readonly ready: boolean;
        url: string;
        visible: boolean;

        /** Follows the game viewport at (0, 0). Disabling keeps the current position and size. */
        fullscreen: boolean;

        /** Position in pixels. Changing it preserves the sizing rule. */
        get pos(): shared.Vector2;
        set pos(value: shared.IVector2);

        /** Resolved dimensions in pixels. */
        get size(): shared.Vector2;
        /** Switches to a fixed pixel size. */
        set size(value: shared.IVector2);

        /** Changes the sizing rule. Positive viewport fractions round to the nearest pixel, with a minimum of one pixel. */
        setSize(size: IWebViewSize): void;

        zIndex: number;

        on<K extends keyof IWebViewEvent>(eventName: K, handler: IWebViewEvent[K]): void;

        on(eventName: string, handler: shared.EventHandler): void;

        off<K extends keyof IWebViewEvent>(eventName: K, handler: IWebViewEvent[K]): void;

        off(eventName: string, handler: shared.EventHandler): void;

        emit(eventName: string, ...args: unknown[]): void;

        /** Calls the main page's request handler. Rejects on error, navigation, closure or a 15-second timeout. */
        fetch<T = unknown>(name: string, ...args: unknown[]): Promise<T>;

        /**
         * Waits for the current page's JS bridge, without waiting for images or application startup.
         * Rejects on load failure, closure, navigation or timeout. A timeout does not destroy the view.
         * @param timeout Milliseconds to wait, from 0 to 2147483647. Defaults to 15000.
         * Fractional values are rounded down. 0 only checks the current state.
         */
        waitForReady(timeout?: number): Promise<void>;
        onRequest(name: string, handler: WebViewRequestHandler): void;
        offRequest(name: string): void;
        focus(): void;
        unfocus(): void;
        destroy(): void;
    }

    export * from "revo-shared";
}
