/** Arguments and fetch results must be JSON-serializable, up to 255 KiB of UTF-8 JSON each. */
interface IRevo {
    /** Queues an event for the client. */
    emit(name: string, ...args: any[]): void;
    /** Calls a client request handler. Rejects on error, document closure or a 15-second timeout. */
    fetch<T = any>(name: string, ...args: any[]): Promise<T>;
    /** Registers a client request handler. Duplicate names are rejected. */
    onRequest(name: string, handler: (...args: any[]) => any | Promise<any>): void;
    offRequest(name: string): void;
    on(name: string, listener: (...args: any[]) => void): void;
    once(name: string, listener: (...args: any[]) => void): void;
    off(name: string, listener: (...args: any[]) => void): void;
    getEventListeners(name: string): ((...args: any[]) => void)[];
    getVersion(): string;
}

interface Window { readonly revo: IRevo; }
declare const revo: IRevo;
