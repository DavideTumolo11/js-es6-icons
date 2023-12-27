const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];








const typeList = icons.map(icon => icon.type);

const types = []

typeList.forEach(typeText => {
	if(!types.includes(typeText)){
		types.push(typeText)
	}
})
console.log(types);

const selectEl = document.getElementById('icon_type')




/**
 * 
 * @param {Array} optionList A list of string
 * @param {object} selectDomEl the select dom element where append all option
 */
function renderFilterOption (optionList, selectDomEl){

	optionList.forEach(optionValue => {
		const optionEl = document.createElement('option')
		optionEl.value = optionValue
		optionEl.innerHTML = optionValue
	
		selectDomEl.appendChild(optionEl)
	})

}

renderFilterOption(types, selectEl)




document.getElementById('icon_type').addEventListener('change', function(e){
	const filteredIcons = icons.filter(icon => {
	return icon.type === e.target.value || e.target.value === 'all'
})

iconsAddEl.innerHTML = ''

allicon(filteredIcons, iconsAddEl)
})




/**
 * generate markup for an icon
 * given its icon object with specific properties
 * @param {object} icon the icon object
 * @returns object
 */
function generateIcon(icon){

    return `<div class="icon" style="color: ${icon.color};">
    <i class="${icon.family} ${icon.prefix + icon.name}"></i>
    <span> ${icon.name}</span>
    </div>`

};



/*generate all icons*/

const iconsAddEl = document.querySelector('.icons')

allicon(icons, iconsAddEl)



/*icons.forEach(icon => {
    
    const iconEl = generateIcon(icon)
    
	iconsAddEl.innerHTML += iconEl
	
})*/



/**
 * render a list of icon into the dom element provided
 * @param {arra} iconList A an of icon object
 * @param {object} domElement the node where append all icons
 */
function allicon(iconList, domElement){

	iconList.forEach(icon => {
    
    const iconEl = generateIcon(icon)
    
	domElement.innerHTML += iconEl
	
})
}










