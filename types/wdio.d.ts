export {};

declare global {
    namespace WebdriverIO {
        interface Browser {
            waitAndClick: (selector: string) => Promise<void>,
            waitAndTypeText: (selector: string, text:string) => Promise<void>
        }

    }
}