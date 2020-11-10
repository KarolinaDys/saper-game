export class Ui {
    UiSelectors = {
        board: '[data-board]',
        cell: '[data-cell]',
        counter: '[data-counter]',
        timer: '[data-timer]',
    }
    getElement(selector) {
        return document.quertySelector(selector);
    }
    getElements(selector) {
        return document.quertySelectorAll(selector);
    }
}