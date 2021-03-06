import { Message, ProcessMessageMap, ProcessMessage } from './message';

export type UpdateStateServerMessage =
  Message<'update-state', {
    state: any;
  }>
;

export type ServerMessage =
  | UpdateStateServerMessage
;

export type ProcessServerMessageMap = ProcessMessageMap<ServerMessage>;
