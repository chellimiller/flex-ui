/** Properties expected on all configurable components */
export interface FlexComponent {
    /** Allows both data and settings to be given at once rather than separately */
    config: FlexComponentConfiguration;
}

/** Properties  */
export interface FlexComponentConfiguration {
    /** The actual data displayed in the component */
    data: any;

}

/** All types associated with the form module */
export namespace FlexForm {

    export namespace Autocomplete {

        export interface Configuration extends FlexComponentConfiguration {
            data: Data;
            placeholder: string;
        }

        export type Data = string[];
    }
}

export namespace Util {

    export function getProperty<T>(object: object, property: string, defaultValue: T): T {
        const properties: string[] = property.split('.');

        if (!exists<object>(object) || properties.length === 0) {
            return defaultValue;
        }

        const topProperty: string = properties.shift();
        const topObject: object | T = object[topProperty];

        if (!exists<object | T>(topObject)) {
            return defaultValue;
        }

        return (properties.length === 0) ? (<T>topObject) : getProperty<T>(<object>topObject, properties.join('.'), defaultValue);

    }

    export function exists<T>(obj: T): boolean {
        return (obj !== undefined) && (obj !== null);
    }
}
