import {makeAutoObservable} from "mobx";

export default class ExploreStore {
    constructor() {
        makeAutoObservable(this)
    }

    _pages = {
        home: 'Home',
        gaming: 'Gaming',
        music: 'Music',
        education: 'Education',
        since: 'Science & Tech',
        environment: 'Environment',
    }

    get pages() {
        return this._pages;
    }

    _currentChoice = this._pages.home;

    get currentChoice() {
        return this._currentChoice;
    }

    setCurrentChoice(choice) {
        this._currentChoice = choice;
    }
}