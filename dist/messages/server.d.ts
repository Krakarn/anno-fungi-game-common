import { Message, ProcessMessageMap } from './message';
export declare type UpdateStateServerMessage = Message<'update-state', {
    state: any;
}>;
export declare type ServerMessage = UpdateStateServerMessage;
export declare type ProcessServerMessageMap = ProcessMessageMap<ServerMessage>;
