// Definimos una interfaz para el objeto `coche`
interface Coche {
    marca: string;
    modelo: string;
    velocidad: number;
    acelerar: () => void;
}

const coche: Coche = {
    marca: "Ford",
    modelo: "Mustang",
    velocidad: 0,
    acelerar: function () {
        this.velocidad += 10;
        console.log("Velocidad actual: " + this.velocidad + " km/h");
    },
};

coche.acelerar(); // Output: Velocidad actual: 10 km/h
coche.acelerar(); // Output: Velocidad actual: 20 km/h
