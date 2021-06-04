export default function getParents(e) {
    var result = [];
    for (var p = e && e.parentElement; p; p = p.parentElement) {
      result.push(p);
    }
    return result;
}