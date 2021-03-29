import {Injectable } from '@angular/core';
import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'

export const ADD_TUTORIAL    = '[TUTORIAL] ADD'
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove'


export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL

    constructor(public payload: Tutorial){}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL

    constructor(public payload: Tutorial){}
}

export type Actions = AddTutorial | RemoveTutorial

//reducer takes incoming actions and decide what to do with it. so it takes previos state and returns a new state based on the given action