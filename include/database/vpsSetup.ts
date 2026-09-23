import Database from "better-sqlite3";
export const gameData = new Database("./gameData.db");

export function initGameData()
{
    gameData.pragma("journal_mode = WAL");
    gameData.exec('CREATE TABLE IF NOT EXISTS players(userID TEXT PRIMARY KEY)');
}

export function initPlayerData(userID: string)
{
    gameData.prepare('INSERT INTO players(userID) VALUES (?)').run(userID);
}

export function onPlayerConnect(userID: string)
{
    let playerRow = gameData.prepare("SELECT * FROM players WHERE userID = ?").get(userID);
    if(playerRow === undefined)
    {
        initPlayerData(userID);
        playerRow = gameData.prepare("SELECT * FROM players WHERE userID = ?").get(userID);
    }
    return(playerRow);
}