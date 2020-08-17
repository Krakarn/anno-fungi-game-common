import { Message, ProcessMessageMap } from './message';
export declare type UpdateStateClientMessage = Message<'update-state', {
    state: any;
}>;
export declare type CreateGameClientMessage = Message<'create-game'>;
export declare type JoinGameClientMessage = Message<'join-game'>;
export declare type ApplyEffectClientMessage = Message<'apply-effect', {
    cardId: number;
}>;
export declare type ClientMessage = UpdateStateClientMessage | CreateGameClientMessage | JoinGameClientMessage | ApplyEffectClientMessage;
export declare type ProcessClientMessageMap = ProcessMessageMap<ClientMessage>;
