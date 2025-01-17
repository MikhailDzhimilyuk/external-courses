function ElectricalDevice (power, switchOnOff) {
    this.switchOnOff = switchOnOff;
    this.power = this.powerOn = power;
    this.infoArr = [`Power: ${this.power} W`, `Switch: ${this.switchOnOff}`,];
}

ElectricalDevice.prototype.changeSwitch = function(switchOnOff) {
    this.switchOnOff = switchOnOff;

    if (this.switchOnOff == "off") { this.power = 0; } else { this.power = this.powerOn; }

    this.infoArr[0] = `Power: ${this.power} W`;
    this.infoArr[1] = `Switch: ${this.switchOnOff}`;
    console.log(`Switch ${this.switchOnOff}`);
}

ElectricalDevice.prototype.getInfo = function() {
    console.log(this); console.log(this.infoArr);
}

function VacuumCleaner (power, switchOnOff, cleaningMode) {
    ElectricalDevice.call(this, power, switchOnOff);
    this.cleaningMode = cleaningMode;
    this.infoArr.push(`Cleaning mode: ${cleaningMode}`);
}

VacuumCleaner.prototype = Object.create(ElectricalDevice.prototype);
Object.defineProperty(VacuumCleaner.prototype, 'constructor', {
    value: VacuumCleaner,
    enumerable: false,
    writable: true 
});

VacuumCleaner.prototype.changeCleaningMode = function(cleaningMode) {
    if (this.switchOnOff == 'on') {
        this.cleaningMode = cleaningMode;
        this.infoArr[this.infoArr.length - 1] = `Cleaning mode: ${cleaningMode}`;
        console.log(`Cleaning Mode: ${this.cleaningMode}`);
    }
}

function RobotCleaner (power, switchOnOff, cleaningMode, scanningTerrain) {
    VacuumCleaner.call(this, power, switchOnOff, cleaningMode);
    this.scanningTerrain = scanningTerrain;
    this.infoArr.push('Scanning terrain: map is not defined');

    if (this.scanningTerrain == 'on') {
        setTimeout(() => { this.infoArr[this.infoArr.length - 1] = 'Scanning terrain: map is defined'; }, 3000) 
    }
}

RobotCleaner.prototype = Object.create(VacuumCleaner.prototype);
Object.defineProperty(RobotCleaner.prototype, 'constructor', {
    value: RobotCleaner,
    enumerable: false,
    writable: true 
});

RobotCleaner.prototype.changeScanningTerrain = function(scanningTerrain) {
    if (this.switchOnOff == 'on') {
        this.scanningTerrain = scanningTerrain;
        this.infoArr[this.infoArr.length - 1] = 'Scanning terrain: map is not defined';
        console.log(`Scanning Terrain: ${this.scanningTerrain}`);

        if (this.scanningTerrain == 'on') { 
            setTimeout(() => { this.infoArr[this.infoArr.length - 1] = 'Scanning terrain: map is defined'; }, 3000) 
        } 
    }
}

function RobotSoldier (power, switchOnOff, scanningTerrain, fire) {
    ElectricalDevice.call(this, power, switchOnOff);
    this.scanningTerrain = scanningTerrain;
    this.infoArr.push('Scanning terrain: map is not defined');

    if (this.scanningTerrain == 'on') {
        setTimeout(() => { this.infoArr[this.infoArr.length - 2] = 'Scanning terrain: map is defined'; }, 1000) 
    }

    this.fire = fire;
    this.infoArr.push(`fire: ${fire}`);
}

RobotSoldier.prototype = Object.create(ElectricalDevice.prototype);
Object.defineProperty(RobotSoldier.prototype, 'constructor', {
    value: RobotSoldier,
    enumerable: false,
    writable: true 
});

RobotSoldier.prototype.changeScanningTerrain = function(scanningTerrain) {
    if (this.switchOnOff == 'on') {
        this.scanningTerrain = scanningTerrain;
        this.infoArr[this.infoArr.length - 1] = 'Scanning terrain: map is not defined';
        console.log(`Scanning Terrain: ${this.scanningTerrain}`);
        if (this.scanningTerrain == 'on') { 
            setTimeout(() => { this.infoArr[this.infoArr.length - 2] = 'Scanning terrain: map is defined'; }, 3000) 
        } 
    }
}

RobotSoldier.prototype.changeFire = function(fire) {
    if (this.switchOnOff == 'on') {
        this.fire = fire;
        this.infoArr[this.infoArr.length - 1] = `fire: ${fire}`;
        console.log(`Fire: ${fire}`);
    }
}
