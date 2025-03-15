

/*Паттерны. Пишем простую кофемашину, добавляем к ней мастера и клиента
Создать 3 класса: кофемашина, клиент, мастер. Кофемашина может делать кофе, заправляться, кофе внутри заканчивается. Клиент пьёт кофе, 
заказы ограничены кофес внутри машины. Мастер заправляет кофемашину. Необходимо создать 15 кофемашин с разными параметрами, создать  
3 мастера, создать 42 клиента. В цикле случайный клиент пьёт из случайной машины и там же случайный мастер заправляет 10 случайных машин.

Для того чтобы в цикле фор пропускать операции есть continue, объясните что за конструкция на фото, найти ближайший аналог в языке с++*/

class CoffeeMachine{
    constructor(count, maxCount){
        this.count = count;
        this.maxCount = maxCount;
    }
    makeCoffee(){
        if (this.count == 0) {console.log("КОФЫ НЭ БУДЭ"); return;}
        this.count --;
		console.log("Пей не перепей(сделал 1 чашку кофы)");
	}
    fillCoffee(amount){
        if (this.count == this.maxCount) return;
        if (amount + this.count <= this.maxCount) this.count += amount;
        else this.count = this.maxCount;
    }
}

class Client{
    drinkCup(cfmachine){
        cfmachine.makeCoffee()
    }
}

class Master{
    constructor(countCoffee){
        this.countCoffee = countCoffee;
    }
    fillCFMachine(coffeeMachine){
        coffeeMachine.fillCoffee(this.countCoffee);
    }
}
const coffeeMachines = [];
for (let i = 0; i < 15; i++){
    coffeeMachines.push(new CoffeeMachine(i, Math.floor(Math.random() * 100) + 1))
}
const masters = [];
for (let i = 0; i < 3; i++) {
    masters.push(new Master(i));
}

// Создаем 42 клиента
const clients = [];
for (let i = 0; i < 42; i++) {
    clients.push(new Client(i));
}

for (let i = 0; i < 10; i++) {
    const randomClient = clients[Math.floor(Math.random() * clients.length)];
    const randomMachine = coffeeMachines[Math.floor(Math.random() * coffeeMachines.length)];
    randomClient.drinkCup(randomMachine);
    
    const randomMaster = masters[Math.floor(Math.random() * masters.length)];
    const machinesToRefill = [];
    for (let j = 0; j < 10; j++) {
        const randomMachineToRefill = coffeeMachines[Math.floor(Math.random() * coffeeMachines.length)];
        if (!machinesToRefill.includes(randomMachineToRefill)) {
            machinesToRefill.push(randomMachineToRefill);
        }
    }
    machinesToRefill.forEach(machine => {
        randomMaster.fillCFMachine(machine);
    });
    
}
