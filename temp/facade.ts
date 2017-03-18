class BaseballPlayer {
    public name: string;
    public average: number;
    public position: PlayerPosition;
    public atBats: number;
    public batter: boolean;
    constructor(name, avg, pos, atBats) {
        this.name = name;
        this.average = avg;
        this.atBats = atBats;
        this.position = new PlayerPosition(pos, avg);
        this.batter = this.position.isBatter();
        PlayerPosition.averages.push(avg);
    }
}

enum PlayerPositions {
    Pitcher,
    Infielder,
    Outfielder
}

class PlayerPosition {
    public position: PlayerPositions;
    static averages: number[] = new Array();
    constructor(pos, avg) {
        this.position = pos;

    }
    public isBatter() {
        if (this.position == PlayerPositions.Infielder || PlayerPositions.Outfielder) {
            return true;
        }
    }
}

class SilverSluggerChecker {
    public static readonly minNoAtBats = 100;
    public isSilverSlugger(player: BaseballPlayer) : boolean {
        const highestAvg = Math.max(...PlayerPosition.averages);
        return player.average >= highestAvg &&
        player.atBats >= SilverSluggerChecker.minNoAtBats &&
        player.batter;
    }
}



const playerX: BaseballPlayer = new BaseballPlayer("j", .300, PlayerPositions.Pitcher, 22);
const playerY: BaseballPlayer = new BaseballPlayer("k", .404, PlayerPositions.Outfielder, 100);
const playerZ: BaseballPlayer = new BaseballPlayer("l", .405, PlayerPositions.Infielder, 103);
const sChecker = new SilverSluggerChecker();
console.log(sChecker.isSilverSlugger(playerX));

console.log(sChecker.isSilverSlugger(playerY));

console.log(sChecker.isSilverSlugger(playerZ));

