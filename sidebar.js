import Shapes from './shapes.js';
import { Scene } from './main.js';

export const generate_polyhedra_list = function() {
    let list = document.getElementById("polyhedralist");
    list.innerHTML = "";

    const polyhedra_array = Object.entries(Shapes).map(([key, value]) => ({
        ...value,
        name: key
    }));
    const grouped_shapes = Object.groupBy(polyhedra_array, ({category}) => category);
    console.log(grouped_shapes);

    for (const category in grouped_shapes) {
        list.innerHTML += `<h2>${category}</h2>`;
        for (const shape of grouped_shapes[category]) {
            const id = (category + "_" + shape.name).replace(/\W/g, '');
            list.innerHTML += `<button id="${id}">${shape.name}</button><br>`;
            
            // is this too hacky?
            // todo: maybe don't do this
            // it works tho
            setTimeout(function() {
                document.getElementById(id).onclick = function() {
                    Scene.add_shape = shape.name;
                }
            }, 20);
        }
    }
}