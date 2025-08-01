 export function knightMoves(inicio, final){
    const direccionesPosibles= [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1] , [-1, -2], [1, -2], [2, -1]

    ];

    function isValid(x, y){
         return x>=0  &&  y >= 0 && x<8 && y<8
      
    }

    const queue= [inicio];
    const visitado= new Set();
    const parent = new Map();

    visitado.add(inicio.toString()); /*verifica los vertices que ya visito para no volver a pasar por el mismo vertice*/

    while(queue.length > 0){

        const [x, y]= queue.shift();

        if(x=== final[0] && y==final[1]){

            const camino= [];
            let verticeActual=  final.toString();

            while(verticeActual){
                
               let [a, b]=  verticeActual.split(",").map(Number);
               camino.unshift([a, b]);
               verticeActual= parent.get(verticeActual)

            }

             console.log(`You made it in ${camino.length - 1} moves! Here's your path:`);
            camino.forEach(p => console.log(p));
            return camino;
        }


       for(let [dx, dy] of direccionesPosibles){

        const nuevox= x + dx;
        const nuevoy= y + dy;

        if(isValid(nuevox, nuevoy) && !visitado.has([nuevox, nuevoy].toString())){
            queue.push([nuevox, nuevoy]);
            visitado.add([nuevox, nuevoy].toString());
            parent.set([nuevox, nuevoy].toString(), [x, y].toString())
        }
        
       }
    }

}