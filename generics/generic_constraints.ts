class Car {
    print() {
        console.log('This is car')
    }
}

class Bike {
    print() {
        console.log('This is bike')
    }
}

// First there was an error: 'Property 'print' does not exist on type 'T'.'
// Solve the error we need modify the generic type.

interface Printable {
    print(): void
}

function printCarOrBike<T extends Printable>(arr: T[]): void {
    for (let i=0; i<arr.length; i++) {
        arr[i].print();
    }
}

printCarOrBike<Car>([new Car(), new Car()])
printCarOrBike<Bike>([new Bike(), new Bike()])