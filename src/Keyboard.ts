/*
Copyright 2016 OpenMarket Ltd
Copyright 2017 New Vector Ltd
Copyright 2019 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

export const Key = {
    HOME: "Home",
    END: "End",
    PAGE_UP: "PageUp",
    PAGE_DOWN: "PageDown",
    BACKSPACE: "Backspace",
    DELETE: "Delete",
    ARROW_UP: "ArrowUp",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    TAB: "Tab",
    ESCAPE: "Escape",
    ENTER: "Enter",
    ALT: "Alt",
    CONTROL: "Control",
    META: "Meta",
    SHIFT: "Shift",
    CONTEXT_MENU: "ContextMenu",

    DIGIT_0: "0",
    DIGIT_1: "1",
    DIGIT_2: "2",
    DIGIT_3: "3",
    DIGIT_4: "4",
    DIGIT_5: "5",
    DIGIT_6: "6",
    DIGIT_7: "7",
    DIGIT_8: "8",
    DIGIT_9: "9",

    COMMA: ",",
    PERIOD: ".",
    LESS_THAN: "<",
    GREATER_THAN: ">",
    BACKTICK: "`",
    SPACE: " ",
    SLASH: "/",
    SQUARE_BRACKET_LEFT: "[",
    SQUARE_BRACKET_RIGHT: "]",
    A: "a",
    B: "b",
    C: "c",
    D: "d",
    E: "e",
    F: "f",
    G: "g",
    H: "h",
    I: "i",
    J: "j",
    K: "k",
    L: "l",
    M: "m",
    N: "n",
    O: "o",
    P: "p",
    Q: "q",
    R: "r",
    S: "s",
    T: "t",
    U: "u",
    V: "v",
    W: "w",
    X: "x",
    Y: "y",
    Z: "z",
};

type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

export const digitKeyToNumber = (digit: Digit): number => {
    return digit.charCodeAt(0) - "0".charCodeAt(0);
};

export const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

export function isOnlyCtrlOrCmdKeyEvent(ev) {
    if (isMac) {
        return ev.metaKey && !ev.altKey && !ev.ctrlKey && !ev.shiftKey;
    } else {
        return ev.ctrlKey && !ev.altKey && !ev.metaKey && !ev.shiftKey;
    }
}

export function isOnlyCtrlOrCmdIgnoreShiftKeyEvent(ev) {
    if (isMac) {
        return ev.metaKey && !ev.altKey && !ev.ctrlKey;
    } else {
        return ev.ctrlKey && !ev.altKey && !ev.metaKey;
    }
}
