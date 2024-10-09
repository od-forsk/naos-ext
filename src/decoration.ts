type Fn = (...args: any[]) => any;
type Decorator = (fn: Fn) => Fn;

export function decoratorOrHigherOrder(decorator: Decorator) {
    function decoratedDecorator<F extends Fn>(fn: F): F;
    function decoratedDecorator(targetOrFn: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor;
    function decoratedDecorator(targetOrFn: any, propertyKey?: string, descriptor?: PropertyDescriptor
    ) {
        let toDecorate: Fn = descriptor ? descriptor.value.bind(targetOrFn) : targetOrFn;
        const decorated = decorator(toDecorate);
        if (descriptor) {
            descriptor.value = decorated;
            return descriptor;
        }
        return decorated;
    }
    return decoratedDecorator;
}

export type ErrorHandler = (err: any) => any;

export function catchError(errHandler: ErrorHandler) {
    return decoratorOrHigherOrder(fn => async function decorated(this: any, ...args: any[]) {
        try {
            return await fn.apply(this, args);
        } catch (error) {
            return await errHandler(error);
        }
    });
}
