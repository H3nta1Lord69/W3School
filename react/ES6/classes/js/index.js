class Car 
{
    constructor(name) 
    {
        this.brand = name;
}

    present() 
    {
        return 'I have a ' + this.brand;
    }
}

class Model extends Car
{
    constructor(name, mod)
    {
        super(name);
        this.model = mod;
    }

    show()
    {
        return this.present() + ', it is a ' + this.model;
    }

}

mycar = new Car("Ford", "Mustang");
mycar.present();
mycar.show();

document.write('Class result: ' + mycar.brand)