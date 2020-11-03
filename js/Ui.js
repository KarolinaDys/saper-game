export class Ui {
    UiSelectors = {
        board: '[data-board]',
        cell: '[data-cell]'
    }
    getElement(selector) {
        return document.quertySelector(selector);
    }
    getElements(selector) {
        return document.quertySelectorAll(selector);
    }
}