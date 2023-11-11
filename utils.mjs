export async function fetchText(url) {
    const res = await fetch(url);
    const content = await res.text();
    return content;
}

export function waitForClick() {
    return new Promise((resolve) => {
        document.addEventListener('click', resolve, { once: true });
    });
}

export function sleepSecs(dt) {
    return new Promise((resolve) => {
        setTimeout(resolve, dt * 1000);
    });
}

function removeIfAbove(maxAmount) {
    const codeEls = Array.from(document.querySelectorAll('code'));
    if (codeEls.length >= maxAmount) {
        document.body.removeChild(codeEls[0]);
    }
}

export function printAscii(data, classes = []) {
    removeIfAbove(22);
    const el = document.createElement('code');
    ['ascii', ...classes].forEach((cn) => el.classList.add(cn));
    el.appendChild(document.createTextNode(data));
    document.body.appendChild(el);
}
