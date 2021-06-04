

const formModule = () => { 

    function resetFilter() {
        document.getElementById("productFilterForm").reset();
    }

    if(document.getElementById('resetFilter')) {
        document.getElementById('resetFilter').addEventListener('click', () => resetFilter());
    }
    
    
}
   
export { formModule };
