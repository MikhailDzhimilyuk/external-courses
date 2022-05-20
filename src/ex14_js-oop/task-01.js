function electricalDevice (power, switchOnOff) {
    this.switchOnOff = switchOnOff;
    this.power = power;

    this.changeSwitch = function(switchOnOff) {
        this.switchOnOff = switchOnOff;
        if (this.switchOnOff == "off") { this.power = 0; } else { this.power = power; }
        this.info[0] = `Power: ${this.power} W`;
        this.info[1] = `Switch: ${this.switchOnOff}`;
        console.log(`Switch ${this.switchOnOff}`);
    };

    this.info = [`Power: ${this.power} W`, `Switch: ${this.switchOnOff}`,];

    this.getInfo = function() { console.log(this); console.log(this.info); };
}

function vacuumCleaner (power, switchOnOff, cleaningMode) {
    electricalDevice.call(this, power, switchOnOff);
    this.cleaningMode = cleaningMode;
    this.info.push(`Cleaning mode: ${cleaningMode}`);

    this.changeCleaningMode = function(cleaningMode) {
        if (this.switchOnOff == 'on') {
            this.cleaningMode = cleaningMode;
            this.info[this.info.length - 1] = `Cleaning mode: ${cleaningMode}`;
            console.log(`Cleaning Mode: ${this.cleaningMode}`);
        }
    }
}

vacuumCleaner.prototype = Object.create(electricalDevice.prototype);
vacuumCleaner.prototype.constructor = vacuumCleaner;

function robotCleaner (power, switchOnOff, cleaningMode, scanningTerrain) {
    vacuumCleaner.call(this, power, switchOnOff, cleaningMode);
    this.scanningTerrain = scanningTerrain;
    this.info.push('Scanning terrain: map is not defined');

    if (this.scanningTerrain == 'on') {
        setTimeout(() => { this.info[this.info.length - 1] = 'Scanning terrain: map is defined'; }, 3000) 
    }

    this.changeScanningTerrain = function(scanningTerrain) {
        if (this.switchOnOff == 'on') {
            this.scanningTerrain = scanningTerrain;
            this.info[this.info.length - 1] = 'Scanning terrain: map is not defined';
            console.log(`Scanning Terrain: ${this.scanningTerrain}`);

            if (this.scanningTerrain == 'on') { 
                setTimeout(() => { this.info[this.info.length - 1] = 'Scanning terrain: map is defined'; }, 3000) 
            } 
        }
    }
}

robotCleaner.prototype = Object.create(vacuumCleaner.prototype);
robotCleaner.prototype.constructor = robotCleaner;

function robotSoldier (power, switchOnOff, scanningTerrain, fire) {
    electricalDevice.call(this, power, switchOnOff);
    this.scanningTerrain = scanningTerrain;
    this.info.push('Scanning terrain: map is not defined');

    if (this.scanningTerrain == 'on') {
        setTimeout(() => { this.info[this.info.length - 2] = 'Scanning terrain: map is defined'; }, 1000) 
    }

    this.fire = fire;
    this.info.push(`fire: ${fire}`);

    this.changeScanningTerrain = function(scanningTerrain) {
        if (this.switchOnOff == 'on') {
            this.scanningTerrain = scanningTerrain;
            this.info[this.info.length - 1] = 'Scanning terrain: map is not defined';
            console.log(`Scanning Terrain: ${this.scanningTerrain}`);
            if (this.scanningTerrain == 'on') { 
                setTimeout(() => { this.info[this.info.length - 2] = 'Scanning terrain: map is defined'; }, 3000) 
            } 
        }
    }

    this.changeFire = function(fire) {
        if (this.switchOnOff == 'on') {
            this.fire = fire;
            this.info[this.info.length - 1] = `fire: ${fire}`;
            console.log(`Fire: ${fire}`);
        }
    }
}

robotSoldier.prototype = Object.create(electricalDevice.prototype);
robotSoldier.prototype.constructor = robotSoldier;

let VacuumCleaner = new vacuumCleaner(12, 'on', 'сухая');
let RobotCleaner = new robotCleaner (100, 'on', 'влажная', 'on');
let RobotSoldier = new robotSoldier (10000, 'on', 'on', 'on');
