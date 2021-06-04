
export default function wrapMatch(elem, term) {

    const filter = new RegExp(term, "\sig");

    elem.innerHTML = elem.innerText.replace(filter, (match) => {
        return "<span class='wrap-match'>" + match + "</span>";
    });

}