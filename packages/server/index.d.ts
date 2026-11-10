/// <reference types="@revomp/types-shared" />
declare module "revo-server" {
    import * as shared from "revo-shared";

    export enum DamageType {
        Hit = 0,
        Explosion = 1,
        Fire = 2,
    }

    export enum PlayerState {
        Disconnected = 0,
        Connected = 1,
        Handshaked = 2,
        Joined = 3,
    }

    export enum StateChangeSource {
        Server = 0,
        Sync = 1,
    }

    export enum VehicleExitReason {
        Normal = 0,
        Cancelled = 1,
        Timeout = 2,
        Teleport = 3,
        Respawn = 4,
        VehicleRemoved = 5,
        Disconnected = 6,
        Invalidated = 7,
    }

    /** Referenced entities may be destroyed after the callback. */
    export interface IDamageEvent {
        /** Collision component. null for explosions and fire. */
        readonly component: number | null;
        /** Damage requested by the hit. The final health loss may differ. */
        readonly damage: number;
        readonly source: Player | null;
        readonly target: Physical;
        readonly type: DamageType;
        readonly weapon: number;
    }

    export interface IVehicleOccupancy extends shared.IVehicleOccupancy<Vehicle> {}

    /** Inventory snapshot. Use the player's weapon methods to make changes. */
    export interface IInventoryWeapon {
        readonly acknowledgedUse: bigint;
        readonly ammo: number;
        readonly grantId: bigint;
        readonly hash: number;
        readonly loadout: IWeaponLoadout;
    }

    export interface IWeaponLoadout {
        readonly ammoType: number;
        /** Up to 8 component hashes. */
        readonly components: readonly number[];
    }

    /** IDs are unique across all live objects on this server.
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

        getSyncedMeta<K extends keyof shared.ICustomBaseSyncedMeta>(key: K): shared.ICustomBaseSyncedMeta[K] | undefined;
        getSyncedMeta<T = shared.TransportValue>(key: string): T | undefined;
        hasSyncedMeta(key: string): boolean;
        getSyncedMetaKeys(): string[];
        /** Copies and replicates the value to the object's audience. Player metadata also goes to that player. */
        setSyncedMeta<K extends string>(key: K, value: K extends keyof shared.ICustomBaseSyncedMeta ? shared.ICustomBaseSyncedMeta[K] : shared.TransportValue): void;
        /** Atomically merges own enumerable fields. Unsupported values reject the entire batch. */
        setSyncedMeta(values: Partial<shared.ICustomBaseSyncedMeta> & Record<string, shared.TransportValue>): void;
        deleteSyncedMeta(key: string): void;
    }

    /** Position and rotation getters return copies. Assign a new value to apply changes. */
    export class WorldBase extends Base {
        protected constructor();

        static readonly all: readonly WorldBase[];
        static readonly count: number;

        static getById(id: number): WorldBase | null;

        /** Dimension: 0..4294967294, default 0. globalDimension shows entities and spatial audio in every dimension.
         * Players cannot use globalDimension. Global entities share movement, damage and seats across dimensions.
         * A vehicle's trailer follows its dimension. Occupants follow unless the new dimension is global.
         */
        dimension: number;

        get pos(): shared.Vector3;
        set pos(value: shared.IVector3);

        /** Euler angles in radians, applied X, then Y, then Z. */
        get rot(): shared.Vector3;
        set rot(value: shared.IVector3);

        get quaternion(): shared.Quaternion;
        set quaternion(value: shared.IQuaternion);
    }

    export interface IVoicePermissions {
        transmit: boolean;
        listen: boolean;
    }

    export interface IVoiceChannelOptions {
        /** Ordered per-channel effects, before category effects. Default: []. */
        effects?: readonly shared.AudioEffect[];
        /** Default: true. Disabling preserves membership. */
        enabled?: boolean;
        /** Default: false. Spatial channels follow each speaker. */
        spatial?: boolean;
        /** Distance in metres for spatial channels. Must be positive. Defaults to 30. */
        range?: number;
        /** -100..0 dB. Default: 0. */
        volume?: number;
        /** Client-defined AudioCategory name. An empty name skips category processing.
         * A named category must exist on each listener or that route stays silent.
         */
        category?: string;
    }

    /** A player can speak on multiple channels independently. Speakers do not hear themselves. */
    export class VoiceChannel extends Base {
        constructor(options?: IVoiceChannelOptions);

        static readonly all: readonly VoiceChannel[];
        static readonly count: number;

        static getById(id: number): VoiceChannel | null;
        static getByNetworkId(networkId: number): VoiceChannel | null;

        readonly networkId: number | null;
        readonly players: readonly Player[];
        readonly playerCount: number;

        enabled: boolean;
        spatial: boolean;
        /** Maximum delivery distance in metres for spatial channels. Must be positive. GTA handles local attenuation. */
        range: number;
        /** -100..0 dB. */
        volume: number;
        /** Client-defined AudioCategory name. An empty name uses the neutral voice category. */
        category: string;

        /** Up to 16 effects, applied in order before category effects, separately for each speaker and listener.
         * Returns a copy. Assign a new array to update, or [] to clear.
         */
        effects: readonly shared.AudioEffect[];

        /** Omitted permissions default to true. Existing members keep their permissions. */
        addPlayer(player: Player, permissions?: Partial<IVoicePermissions>): boolean;
        removePlayer(player: Player): boolean;
        clearPlayers(): void;
        hasPlayer(player: Player): boolean;

        /** Returns false if the player is not a member. */
        setPlayerPermissions(player: Player, permissions: IVoicePermissions): boolean;
        getPlayerPermissions(player: Player): Readonly<IVoicePermissions> | null;

        destroy(): void;
    }

    export enum AudioSourceType {
        Resource = 0,
        Url = 1,
        LiveUrl = 2,
    }

    export enum AudioPlaybackState {
        Stopped = 0,
        Playing = 1,
        Paused = 2,
    }

    export interface IAudioSource {
        readonly type: AudioSourceType;
        /** Resource: relative to this server's client content root. URLs: HTTP(S) only.
         * Absolute filesystem paths and parent-directory traversal are rejected.
         */
        readonly path: string;
    }

    export interface IAudioOptions {
        /** Sets the position for spatial audio. Omit for frontend (2D) playback. */
        readonly pos?: shared.IVector3;
        /** Volume in dB, from -100 to 12. Defaults to 0. GTA categories and settings also affect playback. */
        readonly volume?: number;
        /** Positive streaming radius in metres. Defaults to 200. */
        readonly streamDistance?: number;
        /** Defaults to false. Live URLs cannot loop. */
        readonly loop?: boolean;
        /** Name of a GTA category or one created by a client script. Playback waits for the category to become available.
         * An empty or omitted name uses the default category.
         */
        readonly category?: string;
    }

    /** Created stopped, with a shared playback timeline. The default audience is all players.
     * Spatial audio follows distance and dimension limits, plus entity streaming when attached.
     * Attached audio inherits the entity's dimension. Detach before changing it. Frontend audio ignores dimensions.
     * Loading, buffering, errors and completion are local to each listener and emit no server events.
     */
    export class Audio extends WorldBase {
        constructor(source: IAudioSource, options?: IAudioOptions);

        static readonly all: readonly Audio[];
        static readonly count: number;

        static getById(id: number): Audio | null;
        static getByNetworkId(networkId: number): Audio | null;

        readonly networkId: number | null;
        readonly source: Readonly<IAudioSource>;
        readonly spatial: boolean;
        readonly category: string;
        /** Server playback state. Unchanged when a recording finishes on a client. */
        readonly state: AudioPlaybackState;
        /** Seconds on the server's playback timeline. Keeps increasing across loops. Always 0 for live URLs. */
        readonly playbackPosition: number;
        readonly attachedTo: Entity | null;
        readonly everyone: boolean;

        volume: number;
        loop: boolean;
        streamDistance: number;

        /** Restarts at zero. Late listeners join the current point. Live URLs join the broadcast. */
        play(): void;
        pause(): boolean;
        /** Resumes a paused recording. Live URLs reconnect to the broadcast. */
        resume(): boolean;
        /** Stops playback but retains this object. */
        stop(): void;
        /** 0..1e9 seconds. Returns false for live URLs. Does not change playing/paused/stopped state. */
        seek(seconds: number): boolean;

        /** Attaches spatial audio without seeking. Destroying the entity stops playback and clears the attachment. */
        attachTo(entity: Entity): boolean;
        /** Continues at the last attached position. Assigning pos/rot also detaches spatial audio.
         * Only spatial audio can be moved or attached. The spatial mode is fixed at creation.
         */
        detach(): boolean;

        /** Restores the default audience and clears the explicit player list. */
        setEveryone(): void;
        /** Switches to an empty explicit audience. */
        clearPlayers(): void;
        /** Switches to an explicit player list, adding this player. */
        addPlayer(player: Player): boolean;
        /** Removes a player from the explicit list. Has no effect in everyone mode. */
        removePlayer(player: Player): void;
        /** Whether the player belongs to the audience. Playback also depends on streaming and listener settings. */
        hasPlayer(player: Player): boolean;

        /** Stops replication and deletes the audio object. */
        destroy(): void;
    }

    export class Entity extends WorldBase {
        protected constructor();

        static readonly all: readonly Entity[];
        static readonly count: number;

        static getById(id: number): Entity | null;
        static getByNetworkId(networkId: number): Entity | null;

        /** Includes global entities alongside the selected dimension. globalDimension selects only global entities. Omit it to search all worlds. */
        static getInRadius(position: shared.IVector3, radius: number, dimension?: number): readonly Entity[];

        collisionEnabled: boolean;
        /** Accepts a model name or nonzero uint32 hash. Clients load the new model asynchronously. */
        get modelHash(): number;
        set modelHash(model: string | number);

        /** Network ID shared with clients. null after destruction. */
        readonly networkId: number | null;
        visible: boolean;

        /** Deletes the entity. Throws for players and already destroyed entities. */
        destroy(): void;

        getObservers(): readonly Player[];
    }

    export class Physical extends Entity {
        protected constructor();

        static readonly all: readonly Physical[];
        static readonly count: number;

        static getById(id: number): Physical | null;
        static getByNetworkId(networkId: number): Physical | null;

        /** Includes global entities alongside the selected dimension. globalDimension selects only global entities. Omit it to search all worlds. */
        static getInRadius(position: shared.IVector3, radius: number, dimension?: number): readonly Physical[];

        get angVelocity(): shared.Vector3;
        set angVelocity(value: shared.IVector3);

        health: number;

        get velocity(): shared.Vector3;
        set velocity(value: shared.IVector3);
    }

    /** Static queries return NPCs only. Use Player's queries for players. */
    export class Ped extends Physical {
        /**
         * @param model Model name (ASCII case-insensitive) or unsigned 32-bit hash.
         * @param rotation Heading or XYZ Euler angles in radians, or a unit quaternion. Defaults to zero heading.
         */
        constructor(model: string | number, position: shared.IVector3, rotation?: number | shared.IVector3 | shared.IQuaternion);

        static readonly all: readonly Ped[];
        static readonly count: number;

        /** Looks up an NPC. Use Player.getById for players. */
        static getById(id: number): Ped | null;
        static getByNetworkId(networkId: number): Ped | null;

        /** Includes global entities alongside the selected dimension. globalDimension selects only global entities. Omit it to search all worlds. */
        static getInRadius(position: shared.IVector3, radius: number, dimension?: number): readonly Ped[];

        armour: number;
        maxHealth: number;
        readonly netOwner: Player | null;
        readonly vehicleOccupancy: IVehicleOccupancy;

        /**
         * Places the ped in a vehicle. Seat -1 is the driver (default). Seats 0–14 are passengers.
         * Returns false for occupied or reserved seats, dead peds, unspawned players,
         * invalid seat indices, or vehicles outside the ped's visible dimension.
         * Returns true when the server accepts the request. Clients wait for the vehicle to load
         * and reject seats missing from its model. Requesting the current seat has no effect.
         */
        setIntoVehicle(vehicle: Vehicle, seat?: number): boolean;

        /**
         * Removes the ped and cancels pending entry or exit, including requests made while on foot.
         * Releases the server seat immediately. GTA chooses the exit position.
         */
        removeFromVehicle(): boolean;

        /**
         * Uses global drawable indices. Once clothing is set, unset components use the model's default outfit.
         * Persists across streaming, respawns and model changes. Clients skip unsupported combinations.
         * Returns false outside these ranges: component 0..11, drawable 0..65535, texture 0..255, palette 0..3.
         */
        setComponentVariation(component: shared.PedComponent, drawable: number, texture?: number, palette?: number): boolean;

        /** Requested clothing, or null if unset. */
        getComponentVariation(component: shared.PedComponent): shared.IPedComponentVariation | null;

        /** Resets clothing to model defaults. Clears component overrides and keeps prop selections. */
        setDefaultComponentVariation(): boolean;

        /**
         * Uses global drawable indices. Prop: 0..12, drawable: -1..65535, texture: 0..255 (default 0).
         * Drawable -1 requires texture 0 and clears the prop. Unsupported combinations leave it cleared on that client.
         * Persists across streaming, respawns and model changes.
         */
        setProp(prop: shared.PedProp, drawable: number, texture?: number): boolean;

        /** Requested prop, or null if unset. A cleared prop has drawable -1. */
        getProp(prop: shared.PedProp): shared.IPedPropVariation | null;

        clearProp(prop: shared.PedProp): boolean;
        clearProps(): boolean;

        /** Applies to mp_m_freemode_01 and mp_f_freemode_01. Other models store the values without applying them.
         * Persists across streaming, respawns and model changes. Keeps face features, overlays and hair colours.
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

    }

    export class Player extends Ped {
        private constructor();

        static readonly all: readonly Player[];
        static readonly count: number;

        static getById(id: number): Player | null;
        static getByNetworkId(networkId: number): Player | null;

        /** Includes global entities alongside the selected dimension. globalDimension selects only global entities. Omit it to search all worlds. */
        static getInRadius(position: shared.IVector3, radius: number, dimension?: number): readonly Player[];

        readonly connectionId: number;

        /** Connection IP address, without the port. */
        readonly ip: string;

        /**
         * Client-reported SHA-256 hardware identifier in lowercase hex. null when unavailable.
         * Available from playerConnected through playerDisconnected. Not verified by the server.
         */
        readonly hwidHash: string | null;

        readonly dead: boolean;

        /** Round-trip time in milliseconds. */
        readonly ping: number;
        /** Rockstar's account name when verified. Otherwise the name supplied by the client. */
        readonly socialClubName: string;
        /** Verified Rockstar account ID as a decimal string, or null when verification was unavailable or failed. */
        readonly socialClubId: string | null;
        /** Whether Rockstar verified this session's account identity. Available when playerConnected fires. */
        readonly socialClubVerified: boolean;
        readonly state: PlayerState;

        /** Defaults to true and persists across respawns. False streams this player out for all observers.
         * Their own streaming and voice stay active. True restores distance and dimension checks.
         */
        streamed: boolean;

        addWeaponComponent(weapon: number, component: number): boolean;

        getStreamedEntities(): readonly Entity[];

        getWeapon(hash: number): IInventoryWeapon | null;

        getWeaponComponents(weapon: number): readonly number[];

        giveWeapon(hash: number, ammo: number, equip?: boolean): boolean;
        giveWeapon(hash: number, ammo: number, loadout: IWeaponLoadout, equip?: boolean): boolean;

        hasStreamedIn(entity: Entity): boolean;

        hasWeapon(hash: number): boolean;

        hasWeaponComponent(weapon: number, component: number): boolean;

        kick(reason: string): void;

        removeAllWeapons(): void;

        removeWeapon(hash: number): boolean;

        removeWeaponComponent(weapon: number, component: number): boolean;

        setCurrentWeapon(hash: number): boolean;

        setWeaponAmmo(hash: number, ammo: number): boolean;

        setWeaponLoadout(hash: number, loadout: IWeaponLoadout): boolean;

        /**
         * Restores health to maxHealth and resets movement. Returns false if the spawn is rejected.
         * @param heading Heading in radians. Resets pitch and roll to zero.
         */
        spawn(pos: shared.IVector3, heading: number): boolean;
    }

    export class Vehicle extends Physical {
        /**
         * @param model Model name (ASCII case-insensitive) or unsigned 32-bit hash.
         * @param rotation Heading or XYZ Euler angles in radians, or a unit quaternion. Defaults to zero heading.
         */
        constructor(model: string | number, position: shared.IVector3, rotation?: number | shared.IVector3 | shared.IQuaternion);

        static readonly all: readonly Vehicle[];
        static readonly count: number;

        static getById(id: number): Vehicle | null;
        static getByNetworkId(networkId: number): Vehicle | null;

        /** Includes global entities alongside the selected dimension. globalDimension selects only global entities. Omit it to search all worlds. */
        static getInRadius(position: shared.IVector3, radius: number, dimension?: number): readonly Vehicle[];

        bodyHealth: number;
        dirtLevel: number;
        engineHealth: number;
        engineRunning: boolean;
        frontBumperState: shared.IVehicleBumperState;
        readonly highBeamsOn: boolean;
        readonly lightsOn: boolean;
        readonly livery: number;
        readonly netOwner: Player | null;
        readonly parent: Vehicle | null;
        petrolTankHealth: number;

        /** GTA color ID (0..160) or custom RGB (each component 0..255). Assigning an ID clears custom RGB. */
        primaryColor: number | shared.IRGB;

        /** GTA color ID (0..160) or custom RGB (each component 0..255). Assigning an ID clears custom RGB. */
        secondaryColor: number | shared.IRGB;

        /** null until set by the server. GTA supplies the original plate. */
        get numberPlate(): string | null;
        /** Up to 8 ASCII letters, digits or spaces. Letters become uppercase. An empty string blanks the plate. */
        set numberPlate(text: string);

        /** Model-specific mod kit index. Defaults to 0. */
        modKit: number;

        /** Wheel family used by the front and rear wheel mods. */
        wheelType: shared.VehicleWheelType;

        windowTint: shared.VehicleWindowTint;

        /** Xenon color index (0..12), or -1 for the default. Enable the Xenon toggle mod to use it. */
        xenonColor: number;

        /** null until set. Each RGB component is 0..255. Enable the desired neon sides separately. */
        get neonColor(): shared.IRGB | null;
        set neonColor(value: shared.IRGB);

        /** null until set. Each RGB component is 0..255. Enable the TyreSmoke toggle mod to use it. */
        get tyreSmokeColor(): shared.IRGB | null;
        set tyreSmokeColor(value: shared.IRGB);

        radioStation: number;
        rearBumperState: shared.IVehicleBumperState;
        readonly trailer: Vehicle | null;

        /**
         * Returns the player's ID, or 65535 for an empty seat.
         * @param seat -1 for the driver.
         */
        getSeatOccupant(seat: number): number;

        isLightDamaged(light: number): boolean;

        isWheelBurst(wheel: number): boolean;

        isWheelOnRim(wheel: number): boolean;

        repair(): boolean;

        setLightDamaged(light: number, damaged: boolean): boolean;

        setLights(enabled: boolean, highBeams?: boolean): boolean;

        setLivery(livery: number): boolean;

        /** Returns the server's selected mod index, or -1 for stock. */
        getMod(type: shared.VehicleModType): number;

        /** Whether this wheel mod uses custom tyres. */
        getModVariation(type: shared.VehicleModType): boolean;

        /**
         * Part index: 0..254, or -1 for stock. customTyres applies to installed wheel mods.
         * Returns false for invalid arguments. Unsupported parts use stock on the client. The server keeps the requested index.
         */
        setMod(type: shared.VehicleModType, index: number, customTyres?: boolean): boolean;

        isToggleModOn(type: shared.VehicleToggleModType): boolean;

        /** Enables an upgrade when supported by the model. Returns false for an invalid type. */
        setToggleMod(type: shared.VehicleToggleModType, enabled: boolean): boolean;

        /** Returns the server's setting, or null if the extra still uses its model default. IDs are 1..16. */
        getExtra(id: number): boolean | null;

        /** Sets extra 1..16 when present on the model. Enabling an extra can also repair the vehicle in GTA. */
        setExtra(id: number, enabled: boolean): boolean;

        isNeonEnabled(side: shared.VehicleNeonSide): boolean;

        setNeonEnabled(side: shared.VehicleNeonSide, enabled: boolean): boolean;

        /** @param wheel Wheel index, from 0 to 5. */
        setWheelBurst(wheel: number, burst: boolean, onRim?: boolean): boolean;

        setWheelFixed(wheel: number): boolean;
    }

    export class Object extends Physical {
        /**
         * @param model Model name (ASCII case-insensitive) or unsigned 32-bit hash.
         * @param rotation Heading or XYZ Euler angles in radians, or a unit quaternion. Defaults to zero heading.
         */
        constructor(
            model: string | number,
            position: shared.IVector3,
            rotation?: number | shared.IVector3 | shared.IQuaternion,
            dynamic?: boolean
        );

        static readonly all: readonly Object[];
        static readonly count: number;

        static getById(id: number): Object | null;
        static getByNetworkId(networkId: number): Object | null;

        /** Includes global entities alongside the selected dimension. globalDimension selects only global entities. Omit it to search all worlds. */
        static getInRadius(position: shared.IVector3, radius: number, dimension?: number): readonly Object[];

        alpha: number;
        readonly lodDistance: number;
        readonly netOwner: Player | null;
        readonly physicsAsleep: boolean;
        textureVariation: number;

        activatePhysics(): boolean;
    }

    /** null means the server has not overridden the setting. */
    export class World {
        private constructor();

        readonly date: shared.IDate | null;
        readonly dateTime: shared.IDateTime | null;
        readonly time: shared.ITime | null;
        readonly timeScale: number | null;
        readonly waves: shared.IWaveSettings | null;
        readonly weather: shared.WeatherType | null;

        /** Clears the date, time and time scale overrides. */
        clearDateTime(): void;

        clearWaves(): void;

        clearWeather(): void;

        setDate(value: shared.IDate): boolean;

        setDateTime(value: shared.IDateTime): boolean;

        setTime(value: shared.ITime): boolean;

        setTimeScale(value: number): boolean;

        setWaves(value: shared.IWaveSettings): boolean;

        setWeather(value: shared.WeatherType): boolean;
    }

    export const world: World;

    /**
     * Entity state notifications are queued. Check valid before reading entity properties.
     * Combat and connection callbacks run synchronously.
     */
    export interface IServerEvent {
        armourChanged: (ped: Ped, oldArmour: number, newArmour: number, source: StateChangeSource) => void;
        /**
         * Return damage in [0, 1000000], or nothing to keep it unchanged. Returning 0 cancels damage and skips later listeners.
         * Listeners run in order and receive earlier changes. Returning a Promise, an invalid value or throwing cancels damage.
         */
        beforeDamage: (event: IDamageEvent) => number | void;
        currentWeaponChanged: (ped: Ped, oldWeapon: number, newWeapon: number, source: StateChangeSource) => void;
        engineStateChanged: (vehicle: Vehicle, oldRunning: boolean, newRunning: boolean, source: StateChangeSource) => void;
        entityCreated: (entity: Entity) => void;
        entityRemoved: (entity: Entity) => void;
        /** Queued after metadata changes. Missing old or new values are undefined. */
        syncedMetaChange: (object: Base, key: string, newValue: shared.TransportValue | undefined, oldValue: shared.TransportValue | undefined) => void;
        healthChanged: (entity: Physical, oldHealth: number, newHealth: number, source: StateChangeSource) => void;
        lightDamageChanged: (
            vehicle: Vehicle,
            light: number,
            oldDamaged: boolean,
            newDamaged: boolean,
            source: StateChangeSource
        ) => void;
        maxHealthChanged: (ped: Ped, oldMaxHealth: number, newMaxHealth: number, source: StateChangeSource) => void;
        netOwnerChanged: (entity: Entity, oldOwner: Player | null, newOwner: Player | null) => void;
        /** Fires after the handshake. player.spawn() is available from this point. */
        playerConnected: (player: Player) => void;
        playerDied: (player: Player, source: StateChangeSource) => void;
        /**
         * Only fires for players who completed the handshake.
         * The player is valid during this callback and becomes invalid afterwards.
         */
        playerDisconnected: (player: Player, reason: number, message: string) => void;
        playerEnteredVehicle: (player: Player, vehicle: Vehicle, seat: number) => void;
        playerEnteringVehicle: (player: Player, vehicle: Vehicle, seat: number) => void;
        playerExitedVehicle: (player: Player, vehicle: Vehicle, seat: number, reason: VehicleExitReason) => void;
        playerExitingVehicle: (player: Player, vehicle: Vehicle, seat: number) => void;
        /**
         * Fires when the server applies the spawn. The client may still be loading the player.
         * @param position Position at the time of the spawn.
         */
        playerSpawned: (player: Player, position: shared.Vector3) => void;
        playerVehicleEntryCancelled: (player: Player, vehicle: Vehicle, seat: number, reason: VehicleExitReason) => void;
        projectileLaunched: (
            source: Player | null,
            weapon: number,
            origin: shared.Vector3,
            direction: shared.Vector3,
            velocity: shared.Vector3
        ) => void;
        radioStationChanged: (vehicle: Vehicle, oldStation: number, newStation: number, source: StateChangeSource) => void;
        /**
         * Return a Promise to finish cleanup before the server stops. All handlers share a 10-second timeout.
         * Existing players and server logic keep running. New connections are blocked.
         * A throw or rejected Promise does not skip other handlers. Errors and timeouts set exit code 1.
         * process.exit() skips the wait. The timeout cannot interrupt synchronous code.
         */
        serverStop: () => void | Promise<void>;
        trailerAttached: (truck: Vehicle, trailer: Vehicle) => void;
        trailerDetached: (truck: Vehicle, trailer: Vehicle) => void;
        tyreBurst: (vehicle: Vehicle, wheel: number, source: StateChangeSource) => void;
        tyreFixed: (vehicle: Vehicle, wheel: number, source: StateChangeSource) => void;
        weaponShotAccepted: (source: Player | null, weapon: number, origin: shared.Vector3, direction: shared.Vector3) => void;
    }

    /**
     * Defaults to true. False blocks new connections. Players who completed the handshake stay connected.
     * Throws during shutdown.
     */
    export function allowConnections(allow: boolean): void;

    /** Emits a local event in this server script. */
    export function emit(event: string, ...args: unknown[]): void;

    /** Sends a reliable event to one player. Encoded arguments, including Uint8Array data, must fit in 256 KiB. */
    export function emitClient(player: Player, event: string, ...args: shared.TransportValue[]): void;

    /** Rejects on a remote error, disconnect or a 15-second timeout. A handler may return undefined. */
    export function fetchClient<T = shared.TransportValue | undefined>(player: Player, name: string, ...args: shared.TransportValue[]): Promise<T>;

    /** Writes arguments to the server log, separated by spaces. */
    export function log(...args: unknown[]): void;

    /** Removes all registrations of this handler for the event. */
    export function off<K extends keyof IServerEvent>(event: K, handler: IServerEvent[K]): void;
    export function off<K extends string>(event: Exclude<K, keyof IServerEvent>, handler: shared.EventHandler): void;

    export function offClient<Args extends shared.TransportValue[]>(event: string, handler: (player: Player, ...args: Args) => void): void;
    export function offRequest<Args extends shared.TransportValue[]>(name: string,
        handler: (player: Player, ...args: Args) => shared.TransportValue | void | Promise<shared.TransportValue | void>): void;

    export function on<K extends keyof IServerEvent>(event: K, handler: IServerEvent[K]): void;
    export function on<K extends string>(event: Exclude<K, keyof IServerEvent>, handler: shared.EventHandler): void;

    /** Receives network events only. The first argument is the player who sent the message. */
    export function onClient<Args extends shared.TransportValue[]>(event: string, handler: (player: Player, ...args: Args) => void): void;

    /** Registers one handler per name for fetchServer(). Duplicate registration throws. */
    export function onRequest<Args extends shared.TransportValue[]>(name: string,
        handler: (player: Player, ...args: Args) => shared.TransportValue | void | Promise<shared.TransportValue | void>): void;

    /**
     * Starts graceful shutdown and blocks new connections. Returns immediately.
     * Waits for serverStop handlers. Repeated calls keep the original timeout.
     * Uses process.exitCode, which defaults to 0.
     */
    export function shutdown(): void;

    export * from "revo-shared";
}
