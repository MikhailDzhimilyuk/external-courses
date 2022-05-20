class ElectricalDevice {
    name;
    power;
    switchOnOff;
    infoArr;   

    constructor(name, power, switchOnOff) {
        this.name = name;
        this.switchOnOff = switchOnOff;
        this.power = power;

        if (this.switchOnOff == 'off') {  this.powerOn = this.power; this.power = 0; }

        this.infoArr = [`Power: ${this.power} W`, `Switch: ${this.switchOnOff}`,];
    }

    changeSwitch(switchOnOff) {
        this.switchOnOff = switchOnOff;
        if (this.switchOnOff == "off") { this.power = 0; } else { this.power = this.powerOn; }
        this.infoArr[0] = `Power: ${this.power} W`;
        this.infoArr[1] = `Switch: ${this.switchOnOff}`;
        console.log(`Switch ${this.switchOnOff}`);
    }

    getInfo() { console.log(this); console.log(this.infoArr); };

    searchElecDevice() {
        console.log(`Привет, меня зовут ${this.name} и я в комнате.`);
    }
}

class VacuumCleaner extends ElectricalDevice {
    cleaningMode;

    constructor(name, power, switchOnOff, cleaningMode) {
        super(name, power, switchOnOff);
        this.cleaningMode = cleaningMode;
        this.infoArr.push(`Cleaning mode: ${cleaningMode}`);
    }

    changeCleaningMode(cleaningMode) {
        if (this.switchOnOff == 'on') {
            this.cleaningMode = cleaningMode;
            this.infoArr[this.infoArr.length - 1] = `Cleaning mode: ${cleaningMode}`;
            console.log(`Cleaning Mode: ${this.cleaningMode}`);
        }
    }
}

class RobotCleaner extends VacuumCleaner {
    scanningTerrain;

    constructor(name, power, switchOnOff, cleaningMode, scanningTerrain) {
        super(name, power, switchOnOff, cleaningMode);
        this.scanningTerrain = scanningTerrain;
        this.infoArr.push('Scanning terrain: map is not defined');

        if (this.scanningTerrain == 'on') {
            setTimeout(() => { this.infoArr[this.infoArr.length - 1] = 'Scanning terrain: map is defined'; }, 3000) 
        }
    }

    changeScanningTerrain(scanningTerrain) {
        if (this.switchOnOff == 'on') {
            this.scanningTerrain = scanningTerrain;
            this.infoArr[this.infoArr.length - 1] = 'Scanning terrain: map is not defined';
            console.log(`Scanning Terrain: ${this.scanningTerrain}`);

            if (this.scanningTerrain == 'on') { 
                setTimeout(() => { this.infoArr[this.infoArr.length - 1] = 'Scanning terrain: map is defined'; }, 3000) 
            } 
        }
    }

    searchElecDevice() {
        console.log(`Привет, меня зовут ${this.name} и я не в комнате.`);
    }
}

class RobotSoldier extends ElectricalDevice {
    scanningTerrain;
    fire;

    constructor(name, power, switchOnOff, scanningTerrain, fire) {
        super(name, power, switchOnOff);
        this.scanningTerrain = scanningTerrain;
        this.infoArr.push('Scanning terrain: map is not defined');

        if (this.scanningTerrain == 'on') {
            setTimeout(() => { this.infoArr[this.infoArr.length - 1] = 'Scanning terrain: map is defined'; }, 1000) 
        }

        this.fire = fire;
        this.infoArr.push(`fire: ${fire}`);
    }

    changeScanningTerrain(scanningTerrain) {
        if (this.switchOnOff == 'on') {
            this.scanningTerrain = scanningTerrain;
            this.infoArr[this.infoArr.length - 1] = 'Scanning terrain: map is not defined';
            console.log(`Scanning Terrain: ${this.scanningTerrain}`);
            if (this.scanningTerrain == 'on') { 
                setTimeout(() => { this.infoArr[this.infoArr.length - 2] = 'Scanning terrain: map is defined'; }, 3000) 
            } 
        }
    }

    changeFire(fire) {
        if (this.switchOnOff == 'on') {
            this.fire = fire;
            this.infoArr[this.infoArr.length - 1] = `fire: ${fire}`;
            console.log(`Fire: ${fire}`);
        }
    }
}

let VacuumCleaner1 = new VacuumCleaner('Пылесос', 1000, 'on', 'сухая');
let RobotCleaner1 = new RobotCleaner('Робот-пылесос', 2000, 'off', 'сухая', 'on');
let RobotSoldier1 = new RobotSoldier('Робот-солдат Арни', 10000, 'on', 'on', 'on');

const electricalDevicesArr = [VacuumCleaner1.power, RobotCleaner1.power, RobotSoldier1.power];
let summaryPower = electricalDevicesArr.map(i => x+=i, x=0).reverse()[0];
console.log(summaryPower);
VacuumCleaner1.searchElecDevice();
RobotCleaner1.searchElecDevice();
RobotSoldier1.searchElecDevice();
