type TInputsType<T> = Map<keyof T, HTMLInputElement>;
type TValuesType<T> = Map<keyof T, string | number | boolean>;

interface IFormUtils<T> {
    register: (inputName: keyof T) => (e: Event) => void;
    reset: () => void;
    watchData: (clb: (values: T) => void) => void;
    send: (clb: (values: T) => void) => () => void;
}

export function formUtils<T>(): IFormUtils<T> {
    const inputs: TInputsType<T> = new Map();
    const values: TValuesType<T> = new Map();

    let watchFn = () => {};

    return {
        register: (inputName: keyof T) => {
            let timer: ReturnType<typeof setTimeout>;
            return (e: Event) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    inputs.set(inputName, (e.target as HTMLInputElement));
                    values.set(inputName, (e.target as HTMLInputElement).value);
                    watchFn();
                }, 200);
            }
        },
        reset: () => {
            inputs.forEach((input, key) => {
                input.value = '';
                values.set(key, '');
            });
            watchFn();
        },
        watchData: (onWatch) => {
            watchFn = () => {
                const fields: Partial<T> = {};

                values.forEach((value, key) => {
                    fields[key] = value as T[keyof T];
                });

                onWatch(fields as T);
            }
        },
        send: (onSend) => () => {
            const fields: Partial<T> = {};

            values.forEach((value, key) => {
                fields[key] = value as T[keyof T];
            });


            onSend(fields as T);
        }
    }
}
