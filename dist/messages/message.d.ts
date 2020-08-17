declare type MessageWithoutData<Type extends string> = {
    type: Type;
};
declare type MessageWithData<Type extends string, Data> = MessageWithoutData<Type> & {
    data: Data;
};
export declare type Message<Type extends string, Data = void> = Data extends void ? MessageWithoutData<Type> : MessageWithData<Type, Data>;
export declare type MessageMap<Messages extends Message<any, any>> = {
    [Type in Messages['type']]: Extract<Messages, {
        type: Type;
    }>;
};
export declare type ProcessMessage<Messages extends Message<any, any>> = (message: Messages) => void;
export declare type ProcessMessageMap<Messages extends Message<any, any>> = {
    [Type in Messages['type']]: ProcessMessage<MessageMap<Messages>[Type]>;
};
export declare const createMessageHandler: <Messages extends MessageWithoutData<any> | MessageWithData<any, any>>(processMessageMap: ProcessMessageMap<Messages>) => ProcessMessage<Messages>;
export {};
