export interface HttpRequest {
    body: string;
}

export const toBody = <T>(event: T | HttpRequest): T => {
    if (Object.prototype.hasOwnProperty.call(event, 'body')) {
        return JSON.parse((event as HttpRequest).body) as T;
    }

    return event as T;
};
