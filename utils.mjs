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

export function printAscii(data, classes = []) {
    const el = document.createElement('code');
    ['ascii', ...classes].forEach((cn) => el.classList.add(cn));
    el.appendChild(document.createTextNode(data));
    document.body.appendChild(el);
}
