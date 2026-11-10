declare module "revo-shared" {

    /** Shows entities and spatial audio in all numbered dimensions. Players cannot use this dimension. */
    export const globalDimension: 4294967295;

    /** Omitted parameters use the effect's defaults. A chain can contain up to 16 effects. */
    export type AudioEffect =
        | { type: "distortion"; gainDb?: number; edge?: number; centerHz?: number; bandwidthHz?: number; lowPassCutoffHz?: number }
        | { type: "compressor"; gainDb?: number; attackMs?: number; releaseMs?: number; thresholdDb?: number; ratio?: number; predelayMs?: number }
        | { type: "equalizer"; centerHz?: number; bandwidthSemitones?: number; gainDb?: number }
        | { type: "echo"; wetPercent?: number; feedbackPercent?: number; leftDelayMs?: number; rightDelayMs?: number; panDelay?: boolean }
        | { type: "reverb"; inputGainDb?: number; mixDb?: number; timeMs?: number; highFrequencyRatio?: number }
        | { type: "chorus" | "flanger"; wetPercent?: number; depthPercent?: number; feedbackPercent?: number; frequencyHz?: number;
            /** 0 = triangle, 1 = sine. */ waveform?: 0 | 1; delayMs?: number;
            /** 0..4 = -180, -90, 0, 90, 180 degrees. */ phase?: 0 | 1 | 2 | 3 | 4 }
        | { type: "gargle"; rateHz?: number; /** 0 = triangle, 1 = square. */ shape?: 0 | 1 };

    export enum BaseType {
        Player = 0,
        Ped = 1,
        Vehicle = 2,
        Object = 3,
        Audio = 4,
        VoiceChannel = 5,
        Colshape = 6,
        Marker = 7,
        Blip = 8,
    }

    /** Clothing slots. Torso controls the arms and upper body on freemode peds. */
    export enum PedComponent {
        Head = 0,
        Mask = 1,
        Hair = 2,
        Torso = 3,
        Legs = 4,
        Bags = 5,
        Shoes = 6,
        Accessories = 7,
        Undershirt = 8,
        BodyArmour = 9,
        Decals = 10,
        Tops = 11,
    }

    /** Prop slots: Head for hats and helmets, Eyes for glasses, wrists for watches and bracelets. */
    export enum PedProp {
        Head = 0,
        Eyes = 1,
        Ears = 2,
        Mouth = 3,
        LeftHand = 4,
        RightHand = 5,
        LeftWrist = 6,
        RightWrist = 7,
        Hip = 8,
        LeftFoot = 9,
        RightFoot = 10,
        HandPropLeft = 11,
        HandPropRight = 12,
    }

    export enum PedFaceFeature {
        NoseWidth = 0,
        NoseHeight = 1,
        NoseLength = 2,
        NoseBridge = 3,
        NoseTip = 4,
        NoseShift = 5,
        BrowHeight = 6,
        BrowDepth = 7,
        CheekboneHeight = 8,
        CheekboneWidth = 9,
        CheekWidth = 10,
        EyeOpening = 11,
        LipThickness = 12,
        JawWidth = 13,
        JawShape = 14,
        ChinHeight = 15,
        ChinLength = 16,
        ChinWidth = 17,
        ChinCleft = 18,
        NeckThickness = 19,
    }

    export enum PedHeadOverlay {
        Blemishes = 0,
        FacialHair = 1,
        Eyebrows = 2,
        Ageing = 3,
        Makeup = 4,
        Blush = 5,
        Complexion = 6,
        SunDamage = 7,
        Lipstick = 8,
        MolesFreckles = 9,
        ChestHair = 10,
        BodyBlemishes = 11,
        AdditionalBodyBlemishes = 12,
    }

    export enum PedOverlayColorType {
        Default = 0,
        Hair = 1,
        Makeup = 2,
    }

    /** Parent indices: 0..255. Clients skip unavailable parents.
     * Mixes: finite numbers in [0, 1]. Third parent indices and thirdMix default to 0.
     */
    export interface IPedHeadBlendData {
        readonly shapeFirst: number;
        readonly shapeSecond: number;
        readonly shapeThird?: number;
        readonly skinFirst: number;
        readonly skinSecond: number;
        readonly skinThird?: number;
        readonly shapeMix: number;
        readonly skinMix: number;
        readonly thirdMix?: number;
    }

    export interface IPedHeadOverlay {
        /** -1 disables the overlay. */
        readonly index: number;
        readonly opacity: number;
        readonly colorType: PedOverlayColorType;
        readonly color: number;
        readonly secondColor: number;
    }

    export interface IPedHairColor {
        readonly color: number;
        readonly highlight: number;
    }

    export interface IPedComponentVariation {
        readonly drawable: number;
        readonly texture: number;
        readonly palette: number;
    }

    export interface IPedPropVariation {
        /** -1 means the prop is cleared. */
        readonly drawable: number;
        readonly texture: number;
    }

    export enum VehicleModType {
        Spoiler = 0,
        FrontBumper = 1,
        RearBumper = 2,
        SideSkirt = 3,
        Exhaust = 4,
        Frame = 5,
        Grille = 6,
        Hood = 7,
        LeftFender = 8,
        RightFender = 9,
        Roof = 10,
        Engine = 11,
        Brakes = 12,
        Transmission = 13,
        Horn = 14,
        Suspension = 15,
        Armour = 16,
        FrontWheels = 23,
        RearWheels = 24,
        PlateHolder = 25,
        VanityPlate = 26,
        TrimDesign = 27,
        Ornaments = 28,
        Dashboard = 29,
        Dials = 30,
        DoorSpeakers = 31,
        Seats = 32,
        SteeringWheel = 33,
        Shifter = 34,
        Plaques = 35,
        Speakers = 36,
        Trunk = 37,
        Hydraulics = 38,
        EngineBlock = 39,
        AirFilter = 40,
        Struts = 41,
        ArchCover = 42,
        Aerials = 43,
        Trim = 44,
        Tank = 45,
        LeftDoor = 46,
        RightDoor = 47,
        Livery = 48,
        Lightbar = 49,
    }

    export enum VehicleToggleModType {
        Nitrous = 17,
        Turbo = 18,
        Subwoofer = 19,
        TyreSmoke = 20,
        Hydraulics = 21,
        Xenon = 22,
    }

    export enum VehicleWheelType {
        Default = -1,
        Sport = 0,
        Muscle = 1,
        Lowrider = 2,
        SUV = 3,
        Offroad = 4,
        Tuner = 5,
        Bike = 6,
        HighEnd = 7,
        BennysOriginals = 8,
        BennysBespoke = 9,
        Racing = 10,
        Street = 11,
        Track = 12,
    }

    export enum VehicleWindowTint {
        Default = -1,
        None = 0,
        PureBlack = 1,
        DarkSmoke = 2,
        LightSmoke = 3,
        Stock = 4,
        Limo = 5,
        Green = 6,
    }

    export enum VehicleNeonSide {
        Left = 0,
        Right = 1,
        Front = 2,
        Rear = 3,
    }

    export enum VehicleBumperAxis {
        X = 0,
        NegativeX = 1,
        Y = 2,
        NegativeY = 3,
        Z = 4,
        NegativeZ = 5,
    }

    export enum VehicleBumperState {
        Intact = 0,
        Loose = 1,
        Detached = 2,
    }

    export enum VehicleOccupancyPhase {
        OnFoot = 0,
        Entering = 1,
        Seated = 2,
        Exiting = 3,
    }

    export enum WeatherType {
        ExtraSunny = 0,
        Clear,
        Clouds,
        Smog,
        Foggy,
        Overcast,
        Rain,
        Thunder,
        Clearing,
        Neutral,
        Snow,
        Blizzard,
        SnowLight,
        Xmas,
        Halloween,
    }

    export enum WeaponHash {
        Unarmed = 0xA2719263,
        Animal = 0xF9FBAEBE,
        Cougar = 0x08D4BE52,
        Knife = 0x99B507EA,
        Nightstick = 0x678B81B1,
        Hammer = 0x4E875F73,
        Bat = 0x958A4A8F,
        GolfClub = 0x440E4788,
        Crowbar = 0x84BD7BFD,
        Pistol = 0x1B06D571,
        CombatPistol = 0x5EF9FEC4,
        APPistol = 0x22D8FE39,
        Pistol50 = 0x99AEEB3B,
        MicroSMG = 0x13532244,
        SMG = 0x2BE6766B,
        AssaultSMG = 0xEFE7E2DF,
        AssaultRifle = 0xBFEFFF6D,
        CarbineRifle = 0x83BF0278,
        AdvancedRifle = 0xAF113F99,
        MG = 0x9D07F764,
        CombatMG = 0x7FD62962,
        PumpShotgun = 0x1D073A89,
        SawnOffShotgun = 0x7846A318,
        AssaultShotgun = 0xE284C527,
        BullpupShotgun = 0x9D61E50F,
        StunGun = 0x3656C8C1,
        SniperRifle = 0x05FC3C11,
        HeavySniper = 0x0C472FE2,
        RemoteSniper = 0x33058E22,
        GrenadeLauncher = 0xA284510B,
        GrenadeLauncherSmoke = 0x4DD2DC56,
        RPG = 0xB1CA77B1,
        PassengerRocket = 0x166218FF,
        AirstrikeRocket = 0x13579279,
        Stinger = 0x687652CE,
        Minigun = 0x42BF8A85,
        Grenade = 0x93E220BD,
        StickyBomb = 0x2C3731D9,
        SmokeGrenade = 0xFDBC8A50,
        BZGas = 0xA0973D5E,
        Molotov = 0x24B17070,
        FireExtinguisher = 0x060EC506,
        PetrolCan = 0x34A67B97,
        DigiScanner = 0xFDBADCED,
        NightVision = 0xA720365C,
        Parachute = 0xFBAB5776,
        Object = 0x39958261,
        Briefcase = 0x88C78EB7,
        Briefcase02 = 0x01B79F17,
        Ball = 0x23C9F95C,
        Flare = 0x497FACC3,
        VehicleTank = 0x73F7C04B,
        VehicleSpaceRocket = 0xF8A3939F,
        VehiclePlaneRocket = 0xCF0896E0,
        VehiclePlayerLaser = 0xEFFD014B,
        VehiclePlayerBullet = 0x4B139B2D,
        VehiclePlayerBuzzard = 0x46B89C8E,
        VehiclePlayerHunter = 0x9F1A91DE,
        VehiclePlayerLazer = 0xE2822A29,
        VehicleEnemyLaser = 0x5D6660AB,
        VehicleSearchlight = 0xCDAC517D,
        VehicleRadar = 0xD276317E,
        VehicleRocket = 0xBEFDC581,
        BarbedWire = 0x48E7B178,
        Drowning = 0xFF58C4FB,
        DrowningInVehicle = 0x736F5990,
        Bleeding = 0x8B7333FB,
        ElectricFence = 0x92BD4EBB,
        Explosion = 0x2024F4E8,
        Fall = 0xCDC174B0,
        Exhaustion = 0x364A29EC,
        HitByWaterCannon = 0xCC34325E,
        RammedByCar = 0x07FC7D7A,
        RunOverByCar = 0xA36D413E,
        HeliCrash = 0x145F1012,
        VehicleRotors = 0xB1205A4E,
        Fire = 0xDF8E89EB,
        AnimalRetriever = 0xE5B7DE7A,
        SmallDog = 0xBB8FE23D,
        TigerShark = 0x2C51AD11,
        HammerheadShark = 0xB4A915CB,
        KillerWhale = 0xFA3DDCE5,
        Boar = 0x335CDADD,
        Pig = 0x47D75EF1,
        Coyote = 0x453467D1,
        Deer = 0xF4C67A9E,
        Hen = 0x38F8ECBE,
        Rabbit = 0xA687EC07,
        Cat = 0xE274FF96,
        Cow = 0x05A2B311,
        BirdCrap = 0x6D5E2801,
        Bottle = 0xF9E6AA4B,
        SNSPistol = 0xBFD21232,
        HeavyPistol = 0xD205520E,
        BullpupRifle = 0x7F229F94,
        SpecialCarbine = 0xC0A3098D,
        SNSPistolMk2 = 0x88374054,
        MarksmanRifleMk2 = 0x6A6C02E0,
        PumpShotgunMk2 = 0x555AF99A,
        BullpupRifleMk2 = 0x84D6FAFD,
        SpecialCarbineMk2 = 0x969C3D67,
        AcidPackage = 0xF7F1E25E,
        ArenaMachineGun = 0x34FDFF66,
        ArenaHomingMissile = 0x648A81D0,
        CandyCane = 0x6589186A,
        RailgunXM3 = 0xFEA23564,
        PistolXM3 = 0x1BC4FDB9,
        RayPistol = 0xAF3696A1,
        RayCarbine = 0x476BF155,
        RayMinigun = 0xB62D1F67,
        DoubleAction = 0x97EA20B8,
        Snowball = 0x0787F0BB,
        ProxMine = 0xAB564B93,
        HomingLauncher = 0x63AB0442,
        RevolverMk2 = 0xCB96392F,
        Gusenberg = 0x61012683,
        Dagger = 0x92A27487,
        VintagePistol = 0x083839C4,
        Musket = 0xA89CB99E,
        Firework = 0x7F7497E5,
        Hatchet = 0xF9DCBF2D,
        Railgun = 0x6D544C99,
        HeavyShotgun = 0x3AABBBAA,
        MarksmanRifle = 0xC734385A,
        GarbageBag = 0xE232C28C,
        Handcuffs = 0xD04C944D,
        CeramicPistol = 0x2B5EF5EC,
        MilitaryRifle = 0x9D1F17E6,
        CombatShotgun = 0x05A96BA4,
        Tranquilizer = 0x32A888BD,
        HazardCan = 0xBA536372,
        VehicleNoseTurretValkyrie = 0x4170E491,
        VehicleTurretValkyrie = 0xA4513E35,
        FlareGun = 0x47757124,
        VehicleTurretTechnical = 0x7FD2EA0B,
        VehicleTurretInsurgent = 0x44DB5498,
        GadgetPistol = 0x57A4368C,
        NavyRevolver = 0x917F6C8C,
        VehiclePlayerSavage = 0x61A31349,
        Knuckle = 0xD8DF3C3C,
        CombatPDW = 0x0A3D4D34,
        MarksmanPistol = 0xDC4DB296,
        DBShotgun = 0xEF951FBB,
        Machete = 0xDD5DF8D9,
        MachinePistol = 0xDB1AA450,
        CompactRifle = 0x624FE830,
        Flashlight = 0x8BB05FD7,
        VehicleTurretLimo = 0x2B796481,
        AirDefenceGun = 0x2C082D7D,
        Switchblade = 0xDFE37640,
        Revolver = 0xC1B3C3D1,
        VehicleTurretBoxville = 0xB54F4918,
        VehicleCannonBlazer = 0xEBF9FF3E,
        VehicleRuinerBullet = 0x02FCC0F9,
        VehicleRuinerRocket = 0x050DC6AB,
        CompactLauncher = 0x0781FE4A,
        MiniSMG = 0xBD248B55,
        Wrench = 0x19044EE0,
        AutoShotgun = 0x12E82D3D,
        PoolCue = 0x94117305,
        BattleAxe = 0xCD274149,
        PipeBomb = 0xBA45E8B8,
        CarbineRifleMk2 = 0xFAD1F1C9,
        CombatMGMk2 = 0xDBBD7280,
        SMGMk2 = 0x78A97CD0,
        AssaultRifleMk2 = 0x394F415C,
        HeavySniperMk2 = 0x0A914799,
        PistolMk2 = 0xBFE256D4,
        StoneHatchet = 0x3813FC08,
        TacticalRifle = 0xD1D5F52B,
        MetalDetector = 0xDBA2E809,
        PrecisionRifle = 0x6E7DDDEC,
        HeavyRifle = 0xC78D71B4,
        FertilizerCan = 0x184140A1,
        EMPLauncher = 0xDB26713A,
        StunGunMP = 0x45CD9CF3,
        TecPistol = 0x14E5AFD5,
        SnowLauncher = 0x03BF5575,
        BattleRifle = 0x72B66B11,
        HackingDevice = 0x1CF5FA48,
        StunRod = 0xDAC00025,
        Strickler = 0x8DBEA147,
        Briefcase03 = 0xB8738C8C,
        Newspaper = 0x9EBB7C93,
    }

    export enum WeaponComponentHash {
        AdvancedRifleClip01 = 0xFA8FA10F,
        AdvancedRifleClip02 = 0x8EC1C979,
        AdvancedRifleVarmodLuxe = 0x377CD377,
        APPistolClip01 = 0x31C4B22A,
        APPistolClip02 = 0x249A17D5,
        APPistolVarmodLuxe = 0x9B76C72C,
        APPistolVarmodSecurity = 0x62CF4F46,
        AssaultRifleClip01 = 0xBE5EEA16,
        AssaultRifleClip02 = 0xB1214F9B,
        AssaultRifleClip03 = 0xDBF0A53D,
        AssaultRifleMk2Camo = 0x911B24AF,
        AssaultRifleMk2Camo02 = 0x37E5444B,
        AssaultRifleMk2Camo03 = 0x538B7B97,
        AssaultRifleMk2Camo04 = 0x25789F72,
        AssaultRifleMk2Camo05 = 0xC5495F2D,
        AssaultRifleMk2Camo06 = 0xCF8B73B1,
        AssaultRifleMk2Camo07 = 0xA9BB2811,
        AssaultRifleMk2Camo08 = 0xFC674D54,
        AssaultRifleMk2Camo09 = 0x7C7FCD9B,
        AssaultRifleMk2Camo10 = 0xA5C38392,
        AssaultRifleMk2CamoInd01 = 0xB9B15DB0,
        AssaultRifleMk2Clip01 = 0x8610343F,
        AssaultRifleMk2Clip02 = 0xD12ACA6F,
        AssaultRifleMk2ClipArmorpiercing = 0xA7DD1E58,
        AssaultRifleMk2ClipFmj = 0x63E0A098,
        AssaultRifleMk2ClipIncendiary = 0xFB70D853,
        AssaultRifleMk2ClipTracer = 0xEF2C78C1,
        AssaultRifleVarmodLuxe = 0x4EAD7533,
        AssaultShotgunClip01 = 0x94E81BC7,
        AssaultShotgunClip02 = 0x86BD7F72,
        AssaultSMGClip01 = 0x8D1307B0,
        AssaultSMGClip02 = 0xBB46E417,
        AssaultSMGVarmodLowrider = 0x278C78AF,
        AtArAfgrip = 0x0C164F53,
        AtArAfgrip02 = 0x9D65907A,
        AtArBarrel01 = 0x43A49D26,
        AtArBarrel02 = 0x5646C26A,
        AtArFlsh = 0x7BC4CDDC,
        AtArFlshReh = 0x9DB1E023,
        AtArSupp = 0x837445AA,
        AtArSupp02 = 0xA73D4664,
        AtBpBarrel01 = 0x659AC11B,
        AtBpBarrel02 = 0x3BF26DC7,
        AtCrBarrel01 = 0x833637FF,
        AtCrBarrel02 = 0x8B3C480B,
        AtMGBarrel01 = 0xC34EF234,
        AtMGBarrel02 = 0xB5E2575B,
        AtMrflBarrel01 = 0x381B5D89,
        AtMrflBarrel02 = 0x68373DDC,
        AtMuzzle01 = 0xB99402D4,
        AtMuzzle02 = 0xC867A07B,
        AtMuzzle03 = 0xDE11CBCF,
        AtMuzzle04 = 0xEC9068CC,
        AtMuzzle05 = 0x02E7957A,
        AtMuzzle06 = 0x347EF8AC,
        AtMuzzle07 = 0x4DB62ABE,
        AtMuzzle08 = 0x5F7DCE4D,
        AtMuzzle09 = 0x6927E1A1,
        AtPiComp = 0x21E34793,
        AtPiComp02 = 0xAA8283BF,
        AtPiComp03 = 0x27077CCB,
        AtPiFlsh = 0x359B7AAE,
        AtPiFlsh02 = 0x43FD595B,
        AtPiFlsh03 = 0x4A4965F3,
        AtPiRail = 0x8ED4BB70,
        AtPiRail02 = 0x47DE9258,
        AtPiSupp = 0xC304849A,
        AtPiSupp02 = 0x65EA7EBB,
        AtRailcover01 = 0x75414F30,
        AtSbBarrel01 = 0xD9103EE1,
        AtSbBarrel02 = 0xA564D78B,
        AtScopeLarge = 0xD2443DDC,
        AtScopeLargeFixedZoom = 0x1C221B1A,
        AtScopeLargeFixedZoomMk2 = 0x5B1C713C,
        AtScopeLargeMk2 = 0x82C10383,
        AtScopeMacro = 0x9D2FBF29,
        AtScopeMacro02 = 0x3CC6BA57,
        AtScopeMacro02Mk2 = 0xC7ADD105,
        AtScopeMacro02SMGMk2 = 0xE502AB6B,
        AtScopeMacroMk2 = 0x049B2945,
        AtScopeMax = 0xBC54DA77,
        AtScopeMedium = 0xA0D89C42,
        AtScopeMediumMk2 = 0xC66B6542,
        AtScopeNv = 0xB68010B0,
        AtScopeSmall = 0xAA2C45B4,
        AtScopeSmall02 = 0x3C00AFED,
        AtScopeSmallMk2 = 0x3F3C8181,
        AtScopeSmallSMGMk2 = 0x3DECC7DA,
        AtScopeThermal = 0x2E43DA41,
        AtScBarrel01 = 0xE73653A9,
        AtScBarrel02 = 0xF97F783B,
        AtSights = 0x420FD713,
        AtSightsSMG = 0x9FDB5652,
        AtSrBarrel01 = 0x909630B7,
        AtSrBarrel02 = 0x108AB09E,
        AtSrSupp = 0xE608B35E,
        AtSrSupp03 = 0xAC42DF71,
        AutoShotgunClip01 = 0x0A19D08E,
        BattleRifleClip01 = 0xEE91D10E,
        BattleRifleClip02 = 0x1D7E2EEA,
        BatVarmodXm3 = 0x2AB07663,
        BatVarmodXm301 = 0x1A998E71,
        BatVarmodXm302 = 0x3E52D5E3,
        BatVarmodXm303 = 0x4FA5F889,
        BatVarmodXm304 = 0xE1669C0C,
        BatVarmodXm305 = 0xE550A3E0,
        BatVarmodXm306 = 0xF71B4775,
        BatVarmodXm307 = 0x09F0ED20,
        BatVarmodXm308 = 0x7B4E4FBD,
        BatVarmodXm309 = 0x68FCAB1A,
        BullpupRifleClip01 = 0xC5A12F80,
        BullpupRifleClip02 = 0xB3688B0F,
        BullpupRifleMk2Camo = 0xAE4055B7,
        BullpupRifleMk2Camo02 = 0xB905ED6B,
        BullpupRifleMk2Camo03 = 0xA6C448E8,
        BullpupRifleMk2Camo04 = 0x9486246C,
        BullpupRifleMk2Camo05 = 0x8A390FD2,
        BullpupRifleMk2Camo06 = 0x02337FC5,
        BullpupRifleMk2Camo07 = 0xEFFFDB5E,
        BullpupRifleMk2Camo08 = 0xDDBDB6DA,
        BullpupRifleMk2Camo09 = 0xCB631225,
        BullpupRifleMk2Camo10 = 0xA87D541E,
        BullpupRifleMk2CamoInd01 = 0xC5E9AE52,
        BullpupRifleMk2Clip01 = 0x018929DA,
        BullpupRifleMk2Clip02 = 0xEFB00628,
        BullpupRifleMk2ClipArmorpiercing = 0xFAA7F5ED,
        BullpupRifleMk2ClipFmj = 0x43621710,
        BullpupRifleMk2ClipIncendiary = 0xA99CF95A,
        BullpupRifleMk2ClipTracer = 0x822060A9,
        BullpupRifleVarmodLow = 0xA857BC78,
        BullpupShotgunClip01 = 0xC94E550E,
        CarbineRifleClip01 = 0x9FBE33EC,
        CarbineRifleClip02 = 0x91109691,
        CarbineRifleClip03 = 0xBA62E935,
        CarbineRifleMk2Camo = 0x4BDD6F16,
        CarbineRifleMk2Camo02 = 0x406A7908,
        CarbineRifleMk2Camo03 = 0x2F3856A4,
        CarbineRifleMk2Camo04 = 0xE50C424D,
        CarbineRifleMk2Camo05 = 0xD37D1F2F,
        CarbineRifleMk2Camo06 = 0x86268483,
        CarbineRifleMk2Camo07 = 0xF420E076,
        CarbineRifleMk2Camo08 = 0xAAE14DF8,
        CarbineRifleMk2Camo09 = 0x9893A95D,
        CarbineRifleMk2Camo10 = 0x6B13CD3E,
        CarbineRifleMk2CamoInd01 = 0xDA55CD3F,
        CarbineRifleMk2Clip01 = 0x4C7A391E,
        CarbineRifleMk2Clip02 = 0x5DD5DBD5,
        CarbineRifleMk2ClipArmorpiercing = 0x255D5D57,
        CarbineRifleMk2ClipFmj = 0x44032F11,
        CarbineRifleMk2ClipIncendiary = 0x3D25C2A7,
        CarbineRifleMk2ClipTracer = 0x1757F566,
        CarbineRifleVarmodLuxe = 0xD89B9658,
        CarbineRifleVarmodMich = 0x5FB24D6A,
        CeramicPistolClip01 = 0x54D41361,
        CeramicPistolClip02 = 0x81786CA9,
        CeramicPistolSupp = 0x9307D6FA,
        CombatMGClip01 = 0xE1FFB34A,
        CombatMGClip02 = 0xD6C59CD6,
        CombatMGMk2Camo = 0x4A768CB5,
        CombatMGMk2Camo02 = 0xCCE06BBD,
        CombatMGMk2Camo03 = 0xBE94CF26,
        CombatMGMk2Camo04 = 0x7609BE11,
        CombatMGMk2Camo05 = 0x48AF6351,
        CombatMGMk2Camo06 = 0x9186750A,
        CombatMGMk2Camo07 = 0x84555AA8,
        CombatMGMk2Camo08 = 0x1B4C088B,
        CombatMGMk2Camo09 = 0x0E046DFC,
        CombatMGMk2Camo10 = 0x028B536E,
        CombatMGMk2CamoInd01 = 0xD703C94D,
        CombatMGMk2Clip01 = 0x492B257C,
        CombatMGMk2Clip02 = 0x17DF42E9,
        CombatMGMk2ClipArmorpiercing = 0x29882423,
        CombatMGMk2ClipFmj = 0x57EF1CC8,
        CombatMGMk2ClipIncendiary = 0xC326BDBA,
        CombatMGMk2ClipTracer = 0xF6649745,
        CombatMGVarmodLowrider = 0x92FECCDD,
        CombatPDWClip01 = 0x4317F19E,
        CombatPDWClip02 = 0x334A5203,
        CombatPDWClip03 = 0x6EB8C8DB,
        CombatPistolClip01 = 0x0721B079,
        CombatPistolClip02 = 0xD67B4F2D,
        CombatPistolVarmodLowrider = 0xC6654D72,
        CombatPistolVarmodXmas23 = 0x537CD6DE,
        CombatShotgunClip01 = 0xC6153655,
        CompactLauncherClip01 = 0x49A3CF0C,
        CompactRifleClip01 = 0x513F0A63,
        CompactRifleClip02 = 0x59FF9BF8,
        CompactRifleClip03 = 0xC607740E,
        DBShotgunClip01 = 0x29EA741E,
        DoubleActionClip01 = 0x4F312CC1,
        EMPLauncherClip01 = 0xD28F58F1,
        FireworkClip01 = 0xE4E4C28D,
        FlareGunClip01 = 0x93E9BD99,
        FlashlightLight = 0xDDB7390F,
        GadgetPistolClip01 = 0xAB276E49,
        GrenadeLauncherClip01 = 0x11AE5C97,
        GunrunMk2Upgrade = 0x60BD749C,
        GusenbergClip01 = 0x1CE5A6A5,
        GusenbergClip02 = 0xEAC8C270,
        HeavyPistolClip01 = 0x0D4A969A,
        HeavyPistolClip02 = 0x64F9C62B,
        HeavyPistolVarmodLuxe = 0x7A6A7B7B,
        HeavyRifleCamo1 = 0xEC9FECD9,
        HeavyRifleClip01 = 0x5AF49386,
        HeavyRifleClip02 = 0x6CBF371B,
        HeavyRifleSight01 = 0xB3E1C452,
        HeavyShotgunClip01 = 0x324F2D5F,
        HeavyShotgunClip02 = 0x971CF6FD,
        HeavyShotgunClip03 = 0x88C7DA53,
        HeavySniperClip01 = 0x476F52F4,
        HeavySniperMk2Camo = 0xF8337D02,
        HeavySniperMk2Camo02 = 0xC5BEDD65,
        HeavySniperMk2Camo03 = 0xE9712475,
        HeavySniperMk2Camo04 = 0x13AA78E7,
        HeavySniperMk2Camo05 = 0x26591E50,
        HeavySniperMk2Camo06 = 0x302731EC,
        HeavySniperMk2Camo07 = 0xAC722A78,
        HeavySniperMk2Camo08 = 0xBEA4CEDD,
        HeavySniperMk2Camo09 = 0xCD776C82,
        HeavySniperMk2Camo10 = 0xABC5ACC7,
        HeavySniperMk2CamoInd01 = 0x6C32D2EB,
        HeavySniperMk2Clip01 = 0xFA1E1A28,
        HeavySniperMk2Clip02 = 0x2CD8FF9D,
        HeavySniperMk2ClipArmorpiercing = 0xF835D6D4,
        HeavySniperMk2ClipExplosive = 0x89EBDAA7,
        HeavySniperMk2ClipFmj = 0x3BE948F6,
        HeavySniperMk2ClipIncendiary = 0x0EC0F617,
        HeavySniperVarmodXmas23 = 0x0D3A08EC,
        HomingLauncherClip01 = 0xF8132D3F,
        KnifeVarmodXm3 = 0x1615CCD3,
        KnifeVarmodXm301 = 0x4227D6AD,
        KnifeVarmodXm302 = 0x7A83C764,
        KnifeVarmodXm303 = 0x64C49BE6,
        KnifeVarmodXm304 = 0x9EA58FAB,
        KnifeVarmodXm305 = 0xA8E3A427,
        KnifeVarmodXm306 = 0x96797F47,
        KnifeVarmodXm307 = 0x853ADCCA,
        KnifeVarmodXm308 = 0xB3B4B9C1,
        KnifeVarmodXm309 = 0xC8FDE453,
        KnuckleVarmodBallas = 0xEED9FD63,
        KnuckleVarmodBase = 0xF3462F33,
        KnuckleVarmodDiamond = 0x9761D9DC,
        KnuckleVarmodDollar = 0x50910C31,
        KnuckleVarmodHate = 0x7DECFE30,
        KnuckleVarmodKing = 0xE28BABEF,
        KnuckleVarmodLove = 0x3F4E8AA6,
        KnuckleVarmodPimp = 0xC613F685,
        KnuckleVarmodPlayer = 0x08B808BB,
        KnuckleVarmodVagos = 0x7AF3F785,
        MachinePistolClip01 = 0x476E85FF,
        MachinePistolClip02 = 0xB92C6979,
        MachinePistolClip03 = 0xA9E9CAF4,
        MarksmanPistolClip01 = 0xCB9E41ED,
        MarksmanRifleClip01 = 0xD83B4141,
        MarksmanRifleClip02 = 0xCCFD2AC5,
        MarksmanRifleMk2Camo = 0x9094FBA0,
        MarksmanRifleMk2Camo02 = 0x7320F4B2,
        MarksmanRifleMk2Camo03 = 0x60CF500F,
        MarksmanRifleMk2Camo04 = 0xFE668B3F,
        MarksmanRifleMk2Camo05 = 0xF3757559,
        MarksmanRifleMk2Camo06 = 0x193B40E8,
        MarksmanRifleMk2Camo07 = 0x107D2F6C,
        MarksmanRifleMk2Camo08 = 0xC4E91841,
        MarksmanRifleMk2Camo09 = 0x9BB1C5D3,
        MarksmanRifleMk2Camo10 = 0x3B61040B,
        MarksmanRifleMk2CamoInd01 = 0xB7A316DA,
        MarksmanRifleMk2Clip01 = 0x94E12DCE,
        MarksmanRifleMk2Clip02 = 0xE6CFD1AA,
        MarksmanRifleMk2ClipArmorpiercing = 0xF46FD079,
        MarksmanRifleMk2ClipFmj = 0xE14A9ED3,
        MarksmanRifleMk2ClipIncendiary = 0x6DD7A86E,
        MarksmanRifleMk2ClipTracer = 0xD77A22D2,
        MarksmanRifleVarmodLuxe = 0x161E9241,
        MGClip01 = 0xF434EF84,
        MGClip02 = 0x82158B47,
        MGVarmodLowrider = 0xD6DABABE,
        MicroSMGClip01 = 0xCB48AEF0,
        MicroSMGClip02 = 0x10E6BA2B,
        MicroSMGVarmodFrn = 0x64FC7BD6,
        MicroSMGVarmodLuxe = 0x487AAE09,
        MicroSMGVarmodSecurity = 0x77F23831,
        MicroSMGVarmodXm3 = 0xA29CDCD2,
        MilitaryRifleClip01 = 0x2D46D83B,
        MilitaryRifleClip02 = 0x684ACE42,
        MilitaryRifleSight01 = 0x6B82F395,
        MinigunClip01 = 0xC8DE6F06,
        MiniSMGClip01 = 0x84C8B2D3,
        MiniSMGClip02 = 0x937ED0B7,
        MusketClip01 = 0x4ED2073F,
        NavyRevolverClip01 = 0x985EC267,
        Pistol50Clip01 = 0x2297BE19,
        Pistol50Clip02 = 0xD9D3AC92,
        Pistol50VarmodLuxe = 0x77B8AB2F,
        PistolXM3Clip01 = 0x1663E75E,
        PistolXM3Supp = 0x1E02B7E0,
        PistolClip01 = 0xFED0FD71,
        PistolClip02 = 0xED265A1C,
        PistolMk2Camo = 0x5C6C749C,
        PistolMk2Camo02 = 0x15F7A390,
        PistolMk2Camo02Slide = 0x1A1F1260,
        PistolMk2Camo03 = 0x968E24DB,
        PistolMk2Camo03Slide = 0xE4E00B70,
        PistolMk2Camo04 = 0x017BFA99,
        PistolMk2Camo04Slide = 0x2C298B2B,
        PistolMk2Camo05 = 0xF2685C72,
        PistolMk2Camo05Slide = 0xDFB79725,
        PistolMk2Camo06 = 0xDD2231E6,
        PistolMk2Camo06Slide = 0x6BD7228C,
        PistolMk2Camo07 = 0xBB43EE76,
        PistolMk2Camo07Slide = 0x9DDBCF8C,
        PistolMk2Camo08 = 0x4D901310,
        PistolMk2Camo08Slide = 0xB319A52C,
        PistolMk2Camo09 = 0x5F31B653,
        PistolMk2Camo09Slide = 0xC6836E12,
        PistolMk2Camo10 = 0x697E19A0,
        PistolMk2Camo10Slide = 0x43B1B173,
        PistolMk2CamoInd01 = 0x930CB951,
        PistolMk2CamoInd01Slide = 0x4ABDA3FA,
        PistolMk2CamoSlide = 0xB4FC92B0,
        PistolMk2Clip01 = 0x94F42D62,
        PistolMk2Clip02 = 0x5ED6C128,
        PistolMk2ClipFmj = 0x4F37DF2A,
        PistolMk2ClipHollowpoint = 0x85FEA109,
        PistolMk2ClipIncendiary = 0x2BBD7A3A,
        PistolMk2ClipTracer = 0x25CAAEAF,
        PistolMk2VarmodXm3 = 0x440518B2,
        PistolMk2VarmodXm3Slide = 0x3C49DAB8,
        PistolVarmodLuxe = 0xD7391086,
        PrecisionRifleClip01 = 0xF2EACF0A,
        PumpShotgunClip01 = 0xD16F1438,
        PumpShotgunMk2Camo = 0xE3BD9E44,
        PumpShotgunMk2Camo02 = 0x17148F9B,
        PumpShotgunMk2Camo03 = 0x24D22B16,
        PumpShotgunMk2Camo04 = 0xF2BEC6F0,
        PumpShotgunMk2Camo05 = 0x0085627D,
        PumpShotgunMk2Camo06 = 0xDC2919C5,
        PumpShotgunMk2Camo07 = 0xE184247B,
        PumpShotgunMk2Camo08 = 0xD8EF9356,
        PumpShotgunMk2Camo09 = 0xEF29BFCA,
        PumpShotgunMk2Camo10 = 0x67AEB165,
        PumpShotgunMk2CamoInd01 = 0x46411A1D,
        PumpShotgunMk2Clip01 = 0xCD940141,
        PumpShotgunMk2ClipArmorpiercing = 0x4E65B425,
        PumpShotgunMk2ClipExplosive = 0x3BE4465D,
        PumpShotgunMk2ClipHollowpoint = 0xE9582927,
        PumpShotgunMk2ClipIncendiary = 0x9F8A1BF5,
        PumpShotgunVarmodLowrider = 0xA2D79DDB,
        PumpShotgunVarmodSecurity = 0xF18E7235,
        PumpShotgunVarmodXm3 = 0x13B9376B,
        RailgunXM3Clip01 = 0x43660892,
        RailgunClip01 = 0x0384F3E8,
        RayPistolVarmodXmas18 = 0xD7DBF707,
        RevolverClip01 = 0xE9867CE3,
        RevolverMk2Camo = 0xC03FED9F,
        RevolverMk2Camo02 = 0x00B5DE24,
        RevolverMk2Camo03 = 0x0A7FF1B8,
        RevolverMk2Camo04 = 0xF2E24289,
        RevolverMk2Camo05 = 0x11317F27,
        RevolverMk2Camo06 = 0x17C30C42,
        RevolverMk2Camo07 = 0x257927AE,
        RevolverMk2Camo08 = 0x37304B1C,
        RevolverMk2Camo09 = 0x48DAEE71,
        RevolverMk2Camo10 = 0x20ED9B5B,
        RevolverMk2CamoInd01 = 0xD951E867,
        RevolverMk2Clip01 = 0xBA23D8BE,
        RevolverMk2ClipFmj = 0x0DC8BA3F,
        RevolverMk2ClipHollowpoint = 0x10F42E8F,
        RevolverMk2ClipIncendiary = 0x00EFBF25,
        RevolverMk2ClipTracer = 0xC6D8E476,
        RevolverVarmodBoss = 0x16EE3040,
        RevolverVarmodGoon = 0x9493B80D,
        RPGClip01 = 0x4EA573B3,
        RPGVarmodTvr = 0xB614EC80,
        SawnOffShotgunClip01 = 0xC7D62225,
        SawnOffShotgunVarmodLuxe = 0x85A64DF9,
        SMGClip01 = 0x26574997,
        SMGClip02 = 0x350966FB,
        SMGClip03 = 0x79C77076,
        SMGMk2Camo = 0xC4979067,
        SMGMk2Camo02 = 0x3815A945,
        SMGMk2Camo03 = 0x4B4B4FB0,
        SMGMk2Camo04 = 0xEC729200,
        SMGMk2Camo05 = 0x48F64B22,
        SMGMk2Camo06 = 0x35992468,
        SMGMk2Camo07 = 0x24B782A5,
        SMGMk2Camo08 = 0xA2E67F01,
        SMGMk2Camo09 = 0x2218FD68,
        SMGMk2Camo10 = 0x45C5C3C5,
        SMGMk2CamoInd01 = 0x399D558F,
        SMGMk2Clip01 = 0x4C24806E,
        SMGMk2Clip02 = 0xB9835B2E,
        SMGMk2ClipFmj = 0x0B5A715F,
        SMGMk2ClipHollowpoint = 0x3A1BD6FA,
        SMGMk2ClipIncendiary = 0xD99222E5,
        SMGMk2ClipTracer = 0x7FEA36EC,
        SMGVarmodLuxe = 0x27872C90,
        SniperRifleClip01 = 0x9BC64089,
        SniperRifleVarmodLuxe = 0x4032B5E7,
        SNSPistolClip01 = 0xF8802ED9,
        SNSPistolClip02 = 0x7B0033B3,
        SNSPistolMk2Camo = 0x0F7BEEDD,
        SNSPistolMk2Camo02 = 0x8A612EF6,
        SNSPistolMk2Camo02Slide = 0x29366D21,
        SNSPistolMk2Camo03 = 0x76FA8829,
        SNSPistolMk2Camo03Slide = 0x3ADE514B,
        SNSPistolMk2Camo04 = 0xA93C6CAC,
        SNSPistolMk2Camo04Slide = 0xE64513E9,
        SNSPistolMk2Camo05 = 0x9C905354,
        SNSPistolMk2Camo05Slide = 0xCD7AEB9A,
        SNSPistolMk2Camo06 = 0x4DFA3621,
        SNSPistolMk2Camo06Slide = 0xFA7B27A6,
        SNSPistolMk2Camo07 = 0x42E91FFF,
        SNSPistolMk2Camo07Slide = 0xE285CA9A,
        SNSPistolMk2Camo08 = 0x54A8437D,
        SNSPistolMk2Camo08Slide = 0x2B904B19,
        SNSPistolMk2Camo09 = 0x068C2746,
        SNSPistolMk2Camo09Slide = 0x22C24F9C,
        SNSPistolMk2Camo10 = 0x2366E467,
        SNSPistolMk2Camo10Slide = 0x8D0D5ECD,
        SNSPistolMk2CamoInd01 = 0x441882E6,
        SNSPistolMk2CamoInd01Slide = 0x1F07150A,
        SNSPistolMk2CamoSlide = 0xE7EE68EA,
        SNSPistolMk2Clip01 = 0x01466CE6,
        SNSPistolMk2Clip02 = 0xCE8C0772,
        SNSPistolMk2ClipFmj = 0xC111EB26,
        SNSPistolMk2ClipHollowpoint = 0x8D107402,
        SNSPistolMk2ClipIncendiary = 0xE6AD5F79,
        SNSPistolMk2ClipTracer = 0x902DA26E,
        SNSPistolVarmodLowrider = 0x8033ECAF,
        SpecialCarbineClip01 = 0xC6C7E581,
        SpecialCarbineClip02 = 0x7C8BD10E,
        SpecialCarbineClip03 = 0x6B59AEAA,
        SpecialCarbineMk2Camo = 0xD40BB53B,
        SpecialCarbineMk2Camo02 = 0x431B238B,
        SpecialCarbineMk2Camo03 = 0x34CF86F4,
        SpecialCarbineMk2Camo04 = 0xB4C306DD,
        SpecialCarbineMk2Camo05 = 0xEE677A25,
        SpecialCarbineMk2Camo06 = 0xDF90DC78,
        SpecialCarbineMk2Camo07 = 0x0A4C31EE,
        SpecialCarbineMk2Camo08 = 0x89CFB0F7,
        SpecialCarbineMk2Camo09 = 0x7B82145C,
        SpecialCarbineMk2Camo10 = 0x899CAF75,
        SpecialCarbineMk2CamoInd01 = 0x5218C819,
        SpecialCarbineMk2Clip01 = 0x16C69281,
        SpecialCarbineMk2Clip02 = 0xDE1FA12C,
        SpecialCarbineMk2ClipArmorpiercing = 0x51351635,
        SpecialCarbineMk2ClipFmj = 0x503DEA90,
        SpecialCarbineMk2ClipIncendiary = 0xDE011286,
        SpecialCarbineMk2ClipTracer = 0x8765C68A,
        SpecialCarbineVarmodLowrider = 0x730154F2,
        SpecialCarbineVarmodXmas23 = 0x120A66F8,
        StricklerClip01 = 0xDD2220A3,
        StricklerFlsh = 0x75EA3948,
        StricklerSight = 0x115A88B1,
        StunGunVarmodBail = 0x9C1BB7F7,
        SwitchbladeVarmodBase = 0x9137A500,
        SwitchbladeVarmodVar1 = 0x5B3E7DB6,
        SwitchbladeVarmodVar2 = 0xE7939662,
        TacticalRifleClip01 = 0x3749B8BB,
        TacticalRifleClip02 = 0x8594554F,
        TecPistolClip01 = 0x383664EE,
        TecPistolClip02 = 0x1286198E,
        VintagePistolClip01 = 0x45A3B6BB,
        VintagePistolClip02 = 0x33BA12E8,
        PoliceTorchFlashlight = 0xC5A30FED,
    }

    export type EventHandler = (...args: unknown[]) => void;

    /** Network event arguments. Uint8Array data is copied and numbers must be finite.
     * Objects must use plain data properties and contain no circular references.
     */
    export type TransportValue = null | boolean | number | bigint | string | Uint8Array | readonly TransportValue[] | { readonly [key: string]: TransportValue };

    /** Augment this interface to type Base metadata keys on the client and server. */
    export interface ICustomBaseSyncedMeta {}

    export type TickHandler = () => void;

    /** RGB components are integers from 0 to 255. */
    export interface IRGB {
        r: number;
        g: number;
        b: number;
    }

    export interface IRGBA extends IRGB {
        /** Alpha from 0 (transparent) to 255 (opaque). */
        a: number;
    }

    /** Gregorian date. Months and days start at 1. */
    export interface IDate {
        year: number;
        month: number;
        day: number;
    }

    export interface ITime {
        hour: number;
        minute: number;
        second: number;
    }

    export interface IDateTime extends IDate, ITime {}

    export interface IEntity {
        /** Local ID, assigned independently on the client and server. */
        readonly id: number;
        readonly modelHash: number;
        readonly pos: IVector3;
    }

    export interface IPhysical extends IEntity {
        readonly health: number;
        readonly velocity: IVector3;
    }

    export interface IQuaternion {
        readonly x: number;
        readonly y: number;
        readonly z: number;
        readonly w: number;
    }

    export interface IVector2 {
        readonly x: number;
        readonly y: number;
    }

    export interface IVector3 {
        readonly x: number;
        readonly y: number;
        readonly z: number;
    }

    export interface IVehicleBumperState {
        axis: VehicleBumperAxis;
        bounceScale: number;
        state: VehicleBumperState;
    }

    export interface IVehicleOccupancy<TVehicle> {
        readonly phase: VehicleOccupancyPhase;
        readonly seat: number;
        readonly vehicle: TVehicle | null;
    }

    /** Ocean and shoreline wave amplitudes. */
    export interface IWaveSettings {
        oceanAmplitude: number;
        shoreAmplitude: number;
    }

    /** Immutable vector. Math operations return new values. */
    export class Vector2 implements IVector2 {
        /** Creates a zero vector. */
        constructor();
        constructor(x: number, y: number);
        constructor(value: [number, number]);
        constructor(value: IVector2);
        /** Sets every component to value. */
        constructor(value: number);

        readonly x: number;
        readonly y: number;
        readonly length: number;
        readonly lengthSquared: number;

        add(x: number, y: number): Vector2;
        add(value: number): Vector2;
        add(value: [number, number]): Vector2;
        add(value: IVector2): Vector2;

        /** Returns the angle in radians. Both vectors must be finite and non-zero. */
        angleTo(value: IVector2): number;

        /** Returns the angle in degrees. Both vectors must be finite and non-zero. */
        angleToDegrees(value: IVector2): number;

        distanceTo(value: IVector2): number;

        distanceToSquared(value: IVector2): number;

        div(x: number, y: number): Vector2;
        div(value: number): Vector2;
        div(value: [number, number]): Vector2;
        div(value: IVector2): Vector2;

        dot(x: number, y: number): number;
        dot(value: number): number;
        dot(value: [number, number]): number;
        dot(value: IVector2): number;

        /** @param epsilon Finite, non-negative tolerance per component. Defaults to 0. */
        equals(value: IVector2, epsilon?: number): boolean;

        /** Returns the reciprocal of each component. Throws RangeError if a component is zero. */
        inverse(): Vector2;

        /** @param range Maximum distance, inclusive. Must be non-negative. */
        isInRange(value: IVector2, range: number): boolean;

        /** @param ratio Interpolation factor. Values outside [0, 1] extrapolate. */
        lerp(value: IVector2, ratio: number): Vector2;

        mul(x: number, y: number): Vector2;
        mul(value: number): Vector2;
        mul(value: [number, number]): Vector2;
        mul(value: IVector2): Vector2;

        negative(): Vector2;

        /** Throws RangeError for a zero or infinite vector. */
        normalize(): Vector2;

        sub(x: number, y: number): Vector2;
        sub(value: number): Vector2;
        sub(value: [number, number]): Vector2;
        sub(value: IVector2): Vector2;

        toArray(): [number, number];

        toDegrees(): Vector2;

        /** @param precision Number of decimal places. Must be an integer from 0 to 100. Defaults to 4. */
        toFixed(precision?: number): Vector2;

        toRadians(): Vector2;

        toString(): string;

        static readonly down: Vector2;
        static readonly left: Vector2;
        static readonly negativeInfinity: Vector2;
        static readonly one: Vector2;
        static readonly positiveInfinity: Vector2;
        static readonly right: Vector2;
        static readonly up: Vector2;
        static readonly zero: Vector2;
    }

    /** Immutable vector. Math operations return new values. */
    export class Vector3 implements IVector3 {
        /** Creates a zero vector. */
        constructor();
        constructor(x: number, y: number, z: number);
        constructor(value: [number, number, number]);
        constructor(value: IVector3);
        /** Sets every component to value. */
        constructor(value: number);

        readonly x: number;
        readonly y: number;
        readonly z: number;
        readonly length: number;
        readonly lengthSquared: number;

        add(x: number, y: number, z: number): Vector3;
        add(value: number): Vector3;
        add(value: [number, number, number]): Vector3;
        add(value: IVector3): Vector3;

        /** Returns the angle in radians. Both vectors must be finite and non-zero. */
        angleTo(value: IVector3): number;

        /** Returns the angle in degrees. Both vectors must be finite and non-zero. */
        angleToDegrees(value: IVector3): number;

        cross(x: number, y: number, z: number): Vector3;
        cross(value: number): Vector3;
        cross(value: [number, number, number]): Vector3;
        cross(value: IVector3): Vector3;

        distanceTo(value: IVector3): number;

        distanceToSquared(value: IVector3): number;

        div(x: number, y: number, z: number): Vector3;
        div(value: number): Vector3;
        div(value: [number, number, number]): Vector3;
        div(value: IVector3): Vector3;

        dot(x: number, y: number, z: number): number;
        dot(value: number): number;
        dot(value: [number, number, number]): number;
        dot(value: IVector3): number;

        /** @param epsilon Finite, non-negative tolerance per component. Defaults to 0. */
        equals(value: IVector3, epsilon?: number): boolean;

        /** Returns the reciprocal of each component. Throws RangeError if a component is zero. */
        inverse(): Vector3;

        /** @param range Maximum distance, inclusive. Must be non-negative. */
        isInRange(value: IVector3, range: number): boolean;

        /** @param ratio Interpolation factor. Values outside [0, 1] extrapolate. */
        lerp(value: IVector3, ratio: number): Vector3;

        mul(x: number, y: number, z: number): Vector3;
        mul(value: number): Vector3;
        mul(value: [number, number, number]): Vector3;
        mul(value: IVector3): Vector3;

        negative(): Vector3;

        /** Throws RangeError for a zero or infinite vector. */
        normalize(): Vector3;

        sub(x: number, y: number, z: number): Vector3;
        sub(value: number): Vector3;
        sub(value: [number, number, number]): Vector3;
        sub(value: IVector3): Vector3;

        toArray(): [number, number, number];

        toDegrees(): Vector3;

        /** @param precision Number of decimal places. Must be an integer from 0 to 100. Defaults to 4. */
        toFixed(precision?: number): Vector3;

        toRadians(): Vector3;

        toString(): string;

        static readonly back: Vector3;
        static readonly down: Vector3;
        static readonly forward: Vector3;
        static readonly left: Vector3;
        static readonly negativeInfinity: Vector3;
        static readonly one: Vector3;
        static readonly positiveInfinity: Vector3;
        static readonly right: Vector3;
        static readonly up: Vector3;
        static readonly zero: Vector3;
    }

    /** Immutable quaternion. Constructor arguments are not normalized. */
    export class Quaternion implements IQuaternion {
        /** Creates the identity quaternion (0, 0, 0, 1). */
        constructor();
        /** @param w Scalar component. */
        constructor(x: number, y: number, z: number, w: number);
        constructor(value: [number, number, number, number]);
        constructor(value: IQuaternion);
        /** Sets every component to value. */
        constructor(value: number);

        readonly x: number;
        readonly y: number;
        readonly z: number;
        readonly w: number;
        readonly length: number;
        readonly lengthSquared: number;

        /**
         * Compares components: q and -q are unequal despite representing the same rotation.
         * @param epsilon Finite, non-negative tolerance per component. Defaults to 0.
         */
        equals(value: IQuaternion, epsilon?: number): boolean;

        /** Returns the inverse. Throws RangeError for a zero or infinite quaternion, or if the result overflows. */
        inverse(): Quaternion;

        /** Hamilton product: this quaternion multiplied by value. */
        mul(value: IQuaternion): Quaternion;

        /** Throws RangeError for a zero or infinite quaternion. */
        normalize(): Quaternion;

        /** Rotates a vector. This quaternion must have unit length. */
        rotate(value: IVector3): Vector3;

        /** Returns [x, y, z, w]. */
        toArray(): [number, number, number, number];

        /** @param precision Number of decimal places. Must be an integer from 0 to 100. Defaults to 4. */
        toFixed(precision?: number): Quaternion;

        toString(): string;

        static readonly one: Quaternion;
        static readonly zero: Quaternion;
    }

    /**
     * JOAAT hash as an unsigned 32-bit number. ASCII case is ignored.
     * Backslashes are treated as slashes. An empty string returns 0.
     */
    export function hash(value: string): number;
}
