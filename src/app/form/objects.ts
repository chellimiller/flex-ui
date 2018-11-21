/** Properties expected on all configurable components */
export interface FlexComponent {

    /** Settings required for populating and configuring the component */
    config: FlexComponentConfiguration;

}

/** Component configuration interface */
export interface FlexComponentConfiguration {
    /** The actual data displayed in the component */
    data: any;

}

/** All types associated with the form module */
export namespace FlexForm {

    /** Configuration for an autocomplete text input */
    export interface AutocompleteConfiguration extends FlexComponentConfiguration {

        /** Suggested options given for the autocomplete text input. */
        data: string[];

        /** Placeholder value */
        placeholder: string;

    }

    /** Configuration for a simple checkbox */
    export interface CheckboxConfiguration extends FlexComponentConfiguration {

        /** Label for the checkbox. */
        data: string;

        /** Whether or not the checkbox is selected. */
        checked: boolean;

        /** Whether or not the checkbox is disabled. */
        disabled: boolean;

        /** Whether or not the checkbox is indeterminate. */
        indeterminate: boolean;

        /** Position of the label. */
        labelPosition: 'after' | 'before';
    }
}

export namespace Util {

    /**
     * Retrieves the property from the given object.
     *
     * If getting subproperty, the `property` string can be separated by periods.
     *
     * @param object The object that contains the property.
     * @param property The property to retrieve from the object.
     * @param defaultValue Default value to use if object is undefined.
     */
    export function getProperty<T>(object: object, property: string, defaultValue: T): T {

        /** Array of properties given from property input */
        const properties: string[] = property.split('.');

        if (!exists<object>(object) || properties.length === 0) {
            return defaultValue;
        }

        /** Top level property (first given) */
        const topProperty: string = properties.shift();

        /** Top-level object or type */
        const topObject: object | T = object[topProperty];

        if (!exists<object | T>(topObject)) {
            return defaultValue;
        }

        return (properties.length === 0) ? (<T>topObject) : getProperty<T>(<object>topObject, properties.join('.'), defaultValue);

    }

    /** Verifies that the given `obj` is neither undefined nor null */
    export function exists<T>(obj: T): boolean {
        return (obj !== undefined) && (obj !== null);
    }
}
