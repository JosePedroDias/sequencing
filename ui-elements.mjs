export function textEditor(initialValue = '') {
    const el = document.createElement('textarea');
    el.spellcheck = false;
    el.autofocus = true;
    document.body.appendChild(el);
    el.value = initialValue;

    return {
        getValue() {
            return el.value;
        },
        setValue(v) {
            el.value = v;
        },
    }
}

export function button(label, onClick) {
    const el = document.createElement('button');
    el.appendChild( document.createTextNode(label) );
    document.body.appendChild(el);
    el.addEventListener('click', onClick);

    return {};
}

export function checkbox(label, onChange, initialValue = false) {
    const wrapperEl = document.createElement('div');

    const labelEl = document.createElement('label');
    labelEl.appendChild( document.createTextNode(label) );
    wrapperEl.appendChild(labelEl);

    const inputEl = document.createElement('input');
    inputEl.type = 'checkbox';
    if (initialValue) inputEl.checked = true;
    wrapperEl.appendChild(inputEl);

    document.body.appendChild(wrapperEl);
    inputEl.addEventListener('change', () => onChange(inputEl.checked));

    return {
        getValue() {
            return inputEl.checked;
        },
        setValue(v) {
            inputEl.checked = v;
        },
    };
}

export function integerRange(label, onChange, initialValue = 1, maxValue = 10, minValue = 1) {
    const wrapperEl = document.createElement('div');

    const labelEl = document.createElement('label');
    labelEl.appendChild( document.createTextNode(label) );
    wrapperEl.appendChild(labelEl);

    const spanEl = document.createElement('span');
    spanEl.appendChild( document.createTextNode(initialValue) );
    wrapperEl.appendChild(spanEl);

    const inputEl = document.createElement('input');
    inputEl.type = 'range';
    inputEl.value = initialValue;
    inputEl.step = 1;
    inputEl.min = minValue;
    inputEl.max = maxValue;
    wrapperEl.appendChild(inputEl);

    document.body.appendChild(wrapperEl);
    inputEl.addEventListener('change', () => {
        const v = inputEl.value;
        spanEl.childNodes[0].nodeValue = `${v}`;
        onChange(v);
    });

    return {
        getValue() {
            return inputEl.value;
        },
        setValue(v) {
            inputEl.value = v;
        },
    };
}
