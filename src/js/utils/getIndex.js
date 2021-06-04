export default function getIndex(el) {
    return [...el.parentElement.children].indexOf(el);
}