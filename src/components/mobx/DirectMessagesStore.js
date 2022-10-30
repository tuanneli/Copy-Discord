import {makeAutoObservable} from "mobx";

export default class DirectMessagesStore {

    constructor() {
        makeAutoObservable(this)
    }

    _activeWindow = 'Online';

    get activeWindow() {
        return this._activeWindow;
    }

    setActiveWindow(window) {
        this._activeWindow = window;
    }
}