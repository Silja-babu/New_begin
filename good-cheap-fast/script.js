const toggles = document.querySelectorAll('.toggle')
const good = document.querySelectorAll('#good')
const cheap = document.querySelectorAll('#cheap')
const fast = document.querySelectorAll('#fast')

toggles.forEach(toggles => toggles.addEventListener('change',(e) => doTheTricks(e.target)))

function doTheTricks(theClickedOne){
    if(good.checked && cheap.checked && fast.checked){
        if(good === theClickedOne){
            fast.checked = false
        }
        if(cheap === theClickedOne){
            good.checked = false
        }
        if(fast === theClickedOne){
            cheap.checked = false
        }
    }
}